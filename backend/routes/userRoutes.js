// routes/userRoutes.js
const express = require('express');
const router = express.Router();
const auth = require('../middleware/authMiddleware');
const userController = require('../controllers/userController');

// Route để lấy thông tin người dùng (yêu cầu token)
router.get('/:userId', auth, userController.getUserById);

module.exports = router;
