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


  const getInversionesCalculadas = async (req, res) => {
    
    const userId = req.user.id;
      // Obtener transacciones del cliente
      try {
        const [investment] = await db.execute('SELECT * FROM inversiones WHERE id_cliente = ?', [userId]);
        const ahora = new Date();
        let montoTotalInicial = 0;
        let montoTotalCon5 = 0;
        let montoTotalCon8 = 0;
    
        console.log(investment)
        const resultados = investment.map(inversion => {
            const fechaInicio = new Date(inversion.fecha);
            const mesesTranscurridos = Math.floor((ahora - fechaInicio) / (1000 * 60 * 60 * 24 * 30)); // Meses completos
            montoTotalInicial += +inversion.monto;
            if (mesesTranscurridos <= 0) {
              montoTotalCon5 += +inversion.monto;
              montoTotalCon8 += +inversion.monto;
                return { ...inversion, mesesTranscurridos: 0, montoActual5: inversion.monto, montoActual8: inversion.monto, beneficio5: 0, fondoCompartido: 0 };
            }
    
            const montoActual5 = calcularInteresCompuesto(inversion.monto, 0.05, mesesTranscurridos);
            const montoActual8 = calcularInteresCompuesto(inversion.monto, 0.08, mesesTranscurridos);
            const beneficio5 = montoActual5 - inversion.monto;
            const fondoCompartido = montoActual8;
    
            montoTotalCon5 += +montoActual5;
            montoTotalCon8 += +montoActual8;
    
            return {
                ...inversion,
                mesesTranscurridos,
                montoActual5: montoActual5.toFixed(2),
                montoActual8: montoActual8.toFixed(2),
                beneficio5: beneficio5,
                fondoCompartido: fondoCompartido.toFixed(2),
            };
        });
        
        const resumen = {
            montoTotalInicial: montoTotalInicial,
            montoTotalCon5: montoTotalCon5.toFixed(2),
            montoTotalCon8: montoTotalCon8.toFixed(2),
        };
    
        res.json({ inversiones: resultados, resumen });
      } catch (error) {
        console.error('Error al obtener transacciones:', error);
        res.status(500).json({ error: 'Error interno del servidor.' });
      }
  }

  function calcularInteresCompuesto(monto, tasa, meses) {
    return monto * Math.pow((1 + tasa), meses);
}

// Ruta para obtener transacciones protegida
router.get('/my', validateToken, getInvestmentController);
router.get('/calculado', validateToken, getInversionesCalculadas);

module.exports = router;