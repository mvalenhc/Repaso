import express  from "express";   
//  requiero el paquete express

import message from "./config/message.js";
// importo el paquete colors

const app = express();
// variable app-funcion app

app.listen(3000,()=>{
    // console.log("hola mundo");
    message("tttttt","success");
})
// usar las funciones del expressn