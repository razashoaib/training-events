const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const trainingEventsRouter = require("./routes/trainingEventsRouter");

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/events", trainingEventsRouter);

app.get("/", async (req, res) => {
  res.json({
    status: "success",
    message: "Welcome to Training Events API!",
  });
});

//The 404 Route
app.get("*", function (req, res) {
  res.status(404).json({
    status: "error",
    message: "Requested resource not found",
  });
});

module.exports = app;
