const express = require("express");
const controller = require("../controller/controller");
const route = express.Router();

route.post("/createblog", controller.create);
route.get("/getposts", controller.getdata);

module.exports = route;
