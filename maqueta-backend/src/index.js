const express = require ('express');
const morgan = require ('morgan');

const app = express();

app.set('port',5001);

app.use(morgan('dev'));
app.use(express.json());

app.use('api/users', require('./routes/users.routes.js'))

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })
