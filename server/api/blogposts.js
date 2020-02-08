const express = require('express')
const router = express.Router()
var conn = require('../db')

router.get('/', (req, res) => {
  conn.getDb().collection('blog_posts').find({}).toArray().then((data) => {
    res.send(data)
  })
})

module.exports = router