const { v4: uuidv4 } = require('uuid');

const orders = [];

const orderDS = {
    createOrder: (order)=>{
        order.id = uuidv4();
        orders.push(order);
        return order.id;
    }
};

module.exports = orderDS;