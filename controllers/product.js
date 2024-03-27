const Product = require("../models/product"); 

module.exports.add = async (req, res, next) => {
  try {
    const product = new Product(req.body);
    await product.save();
    const p = await Product.find()
    res.status(200).json(p);
  } catch (err) {
    next(err);
  }
};

module.exports.get = async (req, res, next) => {
  try {
    const product = await Product.find();
    res.status(200).json(product);
  } catch (err) {
    next(err);
  }
};

module.exports.getById = async (req, res, next) => {
  try {
    const product = await Product.findById(req.params.id);
    res.status(200).json(product);
  } catch (err) {
    next(err);
  }
};
 
 