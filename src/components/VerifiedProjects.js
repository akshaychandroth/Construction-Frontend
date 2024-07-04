
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useParams } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';


// function VerifiedProjects() {
//     const { id } = useParams();
//     const [projects, setProjects] = useState([]);
//     const [error, setError] = useState(null);
//     const [supervisorIds, setSupervisorIds] = useState({});
//     const [contractorIds, setContractorIds] = useState({});
//     const [supervisors, setSupervisors] = useState([]);
//     const [contractors, setContractors] = useState([]);
//     const navigate = useNavigate()


//     const superId = localStorage.getItem('userId');
//     console.log('super',superId);

//     useEffect(() => {
//         axios.get('http://localhost:8000/supervisors')
//             .then(res => {
//                 console.log("Fetched supervisors:", res.data);
//                 setSupervisors(res.data);
//             })
//             .catch(err => console.error("Error fetching supervisors:", err));

//         axios.get('http://localhost:8000/contractors')
//             .then(res => {
//                 console.log("Fetched contractors:", res.data);
//                 setContractors(res.data);
//             })
//             .catch(err => console.error("Error fetching contractors:", err));

//         const fetchProjects = async () => {
//             try {
//                 const res = await axios.get(`http://localhost:8000/partiengineer/${superId}`);
//                 const engineerId = res.data.engineer._id;

//                 const response = await axios.get(`http://localhost:8000/accepted/${engineerId}`);
//                 setProjects(response.data);
//             } catch (error) {
//                 console.error('Error fetching projects:', error);
//                 setError('Error fetching projects. Please try again later.');
//             }
//         };

//         fetchProjects();
//     }, [id]);

//     const handleAssignment = async (projectId) => {
//         try {
//             const supervisorId = supervisorIds[projectId];
//             const contractorId = contractorIds[projectId];
//             const project = projects.find(project => project._id === projectId);
//             if (project.supervisorid && project.contractorid) {
//                 alert('Supervisor and contractor already assigned to this project');
//                 navigate('/engineer')

//                 return;
//             }

//             await axios.put(`http://localhost:8000/projects/${projectId}/assign`, {
//                 supervisorId,
//                 contractorId
//             });
//             alert('Supervisor and contractor assigned successfully');
//             navigate('/engineer')
            
//         } catch (error) {
//             console.error('Error assigning supervisor and contractor:', error);
//             alert('Error assigning supervisor and contractor. Please try again.');
//         }
//     };

//     return (
//         <div style={{ paddingLeft: '50px' }}>
//              <h1 style={{ textAlign: 'center', color: 'white', paddingTop: '5px' }}>Accepted Projects</h1>
//             {error && <p>{error}</p>}
//             <ul>
//                 {projects.map(project => (
//                     <li key={project._id}>
//                         <h2>{project.name}</h2>
//                         <p>Description: {project.description}</p>
//                         <p>Location: {project.location}</p>
//                         {/* <p>Location: {project.contractorid}</p> */}

//                         <div>
//                             <label>
//                                 Select Supervisor:
//                                 <select value={supervisorIds[project._id] || ''} onChange={(e) => setSupervisorIds({ ...supervisorIds, [project._id]: e.target.value })}>
//                                     <option value="">Select Supervisor</option>
//                                     {supervisors.map(supervisor => (
//                                         <option key={supervisor._id} value={supervisor._id}>{supervisor.name}</option>
//                                     ))}
//                                 </select>
//                             </label>
//                         </div>
//                         <div>
//                             <label>
//                                 Select Contractor:
//                                 <select value={contractorIds[project._id] || ''} onChange={(e) => setContractorIds({ ...contractorIds, [project._id]: e.target.value })}>
//                                     <option value="">Select Contractor</option>
//                                     {contractors.map(contractor => (
//                                         <option key={contractor._id} value={contractor._id}>{contractor.name}</option>
//                                     ))}
//                                 </select>
//                             </label>
//                         </div>
//                         <button onClick={() => handleAssignment(project._id)}>Assign Supervisor and Contractor</button>
//                     </li>
//                 ))}
//             </ul>
//         </div>
//     );
// }

// export default VerifiedProjects;

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useParams, useNavigate } from 'react-router-dom';

// function VerifiedProjects() {
//     const { id } = useParams();
//     const [projects, setProjects] = useState([]);
//     const [error, setError] = useState(null);
//     const [supervisorIds, setSupervisorIds] = useState({});
//     const [contractorIds, setContractorIds] = useState({});
//     const [supervisors, setSupervisors] = useState([]);
//     const [contractors, setContractors] = useState([]);
//     const navigate = useNavigate();

//     const superId = localStorage.getItem('userId');

//     useEffect(() => {
//         axios.get('http://localhost:8000/supervisors')
//             .then(res => {
//                 console.log("Fetched supervisors:", res.data);
//                 setSupervisors(res.data);
//             })
//             .catch(err => console.error("Error fetching supervisors:", err));

//         axios.get('http://localhost:8000/contractors')
//             .then(res => {
//                 console.log("Fetched contractors:", res.data);
//                 setContractors(res.data);
//             })
//             .catch(err => console.error("Error fetching contractors:", err));

//         const fetchProjects = async () => {
//             try {
//                 const res = await axios.get(`http://localhost:8000/partiengineer/${superId}`);
//                 const engineerId = res.data.engineer._id;

//                 const response = await axios.get(`http://localhost:8000/accepted/${engineerId}`);
//                 setProjects(response.data);
//             } catch (error) {
//                 console.error('Error fetching projects:', error);
//                 setError('Error fetching projects. Please try again later.');
//             }
//         };

//         fetchProjects();
//     }, [id, superId]);

//     const handleAssignment = async (projectId) => {
//         try {
//             const supervisorId = supervisorIds[projectId];
//             const contractorId = contractorIds[projectId];
//             const project = projects.find(project => project._id === projectId);
//             if (project.supervisorid && project.contractorid) {
//                 alert('Supervisor and contractor already assigned to this project');
//                 return;
//             }

//             await axios.put(`http://localhost:8000/projects/${projectId}/assign`, {
//                 supervisorId,
//                 contractorId
//             });
//             alert('Supervisor and contractor assigned successfully');
//             navigate('/engineer');
            
//         } catch (error) {
//             console.error('Error assigning supervisor and contractor:', error);
//             alert('Error assigning supervisor and contractor. Please try again.');
//         }
//     };

//     return (
//         <div className="container mt-4">
//             <h1 className="text-center text-white mb-4"> <b> Accepted Projects</b></h1>
//             {error && <p>{error}</p>}
//             <div className="row">
//                 {projects.map(project => (
//                     <div key={project._id} className="col-md-6 mb-4">
//                         <div className="card">
//                             <div className="card-body">
//                                 <h5 className="card-title">{project.name}</h5>
//                                 <p className="card-text">Description: {project.description}</p>
//                                 <p className="card-text">Location: {project.location}</p>
//                                 <div className="form-group">
//                                     <label htmlFor={`supervisorSelect_${project._id}`}>Select Supervisor:</label>
//                                     <select
//                                         id={`supervisorSelect_${project._id}`}
//                                         className="form-control"
//                                         value={supervisorIds[project._id] || ''}
//                                         onChange={(e) => setSupervisorIds({ ...supervisorIds, [project._id]: e.target.value })}
//                                     >
//                                         <option value="">Select Supervisor</option>
//                                         {supervisors.map(supervisor => (
//                                             <option key={supervisor._id} value={supervisor._id}>{supervisor.name}</option>
//                                         ))}
//                                     </select>
//                                 </div>
//                                 <div className="form-group">
//                                     <label htmlFor={`contractorSelect_${project._id}`}>Select Contractor:</label>
//                                     <select
//                                         id={`contractorSelect_${project._id}`}
//                                         className="form-control"
//                                         value={contractorIds[project._id] || ''}
//                                         onChange={(e) => setContractorIds({ ...contractorIds, [project._id]: e.target.value })}
//                                     >
//                                         <option value="">Select Contractor</option>
//                                         {contractors.map(contractor => (
//                                             <option key={contractor._id} value={contractor._id}>{contractor.name}</option>
//                                         ))}
//                                     </select>
//                                 </div>
//                                 <button
//                                     className="btn btn-primary mt-2"
//                                     onClick={() => handleAssignment(project._id)}
//                                 >
//                                     Assign Supervisor and Contractor
//                                 </button>
//                             </div>
//                         </div>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// }

// export default VerifiedProjects;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

function VerifiedProjects() {
    const { id } = useParams();
    const [projects, setProjects] = useState([]);
    const [error, setError] = useState(null);
    const [supervisorIds, setSupervisorIds] = useState({});
    const [contractorIds, setContractorIds] = useState({});
    const [supervisors, setSupervisors] = useState([]);
    const [contractors, setContractors] = useState([]);
    const navigate = useNavigate();

    const superId = localStorage.getItem('userId');

    useEffect(() => {
        axios.get('http://localhost:8000/supervisors')
            .then(res => {
                console.log("Fetched supervisors:", res.data);
                setSupervisors(res.data);
            })
            .catch(err => console.error("Error fetching supervisors:", err));

        axios.get('http://localhost:8000/contractors')
            .then(res => {
                console.log("Fetched contractors:", res.data);
                setContractors(res.data);
            })
            .catch(err => console.error("Error fetching contractors:", err));

        const fetchProjects = async () => {
            try {
                const res = await axios.get(`http://localhost:8000/partiengineer/${superId}`);
                const engineerId = res.data.engineer._id;

                const response = await axios.get(`http://localhost:8000/accepted/${engineerId}`);
                setProjects(response.data);
            } catch (error) {
                console.error('Error fetching projects:', error);
                setError('Error fetching projects. Please try again later.');
            }
        };

        fetchProjects();
    }, [id, superId]);

    const handleAssignment = async (projectId) => {
        try {
            const supervisorId = supervisorIds[projectId];
            const contractorId = contractorIds[projectId];
            const project = projects.find(project => project._id === projectId);
            if (project.supervisorid && project.contractorid) {
                alert('Supervisor and contractor already assigned to this project');
                return;
            }

            await axios.put(`http://localhost:8000/projects/${projectId}/assign`, {
                supervisorId,
                contractorId
            });
            alert('Supervisor and contractor assigned successfully');
            navigate('/engineer');
            
        } catch (error) {
            console.error('Error assigning supervisor and contractor:', error);
            alert('Error assigning supervisor and contractor. Please try again.');
        }
    };

    return (
        <div className="container mt-4">
            <h1 className="text-center text-white mb-4"> <b> Accepted Projects</b></h1>
            {error && <p>{error}</p>}
            <div className="row">
                {projects.map(project => (
                    <div key={project._id} className="col-md-6 mb-4">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">{project.name}</h5>
                                <p className="card-text">Description: {project.description}</p>
                                <p className="card-text">Location: {project.location}</p>
                                {project.supervisorid && project.contractorid ? (
                                    <div>
                                        <p className="card-text">
                                            Supervisor: {supervisors.find(s => s._id === project.supervisorid)?.name}
                                        </p>
                                        <p className="card-text">
                                            Contractor: {contractors.find(c => c._id === project.contractorid)?.name}
                                        </p>
                                    </div>
                                ) : (
                                    <div>
                                        <div className="form-group">
                                            <label htmlFor={`supervisorSelect_${project._id}`}>Select Supervisor:</label>
                                            <select
                                                id={`supervisorSelect_${project._id}`}
                                                className="form-control"
                                                value={supervisorIds[project._id] || ''}
                                                onChange={(e) => setSupervisorIds({ ...supervisorIds, [project._id]: e.target.value })}
                                            >
                                                <option value="">Select Supervisor</option>
                                                {supervisors.map(supervisor => (
                                                    <option key={supervisor._id} value={supervisor._id}>{supervisor.name}</option>
                                                ))}
                                            </select>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor={`contractorSelect_${project._id}`}>Select Contractor:</label>
                                            <select
                                                id={`contractorSelect_${project._id}`}
                                                className="form-control"
                                                value={contractorIds[project._id] || ''}
                                                onChange={(e) => setContractorIds({ ...contractorIds, [project._id]: e.target.value })}
                                            >
                                                <option value="">Select Contractor</option>
                                                {contractors.map(contractor => (
                                                    <option key={contractor._id} value={contractor._id}>{contractor.name}</option>
                                                ))}
                                            </select>
                                        </div>
                                        <button
                                            className="btn btn-primary mt-2"
                                            onClick={() => handleAssignment(project._id)}
                                        >
                                            Assign Supervisor and Contractor
                                        </button>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default VerifiedProjects;
