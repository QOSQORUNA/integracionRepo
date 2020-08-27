var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/hello/:name', function(request, response){
  response.send('hello '+ request.params.name)
})

module.exports = router;
