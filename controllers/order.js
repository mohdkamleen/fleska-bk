const Order = require("../models/order");
const User = require("../models/user");

module.exports.add = async (req, res, next) => {
  try {
    const order = new Order(req.body);
    await order.save();
    await User.findByIdAndUpdate(req.body.userId,{$set:{cart:[]}})
    const orders = await Order.find({ userId: req.body.userId })
    res.status(200).json(orders);
  } catch (err) {
    next(err);
  }
};

// this method for fetch order from user id 
module.exports.getByUserId = async (req, res, next) => {
  try {
    const order = await Order.find({ userId: req.params.id })
    res.status(200).json(order);
  } catch (err) {
    next(err);
  }
};
 