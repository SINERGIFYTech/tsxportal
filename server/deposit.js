const { Router, request, response } = require("express");
const depositUtils = require("./utils/deposit");
const validateToken = require("./auth.middleware");

const depositController = {
  create: async (req = request, res = response) => {
    const { amount } = req.body;
    const { id: clienteId } = req.user;
    const depositStored = await depositUtils.create({ amount, clienteId });
    return res.json(depositStored);
  },
  checkAddress: async (req = request, res = response) =>{
    const { address } = req.params;
    const addressInfo = await depositUtils.checkAddress(address);
    return res.json(addressInfo);
  }
};

const depositRoutes = Router();

depositRoutes.post("/", validateToken, depositController.create);
depositRoutes.get("/address/:address", validateToken, depositController.checkAddress);

module.exports = depositRoutes;
