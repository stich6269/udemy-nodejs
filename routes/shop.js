const express = require('express');
const router = express.Router();
const appPath = require('../utils/path')
const path = require('path');
const data = require('./admin').data;

router.get('/', (req, res, next) => {
    // console.log('shop.js', data);
    // res.sendFile(path.join(appPath, 'views', 'shop.html'));
    res.render('shop', {prods: data, title: 'Shop', path: 'shop'});
});

module.exports = router;