const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const User = mongoose.model("User")
// const crypto = require('crypto')
// const bcrypt = require('bcryptjs')
// const jwt = require('jsonwebtoken')
// const {JWT_SECRET} = require('../config/keys')
// const requireLogin = require('../middleware/requireLogin')
// const nodemailer = require('nodemailer')
// const sendgridTransport = require('nodemailer-sendgrid-transport')
// const {SENDGRID_API,EMAIL} = require('../config/keys')
// //


// const transporter = nodemailer.createTransport(sendgridTransport({
//     auth:{
//         api_key:SENDGRID_API
//     }
// }))

router.post('/signup',(req,res)=>{
  const {
    
  Name,
  email,
  password,
  confermpassword,
  phoneNumber,
  DateOfBirth,
  address,
  
  employeeid,
  designation,
  experience
} = req.body 
  if(!email || !password || !Name){
     return res.status(422).json({error:"please add all the fields"})
  }
  User.findOne({email:email})
  .then((savedUser)=>{
      if(savedUser){
        return res.status(422).json({error:"user already exists with that email"})
      }
      bcrypt.hash(password,12)
      .then(hashedpassword=>{
            const user = new User({
                email,
                password:hashedpassword,
                Name,
                
            })
    
            user.save()
            .then(user=>{
               
                res.json({message:"saved successfully"})
            })
            .catch(err=>{
                console.log(err)
            })
      })
     
  })
  .catch(err=>{
    console.log(err)
  })
})