var fs       = require('fs');
var async    = require('async');
var needle   = require('needle');
var products = require('./data/themeforest-popular-20160309b.json').products;

async.eachSeries(products, function(product, callback) {
  var regex = /files\/([^\/]+).*\/([^\/]+)$/;
  var match = regex.exec(product.featureimg);
  var productId = match[1];
  var filename = productId+match[2];
  console.log('fetching:'+product.featureimg+', filename:'+filename);
  var out = fs.createWriteStream('img/'+filename);
  var r = needle.get(product.featureimg).pipe(out);
  r.on('close', function() {
    console.log('request finished downloading '+filename);
    callback(null);
  });
});
