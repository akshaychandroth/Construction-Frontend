// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useParams, Link } from 'react-router-dom';


// function ViewSugReply() {
//     const [suggestions, setSuggestions] = useState([]);
//     const [error, setError] = useState(null);
//     const superId = localStorage.getItem('userId');
//     console.log('super',superId);
//     useEffect(() => {
 
//         const fetchSuggestions = async () => {
//             try {
//                 const res = await axios.get(`http://localhost:8000/particlient/${superId}`);
//                             const clientId = res.data.client._id;
                            
//                 const response = await axios.get(`http://localhost:8000/replycli/${clientId}`);
//                 setSuggestions(response.data);
//             } catch (error) {
//                 console.error(error);
//             }
//         };
    
//         fetchSuggestions();
//     }, []);
    
//   return (
//     <div>
//        <h2>Reply from engineer</h2>
//             <ul>
//                 {suggestions.map((suggestion, index) => (
//                     <li key={index}>{suggestion.suggestion}
//                     <p>{suggestion.reply}</p>   
//                     </li>

                    
                    
//                 ))}
//             </ul>

//     </div>
//   )
// }

// export default ViewSugReply


import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

function ViewSugReply() {
    const [suggestions, setSuggestions] = useState([]);
    const [error, setError] = useState(null);
    const superId = localStorage.getItem('userId');
    console.log('super', superId);

    useEffect(() => {
        const fetchSuggestions = async () => {
            try {
                const res = await axios.get(`http://localhost:8000/particlient/${superId}`);
                const clientId = res.data.client._id;
                const response = await axios.get(`http://localhost:8000/replycli/${clientId}`);
                setSuggestions(response.data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchSuggestions();
    }, []);

    return (
        <div className="container mt-4">
            <h2 className='text-white mt-3' ><b>Reply from Engineer</b></h2>
            <div className="row mt-5">
                {suggestions.map((suggestion, index) => (
                    <div key={index} className="col-md-6 mb-4">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Suggestion:</h5>
                                <p className="card-text">{suggestion.suggestion}</p>
                                <h5 className="card-title">Engineer's Reply:</h5>
                                <p className="card-text">{suggestion.reply}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ViewSugReply;
