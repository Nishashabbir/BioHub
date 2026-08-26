const mongoose = require('mongoose');

const visitSchema = new mongoose.Schema({
  profileId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Profile',
    required: true
  },
  visitorIpHash: {
    type: String,
    default: ''
  },
  userAgent: {
    type: String,
    default: ''
  },
  referer: {
    type: String,
    default: ''
  }
}, {
  timestamps: true
});

// Index for performance on analytics queries
visitSchema.index({ profileId: 1, createdAt: -1 });

module.exports = mongoose.model('Visit', visitSchema);
