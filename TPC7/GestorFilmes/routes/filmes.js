var express = require('express')
var router = express.Router()
var Filmes = require("../controllers/filmes")

//    Pedidos GET
router.get('/', function (req, res, next) {
    Filmes.listar()
        .then((filmes) => res.render('index', { filmes }))
        .catch((err) => {
            console.log(err)
            res.status(400).render('error', { error: err })
        })
})

router.get('/filmes/add', function (req, res, next) {
    res.render('add')
})

router.get('/filmes/:id', function (req, res, next) {
    Filmes.consultar(req.params.id)
        .then(film => res.render('film', { film }))
        .catch(err => {
            console.log(err)
            res.status(400).render('error', { error: err })
        })
})

router.get('/filmes/update/:id', function (req, res, next) {
    Filmes.consultar(req.params.id)
        .then(film => res.render('update', { film }))
        .catch(err => {
            console.log(err)
            res.status(400).render('error', { error: err })
        })
})


//    Pedidos DELETE

router.delete("/filmes/:id", function (req, res, next) {
    Filmes.eliminar(req.params.id)
        .then(dados => {
            console.log("Filme removido com sucesso!")
            res.sendStatus(200)
        })
        .catch(err => {
            console.log(err)
            res.status(400).render('error', { error: err })
        })
})


//    Pedidos POST

router.post("/filmes", function (req, res, next) {
    const film = {
        title: req.body.title,
        year: req.body.year,
    }
    Filmes.inserir(film)
        .then(dados => {
            console.log("Filme adicionadio com sucesso!")
            res.redirect("/filmes/" + dados._id)
        })
        .catch(err => {
            console.log(err)
            res.status(400).render('error', { error: err })
        })
})


//    Pedidos PUT
router.put("/filmes/:id", function (req, res, next) {
    Filmes.atualizar(req.params.id, req.body)
        .then(dados => {
            console.log("Filme atualizado com sucesso!")
            res.sendStatus(200)
        })
        .catch(err => {
            console.log(err)
            res.status(400).render('error', { error: err })
        })
})

module.exports = router
