const router = require('express').Router();
const Model = require('../model/userModel')
//const controller = require("../controller/userController")

//get all users
router.get('/getAll', async(req, res) => {
    try {
        const data = await Model.find()
        res.status(200).json({
            message: `users found`,
            success: true,
            data
        })
    } catch (error) {
        res.status(500).json({
            message: error.message,
            success: false,
        })
    }
});

//get single user
router.get('/getOne/:id', async(req, res) => {
    try {
        //const id = req.params.id;
        const singleuser = await Model.findById(req.params.id)
        res.status(200).json({
            message: `user has been found`,
            success: true,
            singleuser
        })
    } catch (error) {
        res.status(500).json({
            message: error.message,
            success:false
        })
    }
})

router.post('/post', async(req, res) => {

    try {
        const data = new Model({
            username: req.body.username,
            email: req.body.email,
            age: req.body.age
        })
        const dataToSave = await data.save();
        res.status(200).json({
            message: `user added`,
            success: true,
            dataToSave
        })
    } catch (error) {
        res.status(500).json({
            message: error.message,
            success:false
        })
    }
})

router.patch('/patch/:id', async(req, res) => {
    try {
        const id = req.params.id;
        const update = req.body;
        const options = { new: true }
        const result = await Model.findByIdAndUpdate(id, update, options)
        res.status(200).json({
            message: `user updated`,
            success: true,
            result
        })
    } catch (error) {
        res.status(500).json({
            message: error.message,
            success: false
        })
    }
})

router.delete('/delete/:id', async (req, res) => {
    try {
        const del = await Model.findByIdAndDelete(req.params.id)
        res.status(200).json({
        del
    })
    } catch (error) {
        res.status(500).json({
            message:error.message,
        })
    }
})
//router
    //.get('/', controller.getAllUsers)
    //.post('/', controller.createUser);


module.exports = router;