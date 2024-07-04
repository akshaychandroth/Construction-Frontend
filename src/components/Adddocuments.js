// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useParams } from 'react-router-dom';
// import { Link } from 'react-router-dom';
// function Adddocuments() {
//     const { id } = useParams();
//     const [projects, setProjects] = useState([]);

//     const superId = localStorage.getItem('userId');
// console.log('super',superId);

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

//     return (
//         <div>
//             <ul>
//                 {projects.map(project => (
//                     <li key={project._id}>
//                         <div className="card">
//                             <div className="card-body">
//                                 <h5 className="card-title">{project.name}</h5>
//                                 <p className="card-text">{project.description}</p>

// <Link to={`/documents/${project._id}/${superId}`}>
//                                 <button className='btn btn-primary' >Add Documents</button>
//                                 </Link>
                                
//                             </div>
//                         </div>
//                     </li>
//                 ))}
//             </ul>
//         </div>
//     );
// }

// export default Adddocuments;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

function Adddocuments() {
    const { id } = useParams();
    const [projects, setProjects] = useState([]);
    const superId = localStorage.getItem('userId');
    console.log('super', superId);

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
    }, [superId]);

    return (
        <div className="container mt-4">
            <h2 className="mb-4 text-center text-white"><b>Projects</b></h2>
            <div className="row">
                {projects.map((project) => (
                    <div key={project._id} className="col-md-6 mb-4">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">{project.name}</h5>
                                <b>Project Status:</b> {project.position === 'ongoing' ? 'Ongoing' : 'Completed'}

                                <p className="card-text">{project.description}</p>
                                <Link to={`/documents/${project._id}/${superId}`} className="btn btn-primary">
                                    Add Documents
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Adddocuments;

