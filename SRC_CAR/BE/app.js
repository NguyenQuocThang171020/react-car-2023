const express = require("express");
const app = express();
const home = require('./mvc/router/homeRouter');


const port = 2000;

app.use('/',home);

app.listen(port,()=>{
    console.log("server is running " + port);
})