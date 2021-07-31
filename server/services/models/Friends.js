const mongoose = require('mongoose');

const FriendSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    }
});

const FriendModel = mongoose.model('Friend', FriendSchema);
module.exports = FriendModel;