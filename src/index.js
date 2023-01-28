import express from 'express';
import connectDB from './config/database.js';
import morgan from 'morgan';
import dotenv from 'dotenv';
import mongoose, { mongo } from 'mongoose';
dotenv.config();

const app = express();
app.use(express.json());
app.use(morgan('combined'));

const PORT = process.env.PORT;
const MONGO_URL = process.env.MONGO_URL;

const setupAndStartServer = async () => {

    await connectDB(MONGO_URL);
    console.log("Database connected");
    app.listen(PORT,()=> {
        console.log(`Server listening at port ${PORT}`);
    })
}

setupAndStartServer();