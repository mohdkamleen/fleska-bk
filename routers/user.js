const express = require('express');
const router = express.Router()
const User = require('../controllers/user');
const { verifyToken } = require('../middleware/jwt');

router.route('/').get(User.get);  
router.route('/get-current').get(verifyToken, User.getByToken);
router.route('/add-cart/:id').patch(User.addCart);
router.route('/remove-cart/:id').patch(User.removeCart);
router.route('/update-cart/:id').patch(User.updateCart);
router.route('/add').post(User.add);
router.route('/login').post(User.login);

module.exports = router;
