import React, { useState } from 'react';
import './CreateUser.css'; // Link to external CSS
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const CreateUser = () => {
  
  const navigate=useNavigate();
   const [formvalue,setFormvalue]=useState({name:'',email:'',mobile:''});
    const hanndleInput=(e)=>{
       setFormvalue({...formvalue,[e.target.name]:e.target.value});
    }

    const handlesubmit=async(e)=>{
      e.preventDefault();
      // console.log(formvalue);
       const formData=({name:formvalue.name,email:formvalue.email,mobile:formvalue.mobile})
      const res=await axios.post("http://localhost:8080/API/index.php",formData);
   
      if(res.data.result){
        navigate('/listuser');
      }
   
        
    }




  
  return (
    <div className="form-container">
      <h2>Create User</h2>
      <form className="user-form" onSubmit={handlesubmit}>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" value={formvalue.name} onChange={hanndleInput} required />
        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" value={formvalue.email} onChange={hanndleInput} required />

        <label htmlFor="mobile">Mobile</label>
        <input type="text" id="mobile" name="mobile" value={formvalue.mobile} onChange={hanndleInput} required />

        <button type="submit" >Submit</button>
      </form>
    </div>
  );
};

export default CreateUser;
