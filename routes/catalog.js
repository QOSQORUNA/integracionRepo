var express = require('express');
var router = express.Router();
const catalog=[
  {id:1,name:'Samsung j1', price: 400.00},
  {id:2,name:'Nokia asha', price: 100.00},
  {id:3,name:'Samsung j2', price: 500.00},
  {id:4,name:'Samsung j1', price: 400.00},
  {id:5,name:'Samsung j1', price: 400.00}
];

/* GET users listing. */
router.get('/', function(request, response) {
  //response.send('catalog');
  
  response.json(catalog);
});

// router.get('/:product_id', function(request, response){
//   const product = request.params.product_id;
//   var product = catalog.find(item => item.id == product_id); 
//   response.json(product);
// });


router.get('/:productId', function(request, response){
  const productId = request.params.productId;
  var product = catalog.find(item => item.id == productId); 

  response.json(product);
});

module.exports = router;
