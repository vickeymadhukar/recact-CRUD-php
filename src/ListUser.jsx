import React, { useState } from 'react'
import axios from 'axios'
import './list.css'
const ListUser = () => {
      const [inputs,setInput] =useState(); 

      const HandleChange =(event)=>{
           const name =event.target.name;
            const value=event.target.value;
            setInput(values=>({...values,[name]:value}));

      }
      const HandleSubmit=(event)=>{
        event.preventDefault();
        axios.post('https://localhost:8080/api/user/saves',inputs)
        console.log(inputs)
          }


    return (
    <div className="listuser-container">
        <form onSubmit={HandleSubmit}>
      <table className="listuser-table">
        <tbody>
          <tr>
            <th><label htmlFor="name">Name:</label></th>
            <td><input type="text" name="name" id="name" onChange={HandleChange} /></td>

            <th><label htmlFor="email">Email:</label></th>
            <td><input type="email" name="email" id="email" onChange={HandleChange}/></td>

            <th><label htmlFor="mobile">Mobile:</label></th>
            <td><input type="number" name="mobile" id="mobile" onChange={HandleChange} /></td>

            <td><button className="submit-button" onClick={HandleSubmit}>Submit</button></td>
          </tr>
        </tbody>
      </table>
      </form>
    </div>
  )
}

export default ListUser
