const express = require('express');
const router = express.Router();
const {
  getLinks,
  createLink,
  updateLink,
  deleteLink,
  reorderLinks,
  recordClick
} = require('../controllers/linkController');
const { createLinkValidation, updateLinkValidation } = require('../validators/linkValidator');
const { validateRequest } = require('../middleware/validation');
const { protect } = require('../middleware/auth');

router.get('/links', protect, getLinks);
router.post('/links', protect, createLinkValidation, validateRequest, createLink);
router.put('/links/reorder', protect, reorderLinks);
router.put('/links/:id', protect, updateLinkValidation, validateRequest, updateLink);
router.delete('/links/:id', protect, deleteLink);
router.post('/click', recordClick);

module.exports = router;
