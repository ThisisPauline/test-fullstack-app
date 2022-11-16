const express = require("express");
const movieRouter = express.Router();
const movieHandlers = require("./movieHandlers");

movieRouter.get("/", movieHandlers.getAllMovies);

module.exports = movieRouter;
