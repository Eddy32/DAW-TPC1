var express = require('express');
var router = express.Router();

var Musics = require('../controllers/musics')


router.get('/obras', function(req, res, next) {
    var comp = req.query.compositor
    var inst = req.query.inst
    if(comp){
        Musics.listaMusicsComp(comp)
        .then(dados => res.jsonp(dados))
        .catch(erro => res.status(500).jsonp(erro))
    }
        
    else if(inst){
        Musics.listaMusicsInst(inst)
        .then(dados => res.jsonp(dados))
        .catch(erro => res.status(500).jsonp(erro))
    }
    else {    
    Musics.listar()
        .then(dados => res.jsonp(dados))
        .catch(erro => res.status(500).jsonp(erro))
    }
});


router.get('/obras/:id', function(req, res, next) {
    Musics.consultar(req.params.id)
        .then(dados => res.jsonp(dados))
        .catch(erro => res.status(500).jsonp(erro))
});



router.get('/tipos', function(req, res, next) {
    Musics.tipo()
        .then(dados => res.jsonp(dados))
        .catch(erro => res.status(500).jsonp(erro))
});


router.get('/obrasQuant', function(req, res, next) {
    Musics.listaObraQuant()
        .then(dados => res.jsonp(dados))
        .catch(erro => res.status(500).jsonp(erro))
});



module.exports = router;
