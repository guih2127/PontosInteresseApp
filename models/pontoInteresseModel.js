const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const pontoInteresseSchema = new Schema({
  name: {
    type: String,
    required: [true, '*Campo obrigatório!']
  },
  details: {
    type: String
  },
  status: {
    type: Boolean,
    default: true
  }
});

const pontoInteresse = mongoose.model('PontosInteresse', pontoInteresseSchema);

module.exports = pontoInteresse;