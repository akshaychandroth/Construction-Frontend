import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, Row, Col } from 'react-bootstrap'; 
import { Link } from 'react-router-dom';

function AdminProjects() {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const response = await axios.get('http://localhost:8000/verifiedprojectsbyadmin');
                setProjects(response.data);
            } catch (error) {
                console.error('Error fetching projects:', error);
            }
        };
        fetchProjects();
    }, []);
  return (
<div>
          <h1 className='text-white m-4 text-center' ><b> Projects</b></h1>
            <Row className='mt-2 '>
                {projects.map(project => (
                    <Col className='mt-2' key={project._id} md={3} sm={3}> 
                        <Card>
                            <Card.Body>
                                <Card.Title>{project.name}</Card.Title>
                                <Card.Text>
                                    {project.description}
                                </Card.Text>
                                <Card.Text>
                                <b>Project Status:</b> {project.position === 'ongoing' ? 'Ongoing' : 'Completed'}
                                </Card.Text>

                                <Link to={`/adminprogress/${project._id}`}>
                                <button className='btn btn-primary'>View Progress</button>

                                </Link>

                                <Link to={`/documentsbyclient/${project._id}`}>
                                <button className='btn btn-primary m-1'>View Client Documents</button>

                                </Link>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
    </div>  )
}

export default AdminProjects