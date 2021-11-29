const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    mobileNumber:{
        type:String,
        required:true
    },
    AdmNo:{
        type:String,
        required:true
    },
    Branch:{
        type:String,
        required:true
    }
})
mongoose.model("individual",userSchema)
