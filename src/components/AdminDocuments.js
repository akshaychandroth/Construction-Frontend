
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useParams } from 'react-router-dom';

// function AdminDocuments() {
//     const params = useParams('');
//     const [progress, setProgress] = useState([]);
//     const [error, setError] = useState(null);
//     console.log(params.id);

//     useEffect(() => {
//         const fetchProgress = async () => {
//             try {
//                 const response = await axios.get(`http://localhost:8000/documentsbyclient/${params.id}`);
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
//          {error && <p>{error}</p>}
//     <h1>Progress for Project</h1>
//     <ul>
//         {progress.map(entry => (
//             <li key={entry._id}>
//                 <h3>{entry.description}</h3>
//                 <h3>{entry.date}</h3>


//                 <td>
//   {entry.document.endsWith('.pdf') ? (
//     <a href={`http://localhost:8000/uploads/${entry.document}`} target="_blank" rel="noopener noreferrer">View Plan PDF</a>
//   ) : (
//     <img src={`http://localhost:8000/uploads/${entry.document}`} alt="Project Plan" style={{ maxWidth: '100px', maxHeight: '100px' }} />
//   )}
// </td>

                
//             </li>



//         ))}
//     </ul>
//     </div>
//   )
// }

// export default AdminDocuments


import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function AdminDocuments() {
    const params = useParams('');
    const [documents, setDocuments] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchDocuments = async () => {
            try {
                const response = await axios.get(`http://localhost:8000/documentsbyclient/${params.id}`);
                setDocuments(response.data);
            } catch (error) {
                console.error('Error fetching documents:', error);
                setError('Error fetching documents. Please try again later.');
            }
        };
        fetchDocuments();
    }, []);

    return (
        <div className="container mt-4">
            {error && <p>{error}</p>}
            <h1 className="mb-4">Documents for Project</h1>
            <div className="row">
                {documents.map(document => (
                    <div key={document._id} className="col-md-4 mb-4">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">{document.description}</h5>
                                <p className="card-text">{document.date}</p>
                                {document.document.endsWith('.pdf') ? (
                                    <a
                                        href={`http://localhost:8000/uploads/${document.document}`}
                                        className="btn btn-primary"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        View PDF
                                    </a>
                                ) : (
                                    <img
                                        src={`http://localhost:8000/uploads/${document.document}`}
                                        alt="Project Document"
                                        className="card-img-top"
                                        style={{ maxWidth: '100%', maxHeight: '200px', objectFit: 'cover' }}
                                    />
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default AdminDocuments;
