const User = require("../models/user");
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const nodemailer = require('nodemailer');
const crypto = require('crypto');

// Tạo transporter của Nodemailer
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL,        // Email bạn dùng để gửi mã xác nhận
        pass: process.env.EMAIL_PASS     // Mật khẩu của email đó
    }
});

// Đăng ký người dùng
exports.signup = async (req, res) => {
    try {
        const { email, password } = req.body;
        const existedUser = await User.findOne({ email });
        if (existedUser) {
            return res.status(400).json({ msg: 'Email đã tồn tại' });
        }

        // Tạo mã xác nhận ngẫu nhiên
        const verificationCode = crypto.randomBytes(3).toString('hex'); // Tạo mã 6 ký tự
        // Tạo mới người dùng với mã xác nhận
        const newUser = new User({
            email,
            password: await bcrypt.hash(password, 10),
            verificationCode, 
        });
        await newUser.save();
        // console.log(newUser)
        // Gửi mã xác nhận qua email
        await transporter.sendMail({
            from: process.env.EMAIL,
            to: email,
            subject: 'Xác nhận đăng ký tài khoản',
            text: `Mã xác nhận của bạn là: ${verificationCode}`
        });

        res.status(201).json({ msg: 'Đăng ký thành công. Vui lòng kiểm tra email để xác nhận tài khoản.' });
    } catch (error) {
        res.status(500).send('Server Error');
    }
};

// Xác thực mã xác nhận
exports.verify = async (req, res) => {
    try {
        const { email, code } = req.body;
        const user = await User.findOne({ email });
        
        if (!user) {
            return res.status(400).json({ msg: 'Người dùng không tồn tại' });
        }

        if (user.isVerified) {
            return res.status(400).json({ msg: 'Tài khoản đã được xác thực' });
        }

        if (user.verificationCode !== code) {
            return res.status(400).json({ msg: 'Mã xác nhận không đúng' });
        }

        user.isVerified = true;
        user.verificationCode = null; 
        await user.save();

        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1m' });

        res.json({ msg: 'Xác thực thành công', token });
    } catch (error) {
        res.status(500).send('Server Error');
    }
};


exports.login = async (req, res) => {
    const { email, password } = req.body;
  
    try {
      // Kiểm tra xem người dùng có tồn tại không
      const user = await User.findOne({ email });
      if (!user) {
        return res.status(400).json({ message: 'Email không tồn tại' });
      }
  
      // Kiểm tra mật khẩu
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return res.status(400).json({ message: 'Mật khẩu không đúng' });
      }
  
      // Tạo token JWT
      const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
  
      // Trả về token
      res.json({ token });
    } catch (error) {
      console.error('Login error:', error.message);
      res.status(500).json({ message: 'Server error' });
    }
  };
