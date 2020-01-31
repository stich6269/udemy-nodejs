const Product = require('../models/product');

exports.getAddProduct = (req, res, next) => {
    res.render('admin/add-product', {
        title: 'Add Product', 
        path: 'add-product'
    });
};

exports.getProductsList = (req, res, next) => {
    const products = Product.fetchAllList();
    res.render('admin/products-list', {
        title: 'Products list', 
        path: 'products-list',
        prods: products
    });
};

exports.postAddProduct = (req, res, next) => {
    new Product(req.body).save();
    res.redirect('/shop');
};