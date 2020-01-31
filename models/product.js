const fs = require('fs');
const path = require('path');
const basePath = require('./../utils/path');
const util = require('util');

const filePath = path.join(basePath, 'data', 'products.json');


module.exports = class Product {
    constructor(data) {
        this.title = data.title;
        this.price = data.price;
        this.description = data.description;
        this.photo = data.photo;
    }

    async save() {
        let products = [];

        fs.readFile(filePath, (err, data) => {
            if (!err) products = JSON.parse(data);
            products.push(this);
            fs.writeFile(filePath, JSON.stringify(products), () => {});
        })
    }

    static async fetchAllList(cb) {
        let products = [];

        fs.readFile(filePath, (err, data) => {
            if (!err) products = JSON.parse(data);
            cb(products);
        })
    }
}