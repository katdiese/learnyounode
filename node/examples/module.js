var fs = require('fs');
var path = require('path');



function filtered(dirName, extension, callback) {
  fs.readdir(dirName, function(err, data) {
    if(err) {
      return callback(err);
    } else {
      var responseArray = data.filter(function(fileName){
      return path.extname(fileName) === '.' + extension;
    })
    // .forEach(function(el){
    //   console.log(el);
    // });
    var thing = callback(null,responseArray);
    }
});

}

module.exports = filtered;

