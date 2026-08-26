const jwt = require('jsonwebtoken');
const User = require('../models/User');
const { sendError } = require('../helpers/responseHelper');

const protect = async (req, res, next) => {
  let token;

  // Check header or cookies
  if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
    token = req.headers.authorization.split(' ')[1];
  } else if (req.cookies && req.cookies.token) {
    token = req.cookies.token;
  }

  if (!token) {
    return sendError(res, 401, 'Not authorized, token missing');
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = await User.findById(decoded.id).select('-password');
    if (!req.user) {
      return sendError(res, 401, 'User not found for this token');
    }
    next();
  } catch (error) {
    return sendError(res, 401, 'Not authorized, token failed');
  }
};

module.exports = { protect };
