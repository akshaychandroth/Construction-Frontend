
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import uuid from 'react-uuid';
import '../css/bootstrap/css/bootstrap.css';
import '../css/bootstrap/css/style.css';
import Headeradmin from './Headeradmin';
import { useNavigate } from 'react-router-dom';

function Projectadd() {
  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');
  const [description, setDescription] = useState('');
  const [duration, setDuration] = useState('');
  const [date, setDate] = useState('');
  const [clients, setClients] = useState([]);
  const[engineers,setEngineers]=useState([])
  const [selectedClient, setSelectedClient] = useState('');
  const[selectedEngineer,setSelectedEngineer]=useState('')
  const [selectedFiles, setSelectedFiles] = useState([]);
  const navigate=useNavigate();

  useEffect(() => {
    axios.get('http://localhost:8000/clients')
      .then(res => {
        console.log("Fetched data:", res.data);
        if (Array.isArray(res.data)) {
          setClients(res.data);
        } else {
          console.error("Response is not an array:", res.data);
        }
      })
      .catch(err => console.error("Error fetching clients:", err));

      axios.get('http://localhost:8000/engineers')
      .then(res => {
        console.log("Fetched data:", res.data);
        if (Array.isArray(res.data)) {
          setEngineers(res.data);
        } else {
          console.error("Response is not an array:", res.data);
        }
      })
      .catch(err => console.error("Error fetching Engineers:", err));







    
    setId(uuid().slice(0, 3));
  }, []);

  const handleFileChange = (e) => {
    const files = e.target.files;
    setSelectedFiles(files);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('id', id);
    formData.append('name', name);
    formData.append('location', location);
    formData.append('description', description);
    formData.append('duration', duration);
    formData.append('date', date);
    formData.append('clientid', selectedClient);
    formData.append('engineerid',selectedEngineer)

    for (let i = 0; i < selectedFiles.length; i++) {
      formData.append('projectdocuments', selectedFiles[i]);
    }
    axios.post('http://localhost:8000/addproject', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
    .then((res) => {
      if (res.data.status === 'Project already exists') {
        alert('Project already exists.');
      } else {
        alert('Success');
        navigate('/admin')
      }
    })
    .catch((err) => console.error(err));
  };

  return (
    <div>
      <Headeradmin/>
      <div className="container-fluid page-margin p-2">
        <div className="row mb-2">
          <div className="col-md-1 col-lg-2"></div>
          <div className="col-12 col-md-10 col-lg-8">
            <div className="row">
              <div className="col-12">
                <h4 className="mt-5 mb-3 text-light text-center">Add Project Details:</h4>
              </div>
              <div className="col-12 d-flex justify-content-center px-3 px-md-4">
                <div className="card border border-success rounded-4 col-10 ">
                  <div className="card-body px-4 py-3 ">
                    <form onSubmit={handleSubmit}>
                      <div className="row">
                        <div className='col-6'>
                          <label>
                            <select onChange={(e) => setSelectedClient(e.target.value)}>
                              <option value="">Select Client</option>
                              {clients.map(client => (
                                <option key={client._id} value={client._id}>{client.name}</option>
                              ))}
                            </select>
                            <span>Client</span>
                          </label>
                        </div>
                        <div className='col-6'>
                          <label>
                            <select onChange={(e) => setSelectedEngineer(e.target.value)}>
                              <option value="">Select Engineer</option>
                              {engineers.map(engineer => (
                                <option key={engineer._id} value={engineer._id}>{engineer.name}</option>
                              ))}
                            </select>
                            <span>Engineer</span>
                          </label>
                        </div>
                        <div className="col-6">
                          <label htmlFor="projectname" className="form-label p-1">Project Name</label>
                          <input onChange={(e)=>setName(e.target.value)} type="text" className="form-control form-control-sm" id="projectname"/>
                        </div>
                        <div className="col-12">
                          <label htmlFor="description" className="form-label p-1">Description</label>
                          <textarea onChange={(e)=>setDescription(e.target.value)} className="form-control" id="description" rows="3"></textarea>
                        </div>
                        <div className="col-6">
                          <label htmlFor="duration" className="form-label p-1">Duration</label>
                          <input onChange={(e)=>setDuration(e.target.value)} type="text" className="form-control form-control-sm" id="duration"/>
                        </div>
                        <div className="col-6">
                          <label htmlFor="location" className="form-label p-1">Location</label>
                          <input onChange={(e)=>setLocation(e.target.value)} type="text" className="form-control form-control-sm" id="location"/>
                        </div>
                        <div className="col-6">
                          <label htmlFor="date" className="form-label p-1">Date</label>
                          <input onChange={(e)=>setDate(e.target.value)} type="date" className="form-control form-control-sm" id="date"/>
                        </div>
                        <div className="col-6">
                          <label htmlFor="documents" className="form-label p-1">Upload Documents</label>
                          <input onChange={handleFileChange} className="form-control form-control-sm" type="file" id="documents" multiple/>
                        </div>
                        <div className="col-12 mt-2 text-center">
                          <button className="btn btn-lg btn-outline-success" type="submit">Submit</button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-1 col-lg-2"></div>
        </div>
      </div>
    </div>
  );
}

export default Projectadd;
