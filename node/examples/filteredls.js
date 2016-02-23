var fs = require('fs');
var path = require('path');
var filePath = process.argv[2];
var extension = '.' + process.argv[3];

var files = fs.readdir(filePath, extension, function(err, data) {
  if(!err) {
    var filteredList = data.filter(function(fileName){
      return path.extname(fileName) === extension;
    })
    .forEach(function(el){
      console.log(el);
    });
  }

//non-functional method
  // for(i = 0; i < data.length; i++) {
  //   if(path.extname(data[i])=== ".md") {
  //     console.log(data[i]);
  //   }

  // }
});

