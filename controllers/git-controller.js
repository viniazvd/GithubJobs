const express = require('express');
const router = express.Router();
const github = require('./../config/github-auth.js')
const callbacks = require('./../services/callbacks')

let controller = {}

controller.getUser = ( req, res ) => {
  github.users.get( {}, callbacks.getUser )
}

controller.getReference = ( req, res ) => {
      github.gitdata.getReference({
        owner: "viniazvd",
        repo: "mean",
        ref: "heads/master"
    }, callbacks.getReference)
}

controller.getContent = ( req, res ) => {
      github.repos.getContent({
        owner: "viniazvd",
        repo: "mean",
        path: ""
    }, callbacks.getContent )
}

//getAll -repositórios
controller.getAll = ( req, res ) => {
      github.repos.getAll({}, callbacks.getAll )
}

controller.getFollowers = ( req, res ) => {
      github.users.getFollowers({}, callbacks.getFollowers )
}

controller.getFollowing = ( req, res ) => {
      github.users.getFollowing({}, callbacks.getFollowing )
}

module.exports = controller


