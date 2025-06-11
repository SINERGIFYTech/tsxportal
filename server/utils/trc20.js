const fetch = require("node-fetch");
const URL_BASE = `https://api.trongrid.io/v1/accounts/`;
const LIMIT_TRANSACTION = 10;
const WALLET_TRC20 = process.env.WALLET_TRC20;
const TRC20Utils = {
  create: () => {
    const account = WALLET_TRC20;
    return account;
  },
  getBalance: async (address = WALLET_TRC20) => {
    try {
      const url = URL_BASE + address;
      const res = await fetch(url);
      const response = await res.json();
      const cuenta = response.data?.[0];
      if (!cuenta) return { trx: 0, usdt: 0 };
      const trx = (cuenta.balance || 0) / 1_000_000;
      // Buscar el balance de USDT en el array trc20
      let usdt = 0;
      const trc20List = cuenta.trc20 || [];
      for (const token of trc20List) {
        if (token["TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t"]) {
          usdt =
            parseFloat(token["TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t"]) / 1_000_000;
          break;
        }
      }
      const url_transactions = `${URL_BASE}${address}/transactions/trc20?limit=${LIMIT_TRANSACTION}`;
      const resTransactions = await fetch(url_transactions);
      const jsonTransactions = await resTransactions.json();
      if (!jsonTransactions.data) return [];

      // fiLtrar de las transacciones que sean recibidas, y mas recientes
      const transactionsReceived = jsonTransactions.data
        .filter((transaction) => transaction.to === WALLET_TRC20)
        .map((transaction) => ({
          from: transaction.from,
          value: transaction.value / 1000000,
          date: new Date(transaction.block_timestamp),
        }));
      return { trx, usdt, transactions: transactionsReceived };
    } catch (error) {
      console.error("Error al consultar saldo:", error);
      return { trx: 0, usdt: 0, transactions: [] };
    }
  },
};

module.exports = TRC20Utils;
