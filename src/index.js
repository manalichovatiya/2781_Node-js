// server using http
let http = require('http');
http.createServer(function(req,res){
    res.write("Server done!!")
    res.end();
}).listen(1200);

// server uning express
// const express = require("express")
// const app = express()
// app.listen(8080);

