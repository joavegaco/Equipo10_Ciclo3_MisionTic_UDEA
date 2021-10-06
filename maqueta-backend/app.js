const express = require('express')
const morgan = require ('morgan');

const app = express()
const port = 5000

app.use(morgan('dev'));
app.use(express.json());

app.get('/get-product', (req, res) => {
  res.send('Hola Mundo')
})

app.post('/add-product',(req,res) =>{
  const product = req.body;
  console.log(product.name);
  res.json('Hola Mundo')
  
})

app.put('/update-product',(req,res) =>{
  const product = req.body;
  console.log(product.name);
  res.json('Hola Mundo')
  
})

app.delete('/delete-product',(req,res) =>{
  const product = req.body;
  console.log(product.name);
  res.json('Hola Mundo')
  
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})