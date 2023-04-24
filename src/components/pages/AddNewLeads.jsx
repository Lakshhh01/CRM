import React,{useState} from 'react';
import axios from 'axios';
import './AddNewLeads.css';
const AddNewLeads = () => {
  const [form, setForm] = useState({});
  const [errors, setErrors] = useState({});
  const setField = (field,value) =>{
    setForm({
      ...form,
      [field]:value
    })
    if(!!errors[field])
    setErrors({
      ...errors,
      [field]:null
    })
  }
  const validateForm =()=>{
    const {  user,email,phone,city,date,newscategeory,importance,description } = form
    const newErrors={}
    if (!user || user==='' ) newErrors.user='This field cannot be empty'
    if (!email || email==='' ) newErrors.email='This field cannot be empty'
    if (!phone || phone==='' ) newErrors.phone='This field cannot be empty'
    if (!city || city==='' ) newErrors.city='This field cannot be empty'
    if (!date || date==='' ) newErrors.date='This field cannot be empty'
    if (!newscategeory || newscategeory==='' ) newErrors.newscategeory='This field cannot be empty'
    if (!importance || importance==='' ) newErrors.importance='This field cannot be empty'
    if (!description || description==='' ) newErrors.description='This field cannot be empty'
    return newErrors
  }
  const handleSubmit = e =>{
    e.preventDefault();
    //api creation :,) 
    // axios.post('http://localhost:8000/addnewleads', {
    //     leads_form : form    
    // })
    const formErrors = validateForm()
    if (Object.keys(formErrors).length>0){
      setErrors(formErrors)
    }else{
      console.log(form) 
      console.log("Lead Created") 
    }
  }

  return (
    <div className="newUser" >
    <h1 className="newUserTitle">Add New Lead</h1>
    <form className="newUserForm">
      <div className="newUserItem" id="user">
        <label>User Name</label>
        <input type="text" 
        value={form.user}
        onChange={(e)=>setField('user',e.target.value)}
        />
        <div className='red'> {errors.user}</div>
      </div>
      <div className="newUserItem" id="email">
        <label>Email</label>
        <input type="email" 
        value={form.email}
        onChange={(e)=>setField('email',e.target.value)}
        />
        <div className='red'> {errors.email}</div>
      </div>
      <div className="newUserItem" id="phone">
        <label>Phone</label>
        <input type="phone" 
        value={form.phone}
        onChange={(e)=>setField('phone',e.target.value)}
        />
        <div className='red'> {errors.phone}</div>
      </div>
      <div className="newUserItem" id="city">
        <label>City</label>
        <input type="text" 
        value={form.city}
        onChange={(e)=>setField('city',e.target.value)}
         />
         <div className='red'> {errors.city}</div>
      </div>
      
      <div className="newUserItem" id='date'>
        <label>Date</label>
        <input type="date" 
        value={form.date}
        onChange={(e)=>setField('date',e.target.value)}
        // isInvalid={!!errors.date }
        />
        <div className='red'> {errors.date}</div>
      </div>

      <div className="newUserItem" id="newscategeory">
        <label>Lead Categeory</label>
        <input type="text" 
          value={form.newscategeory}
          onChange={(e)=>setField('newscategeory',e.target.value)}
        />
          <div className='red'> {errors.newscategeory}</div>
      </div>
      
      <div className="newUserItem" id="importance">
        <label>Important?</label>
        <input type="text" 
          value={form.importance}
          onChange={(e)=>setField('importance',e.target.value)}
        />
          <div className='red'> {errors.importance}</div>
      </div>
      
{/*       
      <div className="newUserItem">
        <label>Completed</label>
        <select className="newUserSelect" name="active" id="active">
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>
      </div> */}
      
      <div className="newUserItem" id="description">
        <label>Description</label>
        <textarea
        value={form.description}
        onChange={(e)=>setField('description',e.target.value)}
        />
         <div className='red'> {errors.newscategeory}</div>
        {/* <input type="text" /> */}
      </div>
       {/* <Link to ={"/dashboard/leadslist"}> */}
      <button className="newUserButton" type='submit' onClick={handleSubmit} >Create</button>
       {/* </Link> */}
    </form>
  </div>
  )
}

export default AddNewLeads;