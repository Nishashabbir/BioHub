const User = require('../models/User');
const Profile = require('../models/Profile');
const Analytics = require('../models/Analytics');
const jwt = require('jsonwebtoken');
const { sendSuccess, sendError } = require('../helpers/responseHelper');

// Generate JWT Token helper
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRE || '7d'
  });
};

// @desc    Register new user
// @route   POST /api/auth/register
// @access  Public
const register = async (req, res, next) => {
  try {
    const { username, email, password, displayName } = req.body;

    // Check if user exists
    const userExists = await User.findOne({ $or: [{ email }, { username }] });
    if (userExists) {
      const field = userExists.email === email ? 'Email' : 'Username';
      return sendError(res, 400, `${field} is already registered`);
    }

    // Create user
    const user = await User.create({
      username,
      email,
      password
    });

    // Create associated Profile
    const profile = await Profile.create({
      userId: user._id,
      displayName: displayName || username,
      bio: 'Welcome to my bio link!',
      theme: 'default',
      isPublished: false
    });

    // Create associated Analytics record
    await Analytics.create({
      profileId: profile._id,
      totalVisits: 0,
      totalClicks: 0,
      uniqueVisitors: 0
    });

    const token = generateToken(user._id);

    // Set cookie if desired
    res.cookie('token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      maxAge: 7 * 24 * 60 * 60 * 1000 // 7 days
    });

    return sendSuccess(res, 201, 'User registered successfully', {
      token,
      user: {
        id: user._id,
        username: user.username,
        email: user.email,
        createdAt: user.createdAt
      },
      profile
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Login user
// @route   POST /api/auth/login
// @access  Public
const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    // Check for user email
    const user = await User.findOne({ email }).select('+password');
    if (!user) {
      return sendError(res, 401, 'Invalid credentials');
    }

    // Check if password matches
    const isMatch = await user.matchPassword(password);
    if (!isMatch) {
      return sendError(res, 401, 'Invalid credentials');
    }

    const token = generateToken(user._id);

    res.cookie('token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      maxAge: 7 * 24 * 60 * 60 * 1000
    });

    const profile = await Profile.findOne({ userId: user._id });

    return sendSuccess(res, 200, 'Logged in successfully', {
      token,
      user: {
        id: user._id,
        username: user.username,
        email: user.email
      },
      profile
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Logout user / clear cookie
// @route   POST /api/auth/logout
// @access  Public
const logout = async (req, res, next) => {
  try {
    res.cookie('token', 'none', {
      expires: new Date(Date.now() + 10 * 1000),
      httpOnly: true
    });
    return sendSuccess(res, 200, 'Logged out successfully', {});
  } catch (error) {
    next(error);
  }
};

// @desc    Get current logged in user
// @route   GET /api/auth/me
// @access  Private
const getMe = async (req, res, next) => {
  try {
    const profile = await Profile.findOne({ userId: req.user._id });
    return sendSuccess(res, 200, 'Current user fetched successfully', {
      user: req.user,
      profile
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  register,
  login,
  logout,
  getMe
};
