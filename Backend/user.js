const mongoose = require("mongoose");

const userschema = new mongoose.Schema() ({
    name : {type : String , required : true},
    email : {type: String , required : true , unique : true},
    password : {type : String , requrired : true , unique :true },
    role : {type : String , enum:[Freelencer , clint] , required : true},
    discription : {type : String , required : true},
    skill:{type: String , required : true},
    location :{type : String , required : true}

})
const User = mongoose.model("User" , userschema);
module.exports(User);