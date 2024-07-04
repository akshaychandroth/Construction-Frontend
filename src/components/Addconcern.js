// import React, { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
// import axios from 'axios';
// import { Card, Row, Col } from 'react-bootstrap';
// import { Link } from 'react-router-dom';

// function Addconcern() {
//     const [projects, setProjects] = useState([]);
//     const params = useParams();
//     const superId = localStorage.getItem('userId');
//     console.log('super',superId);
//     useEffect(()=>{
//         const fetchProjects = async () => {
//             try {
//                 const response = await axios.get(`http://localhost:8000/supervisorproject/${superId}`);
//                 setProjects(response.data);
//             } catch (error) {
//                 console.error('Error fetching projects:', error);
//             }
//         };
//         fetchProjects();

//     },[])
//   return (
//     <div>
//     <h1 className='text-center text-white mt-3'><b>Your Projects</b></h1>
//     <Row className='mt-5 m-1'>
//         {projects.map(project => (
//             <Col key={project._id} md={3} sm={3}>
//                 <Card>
//                     <Card.Body>
//                         <Card.Title>{project.name}</Card.Title>
//                         <Card.Text>
//                             {project.description}
//                         </Card.Text>
//                         <Link to={`concern/${project._id}/${project.contractorid}`}>
//                             <button className='btn btn-success'>Add Concern</button>
//                         </Link>
                       
//                     </Card.Body>
//                 </Card>
//             </Col>
//         ))}
//     </Row>
// </div>  )
// }

// export default Addconcern

// import React, { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
// import axios from 'axios';
// import { Card, Row, Col } from 'react-bootstrap';
// import { Link } from 'react-router-dom';

// function Addconcern() {
//     const [projects, setProjects] = useState([]);
//     const params = useParams();
//     const superId = localStorage.getItem('userId');
//     console.log('super', superId);

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

//     return (
//         <div>
//             <h1 className='text-center text-white mt-3'><b>Your Projects</b></h1>
//             <Row className='mt-5 m-1'>
//                 {projects.map(project => (
//                     <Col key={project._id} md={3} sm={3}>
//                         <Card>
//                             <Card.Body>
//                                 <Card.Title>{project.name}</Card.Title>
//                                 <Card.Text>
//                                     {project.description}
//                                 </Card.Text>
//                                 {project.position === 'ongoing' &&
//                                     <Link to={`concern/${project._id}/${project.contractorid}`}>
//                                         <button className='btn btn-success'>Add Concern</button>
//                                     </Link>
//                                 }
//                             </Card.Body>
//                         </Card>
//                     </Col>
//                 ))}
//             </Row>
//         </div>
//     );
// }

// export default Addconcern;


import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Card, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Addconcern() {
    const [projects, setProjects] = useState([]);
    const params = useParams();
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
            <h1 className='text-center text-white mt-3'><b>Your Projects</b></h1>
            <Row className='mt-5 m-1'>
                {projects.map(project => (
                    <Col className='mt-2' key={project._id} md={3} sm={3}>
                        <Card>
                            <Card.Body>
                                <Card.Title>{project.name}</Card.Title>
                                <Card.Text>
                                    {project.description}
                                    <br />
                                    <b>Status:</b> {project.position === 'ongoing' ? 'Ongoing' : 'Completed'}
                                </Card.Text>
                                {project.position === 'ongoing' &&
                                    <Link to={`concern/${project._id}/${project.contractorid}`}>
                                        <button className='btn btn-success'>Add Concern</button>
                                    </Link>
                                }
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </div>
    );
}

export default Addconcern;
