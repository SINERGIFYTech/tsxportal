const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const db = require('./db');

const validateToken = require('./auth.middleware');

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
    const token = jwt.sign(payload, process.env.JWT_SECRET_KEY, { expiresIn: '60d' });
    res.json({ message: 'Inicio de sesión exitoso.', token, payload });
  };


  const validAuth = (req, res) => {
      const authHeader = req.headers['authorization'];
  
      if (!authHeader || !authHeader.startsWith('Bearer ')) {
          return res.status(400).json({ valid: false, error: 'Token no proporcionado o formato incorrecto.' });
      }
  
      const token = authHeader.split(' ')[1];
  
      jwt.verify(token, process.env.JWT_SECRET_KEY, (err, decoded) => {
          if (err) {
              return res.status(401).json({ valid: false, error: 'Token inválido.' });
          }
  
          res.json({ valid: true, message: 'Token válido.', user: decoded });
      });
  }

  // Ruta de login
router.post('/login', loginController);
router.get('/validate-token', validAuth);

module.exports = router;