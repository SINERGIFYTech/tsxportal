const db = require("../db");

const investmentUtils = {
  create: async ({
    id_cliente,
    tipo,
    monto,
    beneficio_total,
    mejor_op,
    peor_op,
    monto_proyectado,
    porcentaje_actual,
  }) => {
    await db.query(
      `
      INSERT INTO inversiones 
      (
        id_cliente,
        tipo,
        monto,
        beneficio_total,
        mejor_op,
        peor_op,
        monto_proyectado,
        porcentaje_actual
      )
      VALUES (?, ?, ?, ?, ?, ?, ?, ?)
    `,
      [
        id_cliente,
        tipo,
        monto,
        beneficio_total,
        mejor_op,
        peor_op,
        monto_proyectado,
        porcentaje_actual,
      ]
    );
    return {
      success: true,
    };
  },
};
module.exports = investmentUtils;
