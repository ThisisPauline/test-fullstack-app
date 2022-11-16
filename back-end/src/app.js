require("dotenv").config();

const express = require("express");
const cors = require("cors");

const database = require("./database");
const { application } = require("express");

const BACKEND_PORT = process.env.BACKEND_PORT ?? 5005;

application.get("/", (req, res) => {
  res.status(200).send("Welcome to our API");
});

application.listen(BACKEND_PORT, () => {
  console.log("Listening on port", BACKEND_PORT);
});
