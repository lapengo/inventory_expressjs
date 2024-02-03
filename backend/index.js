import express from 'express';
import dotenv from 'dotenv'; 
dotenv.config();
import db from "./config/db.js";
const app = express();


try {
    await db.authenticate();
    // console.log("Connection has been established successfully.");
} catch (error) {
    console.error("Unable to connect to the database:", error);
}


app.listen(5000, () => {
    console.log("Server is running on port 5000");
});