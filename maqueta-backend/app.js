const express = require('express');
const dotenv = require('dotenv');
const cookieParser = require('cookie-parser');
const conexion = require('./database/db');

const app = express();
const port = 5000;

app.set('view engine', 'ejs')

app.use(express.static('public'))

app.use(express.urlencoded({extended:true}));
app.use(express.json());

dotenv.config({path:'./env/.env'})

app.use(cookieParser)  

app.use('/',require('./routes/router'))

app.get('/', (req, res) => {
  res.render('index')
})


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})