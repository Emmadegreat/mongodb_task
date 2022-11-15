const mongoose = require('mongoose')
const dataSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        maxlength: 10,
        minlength: 2,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        maxlength: 20,
        minlength: 5,
    },
    age: {
        type: Number,
        required: true,
        default: null,
    },
    isUser: {
        type: Boolean,
        default: true,
    },
    isAdmin: {
        type: Boolean,
        default: false,
    }
},
{ timestamp: true }
);

//const UserModel = model('users', userSchema);
module.exports = mongoose.model('Data', dataSchema);