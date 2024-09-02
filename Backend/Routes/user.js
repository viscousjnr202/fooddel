const express = require("express");
const { signUp, login } = require("../Controllers/userController");
const UserRoute = express.Router();

UserRoute.post('/signup', signUp)
UserRoute.post('/login', login)

module.exports = UserRoute
