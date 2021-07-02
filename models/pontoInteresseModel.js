const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const GeoSchema = new Schema({
  type: {
    type: String,
    default: 'Point'
  },
  coordinates: {
    type: [Number],
    index: '2dsphere'
  }
});

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
  },
  geometry: GeoSchema
});

const pontoInteresse = mongoose.model('PontosInteresse', pontoInteresseSchema);

module.exports = pontoInteresse;