const express = require('express');
const router = express.Router();

const Client = require( 'github' )
const testAuth = require( './../testAuth.json' )
const type = 'oauth'
const token = testAuth[ 'token' ]
const debug = true

const github = new Client( { debug } )
github.authenticate( { type, token } )









let controller = {}

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

controller.getUser = (req, res) => {
  github.users.get( {}, callbackUser )
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

controller.getReference = (req, res) => {
      github.gitdata.getReference({
        owner: "viniazvd",
        repo: "mean",
        ref: "heads/master"
    }, callbackReference)
}

const callbackContent = ( err, res ) => {
    const dados = res.data
    const data = dados.map( x => x.name )

    console.log( data )
}

controller.getContent = (req, res) => {
      github.repos.getContent({
        owner: "viniazvd",
        repo: "mean",
        path: ""
    }, callbackContent)
}

const callbackAll =  ( err, res ) => {
    const dados = res.data
    const data = dados.map( x => x.name )

    console.log( data )
}

//getAll -repositórios
controller.getAll = (req, res) => {
      github.repos.getAll({}, callbackAll )
}

const callbackFollowers =  ( err, res ) => {
    const dados = res.data
    const data = dados.map( x => x )

    console.log( data )
}

controller.getFollowers = (req, res) => {
      github.users.getFollowers({}, callbackFollowers )
}

const callbackFollowing =  ( err, res ) => {
    const dados = res.data
    const data = dados.map( x => x.login )

    console.log( data )
}

controller.getFollowing = (req, res) => {
      github.users.getFollowing({}, callbackFollowing)
}

module.exports = controller


