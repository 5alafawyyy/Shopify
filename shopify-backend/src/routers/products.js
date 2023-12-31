
const express = require('express');
const ds = require('../datasource/products');


const routers = express.Router();


// GET Request
routers.get('/', function (req, res) {
    const products = ds.fetchProducts();
    res.status(200).json(products);
});


routers.get('/:id', function (req, res) {
    const productId = req.params.id;
    const product = ds.fetchProductById(productId);

    if (product != undefined) {
        res.status(200).json(product);
    } else {
        res.status(404).send();
    }
});

module.exports = routers;

