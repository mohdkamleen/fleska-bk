const express = require('express'); 
const router = express.Router()  
const Product = require('../controllers/product')
  
router.route('/add').post(Product.add);  
router.route('/').get(Product.get);  
router.route('/:id').get(Product.getById);   
 
module.exports = router;  
 