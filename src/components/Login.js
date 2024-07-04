import React from 'react'
import axios from 'axios'
import '../css/bootstrap/css/bootstrap.css'
import '../css/bootstrap/css/style.css'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
function Login() {

  const [username,setUsername]=useState()
  const [password,setPassword]=useState()
  const navigate = useNavigate()
  const checksubmit = (e) =>{
    e.preventDefault()
    axios.post("http://localhost:8000/",{username,password})
    .then(res=>{
      if(res.data.Status==="success"){
       
        localStorage.setItem("userId", res.data.id);
        
        if(res.data.role==="admin"){
          window.location.replace("/admin")
        }
        else if(res.data.role==="client"){
          navigate("/client",{state:{role:res.data.role,username:res.data.username,id:res.data.id}})
        }
        else if(res.data.role==="Engineer"){
          navigate("/engineer",{state:{role:res.data.role,username:res.data.username,id:res.data.id}})
        }
        else if(res.data.role==="Contractor"){
          navigate("/contractor",{state:{role:res.data.role,username:res.data.username,id:res.data.id}})

        }
        else if(res.data.role==="Supervisor"){
          navigate("/supervisor",{state:{role:res.data.role,username:res.data.username,id:res.data.id}})

        }
      }
      else{
        alert("Incorrect credentials")
      }
    })
    .catch(err=>console.log(err))
  }
  return (
    <div className='home-body'>
          <nav class="navbar navbar-expand-lg navbar-light ">
          <div class="container-fluid">
            <a class="navbar-brand" href="#">
              <img src={require('../img/logowhite.png')} width="65" height="65"/>
              </a>
          </div>
        </nav>
        
      <div class="container ">
    <div class="row justify-content-center pt-3">
      <div class="col-12"><h1 class=" font-treb text-light text-center">AM CONSULTANTS</h1></div>
      <div class="col-12"><p class="font-p text-light text-center">10 years of experience, building dream homes..</p></div>
      <div class="col-lg-4 col-md-7 col-sm-7">
        <div class="card shadow border-1 rounded-4 mt-3">
          <div class="card-title text-center border-bottom mt-3 m-0">
            <h3>Login</h3>
          </div>
          <div class="card-body mb-3 px-4">
            <form onSubmit={checksubmit}>
              <div class="mb-3">
              <label for="username" class="form-label p-1">Username</label>
              <input type="text" class="form-control" id="username"onChange={(e)=>setUsername(e.target.value)} />
              </div>
              <div class="mb-3">
              <label for="psw" class="form-label p-1">password</label>
              <input type="password" class="form-control" id="psw"onChange={(e)=>setPassword(e.target.value)} />
              </div>
              
              <div class="text-center">
              <button class="btn btn-lg mybtn mt-2" type="submit">Login</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
    </div>
  )
}

export default Login
