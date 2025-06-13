const { Router, request, response } = require("express");
const depositUtils = require("./utils/deposit");
const validateToken = require("./auth.middleware");

const depositController = {
  create: async (req = request, res = response) => {
    const { amount } = req.body;
    const { id: clienteId } = req.user;
    const depositStored = await depositUtils.create({ amount, clienteId });
    return res.status(depositStored.success ? 200 : 500).json(depositStored);
  },
  checkDepositsFromLastHour: async (req = request, res = response) => {
    const checkDeposits = await depositUtils.checkDepositsFromLastHour();
    return res.json(checkDeposits);
  },
  getMyDeposits: async (req = request, res = response) => {
    const { id: clienteId } = req.user;
    const depositStored = await depositUtils.getDepositsByClient(clienteId);
    return res.json(depositStored);
  },
};

const depositRoutes = Router();

depositRoutes.get("/my", validateToken, depositController.getMyDeposits);
depositRoutes.post("/", validateToken, depositController.create);
depositRoutes.get(
  "/checking-last-hour",
  depositController.checkDepositsFromLastHour
);

module.exports = depositRoutes;
