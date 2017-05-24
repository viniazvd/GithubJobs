const router = require('express').Router()
const controller = require('./../controllers/git-controller')

router.get('/getUser', controller.getUser)
router.get('/getReference', controller.getReference)
router.get('/getContent', controller.getContent)
router.get('/getAll', controller.getAll)
router.get('/getFollowers', controller.getFollowers)
router.get('/getFollowing', controller.getFollowing)

module.exports = router