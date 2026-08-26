const mongoose = require('mongoose');

const themeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  displayName: {
    type: String,
    required: true
  },
  backgroundColor: {
    type: String,
    required: true,
    default: '#ffffff'
  },
  textColor: {
    type: String,
    required: true,
    default: '#000000'
  },
  buttonColor: {
    type: String,
    required: true,
    default: '#3b82f6'
  },
  buttonTextColor: {
    type: String,
    required: true,
    default: '#ffffff'
  },
  fontFamily: {
    type: String,
    default: 'Inter'
  },
  isPremium: {
    type: Boolean,
    default: false
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Theme', themeSchema);
