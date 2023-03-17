import { Router } from "express";
import res from "express/lib/response";
import * as controller from "../controllers/user.controllers"

const route = Router();

route.get("/",(req, res)=>{
    res.send("<h1>HOLA PERRAS</h1>");
})

route.get("/user", controller.findAllUser);
route.get("/user/:id", controller.findUser);

export default route;