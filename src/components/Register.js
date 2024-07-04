import axios from 'axios'
import React from 'react'
import  { useState } from 'react'
function Register() {

  const [username,setUsername] = useState("")
  const [password,setPassword] = useState()
  const [role,setRole] = useState()
  const datasubmit = (e)=>{
    e.preventDefault()
        axios.post("http://localhost:8000/register",{username,password,role})
        .then((res)=>{
          if(res.data.status === "username already exist"){
            alert("user already exist")
          }
        

        }).catch((err)=>{
          console.log(err);

        })
  }
  return (
    <div className='home-body'>
      <div class="container">
    <h1>Enter your details</h1>
      <form onSubmit={datasubmit}>
        <label for="cl_name">username:
          <input type="text" id="cl_name" name="cl_name" onChange={(e)=>setUsername(e.target.value)}/></label>
        <label for="psw">password:
          <input type="password" id="cl_house" name="cl_house" onChange={(e)=>setPassword(e.target.value)}/></label>
          <label for="role">role:
              <input type="text" id="cl_place" name="cl_place" onChange={(e)=>setRole(e.target.value)}/></label>
        <button type="submit">Register</button>
      </form>
  </div>
    </div>
  )
}

export default Register
