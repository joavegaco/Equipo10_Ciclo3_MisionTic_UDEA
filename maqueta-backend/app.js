const express = require('express');
const dotenv = require('dotenv');
const cookieParser = require('cookie-parser');
var logger = require("morgan");
var cors = require("cors");

const conexion = require('./database/db');
var Router = require("./routes/router");

const app = express();
const port = 5000;

app.set('view engine', 'ejs')

app.use(express.static('public'))

app.use(express.urlencoded({extended:true}));
app.use(express.json());

dotenv.config({path:'./env/.env'})

app.use(cookieParser)  

app.use('/routes', Router)

app.get('/', (req, res) => {
  res.render('index')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})