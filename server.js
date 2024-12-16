const express = require('express');
const path = require('path');
const mysql = require('mysql');
const app = express();
const port = 8080;

// Configuración de la base de datos
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'sinergify_investments'
});

// Conectar a la base de datos
db.connect((err) => {
    if (err) {
        console.error('Error conectando a la base de datos:', err);
        return;
    }
    console.log('Conectado a la base de datos');
});

// Middleware para agregar encabezados CORS
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});

// Middleware para servir archivos estáticos
app.use(express.static(path.join(__dirname, 'src')));

// Ruta raíz
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'src', 'index.html'));
});

// Ruta para /inversiones
app.get('/inversiones', (req, res) => {
    // Aquí deberías devolver los datos de inversiones
    db.query('SELECT * FROM Inversiones WHERE id_cliente = 2', (err, results) => {
        if (err) {
            return res.status(500).send('Error en la consulta');
        }
        res.json(results);
    });
});

app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});
