

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useParams } from 'react-router-dom';
// import { Link } from 'react-router-dom';

// const ClientProjects = () => {
    
    
//     const superId = localStorage.getItem('userId');
//     console.log('super',superId);
//     const { id } = useParams();
//     const [projects, setProjects] = useState([]);

   
//     useEffect(() => {
//         const fetchProjects = async () => {
//             try {
//                 const res = await axios.get(`http://localhost:8000/particlient/${superId}`);
//                 const clientId = res.data.client._id;

//                 const response = await axios.get(`http://localhost:8000/projects/${clientId}`);
//                 setProjects(response.data);
//             } catch (error) {
//                 console.error('Error fetching projects:', error);
//             }
//         };

//         fetchProjects();
//     }, [id]);

//     const updateProjectStatus = async (projectId, newStatus) => {
//         try {
//             await axios.put(`http://localhost:8000/update-status/${projectId}`, { status: newStatus });

            
//             // Optionally, update state or perform any necessary actions after updating the status
//         } catch (error) {
//             console.error('Error updating project status:', error);
//         }
//     };

//     return (
//         <div>
//             <h1>Client Projects</h1>
//             <ul>
//                 {projects.map(project => (
//                     <li key={project._id}>
//                         <h2>{project.name}</h2>
//                         <p>Description: {project.engineerid._id}</p>
//                         <p>Location: {project.location}</p>
//                         <p>Status: {project.status}</p>
//                         <td>
//   {project.plan.endsWith('.pdf') ? (
//     <a href={`http://localhost:8000/uploads/${project.plan}`} target="_blank" rel="noopener noreferrer">View Plan PDF</a>
//   ) : (
//     <img src={`http://localhost:8000/uploads/${project.plan}`} alt="Project Plan" style={{ maxWidth: '100px', maxHeight: '100px' }} />
//   )}
// </td>


//                         {/* Buttons to update project status */}
//                         {project.status === 'pending' && (
//                             <div>
//                                 <button onClick={() => updateProjectStatus(project._id, 'accepted')}>Accept</button>
//                                 <button onClick={() => updateProjectStatus(project._id, 'rejected')}>Reject</button>
//                             </div>
                            
//                         )}
//            <Link to={`suggestion/${project._id}/${project.engineerid._id}`}>       
//              <button className='btn btn-primary'>Add Suggestion</button> 
//              </Link>    

                        
//                     </li>
//                 ))}
//             </ul>

//         </div>
//     );
// };

// export default ClientProjects;



import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const ClientProjects = () => {
    const superId = localStorage.getItem('userId');
    console.log('super', superId);
    const { id } = useParams();
    const [projects, setProjects] = useState([]);
    const navigate = useNavigate()

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const res = await axios.get(`http://localhost:8000/particlient/${superId}`);
                const clientId = res.data.client._id;
                const response = await axios.get(`http://localhost:8000/projects/${clientId}`);
                setProjects(response.data);
            } catch (error) {
                console.error('Error fetching projects:', error);
            }
        };

        fetchProjects();
    }, [id]);

    const updateProjectStatus = async (projectId, newStatus) => {
        try {
            await axios.put(`http://localhost:8000/update-status/${projectId}`, { status: newStatus });
            navigate('/client')
            // Optionally, update state or perform any necessary actions after updating the status
        } catch (error) {
            console.error('Error updating project status:', error);
        }
    };

    return (
        <div className="container mt-4">
            <h1 className='text-center text-white mt-2'><b>Client Projects</b></h1>
            <div className="row mt-3">
                {projects.map((project) => (
                    <div key={project._id} className="col-md-6 mb-4">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">{project.name}</h5>
                                <p className="card-text">Description: {project.engineerid._id}</p>
                                <p className="card-text">Location: {project.location}</p>
                                <p className="card-text">Status: {project.status}</p>
                                <div className="mb-3">
                                    {project.plan.endsWith('.pdf') ? (
                                        <a href={`http://localhost:8000/uploads/${project.plan}`} target="_blank" rel="noopener noreferrer">
                                            View Plan PDF
                                        </a>
                                    ) : (
                                        <img
                                            src={`http://localhost:8000/uploads/${project.plan}`}
                                            alt="Project Plan"
                                            style={{ maxWidth: '100px', maxHeight: '100px' }}
                                        />
                                    )}
                                </div>
                                {/* Buttons to update project status */}
                                {project.status === 'pending' && (
                                    <div>
                                        <button onClick={() => updateProjectStatus(project._id, 'accepted')} className="btn btn-success mr-2 m-2">
                                            Accept
                                        </button>
                                        <button onClick={() => updateProjectStatus(project._id, 'rejected')} className="btn btn-danger">
                                            Reject
                                        </button>
                                    </div>
                                )}
                                <Link to={`suggestion/${project._id}/${project.engineerid._id}`} className="btn btn-primary mt-2">
                                    Add Suggestion
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ClientProjects;
