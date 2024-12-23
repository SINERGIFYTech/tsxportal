require('dotenv').config();

const express = require('express');
const db = require('./db');
const authRoutes = require('./auth');
const transactionRoutes = require('./transactions');

const app = express();
const port = 3000;

app.get('/inversiones', (req, res) => {
    db.query('SELECT * FROM Inversiones WHERE id_cliente = 1', (err, results) => {
        if (err) {
            return res.status(500).send('Error en la consulta');
        }
        res.json(results);
    });
});

app.use(express.json());

app.use('/auth', authRoutes);
app.use('/transactions', transactionRoutes);

app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});