const express = require('express');
const router = express.Router();
const { getPublicProfile, recordVisit } = require('../controllers/publicController');

router.get('/public/:username', getPublicProfile);
router.post('/visit', recordVisit);

module.exports = router;
