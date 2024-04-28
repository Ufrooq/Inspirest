const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({

    User: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }],
    postText: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    description: {
        type: String
    },

    likes: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }],
    comments: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }],

    createdAt: {
        type: Date,
        default: Date.now
    }
});

const postModel = mongoose.model('Post', postSchema);

module.exports = postModel;
