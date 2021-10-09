const express = require('express');
const dotenv = require('dotenv');
const cookieParser = require('cookie-parser');
const logger = require("morgan");
const cors = require("cors");

const app = express();
const port = 5000;

var Router = require("./routes/router");
var indexRouter = require("./routes/index");
var testAPIRouter = require("./routes/testAPI");

app.set('view engine', 'ejs')
app.use(express.static('public'))

app.use(cors({origin:true}));
app.use(logger("dev"));
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(cookieParser)

dotenv.config({path:'./env/.env'})

app.use("/", indexRouter);
app.use('/routes', Router)
app.use("/testAPI", testAPIRouter);

app.get('/', (req, res) => {
  res.render('index')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})