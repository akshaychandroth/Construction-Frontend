import React from 'react'
import axios from 'axios'
import { useState , useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

// function EditProject() {
//   const [name, setName] = useState('');
//   const [location, setLocation] = useState('');
//   const [description, setDescription] = useState('');
//   const [duration, setDuration] = useState('');
//   const [date, setDate] = useState('');
//   const [clients, setClients] = useState('');//lisiting
//   const[engineers,setEngineers]=useState('');
//   const [selectedClient, setSelectedClient] = useState('');//to show selected
//   const[selectedEngineer,setSelectedEngineer]=useState('')
//   const [selectedFiles, setSelectedFiles] = useState([]);
//   const params = useParams()
//   const navigate = useNavigate()
//   useEffect(() => {
//     getProject();
//   }, []);

//   const getProject = async ()=>{
//     try{
//         const response = await axios.get(`http://localhost:8000/getproject/${params.id}`);
//         const projectdata = response.data.project;
//       console.log(projectdata);

//       // setId(projectdata.id);
//       setName(projectdata.name);
//       setLocation(projectdata.location);
//       setDescription(projectdata.description);
//       setDuration(projectdata.duration);
//       setDate(projectdata.date);
//       setSelectedClient(projectdata.clientid)
//     }
//     catch(error){
//         console.error('Error:',error)
//     }
//   }

//   return (
//     <div>
//       <div className="container-fluid page-margin p-2 mt-1">
//         <div className="row mb-2">
//           <div className="col-md-1 col-lg-2"></div>
//           <div className="col-12 col-md-10 col-lg-8">
//             <div className="row">
//               <div className="col-12">
//                 <h4 className="mt-5 mb-3 text-light text-center">Update Project:</h4>
//               </div>
//               <div className="col-12 d-flex justify-content-center px-3 px-md-4">
//                 <div className="card border border-success rounded-4 col-10 ">
//                   <div className="card-body px-4 py-3 ">
//                     <form >
//                       <div className="row">
//                         <div className='col-6'>
//                           <label className="form-label p-1">
//                           Client
//                           </label>
//                             <select  value={selectedClient} className="form-select form-select-sm" onChange={(e) => setSelectedClient(e.target.value)}>
//                               <option>Select Client</option>
//                               {client.map(client => (
//                                 <option key={client._id} value={client._id}>{client.name}</option>
//                               ))}
//                             </select>
                                                
//                         </div>
//                         <div className='col-6'>
//                           <label className="form-label p-1">
//                           Engineer</label>
//                             <select className="form-select form-select-sm"  onChange={(e) => setSelectedEngineer(e.target.value)}>
//                               <option value="">Select Engineer</option>
//                               {engineer.map(engineer => (
//                                 <option key={engineer._id} value={engineer._id}>{engineer.name}</option>
//                               ))}
//                             </select>
                         
//                         </div>
//                         <div className="col-6">
//                           <label htmlFor="projectname" className="form-label p-1">Project Name</label>
//                           <input value={name} onChange={(e)=>setName(e.target.value)} type="text" className="form-control form-control-sm" id="projectname"/>
//                         </div>
                        
//                         <div className="col-6">
//                           <label htmlFor="duration" className="form-label p-1">Duration</label>
//                           <input onChange={(e)=>setDuration(e.target.value)} type="text" className="form-control form-control-sm" id="duration"/>
//                         </div>
//                         <div className="col-6">
//                           <label htmlFor="location" className="form-label p-1">Location</label>
//                           <input onChange={(e)=>setLocation(e.target.value)} type="text" className="form-control form-control-sm" id="location"/>
//                         </div>
//                         <div className="col-6">
//                           <label htmlFor="date" className="form-label p-1">Date</label>
//                           <input onChange={(e)=>setDate(e.target.value)} type="date" className="form-control form-control-sm" id="date"/>
//                         </div>
//                         <div className="col-12">
//                           <label htmlFor="description" className="form-label p-1">Description</label>
//                           <textarea onChange={(e)=>setDescription(e.target.value)} className="form-control" id="description" rows="3"></textarea>
//                         </div>
//                         {/* <div className="col-6">
//                           <label htmlFor="documents" className="form-label p-1">Upload Documents</label>
//                           <input onChange={handleFileChange} className="form-control form-control-sm" type="file" id="documents" multiple/>
//                         </div> */}
//                         <div className="col-12 mt-2 text-center">
//                           <button className="btn btn-lg btn-outline-success" type="submit">Update</button>
//                         </div>
//                       </div>
//                     </form>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="col-md-1 col-lg-2"></div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default EditProject
function EditProject() {
  const [id,setId] = useState()
  const [name,setname] = useState()
  const [clients, setClients] = useState([]);//lisiting
  const[engineers,setEngineers]=useState([]);
  const [selectedClient, setSelectedClient] = useState('');//to show selected
  const[selectedEngineer,setSelectedEngineer]=useState('')
  const [date,setdate] = useState()
  const [location,setlocation] = useState()
  const [description,setdescription] = useState()
  const [duration,setduration] = useState()
  const [projectdocuments,setprojectdocuments]=useState('')
  const [selectedFiles, setSelectedFiles] = useState([]);

  const params = useParams()
  const navigate = useNavigate()
useEffect(() => {
    getProject();
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

  }, []);

const getProject = async () => {
    try {
      const response = await axios.get(`http://localhost:8000/getproject/${params.id}`);
      const projectdata = response.data.project;
      console.log(projectdata);
      setId(projectdata.id)
      setSelectedClient(projectdata.clientid)
      setSelectedEngineer(projectdata.engineerid)
      setname(projectdata.name)
      setdate(projectdata.date)
      setlocation(projectdata.location)
      setdescription(projectdata.description)
      setduration(projectdata.duration)
      setprojectdocuments(projectdata.projectdocuments)
 } catch (error) {
      console.error('Error:', error);
    }
  };
  const handleFileChange = (e) => {
    const files = e.target.files;
    setSelectedFiles(files);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('id',id);
    formData.append('name', name);
    formData.append('clientid', selectedClient);
    formData.append('engineerid', selectedEngineer);
    formData.append('date', date);
    formData.append('location', location);
    formData.append('description', description);
    formData.append('duration', duration)
    for (let i = 0; i < selectedFiles.length; i++) {
      formData.append('projectdocuments', selectedFiles[i]);
    }

    try {
      await axios.put(`http://localhost:8000/editproject/${id}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      
      });

      alert('Succesfully updated')
      navigate('/listprojects')
    } catch (error) {
      console.error('Error:', error);
    }
  };


  return (
    <div>
      <div class="container">
        <div class="row mb-2">
              <div class=" col-md-1 col-lg-3"></div>
              <div class=" col-12 col-md-10 col-lg-6">
              <div class="row">
                <div class=" col-12">
                        <h4 class="mb-2 text-light text-center">Edit Project:</h4>
                </div>
                <div class="col-12 d-flex justify-content-center px-3 px-md-4">
                  <div class="card border border-success rounded-4 col-10 ">
                    <div class="card-body px-4 py-3 ">
                      <form enctype="multipart/form-data" onSubmit={handleSubmit}  >
                        <div class="row">
                       
                          <div class="col-6">
                            <label for="name" class="form-label p-1">name</label>
                            <input value={name} type="text" class="form-control form-control-sm" id="name"onChange={(e)=>setname(e.target.value)}/>
                          </div>

                          <div className='col-6'>
                          <label className="form-label p-1">
                          Client
                          </label>
                            <select className="form-select form-select-sm" onChange={(e) => setSelectedClient(e.target.value)}>
                              <option>{selectedClient}</option>
                              {clients.map(client => (
                                <option key={client._id} value={client._id}>{client.name}</option>
                              ))}
                            </select>
                                                
                        </div>
                        <div className='col-6'>
                          <label className="form-label p-1">
                          Engineer</label>
                            <select className="form-select form-select-sm"  onChange={(e) => setSelectedEngineer(e.target.value)}>
                              <option>{selectedEngineer}</option>
                              {engineers.map(engineer => (
                                <option key={engineer._id} value={engineer._id}>{engineer.name}</option>
                              ))}
                            </select>
                         
                        </div>
                          <div class="col-6 ">
                            <label for="date" class="form-label p-1">date</label>
                            <input value={date} type="date" class="form-control form-control-sm" id="date" onChange={(e)=>setdate(e.target.value)}/>
                          </div>
                          <div class="col-6">
                            <label for="location" class="form-label p-1">location</label>
                            <input value={location} type="text" class="form-control form-control-sm" id="location" onChange={(e)=>setlocation(e.target.value)}/>
                          </div>
                          <div class="col-6">
                            <label for="description" class="form-label p-1">description</label>
                            <input value={description} type="text" class="form-control form-control-sm" id="description" onChange={(e)=>setdescription(e.target.value)}/>
                          </div>
                          
                          <div class="col-6">
                            <label for="duration" class="form-label p-1">duration</label>
                            <input value={duration} type="text" class="form-control form-control-sm" id="duration" onChange={(e)=>setduration(e.target.value)}/>
                          </div>
                          <div className="col-6">
                          <label htmlFor="documents" className="form-label p-1">Documents</label>
                          <input  onChange={handleFileChange} className="form-control form-control-sm" type="file" id="documents" multiple/>
                        </div>
                          <div class="col-12 mt-2 text-center">
                            <button class="btn btn-lg btn-outline-success mybtn" type="submit">Update</button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class=" col-md-1 col-lg-3"></div>
          </div>
      </div>
    </div>
  )
}

export default EditProject

