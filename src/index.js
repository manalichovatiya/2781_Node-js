const http = require('http');
const express = require("express");
const { connectDB } = require("./db/dbconnection");
const config = require("./config/config");


/** Database connection */
connectDB()

// server using http
// http.createServer(function(req,res){
//     res.write("Server done !!")
//     res.end();
// }).listen(8080);

// server uning express
// const app = express()
// app.listen(8080);
// app.get('/', (req, res)=>{
//     res.status(200);
//     res.send("Server is Successfully Running .");
// });
