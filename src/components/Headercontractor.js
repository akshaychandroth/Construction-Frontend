import React from 'react'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function Headercontractor({contractorid}) {
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
      <a class="navbar-brand" href="/contractor">
          <img src={require("../img/logogreen.png")} alt="" width="65" height="65" class="d-inline-block align-text-top"/>  
        </a>
        
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
          <ul class="navbar-nav">
            <Link to={`editprofile`}>
            <li class="nav-item">
              <a class="nav-link " aria-current="page" href="#">Update Profile</a>
            </li>
            </Link>
            <Link to={`contractorprojects`}>
            <li class="nav-item">
              <a class="nav-link" href="#">View Verified Projects</a>
            </li>
            </Link>
            <Link to='/attendanceviewbycon'><li class="nav-item">
              <a class="nav-link" href="#">View Attendance</a>
            </li></Link>
            <Link to={`viewconcerns`}><li class="nav-item">
              <a class="nav-link" href="#">Concerns & Reply</a>
            </li></Link>
          </ul>
          <button class="btn panel-btn btn-secondary my-2 my-sm-0" type="button"onClick={handleLogout}>LOGOUT</button>
        </div>
      </div>
      </nav>
    </div>
  )
}

export default Headercontractor
