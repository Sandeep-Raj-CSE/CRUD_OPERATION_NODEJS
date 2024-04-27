
const express = require("express")

const app=express();

const userModel= require("./usermodel.js")


app.get("/", function (req,res){
    res.send("Hello")
})


app.get("/create",async  function(req,res) {
   
  let createdUser = await userModel.create({ 

    username:"Sandy",
    password:"sanddd",
    email:"sandeepraj@gmail.com"


    })


    res.send(createdUser);
})



app.get("/update", async function (req,res){

   let updatedUser = await userModel.findOneAndUpdate(
        {username:"Sandy"},
        {email:"sandeeprajvit@gmail.com"},
        {new:true}
    )

    res.send(updatedUser)
})


// read the user

app.get("/read", async function(req,res){
   let userRead = await userModel.find({username:"Sandy"})

   res.send(userRead)
})


// delete the user
app.get("/delete", async function (req,res){
    let userDelete= await userModel.findOneAndDelete({email:"sandeeprajvit@gmail.com"});
    res.send(userDelete)
})


app.listen(3000)




