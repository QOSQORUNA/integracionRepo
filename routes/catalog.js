var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(request, response) {
  //response.send('catalog');
  const catalog=[
    {id:1,name:'Samsung j1', price: 400.00},
    {id:1,name:'Nokia asha', price: 100.00},
    {id:1,name:'Samsung j2', price: 500.00},
    {id:1,name:'Samsung j1', price: 400.00},
    {id:1,name:'Samsung j1', price: 400.00}
  ];
  response.send(catalog);
});

module.exports = router;
