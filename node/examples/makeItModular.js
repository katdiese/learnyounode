// var fs = require('fs');
// var path = require('path');
var module = require('./module');
var filePath = process.argv[2];
var extension = process.argv[3];

module(filePath, extension, function(err, data) {
  if(err) {
    console.log(err);
  } else {
    console.log(data);
  }
});

//non-functional method
  // for(i = 0; i < data.length; i++) {
  //   if(path.extname(data[i])=== ".md") {
  //     console.log(data[i]);
  //   }

  // }
