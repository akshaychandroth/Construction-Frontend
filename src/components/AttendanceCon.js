import React from 'react'
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Card, Row, Col } from 'react-bootstrap'; 
import { Link } from 'react-router-dom';


const superId = localStorage.getItem('userId');
console.log('super',superId);

function AttendanceCon() {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const response = await axios.get(`http://localhost:8000/contractorproject/${superId}`);
                setProjects(response.data);
            } catch (error) {
                console.error('Error fetching projects:', error);
            }
        };
        fetchProjects();
    }, []);
  return (
    <div>
        <h1 className='text-center text-white mt-3'><b>Attendance</b></h1>

<Row className='mt-3'>
                {projects.map(project => (
                    <Col className='mt-2' key={project._id} md={3} sm={3}> {/* Set column size to 4 for small screens */}
                        <Card>
                            <Card.Body>
                                <Card.Title>{project.name}</Card.Title>
                                <Card.Text>
                                    {project.description}
                                </Card.Text>
                                <Card.Text>
                                <b>Project Status:</b> {project.position === 'ongoing' ? 'Ongoing' : 'Completed'}
                                </Card.Text>

                                <Link to={`attendancebycontractor/${project._id}`}>


                            <button className='btn btn-success'>View Attendance</button>
                            </Link>
                
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>


    </div>
  )
}

export default AttendanceCon