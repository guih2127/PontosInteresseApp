const express = require ('express');
const router = express.Router();

// importa controlador 'apiController.js' da pasta: 
// ‘../controllers/apiController’
const apiController = require('../controllers/apiController');

// TODO: listar pontos de interesse da BD
router.get('/details', apiController.details);

// TODO: adicionar novo ponto de interesse
router.post('/interest', apiController.add);

// TODO: atualizar ponto de interesse
router.put('/interest/:id', apiController.update);

// TODO: apagar ponto de interesse
router.delete('/interest/:id', apiController.delete);

module.exports = router;