// models/Chat.js
const mongoose = require('mongoose');

const chatSchema = new mongoose.Schema({
  title: {
    type: String,
    maxlength: 100,
    default: '',
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', // Assuming you have a User model
    required: true,
  },
});

module.exports = mongoose.model('Chat', chatSchema);
