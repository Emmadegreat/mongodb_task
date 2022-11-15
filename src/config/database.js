/*const mongoose = require('mongoose');
const { config } = require('dotenv')
config()

async function connect(uri) {
    try {
        mongoose.connect(uri || process.env.MONGO_DB)
        console.log('connected to the mongo db');
    } catch (error) {
        console.log(error.message);
    }
}
module.exports = connect;*/