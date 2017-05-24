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

const callbackReference = ( err, res ) => {
    const data = res.data

    const allowedFields = ['ref', 'url']
    const isAllowedField = ( field ) => allowedFields.includes( field )
    const toFinalObject = ( data ) => ( obj, field ) => Object.assign( {}, obj, { [field]: data[field] } )
    const result = Object.keys( data )
                                    .filter( isAllowedField )
                                    .reduce( toFinalObject( data ), {} )
    console.log( result )
}

const callbackAll =  ( err, res ) => {
    const dados = res.data
    const data = dados.map( x => x.name )

    console.log( data )
}

//getUsers
router.get('/getUser', function(req, res, next) {
     github.users.get( {}, callbackUser );
})

//getReference
router.get('/getReference', function(req, res, next) {
    github.gitdata.getReference({
        owner: "viniazvd",
        repo: "mean",
        ref: "heads/master"
    }, callbackReference);
});

//getContent
router.get('/getContent', function(req, res, next) {
    github.repos.getContent({
        owner: "viniazvd",
        repo: "mean",
        path: ""
    }, callback);
});

//getAll
router.get('/getAll', function(req, res, next) {
    github.repos.getAll({}, callbackAll )
})

module.exports = router;
