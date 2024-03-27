const mongoose = require("mongoose")

const UserSchema = new mongoose.Schema({
    fullname: String,
    username: String,
    password: String,
    cart: [],
    token: String
}, {
    timestamps: true
})

module.exports = mongoose.model('User', UserSchema);