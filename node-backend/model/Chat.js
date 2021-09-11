const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Chat = new Schema({
  sender: {
    type: String
  },

}, {
  collection: 'chat'
})

module.exports = mongoose.model('Chat', Chat)
