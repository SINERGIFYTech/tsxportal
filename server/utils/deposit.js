const db = require("../db");
const TRC20Utils = require("./trc20");

const depositUtils = {
  create: async ({ amount, clienteId }) => {
    const walletData = TRC20Utils.create();
    const depositBody = {
      amount: amount,
      clienteId,
      wallet_address: walletData,
    };

    await db.query(
      `
    INSERT INTO depositos 
    (amount, clienteId, wallet_address)
    VALUES (?, ?, ?)
  `,
      [depositBody.amount, depositBody.clienteId, depositBody.wallet_address]
    );
    return {
      wallet_address: depositBody.wallet_address,
      amount_expected: depositBody.amount,
    };
  },
  checkAddress: async (address) => {
    const dataAddress = await TRC20Utils.getBalance();
    //
    return dataAddress;
  },
};

module.exports = depositUtils;
