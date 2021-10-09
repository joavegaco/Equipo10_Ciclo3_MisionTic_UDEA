const jwt = require('jsonwebtoken')
const bcryptjs = require('bcryptjs')
const conexion = require('../database/db')
const {promisify} = require('util')

exports.register = async(req,res)=>{

    try{
        const name = req.body.name
        const user = req.body.user
        const password = req.body.password
        let passHash =! await bcryptjs.hash(pass,8)
        conexion.query('INSERT INTO contrasenya SET', {user:user, name:name, password:password}, (error,results)=>{
            if(error){console.log(error)}
            res.redirect('/')
        })
    } catch(error) {
        console.log(error)
    }
    
}