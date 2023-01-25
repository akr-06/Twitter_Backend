const express = require('express');
const app = express();
const connectDb = require('./config/database');
const morgan = require('morgan');

const {PORT, MONGO_URL} = require('./config/serverConfig');
app.use(express.json());
app.use(morgan('combined'));


const setupAndStartServer = async () => {

    await connectDb(MONGO_URL);
    console.log("Database connected");
    app.listen(PORT,()=> {
        console.log(`Server listening at port ${PORT}`);
    })
}

setupAndStartServer();