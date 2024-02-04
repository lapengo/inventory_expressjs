import { Sequelize } from "sequelize";
import dotenv from 'dotenv';

dotenv.config();

const env = process.env.PROD === "true" ? "__PROD" : "__DEV";

const db = new Sequelize(
    process.env[`DB_NAME${env}`],
    process.env[`DB_USER${env}`],
    process.env[`DB_PASSWORD${env}`],
    {
        host: process.env[`DB_HOST${env}`],
        dialect: "postgres",
        port: process.env[`DB_PORT${env}`]
    }
);

export default db;
