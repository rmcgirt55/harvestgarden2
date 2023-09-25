const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  // _id: mongoose.Schema.Types.ObjectId,
  // _id: String,
  first_name: {
    type: String,
    required: true
  },
  last_name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: String,
})

module.exports = mongoose.model('User', userSchema)