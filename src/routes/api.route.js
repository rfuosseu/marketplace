const express = require('express');

const router = express.Router();
router.get('/api/status', (req, res) => res.status(200).json('OK'));

module.exports = router;