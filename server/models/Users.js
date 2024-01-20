const mongoose = require('mongoose');
const UserSchema = new mongoose.Schema({
    Transaction: {
        type: String,
        required: [true, 'Please enter a Name']
    },
    TransactionType: {
        type: String,
        required: [true, 'Please enter an Type']
    },
    Catagory: {
        type: String,
        required: [true, 'Please enter a Catagory']
    },
    Amount: {
        type: Number,
        required: [true, 'Please enter a Amount']
    },
});

const UserModel = mongoose.model('User', UserSchema);
module.exports = UserModel;