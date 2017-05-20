const Client = require( 'github' )
const testAuth = require( './testAuth.json' )

const type = 'oauth'
const token = testAuth[ 'token' ]
const debug = true

const github = new Client( { debug } )

const response = ( err, res ) => {
  console.log( 'err', err )
  console.log( 'res', res )
}

github.authenticate( { type, token } )

//github.users.get( {}, response )

github.gitdata.getReference({
    owner: "kaizensoze",
    repo: "test2",
    ref: "heads/a#blah"
}, response);
