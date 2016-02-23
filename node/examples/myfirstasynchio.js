var fs = require('fs');

var str = fs.readFile(process.argv[2], 'utf8', function(err, data) {
  if(!err) {
  var numberOfNewLines = data.toString().split('\n').length;
  console.log(numberOfNewLines - 1);
  } else {
    console.log("error!!");
  }
});

