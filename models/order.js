const mongoose = require("mongoose")

const OrderSchema = new mongoose.Schema({
    status: {
        type:String,
        default:"Pending"
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }, 
    cart: []
}, {
    timestamps: true
})

module.exports = mongoose.model('Order', OrderSchema);