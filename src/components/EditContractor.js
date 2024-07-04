// import React from 'react'
// import { useParams } from 'react-router-dom';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import { useState , useEffect } from 'react';

// function EditContractor() {
//     const[id,setId]=useState('')
//     const [role, setRole] = useState('');
//     const [username, setUsername] = useState('');
//     const [name, setName] = useState('');
//     const [email, setEmail] = useState('');
//     const [age, setAge] = useState('');
//     const [gender, setGender] = useState('');
//     const [photo, setPhoto] = useState(null);
//     const [phone, setPhone] = useState('');
//     const [place, setPlace] = useState('');
//     const [post, setPost] = useState('');
//     const [pin, setPin] = useState('');
//     const [experience, setExperience] = useState('');
//     const [qualification, setQualification] = useState('');
//     const [certificate, setCertificate] = useState(null);
//     const params = useParams();
//     const navigate = useNavigate();


//     const superId = localStorage.getItem('userId');
//     console.log('super',superId);
  
//     useEffect(() => {
//       getEmployee();
//     }, []);
  
//     const getEmployee = async () => {
//       try {
//         const response = await axios.get(`http://localhost:8000/partiengineer/${superId}`);
//         const empdata = response.data.engineer;
//         console.log(empdata);
//         setId(empdata.id)
//         setRole(empdata.role);
//         setUsername(empdata.commondetails.username);
//         setName(empdata.name);
//         setEmail(empdata.email);
//         setAge(empdata.age);
//         setGender(empdata.gender);
//         setPhoto(empdata.photo); 
//         setPhone(empdata.phone);
//         setPlace(empdata.place);
//         setPost(empdata.post);
//         setPin(empdata.pin);
//         setExperience(empdata.experience);
//         setQualification(empdata.qualification);
//       } catch (error) {
//         console.error('Error:', error);
//       }
//     };

//     const handlesubmit = async (e) => {
//         e.preventDefault();
//         try {
//           const formData = new FormData();
//           formData.append('id', id);
//           formData.append('role', role);
//           formData.append('name', name);
//           formData.append('username', username);
//           formData.append('email', email);
//           formData.append('age', age);
//           formData.append('gender', gender);
//           formData.append('photo', photo);
//           formData.append('phone', phone);
//           formData.append('experience', experience);
//           formData.append('qualification', qualification);
//           formData.append('certificate', certificate);
//           formData.append('place', place);
//           formData.append('post', post);
//           formData.append('pin', pin);
    
//           const response = await axios.post(`http://localhost:8000/updateemployee`, formData, {
//             headers: {
//               'Content-Type': 'multipart/form-data'
//             }
//           });
//           alert(response.data.message);
//           navigate('/contractor');
//         } catch (error) {
//           console.error('Error:', error);
//         }
//       };
//   return (
// <div>
//       <div className="container">
//         <div className="row">
//           <div className="col-md-1 col-lg-2"></div>
//           <div className="col-12 col-md-10 col-lg-8">
//             <div className="row">
//               <div className="col-12">
//                 <h4 className="mt-2 text-light text-center">Edit Employee Details</h4>
//               </div>
//               <div className="col-12 d-flex justify-content-center px-3 px-md-4">
//                 <div className="card border border-success rounded-4 col-10">
//                   <div className="card-body px-4 py-2">
//                     <form   encType="multipart/form-data" onSubmit={handlesubmit} >
//                       <div className="row">
//                         <div className="col-6">
//                           <label htmlFor="role" className="form-label p-1">Role</label>
//                           <select value={role} id="role" className="form-select form-select-sm" onChange={(e) => setRole(e.target.value)}>
//                             <option value="Engineer">Engineer</option>
//                             <option value="Contractor">Contractor</option>
//                             <option value="Supervisor">Supervisor</option>
//                           </select>
//                         </div>
//                         <div className="col-6">
//                           <label htmlFor="photo" className="form-label p-1">Photo</label>
//                           <input className="form-control form-control-sm" type="file" id="photo" onChange={(e) => setPhoto(e.target.files[0])} />
//                           {photo && <img src={typeof photo === 'string' ? photo : URL.createObjectURL(photo)} alt="Employee" style={{ maxWidth: '100%', marginTop: '5px' }} />}
//                         </div>
//                         <div className="col-6">
//                           <label htmlFor="name" className="form-label p-1">Name</label>
//                           <input type="text" value={name} className="form-control form-control-sm" id="name" onChange={(e) => setName(e.target.value)} />
//                         </div>
//                         <div className="col-6">
//                           <label htmlFor="email" className="form-label p-1">Email</label>
//                           <input type="email" value={email} className="form-control form-control-sm" id="email" onChange={(e) => setEmail(e.target.value)} />
//                         </div>
//                         <div className="col-6">
//                           <label htmlFor="username" className="form-label p-1">Username</label>
//                           <input type="text" value={username} className="form-control form-control-sm" id="username" onChange={(e) => setUsername(e.target.value)} />
//                         </div>
//                         <div className="col-4">
//                           <label htmlFor="age" className="form-label p-1">Age</label>
//                           <input type="number" value={age} className="form-control form-control-sm" id="age" onChange={(e) => setAge(e.target.value)} />
//                         </div>
//                         <div className="col-4">
//                           <label htmlFor="gender" className="form-label p-1">Gender</label>
//                           <select value={gender} id="gender" className="form-select form-select-sm" onChange={(e) => setGender(e.target.value)}>
//                             <option value="Male">Male</option>
//                             <option value="Female">Female</option>
//                             <option value="Other">Other</option>
//                           </select>
//                         </div>
//                         <div className="col-4">
//                           <label htmlFor="phone" className="form-label p-1">Phone Number</label>
//                           <input type="tel" value={phone} className="form-control form-control-sm" id="phone" onChange={(e) => setPhone(e.target.value)} />
//                         </div>
                      
//                         <div className="col-6">
//                           <label htmlFor="place" className="form-label p-1">Place</label>
//                           <input type="text" value={place} className="form-control form-control-sm" id="place" onChange={(e) => setPlace(e.target.value)} />
//                         </div>
//                         <div className="col-4">
//                           <label htmlFor="post" className="form-label p-1">Post</label>
//                           <input type="text" value={post} className="form-control form-control-sm" id="post" onChange={(e) => setPost(e.target.value)} />
//                         </div>
//                         <div className="col-4">
//                           <label htmlFor="pin" className="form-label p-1">PIN</label>
//                           <input type="text" value={pin} className="form-control form-control-sm" id="pin" onChange={(e) => setPin(e.target.value)} />
//                         </div>
//                         <div className="col-4">
//                           <label htmlFor="experience" className="form-label p-1">Experience</label>
//                           <input type="text" value={experience} className="form-control form-control-sm" id="experience" onChange={(e) => setExperience(e.target.value)} />
//                         </div>
//                         <div className="col-6">
//                           <label htmlFor="qualification" className="form-label p-1">Qualification</label>
//                           <input type="text" value={qualification} className="form-control form-control-sm" id="qualification" onChange={(e) => setQualification(e.target.value)} />
//                         </div>
//                         <div className="col-6">
//                           <label htmlFor="certificate" className="form-label p-1">Certificate</label>
//                           <input type="file" className="form-control form-control-sm" id="certificate" onChange={(e) => setCertificate(e.target.files[0])} />
//                         </div>
//                         <div className="col-12 mt-2 text-center">
//                           <button className="btn btn-lg btn-outline-success mybtn" type="submit">Update</button>
//                         </div>
//                       </div>
//                     </form>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="col-md-1 col-lg-2"></div>
//         </div>
//       </div>
//     </div>   )
// }

// export default EditContractor
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function EditContractor() {
  const [role, setRole] = useState('');
  const [username, setUsername] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [photo, setPhoto] = useState(null);
  const [phone, setPhone] = useState('');
  const [place, setPlace] = useState('');
  const [post, setPost] = useState('');
  const [pin, setPin] = useState('');
  const [experience, setExperience] = useState('');
  const [qualification, setQualification] = useState('');
  const [certificate, setCertificate] = useState(null);
  const [formErrors, setFormErrors] = useState({});
  const params = useParams();
  const navigate = useNavigate();

  const superId = localStorage.getItem('userId');

  useEffect(() => {
    getContractor();
  }, []);

  const getContractor = async () => {
    try {
      const response = await axios.get(`http://localhost:8000/partiengineer/${superId}`);
      const contractorData = response.data.engineer;
      console.log(contractorData);
      setRole(contractorData.role);
      setUsername(contractorData.commondetails.username);
      setName(contractorData.name);
      setEmail(contractorData.email);
      setAge(contractorData.age);
      setGender(contractorData.gender);
      setPhoto(contractorData.photo); 
      setPhone(contractorData.phone);
      setPlace(contractorData.place);
      setPost(contractorData.post);
      setPin(contractorData.pin);
      setExperience(contractorData.experience);
      setQualification(contractorData.qualification);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const validateForm = () => {
    let errors = {};
    let formIsValid = true;

    // Name validation
    if (!name) {
      formIsValid = false;
      errors["name"] = "Name is required.";
    }

    // Email validation
    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      formIsValid = false;
      errors["email"] = "Please enter a valid email address.";
    }

    // Age validation
    if (!age || isNaN(Number(age)) || age.length > 2) {
      formIsValid = false;
      errors["age"] = "Age should be at most 2 digits.";
    }

    // Phone validation
    if (!phone || !/^\d{10}$/.test(phone)) {
      formIsValid = false;
      errors["phone"] = "Phone should be exactly 10 digits.";
    }

    // Pin validation
    if (!pin || !/^\d{6}$/.test(pin)) {
      formIsValid = false;
      errors["pin"] = "Pin should be 6 digits.";
    }

    // Experience validation
    if (!experience || isNaN(Number(experience)) || experience.length > 2) {
      formIsValid = false;
      errors["experience"] = "Experience should be at most 2 digits.";
    }

    // Qualification validation
    if (!qualification) {
      formIsValid = false;
      errors["qualification"] = "Qualification is required.";
    }

    setFormErrors(errors);
    return formIsValid;
  };

  const handlesubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      try {
        const formData = new FormData();
        formData.append('id', superId);
        formData.append('role', role);
        formData.append('name', name);
        formData.append('username', username);
        formData.append('email', email);
        formData.append('age', age);
        formData.append('gender', gender);
        formData.append('photo', photo);
        formData.append('phone', phone);
        formData.append('experience', experience);
        formData.append('qualification', qualification);
        formData.append('certificate', certificate);
        formData.append('place', place);
        formData.append('post', post);
        formData.append('pin', pin);

        const response = await axios.post(`http://localhost:8000/updateemployee`, formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        });
        alert(response.data.message);
        navigate('/contractor');
      } catch (error) {
        console.error('Error:', error);
      }
    }
  };

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-1 col-lg-2"></div>
          <div className="col-12 col-md-10 col-lg-8">
            <div className="row">
              <div className="col-12">
                <h4 className="mt-2 text-light text-center">Edit Contractor Details</h4>
              </div>
              <div className="col-12 d-flex justify-content-center px-3 px-md-4">
                <div className="card border border-success rounded-4 col-10">
                  <div className="card-body px-4 py-2">
                    <form encType="multipart/form-data" onSubmit={handlesubmit}>
                      <div className="row">
                        <div className="col-6">
                          <label htmlFor="role" className="form-label p-1">Role</label>
                          <select value={role} id="role" className="form-select form-select-sm" onChange={(e) => setRole(e.target.value)}>
                            <option value="Engineer">Engineer</option>
                            <option value="Contractor">Contractor</option>
                            <option value="Supervisor">Supervisor</option>
                          </select>
                        </div>
                        <div className="col-6">
                          <label htmlFor="photo" className="form-label p-1">Photo</label>
                          <input className="form-control form-control-sm" type="file" id="photo" onChange={(e) => setPhoto(e.target.files[0])} />
                          {photo && <img src={typeof photo === 'string' ? photo : URL.createObjectURL(photo)} alt="Contractor" style={{ maxWidth: '100%', marginTop: '5px' }} />}
                        </div>
                        <div className="col-6">
                          <label htmlFor="name" className="form-label p-1">Name</label>
                          <input type="text" value={name} className={`form-control form-control-sm ${formErrors.name ? 'is-invalid' : ''}`} id="name" onChange={(e) => setName(e.target.value)} />
                          {formErrors.name && <div className="invalid-feedback">{formErrors.name}</div>}
                        </div>
                        <div className="col-6">
                          <label htmlFor="email" className="form-label p-1">Email</label>
                          <input type="email" value={email} className={`form-control form-control-sm ${formErrors.email ? 'is-invalid' : ''}`} id="email" onChange={(e) => setEmail(e.target.value)} />
                          {formErrors.email && <div className="invalid-feedback">{formErrors.email}</div>}
                        </div>
                        <div className="col-4">
                          <label htmlFor="age" className="form-label p-1">Age</label>
                          <input type="number" value={age} className={`form-control form-control-sm ${formErrors.age ? 'is-invalid' : ''}`} id="age" onChange={(e) => setAge(e.target.value)} />
                          {formErrors.age && <div className="invalid-feedback">{formErrors.age}</div>}
                        </div>
                        <div className="col-4">
                          <label htmlFor="gender" className="form-label p-1">Gender</label>
                          <select value={gender} id="gender" className="form-select form-select-sm" onChange={(e) => setGender(e.target.value)}>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                            <option value="Other">Other</option>
                          </select>
                        </div>
                        <div className="col-4">
                          <label htmlFor="phone" className="form-label p-1">Phone Number</label>
                          <input type="tel" value={phone} className={`form-control form-control-sm ${formErrors.phone ? 'is-invalid' : ''}`} id="phone" onChange={(e) => setPhone(e.target.value)} />
                          {formErrors.phone && <div className="invalid-feedback">{formErrors.phone}</div>}
                        </div>
                        <div className="col-6">
                          <label htmlFor="place" className="form-label p-1">Place</label>
                          <input type="text" value={place} className="form-control form-control-sm" id="place" onChange={(e) => setPlace(e.target.value)} />
                        </div>
                        <div className="col-4">
                          <label htmlFor="post" className="form-label p-1">Post</label>
                          <input type="text" value={post} className="form-control form-control-sm" id="post" onChange={(e) => setPost(e.target.value)} />
                        </div>
                        <div className="col-4">
                          <label htmlFor="pin" className="form-label p-1">PIN</label>
                          <input type="text" value={pin} className={`form-control form-control-sm ${formErrors.pin ? 'is-invalid' : ''}`} id="pin" onChange={(e) => setPin(e.target.value)} />
                          {formErrors.pin && <div className="invalid-feedback">{formErrors.pin}</div>}
                        </div>
                        <div className="col-4">
                          <label htmlFor="experience" className="form-label p-1">Experience</label>
                          <input type="text" value={experience} className={`form-control form-control-sm ${formErrors.experience ? 'is-invalid' : ''}`} id="experience" onChange={(e) => setExperience(e.target.value)} />
                          {formErrors.experience && <div className="invalid-feedback">{formErrors.experience}</div>}
                        </div>
                        <div className="col-6">
                          <label htmlFor="qualification" className="form-label p-1">Qualification</label>
                          <input type="text" value={qualification} className={`form-control form-control-sm ${formErrors.qualification ? 'is-invalid' : ''}`} id="qualification" onChange={(e) => setQualification(e.target.value)} />
                          {formErrors.qualification && <div className="invalid-feedback">{formErrors.qualification}</div>}
                        </div>
                        <div className="col-6">
                          <label htmlFor="certificate" className="form-label p-1">Certificate</label>
                          <input type="file" className="form-control form-control-sm" id="certificate" onChange={(e) => setCertificate(e.target.files[0])} />
                        </div>
                        <div className="col-12 mt-2 text-center">
                          <button className="btn btn-lg btn-outline-success mybtn" type="submit">Update</button>
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

export default EditContractor;