const Order = require("../models/order");

module.exports.add = async (req, res, next) => {
  try {
    const order = new Order(req.body);
    await order.save();
    res.status(200).json(order);
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
 