// // AddProgress.js
// import React, { useState } from 'react';
// import axios from 'axios';
// import { useParams } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom'



// function AddProgress() {
//     const { projectId } = useParams();
//     const [description, setDescription] = useState('');
//     const [photo, setPhoto] = useState(null);
//     const[date,setDate]=useState('')
//     const navigate = useNavigate()


//     const supervisorId = localStorage.getItem('userId');
//     console.log('super',supervisorId);

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         try {

//             const res = await axios.get(`http://localhost:8000/partiengineer/${supervisorId}`);
//             const superId = res.data.engineer._id;
//             console.log(superId);





//             const formData = new FormData();
//             formData.append('projectid', projectId);
//             formData.append('description', description);
//             formData.append('photo', photo);
//             formData.append('date',date)
//             // Add other form data as needed

//             const response = await axios.post(`http://localhost:8000/progress/${superId}`, formData, {
//                 headers: {
//                     'Content-Type': 'multipart/form-data'
//                 }
//             });
//             console.log('Progress added:', response.data);
//             alert('added')
//             navigate("/supervisor")

//             // Handle success or navigate to another page
//         } catch (error) {
//             console.error('Error adding progress:', error);
//             // Handle error
//         }
//     };

//     return (
//         <div>
//             <h1>Add Progress</h1>
//             <form onSubmit={handleSubmit}>
//                 <div>
//                     <label>Description:</label>
//                     <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
//                 </div>
//                 <div>
//                     <label>Photo:</label>
//                     <input type="file" accept="image/*" onChange={(e) => setPhoto(e.target.files[0])} />
//                 </div>
//                 <div>
//                     <label>Description:</label>
//                     <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
//                 </div>
//                 {/* Add other form fields */}
//                 <button type="submit">Submit</button>
//             </form>
//         </div>
//     );
// }

// export default AddProgress;

import React, { useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

function AddProgress() {
    const { projectId } = useParams();
    const [description, setDescription] = useState('');
    const [photo, setPhoto] = useState(null);
    const [date, setDate] = useState('');
    const navigate = useNavigate();

    const supervisorId = localStorage.getItem('userId');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.get(`http://localhost:8000/partiengineer/${supervisorId}`);
            const superId = res.data.engineer._id;

            const formData = new FormData();
            formData.append('projectid', projectId);
            formData.append('description', description);
            formData.append('photo', photo);
            formData.append('date', date);

            const response = await axios.post(`http://localhost:8000/progress/${superId}`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            console.log('Progress added:', response.data);
            alert('Progress added successfully');
            navigate("/supervisor");
        } catch (error) {
            console.error('Error adding progress:', error);
            alert('Error adding progress. Please try again.');
        }
    };

    return (
        <div className="container mt-4">
            <h1 className='text-white text-center'><b>Add Progress</b></h1>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="description" className="form-label">Description:</label>
                    <input
                        type="text"
                        className="form-control"
                        id="description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="photo" className="form-label">Photo:</label>
                    <input
                        type="file"
                        className="form-control"
                        id="photo"
                        accept="image/*"
                        onChange={(e) => setPhoto(e.target.files[0])}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="date" className="form-label">Date:</label>
                    <input
                        type="date"
                        className="form-control"
                        id="date"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                    />
                </div>
                {/* Add other form fields */}
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    );
}

export default AddProgress;

