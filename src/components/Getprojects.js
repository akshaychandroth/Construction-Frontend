
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useParams } from 'react-router-dom';
// import { Card, Row, Col } from 'react-bootstrap'; 
// import { Link } from 'react-router-dom';

// function Getprojects() {
//     const [projects, setProjects] = useState([]);
//     const params = useParams();

//     const superId = localStorage.getItem('userId');
//     console.log('super', superId);

//     useEffect(() => {
//         const fetchProjects = async () => {
//             try {
//                 const response = await axios.get(`http://localhost:8000/engineerproject/${superId}`);
//                 setProjects(response.data);
//             } catch (error) {
//                 console.error('Error fetching projects:', error);
//             }
//         };
//         fetchProjects();
//     }, [superId]);

//     return (
//         <div>
//             <h1>Your Projects</h1>
//             <Row>
//                 {projects.map(project => (
//                     <Col key={project._id} md={3} sm={3}>
//                         <Card>
//                             <Card.Body>
//                                 <Card.Title>{project.name}</Card.Title>
//                                 <Card.Text>
//                                     {project.description}
//                                 </Card.Text>
//                                 <Link to={`/addplan/${project._id}?action=${project.plan ? 'update' : 'add'}`}>
//                                     <button className='btn btn-success'>
//                                         {project.plan ? 'Update' : 'Add'}
//                                     </button>
//                                 </Link>
//                             </Card.Body>
//                         </Card>
//                     </Col>
//                 ))}
//             </Row>
//         </div>
//     );
// }

// export default Getprojects;
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useParams } from 'react-router-dom';
// import { Card, Row, Col } from 'react-bootstrap'; 
// import { Link } from 'react-router-dom';

// function Getprojects() {
//     const [projects, setProjects] = useState([]);
//     const params = useParams();
//     const superId = localStorage.getItem('userId');

//     useEffect(() => {
//         const fetchProjects = async () => {
//             try {
//                 const response = await axios.get(`http://localhost:8000/engineerproject/${superId}`);
//                 setProjects(response.data);
//             } catch (error) {
//                 console.error('Error fetching projects:', error);
//             }
//         };
//         fetchProjects();
//     }, [superId]);

//     const handleCompleteProject = async (projectId) => {
//         try {
//             const response = await axios.put(`http://localhost:8000/projectscomplete/${projectId}/complete`);
//             const updatedProject = response.data;

//             // Update the projects list
//             const updatedProjects = projects.map(project =>
//                 project._id === updatedProject._id ? updatedProject : project
//             );
//             setProjects(updatedProjects);

//             alert('Project marked as completed!');
//         } catch (error) {
//             console.error('Error completing project:', error);
//         }
//     };

//     return (
//         <div>
//             <h1>Your Projects</h1>
//             <Row>
//                 {projects.map(project => (
//                     <Col key={project._id} md={3} sm={3}>
//                         <Card>
//                             <Card.Body>
//                                 <Card.Title>{project.name}</Card.Title>
//                                 <Card.Text>
//                                     {project.description}
//                                 </Card.Text>
//                                 <Link to={`/addplan/${project._id}?action=${project.plan ? 'update' : 'add'}`}>
//                                     <button className='btn btn-success'>
//                                         {project.plan ? 'Update' : 'Add'}
//                                     </button>
//                                 </Link>
//                                 <button
//                                     onClick={() => {
//                                         if (project.position === 'completed') {
//                                             alert('This project is already completed!');
//                                         } else {
//                                             handleCompleteProject(project._id);
//                                         }
//                                     }}
//                                     className={`btn ${project.position === 'completed' ? 'btn-secondary disabled' : 'btn-primary'}`}
//                                     disabled={project.position === 'completed'}
//                                 >
//                                     {project.position === 'completed' ? 'Completed' : 'Complete'}
//                                 </button>
//                             </Card.Body>
//                         </Card>
//                     </Col>
//                 ))}
//             </Row>
//         </div>
//     );
// }

// export default Getprojects;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Card, Row, Col } from 'react-bootstrap'; 
import { Link } from 'react-router-dom';

function Getprojects() {
    const [projects, setProjects] = useState([]);
    const params = useParams();
    const superId = localStorage.getItem('userId');

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const response = await axios.get(`http://localhost:8000/engineerproject/${superId}`);
                setProjects(response.data);
            } catch (error) {
                console.error('Error fetching projects:', error);
            }
        };
        fetchProjects();
    }, [superId]);

    const handleCompleteProject = async (projectId, projectStatus) => {
        try {
            if (projectStatus !== 'accepted') {
                alert('Project can only be completed when status is "accepted".');
                return;
            }

            const response = await axios.put(`http://localhost:8000/projectscomplete/${projectId}/complete`);
            const updatedProject = response.data;

            // Update the projects list
            const updatedProjects = projects.map(project =>
                project._id === updatedProject._id ? updatedProject : project
            );
            setProjects(updatedProjects);

            alert('Project marked as completed!');
        } catch (error) {
            console.error('Error completing project:', error);
        }
    };

    return (
        <div>
            <h1 className='mt-2 text-white text-center'><b>Projects</b> </h1>
            <Row className='m-2'>
                {projects.map(project => (
                    <Col className='mt-3' key={project._id} md={3} sm={3}>
                        <Card>
                            <Card.Body>
                                <Card.Title>{project.name}</Card.Title>
                                <Card.Text>
                                    {project.description}
                                </Card.Text>
                                <Card.Text>
                                <b>Project Status:</b> {project.position === 'ongoing' ? 'Ongoing' : 'Completed'}
                                </Card.Text>

                                <Link to={`/addplan/${project._id}?action=${project.plan ? 'update' : 'add'}`}>
                                    <button className='btn btn-success m-1'>
                                        {project.plan ? 'Update' : 'Add'}
                                    </button>
                                </Link>
                                <button
                                    onClick={() => {
                                        if (project.position === 'completed') {
                                            alert('This project is already completed!');
                                        } else {
                                            handleCompleteProject(project._id, project.status);
                                        }
                                    }}
                                    className={`btn ${project.position === 'completed' ? 'btn-secondary disabled' : 'btn-primary'}`}
                                    disabled={project.position === 'completed'}
                                >
                                    {project.position === 'completed' ? 'Completed' : 'Complete'}
                                </button>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </div>
    );
}

export default Getprojects;
