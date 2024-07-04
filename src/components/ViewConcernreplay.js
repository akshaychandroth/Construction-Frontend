// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useParams, Link } from 'react-router-dom';
// function ViewConcernreplay() {


//     const { id } = useParams();
//     const [concerns, setConcerns] = useState([]);
//     const [error, setError] = useState(null);
//     const superId = localStorage.getItem('userId');
//     console.log('super',superId);

//     useEffect(() => {
 
//     const fetchSuggestions = async () => {
//         try {
//             const res = await axios.get(`http://localhost:8000/partiengineer/${superId}`);
//                         const supervisorId = res.data.engineer._id;
                        
//             const response = await axios.get(`http://localhost:8000/concernsup/${supervisorId}`);
//             setConcerns(response.data);
//         } catch (error) {
//             console.error(error);
//         }
//     };

//     fetchSuggestions();
// }, []);

//   return (
// <div>
//     <h2>Concerns </h2>
//     <ul>
//         {concerns.map((concern, index) => (
//             <li key={index}>{concern.concern}
            
//            <p>{concern.date}</p> 
//            <p>{concern.projectid.name}</p> 
//            <p>{concern.reply}</p> 



            
//             </li>

            
            
//         ))}
//     </ul>
// </div>  )
// }

// export default ViewConcernreplay

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';

function ViewConcernreplay() {
    const { id } = useParams();
    const [concerns, setConcerns] = useState([]);
    const [error, setError] = useState(null);
    const superId = localStorage.getItem('userId');
    console.log('super',superId);

    useEffect(() => {
        const fetchConcerns = async () => {
            try {
                const res = await axios.get(`http://localhost:8000/partiengineer/${superId}`);
                const supervisorId = res.data.engineer._id;
                const response = await axios.get(`http://localhost:8000/concernsup/${supervisorId}`);
                setConcerns(response.data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchConcerns();
    }, [superId]);

    return (
        <div className="container mt-4">
            <h2 className="mb-4 text-center text-white"><b>Concerns</b></h2>
            <div className="row">
                {concerns.map((concern, index) => (
                    <div key={index} className="col-md-6 mb-4">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">{concern.projectid.name}</h5>
                                <p className="card-text"><b>Concern:</b> {concern.concern}</p>
                                <p className="card-text"><b>Date:</b> {concern.date}</p>
                                <p className="card-text"><b>Reply:</b> {concern.reply}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ViewConcernreplay;
