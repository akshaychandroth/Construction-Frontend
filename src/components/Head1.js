import React from 'react';
import Container from 'react-bootstrap/Container';
import { Nav } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
function Head1() {
    const navigate =useNavigate()
  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate("/", { replace: true });
    // Reload the page to clear navigation history
    window.location.reload();
  };
    
  return (
    <div className='panel-body'>
      <Navbar expand="lg" className="bg-dark">
      <Container>
        <Navbar.Brand className='text-white fs-3' href="#home">
        <img
              alt=""
              src={require("../img/logowhite.png")}
              width="60"
              height="60"
              className=" align-top"
            /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto ">
            <Link style={{textDecoration:'none'}} to='/listclients' >           
             <Nav.Link className='text-white fs-4' href="#home">Clients</Nav.Link>
           </Link>

           <Link style={{textDecoration:'none'}} to='/listemployees'>
           <Nav.Link className='text-white fs-4' href="#link">Employees</Nav.Link>

           
           </Link>


           <Link style={{textDecoration:'none'}} to='/listprojects'>

           <Nav.Link className='text-white fs-4' href="#link">Projects</Nav.Link>

           </Link>


          <Link style={{textDecoration:'none'}} to='/approve'>
          <Nav.Link className='text-white fs-4' href="#link">View Client Documents</Nav.Link>

          
          </Link>  

          <Link style={{textDecoration:'none'}} to='/assign-tutor'>
          <Nav.Link className='text-white fs-4' href="#link">Feedbacks</Nav.Link>

          
          </Link> 
          <Link style={{textDecoration:'none'}} to='/assign-tutor'>
          <Nav.Link className='text-white fs-4' href="#link">Feedbacks</Nav.Link>

          
          </Link> 
          

          <Nav.Link className='text-dark fs-4' href="#link"> <button className="btn" onClick={handleLogout}>Logout</button>
</Nav.Link>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default Head1
