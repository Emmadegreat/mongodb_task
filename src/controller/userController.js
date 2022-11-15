/*const { User }   = require('../model/userModel')
const { v4: uuid } = require("uuid")
const { rest } = require('lodash')


exports.getAllUsers = async (req, res) => {
    try {
        let  users = User;


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
        let user = await req.body;
        let created = await User.create(user);
        if (!created)
            return res.status(400).json({
                message: `user not created`,
                success: failed
            });
        return res.status(200).json({
            success: true,
            message: `user created`
        })

        //const newUser = {id: uuid(),username,email,age,time:new Date().toLocaleTimeString(),date:new Date().toLocaleDateString()};

        //User.push(newUser);
    } catch (err) {
        res.status(500).json({message: err.message});
    }
}*/