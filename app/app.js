//
import  Express  from "express";
import  message  from "./config/message.js";
import enviroment from "./config/enviroment";

const app = Express();


app.set("PORT",process.env.PORT || 3001);



export default app;