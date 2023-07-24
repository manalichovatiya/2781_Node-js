// File system
let http = require('http');
let fs = require('fs');
http.createServer(function (req, res) {
  fs.readFile('file.html',function(err,data){
    res.writeHead(200,{'file': 'system'});
    res.write(data); 
  res.end(); 
  });
  }).listen(1300);