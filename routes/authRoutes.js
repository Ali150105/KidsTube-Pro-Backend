const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

router.post('/verificarPin', authController.verificarPin);
router.post('/verificarAuth', authController.verificarAuth);
router.post('/login', authController.login);
router.post('/register', authController.register);
router.get('/verify-email', authController.verifyEmail);
router.post('/verify-code', authController.verifyCode);
router.post('/google', authController.googleAuth);
router.post('/complete-profile', authController.completeProfile);

module.exports = router;