var  Music = require('../models/musics')

module.exports.listar = () => {
    return Music
        .find({},{id:1,titulo:1, tipo:1,compositor:1,_id:0})
        .exec()
}

module.exports.consultar = id => {
    return Music
        .findOne({id: id})
        .exec()
}

module.exports.tipo = () => {
    return Music
        .distinct('tipo')
        .exec()
}
module.exports.listaMusicsComp= comp => {
    return Music
        .find({compositor: comp})
        .exec()
}


module.exports.listaMusicsInst = inst => {
    return Music
        .find({instrumentos:
                {$elemMatch:
                    {designacao:inst}}})
        .exec()
}


module.exports.listaObraQuant = () => {
    return Music
        .aggregate([{$project:{
            id: 1,
            titulo:1,
            _id:0,
            NumberOfPartitures: {
                $cond: { 
                    if: { $isArray: "$instrumentos" },
                        then: { $size: "$instrumentos" },
                    else: "0"} 
            }
        }}])
        .exec()
}










