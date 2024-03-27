const mongoose = require("mongoose")

const ProductSchema = new mongoose.Schema({
    title: String,
    amount: Number,
    image: String,
    qnt: {
        type: Number,
        default: 1
    }
}, {
    timestamps: true
})

module.exports = mongoose.model('Product', ProductSchema);