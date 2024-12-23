const express = require('express');
const db = require('./db');
const validateToken = require('./auth.middleware');


const router = express.Router();


// Controlador para obtener transacciones del cliente logueado
const getInvestmentController = async (req, res) => {
    const userId = req.user.id;
  
    try {
      // Obtener transacciones del cliente
      const [investment] = await db.execute('SELECT * FROM inversiones WHERE id_cliente = ?', [userId]);
  
      res.json({ investment });
    } catch (error) {
      console.error('Error al obtener transacciones:', error);
      res.status(500).json({ error: 'Error interno del servidor.' });
    }
  };

  

// Ruta para obtener transacciones protegida
router.get('/my', validateToken, getInvestmentController);

module.exports = router;