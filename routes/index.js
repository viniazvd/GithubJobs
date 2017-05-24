const router = require('express').Router()

//rota padrão
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' })
});

module.exports = router