const express = require("express")
const router = express.Router();
const Model = require('../model/userModel')
//const controller = require("../controller/userController")

//get all tasks
router.get('/getAll', async(req, res) => {
    try {
        const data = await Model.find()
        res.status(200).json({
            message: `All Todo Tasks`,
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

//get single task
router.get('/getOne/:id', async(req, res) => {
    try {
        //const id = req.params.id;
        const singleuser = await Model.findById(req.params.id)
        res.status(200).json({
            message: `Task has been found`,
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

//add task to the database
router.post('/post', async(req, res) => {

    try {
        const data = new Model({
            title: req.body.title,
            description: req.body.description,
            email: req.body.email,
            time:new Date().toLocaleTimeString()
        })
        const dataToSave = await data.save();
        res.status(200).json({
            message: `Task added`,
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
            message: `Task updated successfully`,
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

module.exports = router;