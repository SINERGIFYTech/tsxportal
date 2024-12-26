const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const db = require('./db');

const router = express.Router();

// Controlador
const loginController = async (req, res) => {
    const { email, password } = req.body || {}
    // Validar entrada
    if (!email || !password) {
      return res.status(400).json({ error: 'Email y contraseña son requeridos.' });
    }
  
    // Buscar usuario en la base de datos
    const [rows] = await db.execute('SELECT * FROM clientes WHERE email = ?', [email]);
    const user = rows[0];

    if (!user) {
        return res.status(401).json({ error: 'Credenciales inválidas.' });
      }
  
    // Verificar contraseña
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ error: 'Credenciales inválidas.' });
    }
  
    // Generar token JWT
    const payload = { email: user.email, nombre: user.nombre, id: user.id };
    const token = jwt.sign(payload, process.env.JWT_SECRET_KEY, { expiresIn: '24h' });
    res.json({ message: 'Inicio de sesión exitoso.', token, payload });
  };


  // Ruta de login
router.post('/login', loginController);

module.exports = router;