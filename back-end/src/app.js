require("dotenv").config();

const express = require("express");
const cors = require("cors");

const app = express();

const database = require("./database");

const BACKEND_PORT = process.env.BACKEND_PORT ?? 5005;
app.use(cors());

const movieRouter = require("./movies/movieRouter");

app.use("/movies", movieRouter);

app.get("/", (req, res) => {
  let output = "";
  let error = false;

  database
    .getConnection()
    .then(() => {
      output += "Database connection working well. ";
    })
    .catch((err) => {
      error = true;
      console.log(err);
      output += "Database connection malfunctining. ";
    })
    .finally(() => {
      if (error) {
        res.status(500).send(output);
      } else {
        res.status(200).send("Welcome to our API " + output);
      }
    });
});

app.listen(BACKEND_PORT, () => {
  console.log("Listening on port", BACKEND_PORT);
});
