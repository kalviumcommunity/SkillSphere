const mongoose = require("mongoose")
const jobschema = new mongoose.Schema ({
    title : {type :String , required : true},
    discription : {type :String , required : true},
    budget : {type :String , required : true},
    skill : {type :String , required : true}
})
const Job = mongoose.model("Job" , jobschema);
module.export