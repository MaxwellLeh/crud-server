const express = require("express");
const cors = require('cors')
const app = express();
const fruitRouter = require("./routes/fruitRouter");

app.get("/", (req, res) => {
  res.send("Hello World!");
});

// CORS- cross origin resource sharing, must add to backend to allow the two origins communicate with each other, front end to backend
app.use(cors())
app.use(express.json());
app.use("/fruits", fruitRouter);

module.exports = app;

// need fruits.js and fruit.js, index.js, fruitrouter
//
