const mongoose= require("mongoose")
mongoose.connect("mongodb://127.0.0.1:27017/CRM_WEB")
.then(()=>{
    console.log("mongodb connected");
})
.catch(()=>{
    console.log("failed");
})
const newSchema=new mongoose.Schema({
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})
const collection=mongoose.model("collection",newSchema)
module.exports=collection
//leads_data store->
mongoose.connect("mongodb://127.0.0.1:27017/CRM_WEB")
const leads_data=new mongoose.Schema({
    form:{
        type:Object,
        required:true
    }
});
const AddNewLead = mongoose.model('AddNewLead', leads_data);
module.exports = AddNewLead;
