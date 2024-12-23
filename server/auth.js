const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const router = express.Router();

// Controlador
const loginController = async (req, res) => {
    const { email, password } = req.body;
  
    // Validar entrada
    if (!email || !password) {
      return res.status(400).json({ error: 'Email y contraseña son requeridos.' });
    }
  
    // Buscar usuario en la base de datos
    const user = users.find(u => u.email === email);
    if (!user) {
      return res.status(401).json({ error: 'Credenciales inválidas.' });
    }
  
    // Verificar contraseña
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ error: 'Credenciales inválidas.' });
    }
  
    // Generar token JWT
    const token = jwt.sign({ email: user.email }, 'SECRET_KEY', { expiresIn: '1h' });
  
    res.json({ message: 'Inicio de sesión exitoso.', token });
  };


  // Ruta de login
router.post('/login', loginController);

module.exports = router;