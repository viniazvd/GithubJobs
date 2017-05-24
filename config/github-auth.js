const Client = require( 'github' )
const testAuth = require( './../testAuth.json' )

const type = 'oauth'
const token = testAuth[ 'token' ]
const debug = true

const github = new Client( { debug } )
github.authenticate( { type, token } )

module.exports = github