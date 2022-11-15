const mongoose = require('mongoose')
const dataSchema = new mongoose.Schema({
    title: {
        type: String,
        //required: true
    },
    description: {
        type: String,
        //required: true,
    },
    email: {
        type: String
    }

},{ timestamp: true } );

module.exports = mongoose.model('Data', dataSchema);