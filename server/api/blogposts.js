const express = require('express')
const router = express.Router()
var conn = require('../db')
var ObjectId = require('mongodb').ObjectID;

/**
 * Returns blog posts up to specified amoount
 */
router.get('/', (req, res) => {
  let db = conn.getDb().collection('blog_posts')
  db.find().sort({$natural: -1}).toArray()
    .then((data) => {
      res.send(data)
  })
})

/**
 * Adds new blog post
 */
router.put('/', (req, res) => {
  conn.getDb().collection('blog_posts')
    .insertOne(req.body, (err, inserted) => {
      res.send({inserted})
    }
  )
})

/**
 * Deletes a single post given by id param
 */
router.delete('/:id', (req, res) => {
  let id = req.params.id
  conn.getDb().collection('blog_posts').deleteOne({"_id": ObjectId(id)})
    .then((response) => {
      res.sendStatus(200)
    })
})

/**
 * Edit given existing post data
 */
router.patch('/:id', (req, res) => {

})

module.exports = router