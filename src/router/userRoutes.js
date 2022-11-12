const router = require('express').Router();
const controller = require("../controller/userController")

router
    .get('/', controller.getAllUsers)
    .get('/', controller.createUser);

module.exports = router;