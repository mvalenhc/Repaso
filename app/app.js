//
import  Express  from "express";
import  message  from "./config/message.js";

const app = Express();


app.listen(3000,()=>{

    message("HI WORLD", "danger");
    /* console.log(``); */

});