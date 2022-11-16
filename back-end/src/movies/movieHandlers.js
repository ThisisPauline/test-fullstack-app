const database = require("../database");

const getAllMovies = (req, res) => {
  database
    .query("SELECT * FROM movies")
    .then((result) => {
      res.status(200).json(result[0]);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Internal server error");
    });
};

module.exports = {
  getAllMovies,
};
