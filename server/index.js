const express = require('express'),
      gradient = require('gradient-string'),
      goalCtrl = require('./controllers/goalCtrl')

const app = express();

app.use(express.json());
app.listen(6969, ()=>console.log(gradient.pastel('listening on port 6969')))

app.get('/api/ppp',goalCtrl.getProgressions)