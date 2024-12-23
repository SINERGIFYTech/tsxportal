const express = require('express');
const db = require('./db');
const validateToken = require('./auth.middleware');


const router = express.Router();


// Controlador para obtener transacciones del cliente logueado
const getTransactionsController = async (req, res) => {
    const userId = req.user.id;
  
    try {
      // Obtener transacciones del cliente
      const [transactions] = await db.execute('SELECT * FROM transacciones WHERE id_cliente = ?', [userId]);
  
      res.json({ transactions });
    } catch (error) {
      console.error('Error al obtener transacciones:', error);
      res.status(500).json({ error: 'Error interno del servidor.' });
    }
  };

  

// Ruta para obtener transacciones protegida
router.get('/my', validateToken, getTransactionsController);

module.exports = router;