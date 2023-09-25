require('dotenv').config()
const mongoose = require('mongoose')

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true, 
  useUnifiedTopology: true
})

// module.exports.Plant = require('./plant')
// module.exports.Plant = require('./user')

module.exports = {
  Plant: require('./plant'),
  User: require('./user'),
};

module.exports.Comment = require('./comment')