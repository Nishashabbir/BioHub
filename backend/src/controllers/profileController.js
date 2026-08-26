const Profile = require('../models/Profile');
const User = require('../models/User');
const SocialLink = require('../models/SocialLink');
const Analytics = require('../models/Analytics');
const Visit = require('../models/Visit');
const { sendSuccess, sendError } = require('../helpers/responseHelper');
const cloudinary = require('../config/cloudinary');
const fs = require('fs');

// @desc    Get user profile
// @route   GET /api/profile
// @access  Private
const getProfile = async (req, res, next) => {
  try {
    const profile = await Profile.findOne({ userId: req.user._id });
    if (!profile) {
      return sendError(res, 404, 'Profile not found');
    }
    const links = await SocialLink.find({ profileId: profile._id }).sort({ order: 1 });
    return sendSuccess(res, 200, 'Profile fetched successfully', {
      profile,
      links,
      user: req.user
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Update user profile
// @route   PUT /api/profile
// @access  Private
const updateProfile = async (req, res, next) => {
  try {
    const { displayName, bio, theme, customDomain, username } = req.body;

    const profile = await Profile.findOne({ userId: req.user._id });
    if (!profile) {
      return sendError(res, 404, 'Profile not found');
    }

    if (displayName !== undefined) profile.displayName = displayName;
    if (bio !== undefined) profile.bio = bio;
    if (theme !== undefined) profile.theme = theme;
    if (customDomain !== undefined) profile.customDomain = customDomain;

    await profile.save();

    // If username update requested
    if (username && username !== req.user.username) {
      const usernameExists = await User.findOne({ username });
      if (usernameExists) {
        return sendError(res, 400, 'Username is already taken');
      }
      req.user.username = username;
      await req.user.save();
    }

    return sendSuccess(res, 200, 'Profile updated successfully', {
      profile,
      user: req.user
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Upload profile avatar
// @route   POST /api/profile/avatar
// @access  Private
const uploadAvatar = async (req, res, next) => {
  try {
    if (!req.file) {
      return sendError(res, 400, 'Please upload an image file');
    }

    const profile = await Profile.findOne({ userId: req.user._id });
    if (!profile) {
      return sendError(res, 404, 'Profile not found');
    }

    let avatarUrl = '';

    // Check if Cloudinary is configured
    if (process.env.CLOUDINARY_NAME && process.env.CLOUDINARY_KEY && process.env.CLOUDINARY_SECRET) {
      try {
        const result = await cloudinary.uploader.upload(req.file.path, {
          folder: 'bio_avatars',
          width: 300,
          height: 300,
          crop: 'fill'
        });
        avatarUrl = result.secure_url;
        // Remove local temp file
        fs.unlinkSync(req.file.path);
      } catch (cloudErr) {
        console.error('Cloudinary upload error, falling back to local path:', cloudErr);
        avatarUrl = `/uploads/${req.file.filename}`;
      }
    } else {
      avatarUrl = `/uploads/${req.file.filename}`;
    }

    profile.avatar = avatarUrl;
    await profile.save();

    return sendSuccess(res, 200, 'Avatar uploaded successfully', {
      avatar: avatarUrl,
      profile
    });
  } catch (error) {
    if (req.file && req.file.path && fs.existsSync(req.file.path)) {
      fs.unlinkSync(req.file.path);
    }
    next(error);
  }
};

// @desc    Delete profile avatar
// @route   DELETE /api/profile/avatar
// @access  Private
const deleteAvatar = async (req, res, next) => {
  try {
    const profile = await Profile.findOne({ userId: req.user._id });
    if (!profile) {
      return sendError(res, 404, 'Profile not found');
    }

    profile.avatar = '';
    await profile.save();

    return sendSuccess(res, 200, 'Avatar deleted successfully', { profile });
  } catch (error) {
    next(error);
  }
};

// @desc    Check username availability
// @route   GET /api/username/:username
// @access  Public
const checkUsername = async (req, res, next) => {
  try {
    const { username } = req.params;
    const user = await User.findOne({ username: username.toLowerCase() });

    return sendSuccess(res, 200, 'Username check completed', {
      available: !user,
      username
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Publish/unpublish profile
// @route   POST /api/publish
// @access  Private
const togglePublish = async (req, res, next) => {
  try {
    const { isPublished } = req.body;
    const profile = await Profile.findOne({ userId: req.user._id });
    if (!profile) {
      return sendError(res, 404, 'Profile not found');
    }

    profile.isPublished = isPublished !== undefined ? isPublished : !profile.isPublished;
    await profile.save();

    return sendSuccess(res, 200, `Profile ${profile.isPublished ? 'published' : 'unpublished'} successfully`, {
      isPublished: profile.isPublished,
      profile
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Delete user account and all associated data
// @route   DELETE /api/account
// @access  Private
const deleteAccount = async (req, res, next) => {
  try {
    const profile = await Profile.findOne({ userId: req.user._id });
    if (profile) {
      await SocialLink.deleteMany({ profileId: profile._id });
      await Analytics.deleteOne({ profileId: profile._id });
      await Visit.deleteMany({ profileId: profile._id });
      await Profile.deleteOne({ _id: profile._id });
    }
    await User.deleteOne({ _id: req.user._id });

    res.cookie('token', 'none', {
      expires: new Date(Date.now() + 10 * 1000),
      httpOnly: true
    });

    return sendSuccess(res, 200, 'Account deleted successfully', {});
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getProfile,
  updateProfile,
  uploadAvatar,
  deleteAvatar,
  checkUsername,
  togglePublish,
  deleteAccount
};
