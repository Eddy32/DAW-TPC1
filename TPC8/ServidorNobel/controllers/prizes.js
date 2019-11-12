var  Nobel = require('../models/prizes')

module.exports.listar = () => {
    return Nobel
        .find({},{year:1,category:1, _id:0})
        .exec()
}

module.exports.consultar = id => {
    return Nobel
        .findOne({_id: id})
        .exec()
}

module.exports.categorias = () => {
    return Nobel
        .distinct('category')
        .exec()
}
module.exports.listaPremiosCategoria= cat => {
    return Nobel
        .find({category: cat})
        .exec()
}
module.exports.listaPremiosCategoriaAno = (cat,ano) => {
    return Nobel
        .find({category: cat, year: {$gt:ano} })
        .exec()
}

module.exports.listaLaureados = () => {
    return Nobel
        .aggregate([{$unwind: "$laureates"},
                    {$group:{_id:"$laureates.id",firstname:{$first:"$laureates.firstname"},surname: {$first: "$laureates.surname"},
                    "premio":{"$push": {"ano" : "$year", "categoria" : "$category"}}}},
                    {$sort : {firstname :1,surname:1}}])
                    .exec()
}










