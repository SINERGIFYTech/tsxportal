const { TronWeb } = require("tronweb");

const tronWeb = new TronWeb({
  fullHost: "https://api.trongrid.io",
});

const TRC20Utils = {
  create: async () => {
    const account = await tronWeb.createAccount();
    return account;
  },
};

module.exports = TRC20Utils;
