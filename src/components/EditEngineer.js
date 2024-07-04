// import React from 'react'
// import { useParams } from 'react-router-dom';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import { useState , useEffect } from 'react';
// function EditEngineer() {
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
//           navigate('/engineer');
//         } catch (error) {
//           console.error('Error:', error);
//         }
//       };
//   return (
//     <div>

// <div className="container">
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





//     </div>
//   )
// }

// export default EditEngineer
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

function EditEngineer() {
  const [id, setId] = useState('');
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
  const [errors, setErrors] = useState({});

  const params = useParams();
  const navigate = useNavigate();
  const superId = localStorage.getItem('userId');

  useEffect(() => {
    getEmployee();
  }, []);

  const getEmployee = async () => {
    try {
      const response = await axios.get(`http://localhost:8000/partiengineer/${superId}`);
      const empdata = response.data.engineer;
      console.log(empdata);
      setId(empdata.id)
      setRole(empdata.role);
      setUsername(empdata.commondetails.username);
      setName(empdata.name);
      setEmail(empdata.email);
      setAge(empdata.age);
      setGender(empdata.gender);
      setPhoto(empdata.photo); 
      setPhone(empdata.phone);
      setPlace(empdata.place);
      setPost(empdata.post);
      setPin(empdata.pin);
      setExperience(empdata.experience);
      setQualification(empdata.qualification);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const validateForm = () => {
    const errors = {};

    if (!/^[a-zA-Z]+$/.test(username)) {
      errors.username = 'Username should contain only alphabets.';
    }

    if (!/^[a-zA-Z]+$/.test(name)) {
      errors.name = 'Name should contain only alphabets.';
    }

    if (!/^\S+@\S+\.\S+$/.test(email)) {
      errors.email = 'Email is not valid.';
    }

    if (!age || isNaN(age) || age < 18 || age > 100) {
      errors.age = 'Age is required and must be between 18 and 100';
   
    }

    if (!/^\d{6}$/.test(pin)) {
      errors.pin = 'PIN should be 6 numbers.';
    }

    if (!/^\d{10}$/.test(phone)) {
      errors.phone = 'Phone number should be 10 numbers.';
    }

    if (!/^\d{1,2}$/.test(experience)) {
      errors.experience = 'Experience should be maximum 2 numbers.';
    }

    if (!/^[a-zA-Z]+$/.test(qualification)) {
      errors.qualification = 'Qualification should contain only alphabets.';
    }

    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formErrors = validateForm();

    if (Object.keys(formErrors).length === 0) {
      try {
        const formData = new FormData();
        formData.append('id', id);
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
        navigate('/engineer');
      } catch (error) {
        console.error('Error:', error);
      }
    } else {
      setErrors(formErrors);
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-1 col-lg-2"></div>
        <div className="col-12 col-md-10 col-lg-8">
          <div className="row">
            <div className="col-12">
              <h4 className="mt-2 text-light text-center">Edit Employee Details</h4>
            </div>
            <div className="col-12 d-flex justify-content-center px-3 px-md-4">
              <div className="card border border-success rounded-4 col-10">
                <div className="card-body px-4 py-2">
                  <form encType="multipart/form-data" onSubmit={handleSubmit}>
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
                        {photo && <img src={typeof photo === 'string' ? photo : URL.createObjectURL(photo)} alt="Employee" style={{ maxWidth: '100%', marginTop: '5px' }} />}
                      </div>
                      <div className="col-6">
                        <label htmlFor="name" className="form-label p-1">Name</label>
                        <input type="text" value={name} className={`form-control form-control-sm ${errors.name ? 'is-invalid' : ''}`} id="name" onChange={(e) => setName(e.target.value)} />
                        {errors.name && <div className="invalid-feedback">{errors.name}</div>}
                      </div>
                      <div className="col-6">
                        <label htmlFor="email" className="form-label p-1">Email</label>
                        <input type="email" value={email} className={`form-control form-control-sm ${errors.email ? 'is-invalid' : ''}`} id="email" onChange={(e) => setEmail(e.target.value)} />
                        {errors.email && <div className="invalid-feedback">{errors.email}</div>}
                      </div>
                      <div className="col-6">
                        <label htmlFor="username" className="form-label p-1">Username</label>
                        <input type="text" value={username} className={`form-control form-control-sm ${errors.username ? 'is-invalid' : ''}`} id="username" onChange={(e) => setUsername(e.target.value)} />
                        {errors.username && <div className="invalid-feedback">{errors.username}</div>}
                      </div>
                      <div className="col-4">
                        <label htmlFor="age" className="form-label p-1">Age</label>
                        <input type="number" value={age} className={`form-control form-control-sm ${errors.age ? 'is-invalid' : ''}`} id="age" onChange={(e) => setAge(e.target.value)} />
                        {errors.age && <div className="invalid-feedback">{errors.age}</div>}
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
                        <input type="tel" value={phone} className={`form-control form-control-sm ${errors.phone ? 'is-invalid' : ''}`} id="phone" onChange={(e) => setPhone(e.target.value)} />
                        {errors.phone && <div className="invalid-feedback">{errors.phone}</div>}
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
                        <input type="text" value={pin} className={`form-control form-control-sm ${errors.pin ? 'is-invalid' : ''}`} id="pin" onChange={(e) => setPin(e.target.value)} />
                        {errors.pin && <div className="invalid-feedback">{errors.pin}</div>}
                      </div>
                      <div className="col-4">
                        <label htmlFor="experience" className="form-label p-1">Years of Experience</label>
                        <input type="text" value={experience} className={`form-control form-control-sm ${errors.experience ? 'is-invalid' : ''}`} id="experience" onChange={(e) => setExperience(e.target.value)} />
                        {errors.experience && <div className="invalid-feedback">{errors.experience}</div>}
                      </div>
                      <div className="col-6">
                        <label htmlFor="qualification" className="form-label p-1">Qualification</label>
                        <input type="text" value={qualification} className={`form-control form-control-sm ${errors.qualification ? 'is-invalid' : ''}`} id="qualification" onChange={(e) => setQualification(e.target.value)} />
                        {errors.qualification && <div className="invalid-feedback">{errors.qualification}</div>}
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
  );
}

export default EditEngineer;