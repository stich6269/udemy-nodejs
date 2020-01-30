const fs = require('fs');
const path = require('path');
const basePath = require('./../utils/path');

const filePath = path.join(basePath, 'data', 'products.json');


module.exports = class Product {
    constructor(data){
        this.title = data.title;
        this.price = data.price;
        this.description = data.description;
        this.photo = data.photo;
    }

    async save() {
        let products = [];
        
        try {
            const str = await fs.readFile(filePath);
            products = JSON.parse(str);
        } catch (e){}

        products.push(this);
        await fs.writeFile(filePath, JSON.stringify(products));
    }

    static async fetchAllList() {
        let products = [];

        try {
            const str = await fs.readFile(filePath);
            products = JSON.parse(str);
        } catch (e){}

        return products;
    }
}