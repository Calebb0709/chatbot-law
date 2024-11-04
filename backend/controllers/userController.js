// controllers/userController.js
const User = require('../models/user');

// Hàm để lấy thông tin người dùng
exports.getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select('-password');
    if (!user) return res.status(404).json({ message: 'User not found' });
    
    res.json(user);
    // console.log("Fetched User Data:", user); // Chỉ log biến user để kiểm tra dữ liệu
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};
