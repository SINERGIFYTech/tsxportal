
const jwt = require('jsonwebtoken');


// Middleware para validar el token JWT
const validateToken = (req, res, next) => {
    const authHeader = req.headers['authorization'];
  
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(403).json({ error: 'Token no proporcionado o formato incorrecto.' });
      }
    
      const token = authHeader.split(' ')[1];
  
    jwt.verify(token, process.env.JWT_SECRET_KEY, (err, decoded) => {
      if (err) {
        return res.status(401).json({ error: 'Token inválido.' });
      }
  
      req.user = decoded;
      next();
    });
  };

  module.exports = validateToken;