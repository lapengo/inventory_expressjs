import express from 'express';
import dotenv from 'dotenv'; 

import fs from 'fs';
import morgan from 'morgan';
import path from 'path';

import db from "./config/db.js";
import Users from "./models/UsersModel.js";  

import router from './routes/index.js';

dotenv.config();

const app = express(); 

// Buat stream write dengan mode 'append'
let accessLogStream = fs.createWriteStream(path.join(process.cwd(), './logs/access.log'), { flags: 'a' })
// Setup logger untuk menulis ke stream
app.use(morgan('combined', { stream: accessLogStream }))


try {
    await db.authenticate();
    // console.log("Connection has been established successfully.");
    // await db.sync();
} catch (error) {
    console.error("Unable to connect to the database:", error);
}

app.use(express.json());
app.use(router);
app.listen(5000, () => {
    console.log("Server is running on port 5000");
});