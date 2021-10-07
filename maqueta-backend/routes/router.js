const express = require('express')
const router = express.Router()


router.get('/',(req,res,next)=>{
    res.send('API is working properly');
})

router.get('/login', (req,res)=>{
    res.render('login')
})

router.get('/register', (req,res)=>{
    res.render('register')
})

module.exports = router