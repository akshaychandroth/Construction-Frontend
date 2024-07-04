
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useParams } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';
// function AdminProgress() {
//     const params = useParams('');
//     const [progress, setProgress] = useState([]);
//     const [error, setError] = useState(null);
//     console.log(params.id);
//     const navigate = useNavigate()

//  const backhome =()=>{
//     navigate('/admin')


//  }
//     useEffect(() => {
//         const fetchProgress = async () => {
//             try {
//                 const response = await axios.get(`http://localhost:8000/clientprogress/${params.id}`);
//                 setProgress(response.data);
//             } catch (error) {
//                 console.error('Error fetching progress:', error);
//                 setError('Error fetching progress. Please try again later.');
//             }
//         };
//         fetchProgress();
//     }, []);

//   return (
//     <div>

//         <button onClick={backhome} className='btn btn-primary'>Back</button>
//     {error && <p>{error}</p>}
//     <h1>Progress for Project</h1>
//     <ul>
//         {progress.map(entry => (
//             <li key={entry._id}>
//                 <h3>{entry.description}</h3>
//                 <h3>{entry.date}</h3>

                
//                 <img width={'200px'} height={'200px'} src={`http://localhost:8000/uploads/${entry.photo}`} alt="Client" />                                           
//             </li>



//         ))}
//     </ul>
// </div>  )
// }

// export default AdminProgress

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function AdminProgress() {
    const params = useParams('');
    const [progress, setProgress] = useState([]);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const backhome = () => {
        navigate('/admin');
    };

    useEffect(() => {
        const fetchProgress = async () => {
            try {
                const response = await axios.get(`http://localhost:8000/clientprogress/${params.id}`);
                setProgress(response.data);
            } catch (error) {
                console.error('Error fetching progress:', error);
                setError('Error fetching progress. Please try again later.');
            }
        };
        fetchProgress();
    }, []);

    return (
        <div className="container mt-4">
            <button onClick={backhome} className="btn btn-primary mb-3">Back</button>
            {error && <p>{error}</p>}
            <h1 className="mb-4 text-white"> <b>Progress of Project</b> </h1>
            <div className="row">
                {progress.map(entry => (
                    <div key={entry._id} className="col-md-4 mb-4">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">{entry.description}</h5>
                                <p className="card-text">{entry.date}</p>
                                <img
                                    className="card-img-top"
                                    src={`http://localhost:8000/uploads/${entry.photo}`}
                                    alt="Client"
                                    style={{ width: '100%', height: '200px', objectFit: 'cover' }}
                                />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default AdminProgress;
