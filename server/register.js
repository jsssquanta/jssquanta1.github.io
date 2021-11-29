const express=require("express")
const router=express.Router()
const mongoose=require("mongoose")
const User=mongoose.model("individual")
router.get('/',(req,res)=>{
    console.log("")
    res.send("hello")
})

router.post('/register',(req,res)=>{
    const {name,email,mobileNumber,AdmNo,Branch} = req.body 
    if(!email || !mobileNumber || !name ||!AdmNo ||!Branch){
       return res.status(422).json({error:"please add all the fields"})
    }
    User.findOne({email:email})
    .then((savedUser)=>{
        if(savedUser){
          return res.status(422).json({error:"user already exists with that email"})
        }
        
              const user = new User({
                email,
                mobileNumber,
                name,
                AdmNo,
                Branch
              })
      
              user.save()
              .then(user=>{
                  
                  res.json({message:"saved successfully"})
              })
              .catch(err=>{
                  console.log(err)
              })
        })
        .catch(err=>{
            console.log(err)
          })
    })
    

module.exports=router