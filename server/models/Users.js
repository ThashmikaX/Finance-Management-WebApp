const mongoose = require('mongoose');
const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please enter a name']
    },
    email: {
        type: String,
        unique: true,
        required: [true, 'Please enter an email']
    },
});

const UserModel = mongoose.model('User', UserSchema);
module.exports = UserModel;