const mongoose = require('mongoose');

const socialLinkSchema = new mongoose.Schema({
  profileId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Profile',
    required: true
  },
  title: {
    type: String,
    required: [true, 'Link title is required'],
    trim: true,
    maxlength: [60, 'Title cannot exceed 60 characters']
  },
  platform: {
    type: String,
    required: [true, 'Platform is required'],
    trim: true,
    default: 'custom'
  },
  url: {
    type: String,
    required: [true, 'URL is required'],
    trim: true
  },
  order: {
    type: Number,
    default: 0
  },
  clickCount: {
    type: Number,
    default: 0
  },
  isActive: {
    type: Boolean,
    default: true
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('SocialLink', socialLinkSchema);
