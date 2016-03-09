var needle = require('needle');

var url = 'http://localhost:4001';
var products = require('./data/themeforest-popular-20160309c.json').products;

for(var i = 0; i < products.length; i++) {
  needle.post(url+'/api/product', products[i], function(err, resp, body) {
    console.log(body);
    return;
  });
}
