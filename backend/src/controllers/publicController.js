const User = require('../models/User');
const Profile = require('../models/Profile');
const SocialLink = require('../models/SocialLink');
const Analytics = require('../models/Analytics');
const Visit = require('../models/Visit');
const { sendSuccess, sendError } = require('../helpers/responseHelper');

// @desc    Get public profile by username
// @route   GET /api/public/:username
// @access  Public
const getPublicProfile = async (req, res, next) => {
  try {
    const { username } = req.params;

    const user = await User.findOne({ username: username.toLowerCase() });
    if (!user) {
      return sendError(res, 404, 'Bio profile not found');
    }

    const profile = await Profile.findOne({ userId: user._id });
    if (!profile) {
      return sendError(res, 404, 'Bio profile not found');
    }

    if (!profile.isPublished) {
      return sendError(res, 403, 'This profile is private or unpublished');
    }

    const links = await SocialLink.find({ profileId: profile._id, isActive: true }).sort({ order: 1 });

    return sendSuccess(res, 200, 'Public profile fetched successfully', {
      user: {
        username: user.username
      },
      profile,
      links
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Record profile visit
// @route   POST /api/visit
// @access  Public
const recordVisit = async (req, res, next) => {
  try {
    const { username, profileId } = req.body;
    let targetProfileId = profileId;

    if (!targetProfileId && username) {
      const user = await User.findOne({ username: username.toLowerCase() });
      if (user) {
        const profile = await Profile.findOne({ userId: user._id });
        if (profile) targetProfileId = profile._id;
      }
    }

    if (!targetProfileId) {
      return sendError(res, 400, 'Profile identifier (username or profileId) is required');
    }

    const userAgent = req.headers['user-agent'] || '';
    const referer = req.headers['referer'] || '';
    const ip = req.ip || req.connection.remoteAddress || '';

    // Create visit log
    await Visit.create({
      profileId: targetProfileId,
      visitorIpHash: ip,
      userAgent,
      referer
    });

    // Update analytics totalVisits
    await Analytics.findOneAndUpdate(
      { profileId: targetProfileId },
      { $inc: { totalVisits: 1 } },
      { upsert: true }
    );

    return sendSuccess(res, 200, 'Visit recorded successfully', {});
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getPublicProfile,
  recordVisit
};
