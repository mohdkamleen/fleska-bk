const mongoose = require("mongoose")

const ProductSchema = new mongoose.Schema({
    title: String,
    amount: Number,
    image: String
}, {
    timestamps: true
})

module.exports = mongoose.model('Product', ProductSchema);