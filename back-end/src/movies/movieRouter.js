const express = require("express");
const movieRouter = express.Router();
const movieHandlers = require("./movieHandlers");

movieRouter.get("/", movieHandlers.getAllMovies);

//Routes related to the whole collection
movieRouter.get("/", movieHandlers.getAllMovies);
movieRouter.post("/", movieHandlers.createMovie);

//Routes related to a single entity in the coll
movieRouter.get("/:id", movieHandlers.getMovieById);
movieRouter.put("/:id", movieHandlers.putMovie);
movieRouter.patch("/:id", movieHandlers.patchMovie);
movieRouter.delete("/:id", movieHandlers.deleteMovie);

module.exports = movieRouter;
