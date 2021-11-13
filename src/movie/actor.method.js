
const Actor = require("./actor.model");

exports.addActor = async (actor) => {
    try {
        await Actor.sync();
        await Actor.create(actor);
        console.log("Actor successfully added to db");
    } catch (error) {
        console.log(error);
    }
};