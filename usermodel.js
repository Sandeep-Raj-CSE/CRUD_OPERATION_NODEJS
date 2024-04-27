const mongoose= require('mongoose')

mongoose.connect(`mongodb://localhost:27017/mongopractice`)

const userSchema=mongoose.Schema({   // this is a methos

    username:String,
    password:String,
    email:String

})


module.exports = mongoose.model("user",userSchema); // here jo user hai naa wo database me uska plural hoga



