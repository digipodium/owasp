const express = require('express');
const router = express.Router();
const { analyzeUrl, getHistory } = require('../controllers/scanController');

// POST /api/scan - Perform a new scan
router.post('/', analyzeUrl);

// GET /api/scan/history - Get recent scan history
router.get('/history', getHistory);

module.exports = router;
