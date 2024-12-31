const express = require('express');
const db = require('./db');
const validateToken = require('./auth.middleware');

const router = express.Router();

const getUserLogged = async (req, res) => {
    try {
        const id = req.user.id; // Obtener el email del token decodificado
        // Consulta a la base de datos para obtener la información del usuario
        const [rows] = await db.execute('SELECT * FROM clientes WHERE id = ?', [id]);

        if (rows.length === 0) {
            return res.status(404).json({ error: 'Usuario no encontrado.' });
        }

        res.json({ user: rows[0] }); // Enviar la información del usuario
    } catch (error) {
        console.error('Error al obtener información del usuario:', error);
        res.status(500).json({ error: 'Error interno del servidor.' });
    }
}

router.get('/info', validateToken, getUserLogged);

module.exports = router;
