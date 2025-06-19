const db = require("../db");

const UserUtils = {
    getUser: async userId => {
        //ALTER TABLE `clientes` ADD `signed_contract_link` VARCHAR(255) NULL DEFAULT NULL AFTER `password`;
        try {
            // Consulta a la base de datos para obtener la información del usuario
            const [rows] = await db.execute('SELECT * FROM clientes WHERE id = ?', [userId]);
            if (!rows.length) throw new Error('Usuario no encontrado.');
            return {
                success: true,
                data: rows[0]
            };
        }
        catch (error) {
            return {
                success: false,
                data: {
                    message: error.message || 'Error interno del servidor.',
                }
            };
        }
    },
    getSignedContract: async userId => {
        const user = await UserUtils.getUser(userId);
        if (!user.success) return user;
        return {
            success: true,
            data: {
                signedContractLink: user.data.signed_contract_link || null
            }
        };
    },
    

};

module.exports = UserUtils;