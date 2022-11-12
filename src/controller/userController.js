const { User }  = require('../model/userModel')
const { v4: uuid } = require("uuid")
const { rest } = require('lodash')


exports.getAllUsers = async (req, res) => {
    try {
        const users = User;


        res.status(200).json({
            message: 'user found',
            success: true,
            users:users,
        });
    } catch (error) {
        res.status(500).json({
            message: `internal server error occured`,
            error: error.message,
            success:false,

        });
    }
}

exports.createUser = async (req, res) => {
    try {
        const {name, email, age} = await req.body;

        const newUser = {
            id: uuid(),
            name,
            email,
            age,
            time:new Date().toLocaleTimeString(),
            price,
            date:new Date().toLocaleDateString(),
        };

        User.push(newUser);

        res.status(201).json({
            message: "user created",
            newUser,
        });
    } catch (err) {
        res.status(500).json({message: err.message});
    }
}