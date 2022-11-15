require('dotenv').config();
const express = require("express");
const mongoose = require('mongoose')
//const { json } = require('express');
const userRoute = require('./router/userRoutes')
//const connect = require('./config/database')
//const bodyParser = require("body-parser");

//connect()
//database connection
const mongoData = process.env.MONGO_DB_URL;
mongoose.connect(mongoData);
const database = mongoose.connection;

database.on('error', (error) => {
    console.log(error);
});
database.once('connected', () => {
    console.log('database connected');
});



const app = express();
app.use(express.json());
app.use('/api', userRoute);
const PORT = 4000;

//const PORT = process.env.PORT || 4000;
//app.use(bodyParser.json());
//app.use('/user', userRoute);

app.get("/", (req, res) => {
    res.send(`welcome to mongoose db`);
});

app.listen(PORT, () => console.log(`The app is running on port ${PORT}`));

