const mongoose = require('mongoose')
const {ObjectId} = mongoose.Schema.Types
const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    confermpassword: {
        type:String,
        required:true
    },
      phoneNumber: {
        type:Number,
        required:true
      },
      DateOfBirth: {
        type:Number,
        required:true
      },
      address: {
        type:String,
        required:true
      },
      
      employeeid: {
        type:String,
        required:true
      },
      designation: {
        type:String,
        required:true
      },
      experience: {
        type:String,
        required:true
      },
      

    // resetToken:String,
    // expireToken:Date,
    // pic:{
    //  type:String,
    //  default:"https://res.cloudinary.com/cnq/image/upload/v1586197723/noimage_d4ipmd.png"
    // },
    
})

mongoose.model("User",userSchema)