
// import React, { useState } from 'react';
// import axios from 'axios';
// import '../css/bootstrap/css/bootstrap.css';
// import '../css/bootstrap/css/style.css';
// import { useParams } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';

// function Contractoradd() {
//     const [BillFile, setBillFile] = useState(null);
//     const [AdditionalFile, setAdditionalFile] = useState(null);
//     const [Billdescription, setBilldescription] = useState('');
//     const params = useParams();
//     const navigate = useNavigate()

//     const handleBillFileChange = (e) => {
//         setBillFile(e.target.files[0]);
//     };

//     const handleAdditionalFileChange = (e) => {
//         setAdditionalFile(e.target.files[0]);
//     };

//     const handleBilldescriptionChange = (e) => {
//         setBilldescription(e.target.value);
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         try {
//             const formData = new FormData();
//             formData.append('billFile', BillFile);
//             formData.append('additionalFile', AdditionalFile);
//             formData.append('billdescription', Billdescription);

//             await axios.post(`http://localhost:8000/contractoradd/${params.id}/upload`, formData, {
//                 headers: {
//                     'Content-Type': 'multipart/form-data'
//                 }
//             });

//             alert('Files uploaded successfully!');
//             navigate('/contractor')


//         } catch (error) {
//             console.error('Error uploading files:', error);
//         }
//     };
//   return (
//     <div>
//          <nav className="navbar navbar-expand-lg navbar-light pb-0 mb-0">
//                 <div className="container-fluid">
//                     <a className="navbar-brand" href="#">
//                         <img src={require("../img/logowhite.png")} width="55" height="55" alt="Logo"/>
//                     </a>
//                 </div>
//             </nav>
//             <div className="container-fluid page-margin p-2 ">
//                 <div className="row mb-2">
//                     <div className="col-md-1 col-lg-2"></div>
//                     <div className="col-12 col-md-10 col-lg-8">
//                         <div className="row">
//                             <div className="col-12">
//                                 <h4 className="mb-2 text-light text-center">Add project bills:</h4>
//                             </div>
//                             <div className="col-12 d-flex justify-content-center px-3 px-md-4">
//                                 <div className="card border border-success rounded-4 col-10">
//                                     <div className="card-body px-4 py-3">
//                                         <form onSubmit={handleSubmit}>
//                                             <div className="row">
//                                                 <div className="col-6">
//                                                     <label htmlFor="billdoc" className="form-label p-1">Upload work bill</label>
//                                                     <input onChange={handleBillFileChange} controlId="planFile" className="form-control form-control-sm" type="file" id="billdoc" accept="application/pdf" multiple/>
//                                                 </div>
//                                                 <div className="col-6">
//                                                     <label htmlFor="additionaldoc" className="form-label p-1">purchase bill</label>
//                                                     <input controlId="estimationFile" className="form-control form-control-sm" onChange={handleAdditionalFileChange} type="file" id="additionaldoc"/>
//                                                 </div>
//                                                 <div className="col-12">
//                                                     <label htmlFor="billdescription" className="form-label p-1">Description</label>
//                                                     <textarea className="form-control" id="billdescription" rows="3" value={Billdescription} onChange={handleBilldescriptionChange}></textarea>
//                                                 </div>
//                                                 <div className="col-12 mt-2 text-center">
//                                                     <button className="btn btn-lg btn-outline-success" type="submit">Submit</button>
//                                                 </div>
//                                             </div>
//                                         </form>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                     <div className="col-md-1 col-lg-2"></div>
//                 </div>
//             </div>
//     </div>
//   )
// }

// export default Contractoradd


import React, { useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
function Contractoradd() {
    const project = useParams();
    const [description, setDescription] = useState('');
    const [document, setDocument] = useState(null);
    const navigate = useNavigate();
    const projectId = project.id
console.log(projectId);
    const superId = localStorage.getItem('userId');


    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.get(`http://localhost:8000/partiengineer/${superId}`);
            const cliId = res.data.engineer._id;

            const formData = new FormData();
            formData.append('projectid', projectId);
            formData.append('description', description);
            formData.append('document', document);

            const response = await axios.post(`http://localhost:8000/documentscontractor/${cliId}`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });

            console.log('Document added:', response.data);
            alert('Document added successfully!');
            navigate('/contractor');
        } catch (error) {
            console.error('Error adding document:', error);
        }
    };


    const Back =()=>{
        navigate('/contractor')
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
</div>  )
}

export default Contractoradd
