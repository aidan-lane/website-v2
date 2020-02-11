const express = require('express')
const router = express.Router()
var conn = require('../db')

/**
 * Returns full list of blog posts
 */
router.get('/', (req, res) => {
  conn.getDb().collection('blog_posts').find({}).toArray()
    .then((data) => {
      res.send(data)
  })
})

router.put('/', (req, res) => {
  conn.getDb().collection('blog_posts').insertOne(req.body)
})

router.delete('/:id', (req, res) => {

})

router.patch('/:id', (req, res) => {

})

module.exports = router