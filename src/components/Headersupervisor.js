import React from 'react'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function Headersupervisor({supervisorid}) {
    const navigate =useNavigate()
    const handleLogout = () => {
      localStorage.removeItem('userId');
      navigate("/", { replace: true });
      window.location.reload();
    };
  return (
    <div>
       <nav class="navbar navbar-expand-lg bg-light panel-navbar">
      <div class="container-fluid ">
      <a class="navbar-brand" href="/supervisor">
          <img src={require("../img/logogreen.png")} alt="" width="65" height="65" class="d-inline-block align-text-top"/>  
        </a>
        
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
          <ul class="navbar-nav">
            <Link to={`editprofile`}>
            <li class="nav-item">
              <a class="nav-link " aria-current="page" href="">Update Profile</a>
            </li>
            </Link>
            <Link to={`supervisorproject`}>
            <li class="nav-item">
              <a class="nav-link" href="#">View Verified Projects</a>
            </li>
            </Link>
            
            {/* <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
             Manage Workers
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <Link to='/workerreg'><li><a class="dropdown-item mydrp" href="#">Add Worker</a></li></Link>
                <Link to='/listworkers'><li><a class="dropdown-item" href="#">View Workers</a></li></Link>
                
              </ul>
            </li> */}
            {/* <Link to='#'><li class="nav-item">
              <a class="nav-link" href="#">Assign Worker</a>
            </li></Link> */}
            <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Worker's Attendance
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                  <Link to='/attendance'><li><a class="dropdown-item mydrp" href="#">Add Attendance</a></li></Link>
                  {/* <Link to='#'><li><a class="dropdown-item" href="#">View Attendance</a></li></Link> */}
                </ul>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Concerns & Reply
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                  <Link to={`/addconcern`}><li><a class="dropdown-item mydrp" href="#">Post Concern</a></li></Link>
                  <Link to={`/viewreplaysup`}><li><a class="dropdown-item" href="#">View Reply</a></li></Link>
                </ul>
              </li>
       
          </ul>

          <button class="btn panel-btn btn-secondary my-2 my-sm-0" type="button"onClick={handleLogout}>LOGOUT</button>
        </div>
      </div>
      </nav>
    </div>
  )
}

export default Headersupervisor
