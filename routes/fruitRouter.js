// all the routes related to the route
const express = require("express");
const fruitRouter = express.Router();
const fruits = require("../controllers/fruits");

fruitRouter.get("/", fruits.index);

fruitRouter.get("/:name", fruits.show);

// create- POST - create
fruitRouter.post("/", fruits.create);
// update -PATCH - update
fruitRouter.patch("/:name", fruits.update)
// delete - DELETE - destroy

module.exports = fruitRouter;

// need fruits.js and fruit.js, index.js, apps
