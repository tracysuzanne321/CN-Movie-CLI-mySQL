
const Actor = require( "./actor.model" );
const Movie = require("./movie.model");

exports.addActor = async (actor) => {
    try {
        await Actor.create(actor);
        console.log("Actor successfully added to db");
    } catch (error) {
        console.log(error);
    }
};