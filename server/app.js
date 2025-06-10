require("dotenv").config();

const express = require("express");
const cors = require("cors");
const db = require("./db");
const authRoutes = require("./auth");
const transactionRoutes = require("./transactions");
const investmentRoutes = require("./investment");
const userRoutes = require("./user");
const depositRoutes = require("./deposit");

const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());

app.use("/auth", authRoutes);
app.use("/transactions", transactionRoutes);
app.use("/investment", investmentRoutes);
app.use("/user", userRoutes);
app.use("/deposit", depositRoutes);

app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
