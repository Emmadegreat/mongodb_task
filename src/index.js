const connect = require("./config/database")
const express  = require("express");

connect()
const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
    res.send(`welcome to mongoose db`);
});

app.listen(PORT, () => console.log(`The app is running on ${PORT}`));

