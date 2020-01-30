const express = require('express');
const router = express.Router();
const data = [];

router.get('/add-product', (req, res, next) => {
    res.render('add-product', {title: 'Add Product', path: 'add-product'});
});

router.post('/add-product', (req, res, next) => {
    data.push({title: req.body.title});
    res.redirect('/shop');
});

exports.router = router;
exports.data = data;