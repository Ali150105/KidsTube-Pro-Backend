const express = require('express');
const router = express.Router();
const userController = require('../controllers/userRestrictedController');

router.post('/', userController.agregarUsuario);
router.put('/:id', userController.editarUsuario);
router.delete('/:id', userController.eliminarUsuario);

module.exports = router;
