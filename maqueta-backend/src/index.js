const express = require ('express');
const morgan = require ('morgan');

const app = express();

app.set('port',5000);

app.use(morgan('dev'));
app.use(express.json());

app.use('api/users', require('./routes/users.routes.js'))

app.listen(app.get('port'),()=>{
    console.log('Server on port',app.get('port'))
});

