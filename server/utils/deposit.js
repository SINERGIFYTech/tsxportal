const db = require("../db");
const { encryptPrivateKey, decryptPrivateKey } = require("./encrypt");
const TRC20Utils = require("./trc20");

const depositUtils = {
  create: async ({ amount, clienteId }) => {
    const walletData = await TRC20Utils.create();
    const depositBody = {
      amount_expected: amount,
      clienteId,
      wallet_address: walletData.address.base58,
      wallet_private_encrypted: encryptPrivateKey(walletData.privateKey),
      wallet_hex_address: walletData.address.hex,
    };

    await db.query(
      `
    INSERT INTO depositos 
    (amount_expected, clienteId, wallet_address, wallet_private_encrypted, wallet_hex_address)
    VALUES (?, ?, ?, ?, ?)
  `,
      [
        depositBody.amount_expected,
        depositBody.clienteId,
        depositBody.wallet_address,
        depositBody.wallet_private_encrypted,
        depositBody.wallet_hex_address,
      ]
    );
    return {
        wallet_address: depositBody.wallet_address,
        amount_expected: depositBody.amount_expected
    };
  },
  checkAddress: async (address) => {
    const dataAddress = await TRC20Utils.getBalance(address);
    return dataAddress;
  }
};

module.exports = depositUtils;
