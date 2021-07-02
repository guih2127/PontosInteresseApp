const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes/api');

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