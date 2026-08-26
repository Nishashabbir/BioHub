const mongoose = require('mongoose');

const profileSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
    unique: true
  },
  displayName: {
    type: String,
    required: [true, 'Display name is required'],
    trim: true,
    maxlength: [50, 'Display name cannot exceed 50 characters']
  },
  bio: {
    type: String,
    trim: true,
    maxlength: [200, 'Bio cannot exceed 200 characters'],
    default: ''
  },
  avatar: {
    type: String,
    default: ''
  },
  theme: {
    type: String,
    default: 'default', // e.g. 'default', 'dark', 'neon', 'minimal', 'sunset'
  },
  isPublished: {
    type: Boolean,
    default: false
  },
  customDomain: {
    type: String,
    trim: true,
    default: ''
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Profile', profileSchema);
