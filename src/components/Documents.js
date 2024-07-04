// import React, { useState } from 'react';
// import axios from 'axios';
// import { useParams } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';

// function Documents() {
//     const { projectId ,clientId  } = useParams();
//     const [description, setDescription] = useState('');
//     const [document, setdocument] = useState(null);
//     const navigate= useNavigate()

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         try {

//             const res = await axios.get(`http://localhost:8000/particlient/${clientId}`);
//             const cliId = res.data.client._id;
//             console.log(cliId);

//             const formData = new FormData();
//             formData.append('projectid', projectId);
//             formData.append('description', description);
//             formData.append('document', document);
//             // Add other form data as needed

//             const response = await axios.post(`http://localhost:8000/documents/${cliId}`, formData, {
//                 headers: {
//                     'Content-Type': 'multipart/form-data'
//                 }
//             });
//             console.log('Progress added:', response.data);
//             alert('successfully added')
//             navigate('/client')
            
//             // Handle success or navigate to another page
//         } catch (error) {
//             console.error('Error adding progress:', error);
//             // Handle error
//         }
//     };
   
//   return (
//     <div>
//          <h1>Add Documents</h1>
//             <form onSubmit={handleSubmit}>
//                 <div>
//                     <label>Description:</label>
//                     <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
//                 </div>
//                 <div>
//                     <label>Photo:</label>
//                     <input type="file" onChange={(e) => setdocument(e.target.files[0])} />
//                 </div>
              
//                 {/* Add other form fields */}
//                 <button type="submit">Submit</button>
//             </form>
//     </div>
//   )
// }

// export default Documents


import React, { useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function Documents() {
    const { projectId, clientId } = useParams();
    const [description, setDescription] = useState('');
    const [document, setDocument] = useState(null);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.get(`http://localhost:8000/particlient/${clientId}`);
            const cliId = res.data.client._id;

            const formData = new FormData();
            formData.append('projectid', projectId);
            formData.append('description', description);
            formData.append('document', document);

            const response = await axios.post(`http://localhost:8000/documents/${cliId}`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });

            console.log('Document added:', response.data);
            alert('Document added successfully!');
            navigate('/client');
        } catch (error) {
            console.error('Error adding document:', error);
        }
    };


    const Back =()=>{
        navigate('/client')
    }

    return (
        <div className="container mt-4">
            <button className='btn btn-danger' onClick={Back}>Back</button>
            <h1 className='text-white text-center mt-5'>Add Documents</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Description:</label>
                    <input
                        type="text"
                        className="form-control"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                </div>
                <div className="form-group mt-3">
                    <label>Document:</label>
                    <input
                        type="file"
                        className="form-control-file"
                        onChange={(e) => setDocument(e.target.files[0])}
                    />
                </div>
                <button type="submit" className="btn btn-primary mt-3">
                    Submit
                </button>
            </form>
        </div>
    );
}

export default Documents;
