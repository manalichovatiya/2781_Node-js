const http = require('http');
const express = require("express");
const { connectDB } = require("./db/dbconnection");
const config = require("./config/config");
const routes = require("./routes/v1");
const app = express();

/**routes with namespace */
app.use("/v1", routes);

/** whenever route not created and you try to use that route then throw error. */
app.use((req, res, next) => {
  next(new Error("Route not found!"));
});

/** Database connection */
connectDB()

// server using http
// http.createServer(function(req,res){
//     res.write("Server done !!")
//     res.end();
// }).listen(8080);

// server uning express
// app.get('/', (req, res)=>{
//     res.status(200);
//     res.send("Server is Successfully Running .");
// });
