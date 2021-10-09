const mysql = require('mysql');
const bluebird = require('bluebird');

const conexion = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    port: 3306,
    Promise: bluebird

})


conexion.connect((error)=> {
    if(error){
        console.log('El error de conexión es:' + error)
        return
    }
    console.log('Conectado a la base de datos')
})


module.exports = conexion;