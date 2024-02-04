import Express from "express";
import { getUsers } from "../controllers/Users.js";



const routes =  Express.Router();

routes.get("/", (req, res) => {
    res.send("Hello World");
});

routes.get("/users", getUsers);    // Add route to get all users

export default routes;