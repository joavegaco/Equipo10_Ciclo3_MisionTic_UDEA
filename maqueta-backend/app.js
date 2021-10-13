const express = require('express');
const cors = require('cors');
const app = express();
const mysql = require('mysql2/promise');
const port = 5000;
const bluebird = require('bluebird');
const e = require('express');
let connection;


app.use(express.json());
app.use(cors({ origin: true }));


app.get("/get-user", async(req,res)=>{
  const email = req.query.email;
  const[rows, fields] = await connection.execute(`SELECT*FROM contrasenya where email='${email}'`);
  response.json(rows[0])
})

app.listen(port, async () => {
  connection = await mysql.createConnection({
      host: 'localhost',
      user: 'pma',
      password: '',
      database: 'comercioyusuarios',
      Promise: bluebird
  });
  console.log("Server running on port: " + port);
});