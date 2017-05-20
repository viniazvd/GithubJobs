const Client = require( 'github' )
const testAuth = require( './testAuth.json' )

<<<<<<< HEAD
const callback = ( err, res ) => {
    console.log(err, res);
};

const github = new Client({
    debug: true
});
=======
const type = 'oauth'
const token = testAuth[ 'token' ]
const debug = true
>>>>>>> 7c640f13f8b49e361da4c050295e8f171fda5903

const github = new Client( { debug } )

<<<<<<< HEAD
github.users.get({}, callback);
=======
const response = ( err, res ) => {
  console.log( 'err', err )
  console.log( 'res', res )
}

github.authenticate( { type, token } )

github.users.get( {}, response )
>>>>>>> 7c640f13f8b49e361da4c050295e8f171fda5903
