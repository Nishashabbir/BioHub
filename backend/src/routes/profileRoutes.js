const express = require('express');
const router = express.Router();
const {
  getProfile,
  updateProfile,
  uploadAvatar,
  deleteAvatar,
  checkUsername,
  togglePublish,
  deleteAccount
} = require('../controllers/profileController');
const { updateProfileValidation } = require('../validators/profileValidator');
const { validateRequest } = require('../middleware/validation');
const { protect } = require('../middleware/auth');
const upload = require('../middleware/upload');

router.get('/profile', protect, getProfile);
router.put('/profile', protect, updateProfileValidation, validateRequest, updateProfile);
router.post('/profile/avatar', protect, upload.single('avatar'), uploadAvatar);
router.delete('/profile/avatar', protect, deleteAvatar);
router.get('/username/:username', checkUsername);
router.post('/publish', protect, togglePublish);
router.delete('/account', protect, deleteAccount);

module.exports = router;
