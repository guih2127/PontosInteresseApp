const pontoInteresseModel = require('../models/pontoInteresseModel');

exports.details = function (req, res) {
    res.send({type: 'GET'});
};

exports.create = function (req, res) {
    pontoInteresseModel.create(req.body).then(function(pontoInteresse){
    res.send(pontoInteresse);
    });
};

exports.update = function (req, res) {
    res.send({type: 'PUT'});
};

exports.delete = function (req, res) {
    res.send({type: 'DELETE'});
};