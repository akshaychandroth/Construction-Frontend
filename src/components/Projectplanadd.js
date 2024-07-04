


// import React, { useState } from 'react';
// import axios from 'axios';
// import '../css/bootstrap/css/bootstrap.css';
// import '../css/bootstrap/css/style.css';
// import { useParams } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';



// function Projectplanadd() {
//     const [planFile, setPlanFile] = useState(null);
//     const [estimationFile, setEstimationFile] = useState(null);
//     const [plandescription, setPlandescription] = useState('');
//     const params = useParams();
//     const navigate= useNavigate()

//     const handlePlanFileChange = (e) => {
//         setPlanFile(e.target.files[0]);
//     };

//     const handleEstimationFileChange = (e) => {
//         setEstimationFile(e.target.files[0]);
//     };

//     const handlePlandescriptionChange = (e) => {
//         setPlandescription(e.target.value);
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         try {
//             const formData = new FormData();
//             formData.append('planFile', planFile);
//             formData.append('estimationFile', estimationFile);
//             formData.append('plandescription', plandescription);

//             await axios.post(`http://localhost:8000/projects/${params.id}/upload`, formData, {
//                 headers: {
//                     'Content-Type': 'multipart/form-data'
//                 }
//             });

//             alert('Files uploaded successfully!');
//             navigate('/engineer')
//         } catch (error) {
//             console.error('Error uploading files:', error);
//         }
//     };

//     return (
//         <div>
//             <nav className="navbar navbar-expand-lg navbar-light pb-0 mb-0">
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
//                                 <h4 className="mb-2 text-light text-center">Add project plan and documents:</h4>
//                             </div>
//                             <div className="col-12 d-flex justify-content-center px-3 px-md-4">
//                                 <div className="card border border-success rounded-4 col-10">
//                                     <div className="card-body px-4 py-3">
//                                         <form onSubmit={handleSubmit}>
//                                             <div className="row">
//                                                 <div className="col-6">
//                                                     <label htmlFor="plandoc" className="form-label p-1">Upload Plan</label>
//                                                     <input onChange={handlePlanFileChange} controlId="planFile" className="form-control form-control-sm" type="file" id="plandoc" accept="application/pdf" multiple/>
//                                                 </div>
//                                                 <div className="col-6">
//                                                     <label htmlFor="estimatedoc" className="form-label p-1">Upload Estimation</label>
//                                                     <input controlId="estimationFile" className="form-control form-control-sm" onChange={handleEstimationFileChange} type="file" id="estimatedoc"/>
//                                                 </div>
//                                                 <div className="col-12">
//                                                     <label htmlFor="plandescription" className="form-label p-1">Plan Description</label>
//                                                     <textarea className="form-control" id="plandescription" rows="3" value={plandescription} onChange={handlePlandescriptionChange}></textarea>
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
//         </div>
//     );
// }

// export default Projectplanadd;
import React, { useState , useEffect } from 'react';
import axios from 'axios';
import '../css/bootstrap/css/bootstrap.css';
import '../css/bootstrap/css/style.css';
import { useParams } from 'react-router-dom';
import { useNavigate , useLocation } from 'react-router-dom';



function Projectplanadd() {
    const [planFile, setPlanFile] = useState(null);
    const [estimationFile, setEstimationFile] = useState(null);
    const [plandescription, setPlandescription] = useState('');
    const [designFile, setDesignFile] = useState(null);

    const params = useParams();
    const navigate= useNavigate()
    const { id } = useParams();

    const location = useLocation();
    const action = new URLSearchParams(location.search).get('action');


    useEffect(() => {
        if (action === 'update') {
        }
    }, [id, action]);

    const handlePlanFileChange = (e) => {
        setPlanFile(e.target.files[0]);
    };
    const handleDesignFileChange = (e) => {
        setDesignFile(e.target.files[0]);
    };

    const handleEstimationFileChange = (e) => {
        setEstimationFile(e.target.files[0]);
    };

    const handlePlandescriptionChange = (e) => {
        setPlandescription(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const formData = new FormData();
            formData.append('planFile', planFile);
            formData.append('estimationFile', estimationFile);
            formData.append('plandescription', plandescription);
            formData.append('designFile',designFile)

            await axios.post(`http://localhost:8000/projects/${params.id}/upload`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });

            alert('Files uploaded successfully!');
            navigate('/engineer')
        } catch (error) {
            console.error('Error uploading files:', error);
        }
    };

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light pb-0 mb-0">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                        <img src={require("../img/logowhite.png")} width="55" height="55" alt="Logo"/>
                    </a>
                </div>
            </nav>
            <div className="container-fluid page-margin p-2 ">
                <div className="row mb-2">
                    <div className="col-md-1 col-lg-2"></div>
                    <div className="col-12 col-md-10 col-lg-8">
                        <div className="row">
                            <div className="col-12">
                                <h4 className="mb-2 text-light text-center">Add project plan and documents:</h4>
                            </div>
                            <div className="col-12 d-flex justify-content-center px-3 px-md-4">
                                <div className="card border border-success rounded-4 col-10">
                                    <div className="card-body px-4 py-3">
                                        <form onSubmit={handleSubmit}>
                                            <div className="row">
                                                <div className="col-6">
                                                    <label htmlFor="plandoc" className="form-label p-1">Upload Plan</label>
                                                    <input onChange={handlePlanFileChange} controlId="planFile" className="form-control form-control-sm" type="file" id="plandoc" accept="application/pdf" multiple/>
                                                </div>
                                                <div className="col-6">
                                                    <label htmlFor="designdoc" className="form-label p-1">Upload Design</label>
                                                    <input onChange={handleDesignFileChange} controlId="planFile" className="form-control form-control-sm" type="file" id="designdoc" accept="application/pdf" multiple/>
                                                </div>
                                                <div className="col-6">
                                                    <label htmlFor="estimatedoc" className="form-label p-1">Upload Estimation</label>
                                                    <input controlId="estimationFile" className="form-control form-control-sm" onChange={handleEstimationFileChange} type="file" id="estimatedoc"/>
                                                </div>
                                                <div className="col-12">
                                                    <label htmlFor="plandescription" className="form-label p-1">Plan Description</label>
                                                    <textarea className="form-control" id="plandescription" rows="3" value={plandescription} onChange={handlePlandescriptionChange}></textarea>
                                                </div>
                                                <div className="col-12 mt-2 text-center">
                                                    <button className="btn btn-lg btn-outline-success" type="submit">Submit</button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-1 col-lg-2"></div>
                </div>
            </div>
        </div>
    );
}

export default Projectplanadd;
