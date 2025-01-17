var express = require('express');
var router = express.Router();
var axios=require('axios')

router.get('/', function(req, res, next) {
  var categoria = req.query.categoria
    var ano = req.query.data
    if(categoria && ano){
      axios.get('http://localhost:3000/api/premios?categoria='+categoria+'&data='+ano)
      .then(dados => {
        res.render('pag-lista-premios',{ lista:dados.data });
      })
      .catch(erro => {
        res.render('error',{error:erro})
      })
  }
      
  else if(categoria){
    axios.get('http://localhost:3000/api/premios?categoria='+categoria)
    .then(dados => {
      res.render('pag-lista-premios',{ lista:dados.data });
    })
    .catch(erro => {
      res.render('error',{error:erro})
    })
  }
  else {    
  axios.get('http://localhost:3000/api/premios')
    .then(dados => {
      res.render('lista-premios',{ lista:dados.data });
    })
    .catch(erro => {
      res.render('error',{error:erro})
    })
  }
});

router.get('/categorias' , function(req,res){
  axios.get('http://localhost:3000/api/categorias')
    .then(dados => {
      res.render('pag-categoria',{ categoria:dados.data });
    })
    .catch(erro => {
      res.render('error',{error:erro})
    })
});

router.get('/laureados' , function(req,res){
  axios.get('http://localhost:3000/api/laureados')
    .then(dados => {
      res.render('pag-laureados',{ lista:dados.data });
    })
    .catch(erro => {
      res.render('error',{error:erro})
    })
});



router.get('/:idPremio' , function(req,res){
  axios.get('http://localhost:3000/api/premios/'+req.params.idPremio)
    .then(dados => {
      res.render('premio',{ premio:dados.data });
    })
    .catch(erro => {
      res.render('error',{error:erro})
    })
});








module.exports = router;
