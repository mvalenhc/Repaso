import {Router} from "express";
import *as controller from "../controllers/user.controllers"


const route = Router();

route.get("/", (req, res)=>{
    res.send("<h1>hola dani</h1>");
});
route.get("/user",controller.findAllUser);
route.get("/user/:id",controller.findUser);
route.post("/user/",controller.insertUser);

export default route;