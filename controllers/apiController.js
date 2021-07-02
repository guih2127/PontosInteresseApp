const pontoInteresseModel = require('../models/pontoInteresseModel');

module.exports.details = (req, res, next) =>{
    let lng = parseFloat(req.query.lng);
    let lat = parseFloat(req.query.lat);
    const maxDist = 100000;

    pontoInteresseModel.aggregate([{
        $geoNear: {
            near: { type: "Point", coordinates: [ parseFloat(lng) , parseFloat(lat)] },
            spherical: true,
            distanceField: "distance",
            maxDistance: maxDist
         }
       },
       { $limit: 3 }
    ])
      .then(pi => res.send(pi))
      .catch(next);
  };

exports.create = function (req, res, next) {
    pontoInteresseModel.create(req.body).then(function(pontoInteresse){
        res.send(pontoInteresse);
    }).catch(next);
};

exports.update = function (req, res, next) {
    pontoInteresseModel.findByIdAndUpdate({_id: req.params.id},req.body).then(function(){
        pontoInteresseModel.findOne({_id: req.params.id}).then(function(pontoInteresse){
            res.send(pontoInteresse);
        });
    }).catch(next);
};

exports.delete = function (req, res, next) {
    pontoInteresseModel.findByIdAndRemove({_id: req.params.id}).then(function(pontoInteresse){
        res.send(pontoInteresse);
    }).catch(next);
};