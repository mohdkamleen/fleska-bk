const express = require('express'); 
const router = express.Router()  
const Order = require('../controllers/order')
   
router.route('/:id').get(Order.getByUserId);        
router.route('/add').post(Order.add);       
 
module.exports = router;  
 