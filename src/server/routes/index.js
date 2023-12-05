const {Router}=require("express");

const saludo=require("../controllers/saludo");


const routerMain=Router();


routerMain.get("/hello/:id", saludo);


module.exports=routerMain;
