
const yargs = require( "yargs" );
const Movie = require("./movie/movie.model");
const Actor = require( "./movie/actor.model" );
const {createMovie,readMovies,updateMovie,deleteMovie,} = require("./movie/movie.method");
const { addActor } = require( "./movie/actor.method" );


const app = async () => {

    await Actor.sync();
    await Movie.sync();
    Actor.hasMany(Movie, { foreignKey: 'actorId' });
    Movie.belongsTo(Actor, {
        foreignKey: 'actorId',
    });

    switch ( process.argv[2] ) {
        case 'create': {
            createMovie( { title: yargs.argv.title, actorId: yargs.argv.actorId } );
        }
            break;
        case 'read': {
            readMovies();
        }
            break
        case 'update': {
            const searchMovie = { title: yargs.argv.title };
            const replaceMovie = { actor: yargs.argv.title };
            await updateMovie( searchMovie, replaceMovie );
        }
            break
        case 'delete': {
            const findMovie = { title: yargs.argv.title };
            await deleteMovie( findMovie );
        } 
            break
        case 'actor': {
            const actor = { actor_name: yargs.argv.actor_name };
            await addActor(actor)
        } 
            break;
        default:
            console.log('Incorrect command')
            break;
    }
};

app()






