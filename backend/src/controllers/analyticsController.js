const Profile = require('../models/Profile');
const Analytics = require('../models/Analytics');
const Visit = require('../models/Visit');
const SocialLink = require('../models/SocialLink');
const { sendSuccess, sendError } = require('../helpers/responseHelper');

// @desc    Get analytics summary
// @route   GET /api/analytics
// @access  Private
const getAnalytics = async (req, res, next) => {
  try {
    const profile = await Profile.findOne({ userId: req.user._id });
    if (!profile) {
      return sendError(res, 404, 'Profile not found');
    }

    let analytics = await Analytics.findOne({ profileId: profile._id });
    if (!analytics) {
      analytics = await Analytics.create({
        profileId: profile._id,
        totalVisits: 0,
        totalClicks: 0,
        uniqueVisitors: 0
      });
    }

    // Get recent visits count (e.g., last 30 days or total)
    const recentVisitsCount = await Visit.countDocuments({ profileId: profile._id });
    
    // Get link click breakdown
    const links = await SocialLink.find({ profileId: profile._id }).select('title url platform clickCount');

    return sendSuccess(res, 200, 'Analytics fetched successfully', {
      analytics: {
        totalVisits: analytics.totalVisits || recentVisitsCount,
        totalClicks: analytics.totalClicks,
        uniqueVisitors: analytics.uniqueVisitors
      },
      linkClicks: links
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAnalytics
};
