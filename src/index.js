import express from 'express';
import connectDB from './config/database.js';
import morgan from 'morgan';
import apiRoutes from './routes/index.js';
import dotenv from 'dotenv';
import mongoose, { mongo } from 'mongoose';
dotenv.config();
import passport from 'passport';
import { passportAuth } from './config/jwt-middleware.js';


const app = express();
app.use(express.json());
app.use(morgan('tiny'));
app.use(passport.initialize());
passportAuth(passport);
app.use('/api',apiRoutes);

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