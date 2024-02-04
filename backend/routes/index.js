import Express from "express";
import { getUsers } from "../controllers/Users.js";


const routes =  Express.Router(); 
routes.get("/api/v1", (req, res) => {
    res.send("Hello World");
});

routes.get("/api/v1/users", getUsers);  

export default routes;