


// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useParams, Link } from 'react-router-dom';

// function ViewProgress() {
//     const { id } = useParams();
//     const [projects, setProjects] = useState([]);
//     const [error, setError] = useState(null);
//     const superId = localStorage.getItem('userId');
//     console.log('super',superId);

//     useEffect(() => {
//         const fetchProjects = async () => {
//             try {
//                 const res = await axios.get(`http://localhost:8000/particlient/${superId}`);
//                 const clientId = res.data.client._id;
                
//                 const response = await axios.get(`http://localhost:8000/acceptedbyclient/${clientId}`);
//                 setProjects(response.data);
//             } catch (error) {
//                 console.error('Error fetching projects:', error);
//                 setError('Error fetching projects. Please try again later.');
//             }
//         };
//         fetchProjects();
//     }, []);

//     return (
//         <div>
//             {error && <p>{error}</p>}
//             {projects.map(project => (
//                 <div key={project._id}>
//                     <h1>{project.name}</h1>
//                     <Link to={`/clientprogress/${project._id}`}>
//                         <button className='btn btn-primary'>View Progress</button>
//                     </Link>
//                 </div>
//             ))}
//         </div>
//     );
// }

// export default ViewProgress;


// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useParams, Link } from 'react-router-dom';

// function ViewProgress() {
//     const { id } = useParams();
//     const [projects, setProjects] = useState([]);
//     const [error, setError] = useState(null);
//     const superId = localStorage.getItem('userId');
//     console.log('super', superId);

//     useEffect(() => {
//         const fetchProjects = async () => {
//             try {
//                 const res = await axios.get(`http://localhost:8000/particlient/${superId}`);
//                 const clientId = res.data.client._id;

//                 const response = await axios.get(`http://localhost:8000/acceptedbyclient/${clientId}`);
//                 setProjects(response.data);
//             } catch (error) {
//                 console.error('Error fetching projects:', error);
//                 setError('Error fetching projects. Please try again later.');
//             }
//         };
//         fetchProjects();
//     }, []);

//     return (
//         <div className="container mt-5">
//             {error && <p>{error}</p>}
//             <div className="row">
//                 {projects.map(project => (
//                     <div key={project._id} className="col-md-4 mb-4">
//                         <div className="card">
//                             <div className="card-body">
//                                 <h1>{project.name}</h1>
//                                 <Link to={`/clientprogress/${project._id}`}>
//                                     <button className='btn btn-primary'>View Progress</button>
//                                 </Link>
//                             </div>
//                         </div>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// }

// export default ViewProgress;


import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';

function ViewProgress() {
    const { id } = useParams();
    const [projects, setProjects] = useState([]);
    const [error, setError] = useState(null);
    const superId = localStorage.getItem('userId');
    console.log('super', superId);

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const res = await axios.get(`http://localhost:8000/particlient/${superId}`);
                const clientId = res.data.client._id;

                const response = await axios.get(`http://localhost:8000/acceptedbyclient/${clientId}`);
                setProjects(response.data);
            } catch (error) {
                console.error('Error fetching projects:', error);
                setError('Error fetching projects. Please try again later.');
            }
        };
        fetchProjects();
    }, []);

    return (
        <div className="container mt-5">
            {error && <p>{error}</p>}
            <div className="row">
                {projects.map(project => (
                    <div key={project._id} className="col-md-4 mb-4">
                        <div className="card">
                            <div className="card-body">
                                <h1>{project.name}</h1>
                                <p><strong>Status:</strong> {project.position === 'completed' ? 'Completed' : 'On Going'}</p>
                                <Link to={`/clientprogress/${project._id}`}>
                                    <button className='btn btn-primary'>View Progress</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ViewProgress;
