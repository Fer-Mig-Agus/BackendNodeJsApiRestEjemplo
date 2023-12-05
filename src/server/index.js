const express = require('express');
const morgan=require("morgan");
const cors=require("cors");
const routerMain = require('./routes');


const servidor = express();
servidor.use(cors({origin:"*"}));
servidor.use(morgan("dev"));

servidor.use(routerMain);


module.exports=servidor;