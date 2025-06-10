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
};

const depositRoutes = Router();

depositRoutes.post("/", validateToken, depositController.create);

module.exports = depositRoutes;
