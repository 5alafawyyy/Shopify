const express = require('express');

const shopsDS = require('../datasource/shops');

const routers = express.Router();

routers.get("/" , function(req, res){
    res.json(shopsDS.fetchShops(req.query.limit));
});

module.exports = routers;

/**
 * git commit -m "first commit"
git branch -M main
git remote add origin git@github.com:5alafawyyy/Shopify.git
git push -u origin main
 */