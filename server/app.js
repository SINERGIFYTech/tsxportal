const express = require('express');
const db = require('./db');

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

app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});