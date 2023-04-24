// const express =require("express")
// const cors=require("cors")
// const app=express()
// app.use(express.json())
// app.use(express.urlencoded({ extended:true }))
// app.use(cors())
// const AddNewLead= require('../../../mongo')
// const mongoose=require("mongoose")
// mongoose.connect('mongodb://127.0.0.1:27017/CRM_WEB', { useNewUrlParser: true });

// // app.get("leadslist/addnewleads",cors(),(req,res)=>{
// // })
// app.post('/addnewleads', async(req, res) => {
//         const Form = req.body.form
       
    
//         const formData = new AddNewLead({
//         form: Form,
//         })
    
//         try {
//         await formData.save();
//         res.send("inserted data..")
//         } catch(err) {
//         console.log(err)
//         }
//     });

// const port = process.env.PORT || 8000;
