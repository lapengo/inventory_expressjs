import { Sequelize } from "sequelize";
import dotenv from 'dotenv'; 
dotenv.config();

const db = new Sequelize( 
    process.env.DB_NAME__DEV,
    process.env.DB_USER__DEV,
    process.env.DB_PASSWORD__DEV,
    {
        host: process.env.DB_HOST__DEV,
        dialect: "postgres",
        port: process.env.DB_PORT__DEV
    }
);

export default db;