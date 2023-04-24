const express =require("express")
const collection=require("./mongo")
const cors=require("cors")
const app=express()
app.use(express.json())
app.use(express.urlencoded({ extended:true }))
app.use(cors())

//login

app.post("/signup",async(req,res)=>{
    const{email,password}=req.body
    const data={
        email:email,
        password:password
    }
    
    try{
        const check=await collection.findOne({email:email})

        if(check){
            res.json("exist")
        }
        else{
            res.json("notexist")
            await collection.insertMany([data])
        }
    }
    catch(e){
        res.json("notexist")

    }
})
//signup
app.get("/",cors(),(req,res)=>{
})
app.post("/",async(req,res)=>{
    const{email,password}=req.body
    try{
        const check=await collection.findOne({email:email})

        if(check){
            res.json("exist")
        }
        else{
            res.json("notexist")
        }
    }
    catch(e){
        res.json("notexist")
    }
})
app.listen(8000,()=>{
    console.log("port connected");
})

//add_new_leads_Data


const AddNewLead= require('./mongo')
const mongoose=require("mongoose")
mongoose.connect('mongodb://127.0.0.1:27017/CRM_WEB', { useNewUrlParser: true });

// app.get("leadslist/addnewleads",cors(),(req,res)=>{
// })
app.post('/addnewleads', async(req, res) => {
        const Form = req.body.form
       
    
        const formData = new AddNewLead({
        form: Form,
        })
    
        // FormData.save(function(err,mydata){ 
        //     if(err)
        //     { 
        //     console.log(err) 
        //     return ; 
        //     } 
        //     res.send(mydata);
        //      });
        try {
        await formData.save();
        res.send("inserted data..")
        } 
        catch(err) {
        console.log(err)
        }
    });

const port = process.env.PORT || 8000;
