const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const mongoose = require('mongoose');
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())
app.use(require('./routes/user'))

mongoose.connect('mongodb://localhost:27017/cafe', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}, (err, res)=>{
    if(err) throw err
    console.log("conexión a DB realizada");
}); 

app.listen(3000)