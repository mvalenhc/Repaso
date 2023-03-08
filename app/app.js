import  express  from "express";
import message from "./config/message.js";

const app = express();

app.listen(3000,()=>{
    //console.log("hola mundo");
    message("hola mundo",'danger');
})
