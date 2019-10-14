var http =require('http')
var fs = require('fs')

http.createServer(function (req,res){
    var partes = req.url.split('/')
    var pag =partes[partes.length-1]
    console.log(req.method + ' ' + req.url)
    console.log('Ficheiro: '+pag)
    switch(pag){
        case '': //nao pode ser agrupado ao case abaixo, pois o operador || não é valido em clausulas swithc-case 
        case ('index.html') :
            fs.readFile('dataset/index.html' ,function(err,data){
            res.writeHead(200,{'Content-Type':'text/html;charset=utf-8'})
            res.write(data)
            res.end() 
        })
        break;  
        case 'arqconfig.xsl' :
                fs.readFile(pag,function(err,data){
                res.writeHead(200,{'Content-Type':'text/xsl;charset=utf-8'})
                res.write(data)
                res.end()
            })
            break;
        default:
            fs.readFile('dataset/arq'+ pag +'.xml',function(err,data){
            if(err){
                res.writeHead(200,{'Content-Type':'text/html;charset=utf-8'})
                res.write('Ficheiro iexistente :' + pag)
                res.end()
            }
            else{   
                res.writeHead(200,{'Content-Type':'text/xml;charset=utf-8'})
                res.write(data)
                res.end()
            }

})
}}).listen(7777);
console.log('Servidor à escuta na porta 7777...')
