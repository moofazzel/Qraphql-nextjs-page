// models/User.js
const mongoose = require('mongoose');

const usersSchema = new mongoose.Schema({
    name: String,
    email: String,
});

// Check if the model is already registered
if (mongoose.models.Users) {
    module.exports = mongoose.models.Users;
} else {
    module.exports = mongoose.model('Users', usersSchema);
}
