const { Router } = require("express");
const { userLogin } = require("../controller/user.controller");

const userRoutes = Router();

userRoutes.post("/login", userLogin);

module.exports = userRoutes;