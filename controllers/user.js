const { generateToken, verifyToken } = require("../middleware/jwt");
const User = require("../models/user"); 

module.exports.add = async (req, res, next) => {
  try {
    var au = await User.findOne({ username: req.body.username });
    if (au) return res.status(200).json(au);
    const user = new User(req.body)
    const token = generateToken(user)
    user.token = token
    await user.save();
    res.status(200).json({ token });
  } catch (err) {
    next(err);
  }
};

module.exports.login = async (req, res, next) => {
  try {
    var user = await User.findOne({ username: req.body.username, password: req.body.password });
    if (!user) return res.status(200).json({message:"Invalid username or password."}); 
    const token = generateToken(user)
    user.token = token
    await user.save();
    res.status(200).json({ token });
  } catch (err) {
    next(err)
  }
}

module.exports.getByToken = async (req, res, next) => {
  console.log(req)
  try {
    const user = await User.findById(req.userId); 
    res.status(200).json(user);
  } catch (err) {
    next(err);
  }
};

module.exports.get = async (req, res, next) => {
  try {
    const user = await User.find(); 
    res.status(200).json(user);
  } catch (err) {
    next(err); 
  }
};

module.exports.addCart = async (req, res, next) => {
  try {
    await User.findByIdAndUpdate(req.params.id, { $push: { cart: req.body } });
    var user = await User.findById(req.params.id);
    res.status(200).json(user);
  } catch (err) {
    next(err);
  }
};

module.exports.removeCart = async (req, res, next) => {
  try {
    await User.findByIdAndUpdate(req.params.id, { $pull: { cart: req.body } });
    var user = await User.findById(req.params.id);
    res.status(200).json(user);
  } catch (err) {
    next(err);
  }
};

module.exports.updateCart = async (req, res, next) => {
  try {
    var user = await User.findById(req.params.id);
    var userCart = user.cart
    userCart.map(e => {
      if (e._id == req.body._id) {
        e.qnt = req.body.qnt
        if (e.qnt < 1) e.qnt = 1
      }
      return e
    })
    user.cart = userCart
    user.markModified("cart")
    await user.save()
    console.log(user);
    res.status(200).json(user);
  } catch (err) {
    next(err);
  }
};
