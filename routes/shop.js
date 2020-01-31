const express = require('express');
const router = express.Router();
const shopController = require('../controllers/shop');

router.get('/', shopController.getIndex);
router.get('/products', shopController.getProductsList);
router.get('/checkout', shopController.getCheckout);
router.get('/product-details', shopController.getDetails);
router.get('/card', shopController.getCard);

module.exports = router;