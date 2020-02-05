const express = require('express');
const mongodb = require('mongodb');
const router = express.Router();

router.get('/pdf', (req, res) => {
  res.send('hello');
});

module.exports = router;