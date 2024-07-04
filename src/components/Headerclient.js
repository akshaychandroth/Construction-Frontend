import React from 'react'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';



function Headerclient({clientid}) {
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
      <a class="navbar-brand" href="/client">
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
            <Link to={`adddocuments`}>
            <li class="nav-item">
              <a class="nav-link" href="#">Upload Document</a>
            </li>
            </Link>
            
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              My Plan
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <Link to={`/viewplan`}><li><a class="dropdown-item mydrp" href="#">View Plan</a></li></Link>
              <Link to='/viewreply'><li><a class="dropdown-item" href="#">View Reply</a></li></Link>
                
              </ul>
            </li>
            <Link to={`viewprogress`}>
            <li class="nav-item">
              <a class="nav-link" href="#">View Progress</a>
            </li>
            </Link>
          </ul>
          <button class="btn panel-btn btn-secondary my-2 my-sm-0" type="button"onClick={handleLogout}>LOGOUT</button>
        </div>
      </div>
      </nav> 
  </div>
  )
}

export default Headerclient
