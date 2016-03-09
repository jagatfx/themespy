var express  = require('express');
var router   = express.Router();
var mongoose = require('mongoose');
var Product  = mongoose.model('Product');

router.get('/product', function(req, res, next) {
  var results = req.query.results;
  var type = req.query.type;
  // TODO: implement pagination
  // var page = req.query.page;
  var maxResults = 0;
  var findParam = {};
  if (type) {
    findParam.type = type;
  }
  if (results) {
    maxResults = results;
  }
  Product.find(findParam).sort({title: 'asc'}).limit(maxResults).exec(function (err, products) {
    if (err) {
      return console.error(err);
    }
    res.render( 'index', {
      title : 'Products',
      products : products
    });
  });
});

router.get('/product/edit/:id', function (req, res) {
  Product.findById(req.params.id, function (err, product) {
    res.render( 'product', {
      product : product
    });
  });
});

module.exports = router;
