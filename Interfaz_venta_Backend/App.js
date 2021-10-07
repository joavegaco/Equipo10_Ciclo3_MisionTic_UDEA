const { response } = require('express');
const express = require('express');
const app = express();
const port = 3001

app.listen(port, () =>{
    console.log('server listening on port ' + port)
});

//Configura el servidor para recibir datos en formato json
app.use(express.json());

app.get("/get-product",(req,res)=>{
    res.send("Todo Ok");
})

app.post("/add-product",(req,res)=>{
    const product =req.body;
    console.log(product.name)
    res.json(req.body)
})

app.put("/update-product",(req,res)=>{
    const product =req.body;
    console.log(product.name)
    res.json(req.body)
})

app.delete("/delete-product",(req,res)=>{
    const product =req.body;
    console.log(product.name)
    res.json(req.body)
})
