const { TronWeb } = require("tronweb");

const tronWeb = new TronWeb({
  fullHost: "https://api.trongrid.io",
});

const TRC20Utils = {
  create: async () => {
    const account = await tronWeb.createAccount();
    return account;
  },
  getBalance: async (address) => {
    const balanceTRX = await tronWeb.trx.getBalance(address); // Devuelve en SUN
    console.log("Balance TRX:", balanceTRX / 1_000_000);
    return { balance: balanceTRX / 1_000_000 }
  },
};

module.exports = TRC20Utils;
