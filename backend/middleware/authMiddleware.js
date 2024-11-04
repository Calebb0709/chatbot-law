const jwt = require('jsonwebtoken');

const authenticateToken = (req, res, next) => {
    // Lấy token từ header Authorization
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1]; 

    // Kiểm tra nếu không có token
    if (!token) {
        return res.status(401).json({ msg: 'Không có token, từ chối truy cập' });
    }

    // Xác minh token
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET); // Giải mã token với khóa bí mật
        req.user = decoded; // Lưu thông tin người dùng đã xác minh vào req để sử dụng trong các route
        next(); // Cho phép yêu cầu tiếp tục
    } catch (error) {
        if (error.name === 'TokenExpiredError') {
            res.status(401).json({ msg: 'Token đã hết hạn' });
        } else {
            res.status(401).json({ msg: 'Token không hợp lệ' });
        }
    }
};

module.exports = authenticateToken;
