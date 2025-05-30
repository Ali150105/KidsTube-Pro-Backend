const express = require('express');
const router = express.Router();
const videoController = require('../controllers/videoController');

router.post('/', videoController.agregarVideo);
router.put('/:id', videoController.editarVideo);
router.delete('/:id', videoController.eliminarVideo);

module.exports = router;