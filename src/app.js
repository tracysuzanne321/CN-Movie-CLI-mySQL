
const yargs = require("yargs");
const {createMovie,readMovies,updateMovie,deleteMovie,} = require("./movie/movie.method");
const { addActor } = require( "./movie/actor.method" );


const app = async () => {
    switch ( process.argv[2] ) {
        case 'create': {
            createMovie( { title: yargs.argv.title, actor: yargs.argv.actor } );
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






