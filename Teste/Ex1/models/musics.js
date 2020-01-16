const mongoose = require('mongoose')


var partituraSchema = new mongoose.Schema({
  path:String,
  voz:String
})

var instrumentoSchema = new mongoose.Schema({
  designacao:String,
  partitura: partituraSchema
})


var musicaSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    id:String,
    titulo:String,
    tipo:String,
    compositor:String,
    instinstrumentosru: [instrumentoSchema]
  });

module.exports = mongoose.model('musics', musicaSchema)
