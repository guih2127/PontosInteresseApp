const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes/api');
const mongoose = require('mongoose');

var uri = "mongodb+srv://assti:123@cluster0.2extw.mongodb.net/db?retryWrites=true&w=majority";

mongoose.connect(uri);

mongoose.connection.on('connected', function () {
  console.log('Connected to Database ');
});

mongoose.connection.on('error', (err) => {
  console.log('Database error ' +err);
});

const app = express();

app.use(bodyParser.json());
app.use('/api', routes);

app.get('/', function(req, res){
  res.send('Endpoint inválido.');
});

let port = 5000;

app.listen(process.env.port || port, () =>{
  console.log('Servidor em execução no porto: '+ port);
});

// continuar do topico . Criar middleware para tratar erros ocorridos nas rotas