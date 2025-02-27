const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
    dp: {
        type: String,
        default: "https://i.pinimg.com/736x/b2/54/ea/b254ea1ec256b93c61aecb2aca62e277.jpg"
    },
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    phNumber: {
        type: String,
        required: true
    },
    friends: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users'
    }],
    posts: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'posts'
    }],
    savedPosts : [{
        type : mongoose.Schema.Types.ObjectId,
        ref : 'posts'
    }]
});
const userModel = new mongoose.model("users", userSchema);
module.exports = userModel;