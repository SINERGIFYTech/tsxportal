const express = require('express');
const db = require('./db');
const validateToken = require('./auth.middleware');
const UserUtils = require('./utils/user');
const multer = require('multer');
const fs = require('fs');
const cloudUtils = require('./utils/cloud');
const upload = multer({ dest: 'uploads/' });

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
const getSignedContract = async (req, res) => {
    const id = req.user.id; // Obtener el ID del usuario del token decodificado
    const response = await UserUtils.getSignedContract(id);
    return res.status(response.success ? 200 : 500).json(response.data);
}

router.get('/info', validateToken, getUserLogged);
// router.get('/signed-contract', validateToken, getSignedContract);
router.post('/upload-contract', [validateToken, upload.single('file')], async (req, res) => {
    // Aquí ya puedes acceder a req.file
    const id = req.user.id;
    const user = await UserUtils.getUser(id);
    if (!user.success) return res.status(500).json({ error: 'Error al obtener el usuario.' });
    const filePath = req.file.path;
    const fileName = `pdfs/${Date.now()}_${user.data.email}.${req.file.originalname.split('.')[1]}`;
    const url = await cloudUtils.upload(filePath, fileName);
    await db.execute('update clientes set signed_contract_link = ? where id = ?', [url, id]);
    fs.unlink(filePath, (err) => {
        if (err) console.error('Error al eliminar el archivo local:', err);
    });
    res.json({ url });
});

router.get('/get-my-contract', validateToken, async (req, res) => {
    const id = req.user.id; // Obtener el ID del usuario del token decodificado
    const response = await UserUtils.getSignedContract(id);
    if (!response.success) {
        return res.status(500).json({ error: 'Error al obtener el contrato firmado.' });
    }
    if (!response.data.signedContractLink) {
        return res.status(404).json({ error: 'Contrato firmado no encontrado.' });
    }
    const url = await cloudUtils.getFile(response.data.signedContractLink);
    return res.status(200).json({ url });
});

module.exports = router;
