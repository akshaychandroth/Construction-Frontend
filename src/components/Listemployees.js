import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Headeradmin from './Headeradmin';
function Listemployees() {
    const [employees,setEmployees]=useState([])

    const fetchEmployees = async ()=>{
        try{
            const response = await fetch('http://localhost:8000/employees');
            const data = await response.json();
            setEmployees(data);
        }
        catch (error) {
            console.error('Error fetching employees:', error);
        }

    }

    useEffect(() => {
        fetchEmployees();
    }, []);

    const deleteEmployee = async (id) => {
        try{
            const deleteemployee = await axios.delete(`http://localhost:8000/deleteemployee/${id}`)
             alert(deleteemployee.data.message)
             fetchEmployees()
 
         }
         catch(error){
             console.error("error deleting",error)
         }
    }

  return (
    <div>
      <Headeradmin/>
      <div class="row mb-2">
      <div class="container">
          <div class="col-12 d-flex flex-column justify-content-center pb-1 px-3">
              <div class="row heading">
                <div class="col-12 text-center">
                  <h3 class="text-light text-center pt-4 pb-2">EMPLOYEES</h3>
                <Link to='/employeereg'><button class="btn btn-new p-2 mb-4" >add new employee</button></Link>
                </div>
              </div>
              {/* <div class="row form-content">
                  <div class="col-10 d-flex justify-content-center"> */}
            <div class="table-responsive">
            <table class="table table-bordered border-dark table-striped table-hover w-100">
            <thead class="table-dark">
            <tr>
                <th scope="col">Id</th>
                <th scope="col">Role</th>
                <th scope="col">Name</th>
                <th scope="col">Username</th>
                <th scope="col">Email</th>
                <th scope="col">Place</th>
                <th scope="col">Post</th>
                <th scope="col">Pin</th>
                <th scope="col">Phone</th>
                <th scope="col">Gender</th>
                <th scope="col">Age</th>
                <th scope="col">Photo</th>
                <th scope="col">Qualification</th>
                {/* <th scope="col">Certificate</th> */}
                <th scope="col">Experience</th>
                <th scope="col"></th>
                {/* <th scope="col"></th> */}
            </tr>
            </thead>
            <tbody>
                {employees.map(employee => (
                    <tr >
                        <td>{employee.id}</td>
                        <td>{employee.role}</td>
                        <td>{employee.name}</td>
                        <td>{employee.commondetails.username}</td>
                        <td>{employee.email}</td>
                        <td>{employee.place}</td>
                        <td>{employee.post}</td>
                        <td>{employee.pin}</td>
                        <td>{employee.phone}</td>
                        <td>{employee.gender}</td>
                        <td>{employee.age}</td>
                        <td><img  src={`http://localhost:8000/${employee.photo}`} alt="Employee" style={{ width: '50px', height: 'auto' }} /></td>
                        <td>{employee.qualification}</td>
                        {/* <td><img  src={`http://localhost:8000/uploads/${employee.certificate}`} alt="Employee" style={{ width: '50px', height: 'auto' }} /></td>                        <td>{employee.qualification}</td> */}
                        <td>{employee.experience}</td>
                        <td><Link to={`edit/${employee.id}`}>
                            <button class="btn btn-primary ">Edit</button>
                            </Link></td>
                        {/* <td><button class="btn btn-danger" onClick={()=>deleteEmployee(employee.id)}>Delete</button></td> */}
                    </tr>            ))}
            </tbody>
        </table>
        </div>
       
          </div> 
        </div> 
    </div>
</div>
  )
}

export default Listemployees
