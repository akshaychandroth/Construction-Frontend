
// import React, { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
// import axios from 'axios';
// import { Card, Row, Col } from 'react-bootstrap';
// import { Link } from 'react-router-dom';

// function SupervisorProjects() {
//     const [projects, setProjects] = useState([]);
//     const [workers, setWorkers] = useState([]);
//     const [selectedWorker, setSelectedWorker] = useState('');
//     const [message, setMessage] = useState('');
//     const params = useParams();
//     const superId = localStorage.getItem('userId');
// console.log('super',superId);

//     useEffect(() => {
//         const fetchProjects = async () => {
//             try {
//                 const response = await axios.get(`http://localhost:8000/supervisorproject/${superId}`);
//                 setProjects(response.data);
//             } catch (error) {
//                 console.error('Error fetching projects:', error);
//             }
//         };

//         const fetchWorkers = async () => {
//             try {
//                 const response = await axios.get('http://localhost:8000/workers');
//                 setWorkers(response.data);
//             } catch (error) {
//                 console.error('Error fetching workers:', error);
//             }
//         };

//         fetchProjects();
//         fetchWorkers();
//     }, [params.id]);

//     const assignWorkerToProject = async (projectId) => {
//         try {
//             await axios.post(`http://localhost:8000/assignWorker/${projectId}`, { workerId: selectedWorker });
//             setMessage('Worker assigned successfully');
            
//         } catch (error) {
//             console.error('Error assigning worker:', error);
//             setMessage('already assigned worker');
//         }
//     };

//     const availableWorkers = workers.filter(worker => (
//         !projects.some(project => project.workers.includes(worker._id))
//     ));

//     return (
//         <div>
//             <h1 className='text-center text-white mt-3'><b>Your Projects</b></h1>
//             <Row className='m-1 mt-5'>
//                 {projects.map(project => (
//                     <Col key={project._id} md={3} sm={3}>
//                         <Card>
//                             <Card.Body>
//                                 <Card.Title>{project.name}</Card.Title>
//                                 <Card.Text>
//                                     {project.description}
//                                 </Card.Text>
//                                 <Link to={`addprogress/${project._id}`}>
//                                     <button className='btn btn-success'>Add Progress</button>
//                                 </Link>


                             

                                
//                                 <form className='mt-2' onSubmit={(e) => {
//                                     e.preventDefault();
//                                     assignWorkerToProject(project._id);
//                                 }}>
//                                     <label>Select Worker:</label>
//                                     <select value={selectedWorker} onChange={(e) => setSelectedWorker(e.target.value)}>
//                                         {availableWorkers.map(worker => (
//                                             <option key={worker._id} value={worker._id}>{worker.name}</option>
//                                         ))}
//                                     </select>
//                                     <button type="submit">Assign Worker</button>
//                                 </form>
//                                 {message && <p>{message}</p>}
//                             </Card.Body>
//                         </Card>
//                     </Col>
//                 ))}
//             </Row>
//         </div>
//     );
// }

// export default SupervisorProjects;

// import React, { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
// import axios from 'axios';
// import { Card, Row, Col } from 'react-bootstrap';
// import { Link } from 'react-router-dom';

// function SupervisorProjects() {
//     const [projects, setProjects] = useState([]);
//     const [workers, setWorkers] = useState([]);
//     const [selectedWorkers, setSelectedWorkers] = useState({}); // Object to store selected workers for each project
//     const [message, setMessage] = useState('');
//     const params = useParams();
//     const superId = localStorage.getItem('userId');

//     useEffect(() => {
//         const fetchProjects = async () => {
//             try {
//                 const response = await axios.get(`http://localhost:8000/supervisorproject/${superId}`);
//                 setProjects(response.data);
//             } catch (error) {
//                 console.error('Error fetching projects:', error);
//             }
//         };

//         const fetchWorkers = async () => {
//             try {
//                 const response = await axios.get('http://localhost:8000/workers');
//                 setWorkers(response.data);
//             } catch (error) {
//                 console.error('Error fetching workers:', error);
//             }
//         };

//         fetchProjects();
//         fetchWorkers();
//     }, [params.id, superId]);

//     const assignWorkerToProject = async (projectId) => {
//         const workerId = selectedWorkers[projectId]; // Get selected worker for this project
//         if (!workerId) {
//             setMessage('Please select a worker for this project.');
//             return;
//         }

//         try {
//             await axios.post(`http://localhost:8000/assignWorker/${projectId}`, { workerId });
//             setMessage('Worker assigned successfully');
//         } catch (error) {
//             console.error('Error assigning worker:', error);
//             setMessage('Error assigning worker');
//         }
//     };

//     const handleWorkerSelect = (projectId, workerId) => {
//         setSelectedWorkers({ ...selectedWorkers, [projectId]: workerId }); // Update selected worker for this project
//     };

//     const availableWorkers = (projectId) => workers.filter(worker => (
//         !projects.find(project => project._id === projectId)?.workers.includes(worker._id)
//     ));

//     return (
//         <div>
//             <h1 className='text-center text-white mt-3'><b>Your Projects</b></h1>
//             <Row className='m-1 mt-5'>
//                 {projects.map(project => (
//                     <Col key={project._id} md={3} sm={3}>
//                         <Card>
//                             <Card.Body>
//                                 <Card.Title>{project.name}</Card.Title>
//                                 <Card.Text>
//                                     {project.description}
//                                 </Card.Text>
//                                 <Link to={`addprogress/${project._id}`}>
//                                     <button className='btn btn-success'>Add Progress</button>
//                                 </Link>
//                                 <form className='mt-2' onSubmit={(e) => {
//                                     e.preventDefault();
//                                     assignWorkerToProject(project._id);
//                                 }}>
//                                     <label>Select Worker:</label>
//                                     <select
//                                         value={selectedWorkers[project._id] || ''}
//                                         onChange={(e) => handleWorkerSelect(project._id, e.target.value)}
//                                     >
//                                         <option value="">Select Worker</option>
//                                         {availableWorkers(project._id).map(worker => (
//                                             <option key={worker._id} value={worker._id}>{worker.name}</option>
//                                         ))}
//                                     </select>
//                                     <button type="submit">Assign Worker</button>
//                                 </form>
//                                 {message && <p>{message}</p>}
//                             </Card.Body>
//                         </Card>
//                     </Col>
//                 ))}
//             </Row>
//         </div>
//     );
// }

// export default SupervisorProjects;


// import React, { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
// import axios from 'axios';
// import { Card, Row, Col } from 'react-bootstrap';
// import { Link } from 'react-router-dom';

// function SupervisorProjects() {
//     const [projects, setProjects] = useState([]);
//     const [workers, setWorkers] = useState([]);
//     const [selectedWorkers, setSelectedWorkers] = useState({});
//     const [messages, setMessages] = useState({}); // Store messages for each project
//     const params = useParams();
//     const superId = localStorage.getItem('userId');

//     useEffect(() => {
//         const fetchProjects = async () => {
//             try {
//                 const response = await axios.get(`http://localhost:8000/supervisorproject/${superId}`);
//                 setProjects(response.data);
//             } catch (error) {
//                 console.error('Error fetching projects:', error);
//             }
//         };

//         const fetchWorkers = async () => {
//             try {
//                 const response = await axios.get('http://localhost:8000/workers');
//                 setWorkers(response.data);
//             } catch (error) {
//                 console.error('Error fetching workers:', error);
//             }
//         };

//         fetchProjects();
//         fetchWorkers();
//     }, [params.id, superId]);

//     const assignWorkerToProject = async (projectId) => {
//         const workerId = selectedWorkers[projectId];
//         if (!workerId) {
//             setMessages({ ...messages, [projectId]: 'Please select a worker for this project.' });
//             return;
//         }

//         try {
//             await axios.post(`http://localhost:8000/assignWorker/${projectId}`, { workerId });
//             setMessages({ ...messages, [projectId]: 'Worker assigned successfully' });
//         } catch (error) {
//             console.error('Error assigning worker:', error);
//             setMessages({ ...messages, [projectId]: 'Error assigning worker' });
//         }
//     };

//     const handleWorkerSelect = (projectId, workerId) => {
//         setSelectedWorkers({ ...selectedWorkers, [projectId]: workerId });
//     };

//     const availableWorkers = (projectId) => workers.filter(worker => (
//         !projects.find(project => project._id === projectId)?.workers.includes(worker._id)
//     ));

//     return (
//         <div>
//             <h1 className='text-center text-white mt-3'><b>Your Projects</b></h1>
//             <Row className='m-1 mt-5'>
//                 {projects.map(project => (
//                     <Col key={project._id} md={3} sm={3}>
//                         <Card>
//                             <Card.Body>
//                                 <Card.Title>{project.name}</Card.Title>
//                                 <Card.Text>
//                                     {project.description}
//                                 </Card.Text>
//                                 <Link to={`addprogress/${project._id}`}>
//                                     <button className='btn btn-success'>Add Progress</button>
//                                 </Link>
//                                 <form className='mt-2' onSubmit={(e) => {
//                                     e.preventDefault();
//                                     assignWorkerToProject(project._id);
//                                 }}>
//                                     <label>Select Worker:</label>
//                                     <select
//                                         value={selectedWorkers[project._id] || ''}
//                                         onChange={(e) => handleWorkerSelect(project._id, e.target.value)}
//                                     >
//                                         <option value="">Select Worker</option>
//                                         {availableWorkers(project._id).map(worker => (
//                                             <option key={worker._id} value={worker._id}>{worker.name}</option>
//                                         ))}
//                                     </select>
//                                     <button type="submit">Assign Worker</button>
//                                 </form>
//                                 {messages[project._id] && <p>{messages[project._id]}</p>}
//                             </Card.Body>
//                         </Card>
//                     </Col>
//                 ))}
//             </Row>
//         </div>
//     );
// }

// export default SupervisorProjects;


import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Card, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function SupervisorProjects() {
    const [projects, setProjects] = useState([]);
    const [workers, setWorkers] = useState([]);
    const [selectedWorkers, setSelectedWorkers] = useState({});
    const [messages, setMessages] = useState({});
    const params = useParams();
    const superId = localStorage.getItem('userId');

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const response = await axios.get(`http://localhost:8000/supervisorproject/${superId}`);
                setProjects(response.data);
            } catch (error) {
                console.error('Error fetching projects:', error);
            }
        };

        const fetchWorkers = async () => {
            try {
                const response = await axios.get('http://localhost:8000/workers');
                setWorkers(response.data);
            } catch (error) {
                console.error('Error fetching workers:', error);
            }
        };

        fetchProjects();
        fetchWorkers();
    }, [params.id, superId]);

    const assignWorkerToProject = async (projectId) => {
        const workerId = selectedWorkers[projectId];
        if (!workerId) {
            setMessages({ ...messages, [projectId]: 'Please select a worker for this project.' });
            return;
        }

        try {
            await axios.post(`http://localhost:8000/assignWorker/${projectId}`, { workerId });
            setMessages({ ...messages, [projectId]: 'Worker assigned successfully' });
        } catch (error) {
            console.error('Error assigning worker:', error);
            setMessages({ ...messages, [projectId]: 'Error assigning worker' });
        }
    };

    const handleWorkerSelect = (projectId, workerId) => {
        setSelectedWorkers({ ...selectedWorkers, [projectId]: workerId });
    };

    const availableWorkers = (projectId) => workers.filter(worker => (
        !projects.find(project => project._id === projectId)?.workers.includes(worker._id)
    ));

    return (
        <div>
            <h1 className='text-center text-white mt-3'><b>Your Projects</b></h1>
            <Row className='m-1 mt-5'>
                {projects.map(project => (
                    <Col className='mt-2' key={project._id} md={3} sm={3}>
                        <Card>
                            <Card.Body>
                                <Card.Title>{project.name}</Card.Title>
                                <Card.Text>
                                    {project.description}
                                </Card.Text>
                                <Link to={`addprogress/${project._id}`}>
                                    {project.position === 'ongoing' && <button className='btn btn-success'>Add Progress</button>}
                                </Link>
                                {project.position === 'ongoing' &&
                                    <form className='mt-2' onSubmit={(e) => {
                                        e.preventDefault();
                                        assignWorkerToProject(project._id);
                                    }}>
                                        <label>Select Worker:</label>
                                        <select
                                            value={selectedWorkers[project._id] || ''}
                                            onChange={(e) => handleWorkerSelect(project._id, e.target.value)}
                                        >
                                            <option value="">Select Worker</option>
                                            {availableWorkers(project._id).map(worker => (
                                                <option key={worker._id} value={worker._id}>{worker.name}</option>
                                            ))}
                                        </select>
                                        <button type="submit">Assign Worker</button>
                                    </form>
                                }
                                {messages[project._id] && <p>{messages[project._id]}</p>}
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </div>
    );
}

export default SupervisorProjects;
