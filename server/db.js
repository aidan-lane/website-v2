const MongoClient = require('mongodb').MongoClient;
const uri = 'mongodb+srv://mangodragon:jN4ej9C0z3SX0XqG@website-kfhgz.mongodb.net/personal'
const client = new MongoClient(uri, { useUnifiedTopology: true })

var _db

module.exports = {
  connect: function (callback) {
    client.connect(err => {
      _db = client.db('personal')
      console.log('Connected to database')
      return callback(err)
    })
  },
  getDb: function () {
    return _db
  }
}