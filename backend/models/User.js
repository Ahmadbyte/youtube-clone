// backend/models/User.js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: { type: String, required: true }, // Make sure 'username' is required
  email: { type: String, required: true },
  password: { type: String, required: true },
  // Add other fields as needed
});

module.exports = mongoose.model('User', userSchema);
