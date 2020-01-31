const Products = require('../models/product');

exports.getProductsList = (req, res, next) => {
    Products.fetchAllList(products => {
        res.render('shop/products', {
            prods: products,
            title: 'Shop',
            path: 'shop'
        });
    });
}

exports.getIndex = (req, res, next) => {
    Products.fetchAllList(products => {
        res.render('shop/index', {
            prods: products,
            title: 'Home page',
            path: 'index'
        });
    });
}

exports.getCheckout = (req, res, next) => {
    res.render('shop/checkout', {
        title: 'Checkout',
        path: 'checkout'
    });
}

exports.getDetails = (req, res, next) => {
    res.render('shop/product-details', {
        title: 'Product details',
        path: 'product-details'
    });
}

exports.getCard = (req, res, next) => {
    res.render('shop/card', {
        title: 'Product card',
        path: 'card'
    });
}