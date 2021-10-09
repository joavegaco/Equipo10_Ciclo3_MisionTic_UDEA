const express = require("express")
const app = express()
const mysql = require("mysql2")
const port = 3001;
const bcrypt = require("bcrypt")


const db = mysql.createPool({
   connectionLimit: 100,
   host: "localhost",       //This is your localhost IP
   user: "root",         // "newuser" created in Step 1(e)
   password: "12345678",  // password for the new user
   database: "mydb",      // Database name
   port: "3306"             // port name, "3306" by default
})
db.getConnection( (err, connection)=> {
   if (err) throw (err)
   console.log ("DB connected successful: " + connection.threadId)
})


app.listen(port, 
    ()=> console.log(`Server Started on port ${port}...`))

app.use(express.json())

//CREATE Product
// GET method route
app.get('/getproduct', function (req, res) {
    res.send('GET request to the homepage');
  });
  
  // POST method route
  app.post("/add-product", async (req, res) => {
    const [idproducto, producto, stock, precio, catidad,vendedor_idvendedor] = req.body;
    await connection.execute(`INSERT INTO mydb.producto (idproducto, producto, stock, precio, catidad,vendedor_idvendedor) VALUES(${idproducto},'${producto}',${stock}, ${precio}, ${catidad}',${venderdor_idvendedor}')`);
    res.json(mydb.producto)
})