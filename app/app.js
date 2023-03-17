//
import  Express  from "express";
import  message  from "./config/message.js";
import enviroment from "./config/enviroment";
import allRoutes from "./routes/user.routes";
const app = Express();


app.set("PORT",process.env.PORT || 3001);

app.use("/api",allRoutes);

export default app;