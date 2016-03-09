var needle = require('needle');

var url = 'http://themeforest.net/item/avada-responsive-multipurpose-theme/2833226?ref=laconic';
needle.get(url, function(err, response) {
  if (err) {
    console.error(err);
  }
  else if(response.statusCode == 200) {
    console.log(response.body);
  } else {
    needle.get(response.headers.location, function(err, response) {
      console.log(response.body);
    });
  }
});
