const express = require('express');
const router = express.Router();
const adminController = require('../controllers/admin');

router.get('/add-product', adminController.getAddProduct);
router.post('/add-product', adminController.postAddProduct);
router.get('/products-list', adminController.getProductsList);

module.exports = router;