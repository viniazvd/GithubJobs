const express = require('express');
const router = express.Router();

const Client = require( 'github' )
const testAuth = require( './../testAuth.json' )
const type = 'oauth'
const token = testAuth[ 'token' ]
const debug = true

const github = new Client( { debug } )
github.authenticate( { type, token } )

const callback = ( err, res ) => {
    console.log( 'err', err )
    console.log( 'res', res )
}

const callbackUser = ( err, res ) => {
    const data = res.data
    const allowedFields = ['name', 'location', 'email', 'hireable']
    const isAllowedField = ( field ) => allowedFields.includes( field )
    const toFinalObject = ( data ) => ( obj, field ) => Object.assign( {}, obj, { [field]: data[field] } )
    const result = Object.keys( data )
                                    .filter( isAllowedField )
                                    .reduce( toFinalObject( data ), {} )
    console.log( result )
}

//getUsers
router.get('/getUser', function(req, res, next) {
     github.users.get( {}, callbackUser);
})


//getReference
router.get('/getReference', function(req, res, next) {
    github.gitdata.getReference({
        owner: "kaizensoze",
        repo: "test2",
        ref: "heads/a#blah"
    }, callback);
});

//getContent
router.get('/getContent', function(req, res, next) {
    github.repos.getContent({
        owner: "mikedeboer",
        repo: "node-github",
        path: ""
    }, callback);
});








module.exports = router;
