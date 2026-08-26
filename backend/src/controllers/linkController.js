const SocialLink = require('../models/SocialLink');
const Profile = require('../models/Profile');
const Analytics = require('../models/Analytics');
const { sendSuccess, sendError } = require('../helpers/responseHelper');

// @desc    Get all links for user
// @route   GET /api/links
// @access  Private
const getLinks = async (req, res, next) => {
  try {
    const profile = await Profile.findOne({ userId: req.user._id });
    if (!profile) {
      return sendError(res, 404, 'Profile not found');
    }

    const links = await SocialLink.find({ profileId: profile._id }).sort({ order: 1 });
    return sendSuccess(res, 200, 'Links fetched successfully', { links });
  } catch (error) {
    next(error);
  }
};

// @desc    Create new social link
// @route   POST /api/links
// @access  Private
const createLink = async (req, res, next) => {
  try {
    const { title, url, platform } = req.body;

    const profile = await Profile.findOne({ userId: req.user._id });
    if (!profile) {
      return sendError(res, 404, 'Profile not found');
    }

    // Get max order
    const count = await SocialLink.countDocuments({ profileId: profile._id });

    const link = await SocialLink.create({
      profileId: profile._id,
      title,
      url,
      platform: platform || 'custom',
      order: count
    });

    return sendSuccess(res, 201, 'Link created successfully', { link });
  } catch (error) {
    next(error);
  }
};

// @desc    Update social link
// @route   PUT /api/links/:id
// @access  Private
const updateLink = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { title, url, platform, isActive } = req.body;

    const profile = await Profile.findOne({ userId: req.user._id });
    if (!profile) {
      return sendError(res, 404, 'Profile not found');
    }

    const link = await SocialLink.findOne({ _id: id, profileId: profile._id });
    if (!link) {
      return sendError(res, 404, 'Link not found');
    }

    if (title !== undefined) link.title = title;
    if (url !== undefined) link.url = url;
    if (platform !== undefined) link.platform = platform;
    if (isActive !== undefined) link.isActive = isActive;

    await link.save();

    return sendSuccess(res, 200, 'Link updated successfully', { link });
  } catch (error) {
    next(error);
  }
};

// @desc    Delete social link
// @route   DELETE /api/links/:id
// @access  Private
const deleteLink = async (req, res, next) => {
  try {
    const { id } = req.params;

    const profile = await Profile.findOne({ userId: req.user._id });
    if (!profile) {
      return sendError(res, 404, 'Profile not found');
    }

    const link = await SocialLink.findOneAndDelete({ _id: id, profileId: profile._id });
    if (!link) {
      return sendError(res, 404, 'Link not found');
    }

    return sendSuccess(res, 200, 'Link deleted successfully', { id });
  } catch (error) {
    next(error);
  }
};

// @desc    Reorder social links
// @route   PUT /api/links/reorder
// @access  Private
const reorderLinks = async (req, res, next) => {
  try {
    const { linkIds } = req.body; // Array of link IDs in desired order

    if (!Array.isArray(linkIds)) {
      return sendError(res, 400, 'linkIds must be an array');
    }

    const profile = await Profile.findOne({ userId: req.user._id });
    if (!profile) {
      return sendError(res, 404, 'Profile not found');
    }

    // Update order for each link
    for (let i = 0; i < linkIds.length; i++) {
      await SocialLink.findOneAndUpdate(
        { _id: linkIds[i], profileId: profile._id },
        { order: i }
      );
    }

    const links = await SocialLink.find({ profileId: profile._id }).sort({ order: 1 });

    return sendSuccess(res, 200, 'Links reordered successfully', { links });
  } catch (error) {
    next(error);
  }
};

// @desc    Record click on social link
// @route   POST /api/click
// @access  Public
const recordClick = async (req, res, next) => {
  try {
    const { linkId } = req.body;
    if (!linkId) {
      return sendError(res, 400, 'linkId is required');
    }

    const link = await SocialLink.findById(linkId);
    if (!link) {
      return sendError(res, 404, 'Link not found');
    }

    link.clickCount += 1;
    await link.save();

    // Update overall analytics totalClicks
    await Analytics.findOneAndUpdate(
      { profileId: link.profileId },
      { $inc: { totalClicks: 1 } }
    );

    return sendSuccess(res, 200, 'Click recorded successfully', {
      linkId: link._id,
      clickCount: link.clickCount
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getLinks,
  createLink,
  updateLink,
  deleteLink,
  reorderLinks,
  recordClick
};
