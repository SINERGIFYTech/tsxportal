const db = require("../db");
const TRC20Utils = require("./trc20");

const depositUtils = {
  getById: async (id) => {
    const [data] = await db.execute("SELECT * FROM depositos WHERE id = ?;", [
      id,
    ]);
    return data;
  },
  getDepositsByClient: async (clienteId) => {
    const [data] = await db.execute(
      "SELECT * FROM depositos WHERE clienteId = ? ORDER BY `createdAt` DESC",
      [clienteId]
    );
    return data;
  },
  depositsFromLastHour: async () => {
    const [data] = await db.execute(
      "SELECT * FROM depositos WHERE createdAt >= NOW() - INTERVAL 1 HOUR AND sweepStatus = 'pending';"
    );
    return data.map((d) => ({ ...d, amount: +d.amount }));
  },
  depositsWithAmountFromLastMinutes: async (amount) => {
    const [data] = await db.execute(
      "SELECT * FROM depositos WHERE createdAt >= NOW() - INTERVAL 60 MINUTE AND amount = ? AND sweepStatus = 'pending';",
      [amount]
    );
    return data.map((d) => ({ ...d, amount: +d.amount }));
  },
  create: async ({ amount, clienteId }) => {
    try {
      if (!amount) throw new Error("amount is required");
      const depositExists =
        await depositUtils.depositsWithAmountFromLastMinutes(amount);
      const walletData = TRC20Utils.create();
      const depositBody = {
        amount: amount,
        amount_to_receive: +amount + depositExists.length / 10,
        clienteId,
        wallet_address: walletData,
      };

      await db.query(
        `
      INSERT INTO depositos 
      (amount, amount_to_receive, clienteId, wallet_address)
      VALUES (?, ?, ?, ?)
    `,
        [
          depositBody.amount,
          depositBody.amount_to_receive,
          depositBody.clienteId,
          depositBody.wallet_address,
        ]
      );
      return {
        success: true,
        data: {
          wallet_address: depositBody.wallet_address,
          amount: depositBody.amount,
          amount_to_receive: depositBody.amount_to_receive,
        },
      };
    } catch (err) {
      return {
        success: false,
        message: err.message || err.error.message,
      };
    }
  },
  checkDepositsFromLastHour: async () => {
    const deposits = await depositUtils.depositsFromLastHour();
    if (!deposits.length) return {};
    const dataAddress = await TRC20Utils.getWalletInfo();
    // Validar cada depósito
    const resultados = deposits
      .map((deposit) => {
        const match = dataAddress.transactions.find((tx) => {
          // Comparar montos
          const mismoMonto =
            parseFloat(tx.value) === parseFloat(deposit.amount_to_receive);
          // O puedes agregar más lógica como comparar rango de fechas o remitente
          const rangoMinutos = 60;
          const dentroDeTiempo =
            Math.abs(new Date(tx.date) - new Date(deposit.createdAt)) / 60000 <
            rangoMinutos;
          return mismoMonto && dentroDeTiempo;
        });

        return {
          ...deposit,
          recibido: !!match,
          txInfo: match || null,
        };
      })
      .filter((d) => d.recibido);
    // validar ahora si en las transacciones hay una nueva transacción con el valor indicado en el depósito
    await Promise.all(
      resultados.map((deposit) =>
        db.execute(
          `UPDATE depositos SET sweepStatus = 'confirmed', updatedAt = NOW(), transaction_id = ? WHERE id = ?`,
          [deposit.txInfo.transaction_id, deposit.id]
        )
      )
    );
    return { dataAddress, resultados };
  },
};

module.exports = depositUtils;
