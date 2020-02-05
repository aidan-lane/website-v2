const express = require('express');
const router = express.Router();

router.use('/files', require('./api/files'));
router.use('/blog', require('./api/blogposts'));

module.exports = router;