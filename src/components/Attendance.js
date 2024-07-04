// import React, { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
// import axios from 'axios';
// import { Card, Row, Col } from 'react-bootstrap';
// import { Link } from 'react-router-dom';

// function Attendance() {
//     const [projects, setProjects] = useState([]);
//     const superId = localStorage.getItem('userId');
//     console.log('super',superId);

//     useEffect(() => {
//         const fetchProjects = async () => {
//             try {
//                 const response = await axios.get(`http://localhost:8000/supervisorproject/${superId}`);
//                 setProjects(response.data);
//             } catch (error) {
//                 console.error('Error fetching projects:', error);
//             }
//         };

       

//         fetchProjects();
//     }, []);




//   return (

//     <div>
//     <h1 className='text-white text-center ' ><b>Projects</b></h1>
    
//     <Row className='m-2'>
//         {projects.map(project => (
//             <Col key={project._id} md={3} sm={3}>
//                 <Card>
//                     <Card.Body>
//                         <Card.Title>{project.name}</Card.Title>
//                         <Card.Text>
//                             {project.description}
//                         </Card.Text>

// <Link to={`/workerattendance/${project._id}`}>
//                         <button className='btn btn-success m-2'>Add Attendance</button></Link>
                       

       
// <Link to={`/viewattendance/${project._id}`}>
//                         <button className='btn btn-success'>View Attendance</button></Link>              

                       
//                     </Card.Body>
//                 </Card>
//             </Col>
//         ))}
//     </Row>
// </div>
//   )
// }

// export default Attendance

import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Card, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Attendance() {
    const [projects, setProjects] = useState([]);
    const superId = localStorage.getItem('userId');
    console.log('super', superId);

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const response = await axios.get(`http://localhost:8000/supervisorproject/${superId}`);
                setProjects(response.data);
            } catch (error) {
                console.error('Error fetching projects:', error);
            }
        };

        fetchProjects();
    }, []);

    return (
        <div>
            <h1 className='text-white text-center'><b>Projects</b></h1>
            <Row className='m-2'>
                {projects.map(project => (
                    <Col className='mt-2' key={project._id} md={3} sm={3}>
                        <Card>
                            <Card.Body>
                                <Card.Title>{project.name}</Card.Title>
                                <Card.Text>
                                    {project.description}
                                </Card.Text>
                                <Card.Text> <b>Project Status:</b> {project.position === 'ongoing' ? 'Ongoing' : 'Completed'}</Card.Text>

                                {project.position === 'ongoing' &&
                                    <Link to={`/workerattendance/${project._id}`}>
                                        <button className='btn btn-success m-2'>Add Attendance</button>
                                    </Link>
                                }

                                <Link to={`/viewattendance/${project._id}`}>
                                    <button className='btn btn-success'>View Attendance</button>
                                </Link>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </div>
    );
}

export default Attendance;
