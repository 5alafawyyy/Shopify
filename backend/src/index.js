const express = require('express');

// Endpoints Needed
const productsRouters = require("./routers/products");
const cartRouters = require("./routers/cart");
const ordersRouters = require('./routers/orders');
const shopsRouters = require('./routers/shops');

const apiService = express();

// The USE: Add JSON Middleware  
apiService.use(express.json());

apiService.use("/products", productsRouters);
apiService.use("/cart", cartRouters);
apiService.use("/orders", ordersRouters);
apiService.use("/shops", shopsRouters);

apiService.get('/', function (req, res) { // Event-Driven Architucture
   res.send('Hello from Express 😁')
})

apiService.listen(3000, () => console.log('API Server started'))











//*                       JS - Object Assign Method
/*
Passing objects between functions in JS is done by reference, so the updates are shared between function calls.

How do we pass the object's content and AVOID updating it affects the original instance?

Object.assign(target, ...sources)

This method copy all of the objects passed as a source into the target object and returns the target.

Examples:

1.
const obj1 = {n: "Mahmoud", age: 30}

const copy = Object.assign({}, obj1)

console.log(copy)

2.
const obj1 = {n: "Mahmoud", age: 30}

const copy = Object.assign({job: "SE"}, obj1)

console.log(copy)

3.
const obj1 = {n: "Mahmoud", age: 30}

const obj2 = {n: "Mahmoud Emam"}

const copy = Object.assign({job: "SE"}, obj1, obj2)

console.log(copy)
*/


//*                           JS - delete Operator

/**

How do we delete an object's property?

Assigning the property by null or undefined doesn't solve the problem, let's try an example:

const obj = { name: "Mahmoud", age: 30, last: "Emam"}

for(key in obj) console.log(key) // a for loop to loop on object's key

// "name"
// "age"
// "last"
obj.last = undefined // or = null

for(key in obj) console.log(key) // a for loop to loop on object's key

// "name"
// "age"
// "last"
delete operator
Used to delete an object property

const obj = { name: "Mahmoud", age: 30, last: "Emam"}

delete obj.last

for(key in obj) console.log(key) // a for loop to loop on object's key

// "name"
// "age"
 */



//*                              DATA - Products Data

/**
[
   {
      "id":"1",
      "name":"Nestle Quality Street Chocolate",
      "price":"170",
      "discountPrice":"145.95",
      "image":"assets/images/Nestle Quality Street Chocolate.jpg_480Wx480H",
      "isFavorite":false,
      "shops":[
         {
            "name":"Carrefour",
            "image":"assets/images/carrefour.jpg",
            "price":"170",
            "discountPrice":"145.95"
         },
         {
            "name":"Hyperone",
            "image":"assets/images/hyperone.png",
            "price":"172"
         },
         {
            "name":"Spinneys",
            "image":"assets/images/spinneys.png",
            "price":"180"
         }
      ]
   },
   {
      "id":"2",
      "name":"Ahmed Tea Earl Grey",
      "price":"88.95",
      "discountPrice":null,
      "image":"assets/images/Ahmad Tea Earl Grey Tea.jpg_480Wx480H",
      "isFavorite":false,
      "shops":[
         {
            "name":"Carrefour",
            "image":"assets/images/carrefour.jpg",
            "price":"90"
         },
         {
            "name":"Hyperone",
            "image":"assets/images/hyperone.png",
            "price":"88.95"
         }
      ]
   },
   {
      "id":"3",
      "name":"Almarai Full Milk",
      "price":"22.95",
      "discountPrice":null,
      "image":"assets/images/almarai.jpg_480Wx480H",
      "isFavorite":false,
      "shops":[
         {
            "name":"Carrefour",
            "image":"assets/images/carrefour.jpg",
            "price":"22.95"
         }
      ]
   },
   {
      "id":"4",
      "name":"Amira Vegetable Ghee",
      "price":"62.95",
      "discountPrice":null,
      "image":"assets/images/amira.jpg_480Wx480H",
      "isFavorite":false,
      "shops":[
         {
            "name":"Hyperone",
            "image":"assets/images/hyperone.png",
            "price":"63"
         },
         {
            "name":"Spinneys",
            "image":"assets/images/spinneys.png",
            "price":"62.95"
         }
      ]
   },
   {
      "id":"5",
      "name":"Cadbury Bubbly Chocolate",
      "price":"22.45",
      "discountPrice":null,
      "image":"assets/images/Cadbury Bubbly Chocolate.jpg_480Wx480H",
      "isFavorite":false,
      "shops":[
         {
            "name":"Carrefour",
            "image":"assets/images/carrefour.jpg",
            "price":"22.45"
         },
         {
            "name":"Hyperone",
            "image":"assets/images/hyperone.png",
            "price":"23"
         },
         {
            "name":"Spinneys",
            "image":"assets/images/spinneys.png",
            "price":"22.85"
         }
      ]
   },
   {
      "id":"6",
      "name":"Crystal Gold Vegetable Ghee",
      "price":"64.55",
      "discountPrice":null,
      "image":"assets/images/Crystal.jpg_480Wx480H",
      "isFavorite":false,
      "shops":[
         {
            "name":"Spinneys",
            "image":"assets/images/spinneys.png",
            "price":"64.55"
         }
      ]
   },
   {
      "id":"7",
      "name":"Heinz Tomato Paste",
      "price":"10.75",
      "discountPrice":null,
      "image":"assets/images/Heinz.jpg_480Wx480H",
      "isFavorite":false,
      "shops":[
         {
            "name":"Carrefour",
            "image":"assets/images/carrefour.jpg",
            "price":"10.75"
         },
         {
            "name":"Hyperone",
            "image":"assets/images/hyperone.png",
            "price":"12"
         },
         {
            "name":"Spinneys",
            "image":"assets/images/spinneys.png",
            "price":"11"
         }
      ]
   },
   {
      "id":"8",
      "name":"Juhayana Full Cream Milk",
      "price":"15.70",
      "discountPrice":null,
      "image":"assets/images/juhayna.jpg_480Wx480H",
      "isFavorite":false,
      "shops":[
         {
            "name":"Carrefour",
            "image":"assets/images/carrefour.jpg",
            "price":"15.70"
         }
      ]
   },
   {
      "id":"9",
      "name":"Pampers",
      "price":"160",
      "discountPrice":null,
      "image":"assets/images/Pampers.jpg_480Wx480H",
      "isFavorite":false,
      "shops":[
         {
            "name":"Hyperone",
            "image":"assets/images/hyperone.png",
            "price":"160"
         },
         {
            "name":"Spinneys",
            "image":"assets/images/spinneys.png",
            "price":"160.01"
         }
      ]
   }
] */