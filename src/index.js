const connect = require("./config/database")
const express  = require("express");
import bodyParser from "body-parser";
connect()

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use('/user', userRoute);

app.get("/", (req, res) => {
    res.send(`welcome to mongoose db`);
});

app.listen(PORT, () => console.log(`The app is running on ${PORT}`));

