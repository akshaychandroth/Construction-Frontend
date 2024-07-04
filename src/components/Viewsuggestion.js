// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useParams, Link } from 'react-router-dom';
// import Headerengineer from './Headerengineer';
// function Viewsuggestion() {
//     const { id } = useParams();
//     const [suggestions, setSuggestions] = useState([]);
//     const [error, setError] = useState(null);
//     const superId = localStorage.getItem('userId');
//     console.log('super',superId);

//     useEffect(() => {
 
//     const fetchSuggestions = async () => {
//         try {
//             const res = await axios.get(`http://localhost:8000/partiengineer/${superId}`);
//                         const engineerId = res.data.engineer._id;
                        
//             const response = await axios.get(`http://localhost:8000/suggestionseng/${engineerId}`);
//             setSuggestions(response.data);
//         } catch (error) {
//             console.error(error);
//         }
//     };

//     fetchSuggestions();
// }, []);
//   return (
//     <div>
//             <h2>Suggestions for Engineer </h2>
//             <ul>
//                 {suggestions.map((suggestion, index) => (
//                     <li key={index}>{suggestion.suggestion}
                    
//                    <p>{suggestion.date}</p> 
//                    <p>{suggestion.projectid.name}</p> 
// <Link to={`replaysuggestion/${suggestion._id}`}> 
//                     <button className='btn btn-primary'>Replay</button> 
//                     </Link>
                    
//                     </li>

                    
                    
//                 ))}
//             </ul>
//         </div>  )
// }

// export default Viewsuggestion


import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';
import Headerengineer from './Headerengineer';

function Viewsuggestion() {
    const { id } = useParams();
    const [suggestions, setSuggestions] = useState([]);
    const [error, setError] = useState(null);
    const superId = localStorage.getItem('userId');

    useEffect(() => {
        const fetchSuggestions = async () => {
            try {
                const res = await axios.get(`http://localhost:8000/partiengineer/${superId}`);
                const engineerId = res.data.engineer._id;
                const response = await axios.get(`http://localhost:8000/suggestionseng/${engineerId}`);
                setSuggestions(response.data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchSuggestions();
    }, []);

    return (
        <div className="container mt-4">
            <h2 className="mb-4 text-white text-center"><b>Suggestions</b></h2>
            <div className="row">
                {suggestions.map((suggestion, index) => (
                    <div key={index} className="col-md-6 mb-4">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">{suggestion.projectid.name}</h5>
                                <p className="card-text">{suggestion.suggestion}</p>
                                <p className="card-text">Date: {suggestion.date}</p>
                                <Link to={`replaysuggestion/${suggestion._id}`} className="btn btn-primary">
                                    Reply
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Viewsuggestion;
