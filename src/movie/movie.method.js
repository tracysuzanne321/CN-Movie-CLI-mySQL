
const Movie = require("./movie.model");

exports.createMovie = async (movie) => {
  try {
    await Movie.sync();
    await Movie.create(movie);

    console.log("Movie successfully added to db");
  } catch (error) {
    console.log(error);
  }
};

exports.readMovies = async () => {
  try {
    await Movie.sync();
    const read = await Movie.findAll({
      raw: true,
      attributes: ["id", "title", "actor"],
    });
    console.log(read);
  } catch (error) {
    console.log(error);
  }
};

exports.updateMovie = async ( searchMovie, replaceMovie) => {
  try {
    await Movie.update(replaceMovie, { where: searchMovie });
    console.log(`${searchMovie.title} has been updated`);
 
  } catch (error) {
    console.log(error);
  }
};

exports.deleteMovie = async (searchMovie) => {
  try {
      await Movie.destroy({ where: searchMovie });
      console.log(`${searchMovie.title} has been deleted`);
  } catch (error) {
      console.log(error);
  }
};