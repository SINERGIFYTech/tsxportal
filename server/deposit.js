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
  checkDepositsFromLastHour: async (req = request, res = response) => {
    const checkDeposits = await depositUtils.checkDepositsFromLastHour();
    return res.json(checkDeposits);
  },
};

const depositRoutes = Router();

depositRoutes.post("/", validateToken, depositController.create);
depositRoutes.get(
  "/checking-last-hour",
  depositController.checkDepositsFromLastHour
);

module.exports = depositRoutes;
