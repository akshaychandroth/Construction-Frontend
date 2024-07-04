
// import React, { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

// function Editemployee() {
//   const [role, setRole] = useState('');
//   const [username, setUsername] = useState('');
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [age, setAge] = useState('');
//   const [gender, setGender] = useState('');
//   const [photo, setPhoto] = useState(null);
//   const [phone, setPhone] = useState('');
//   const [house, setHouse] = useState('');
//   const [place, setPlace] = useState('');
//   const [post, setPost] = useState('');
//   const [pin, setPin] = useState('');
//   const [experience, setExperience] = useState('');
//   const [qualification, setQualification] = useState('');
//   const [certificate, setCertificate] = useState(null);
//   const params = useParams();
//   const navigate = useNavigate();

//   useEffect(() => {
//     getEmployee();
//   }, []);

//   const getEmployee = async () => {
//     try {
//       const response = await axios.get(`http://localhost:8000/getemployee/${params.id}`);
//       const empdata = response.data;
//       setRole(empdata.role);
//       setUsername(empdata.commondetails.username);
//       setName(empdata.name);
//       setEmail(empdata.email);
//       setAge(empdata.age);
//       setGender(empdata.gender);
//       setPhoto(empdata.photo); 
//       setPhone(empdata.phone);
//       setHouse(empdata.house);
//       setPlace(empdata.place);
//       setPost(empdata.post);
//       setPin(empdata.pin);
//       setExperience(empdata.experience);
//       setQualification(empdata.qualification);
//     } catch (error) {
//       console.error('Error:', error);
//     }
//   };

//   const handlesubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const formData = new FormData();
//       formData.append('id', params.id);
//       formData.append('role', role);
//       formData.append('name', name);
//       formData.append('username', username);
//       formData.append('email', email);
//       formData.append('age', age);
//       formData.append('gender', gender);
//       formData.append('photo', photo);
//       formData.append('phone', phone);
//       formData.append('experience', experience);
//       formData.append('qualification', qualification);
//       formData.append('certificate', certificate);
//       formData.append('house', house);
//       formData.append('place', place);
//       formData.append('post', post);
//       formData.append('pin', pin);

//       const response = await axios.post('http://localhost:8000/updateemployee', formData, {
//         headers: {
//           'Content-Type': 'multipart/form-data'
//         }
//       });
//       alert(response.data.message);
//       navigate('/listemployees');
//     } catch (error) {
//       console.error('Error:', error);
//     }
//   };

//   return (
//     <div>
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
//                     <form   encType="multipart/form-data"  onSubmit={handlesubmit}>
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
//                           <label htmlFor="house" className="form-label p-1">House Name</label>
//                           <input type="text" value={house} className="form-control form-control-sm" id="house" onChange={(e) => setHouse(e.target.value)} />
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
//   );
// }

// export default Editemployee;

import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Editemployee() {
  const [role, setRole] = useState('');
  const [username, setUsername] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [photo, setPhoto] = useState(null);
  const [phone, setPhone] = useState('');
  const [house, setHouse] = useState('');
  const [place, setPlace] = useState('');
  const [post, setPost] = useState('');
  const [pin, setPin] = useState('');
  const [experience, setExperience] = useState('');
  const [qualification, setQualification] = useState('');
  const [certificate, setCertificate] = useState(null);
  const [formErrors, setFormErrors] = useState({});
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    getEmployee();
  }, []);

  const getEmployee = async () => {
    try {
      const response = await axios.get(`http://localhost:8000/getemployee/${params.id}`);
      const empdata = response.data;
      setRole(empdata.role);
      setUsername(empdata.commondetails.username);
      setName(empdata.name);
      setEmail(empdata.email);
      setAge(empdata.age);
      setGender(empdata.gender);
      setPhoto(empdata.photo); 
      setPhone(empdata.phone);
      setHouse(empdata.house);
      setPlace(empdata.place);
      setPost(empdata.post);
      setPin(empdata.pin);
      setExperience(empdata.experience);
      setQualification(empdata.qualification);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handlesubmit = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      try {
        const formData = new FormData();
        formData.append('id', params.id);
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
        formData.append('house', house);
        formData.append('place', place);
        formData.append('post', post);
        formData.append('pin', pin);

        const response = await axios.post('http://localhost:8000/updateemployee', formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        });
        alert(response.data.message);
        navigate('/listemployees');
      } catch (error) {
        console.error('Error:', error);
      }
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
    if (!age || isNaN(age) || age < 18 || age > 100) {
      formIsValid = false;
      errors["age"] ='Age is required and must be between 18 and 100';
    }

    // Phone validation
    if (!phone || !/^\d{10}$/.test(phone)) {
      formIsValid = false;
      errors["phone"] = "Phone should be  10 digits.";
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

  return (
    <div>
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
                          {photo && <img src={typeof photo === 'string' ? photo : URL.createObjectURL(photo)} alt="Employee" style={{ maxWidth: '100%', marginTop: '5px' }} />}
                        </div>
                        <div className="col-6">
                          <label htmlFor="name" className="form-label p-1">Name</label>
                          <input type="text" value={name} className="form-control form-control-sm" id="name" onChange={(e) => setName(e.target.value)} />
                          {formErrors.name && <div className="text-danger">{formErrors.name}</div>}
                        </div>
                        <div className="col-6">
                          <label htmlFor="email" className="form-label p-1">Email</label>
                          <input type="email" value={email} className="form-control form-control-sm" id="email" onChange={(e) => setEmail(e.target.value)} />
                          {formErrors.email && <div className="text-danger">{formErrors.email}</div>}
                        </div>
                        <div className="col-6">
                          <label htmlFor="username" className="form-label p-1">Username</label>
                          <input type="text" value={username} className="form-control form-control-sm" id="username" onChange={(e) => setUsername(e.target.value)} />
                        </div>
                        <div className="col-4">
                          <label htmlFor="age" className="form-label p-1">Age</label>
                          <input type="number" value={age} className="form-control form-control-sm" id="age" onChange={(e) => setAge(e.target.value)} />
                          {formErrors.age && <div className="text-danger">{formErrors.age}</div>}
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
                          <input type="tel" value={phone} className="form-control form-control-sm" id="phone" onChange={(e) => setPhone(e.target.value)} />
                          {formErrors.phone && <div className="text-danger">{formErrors.phone}</div>}
                        </div>
                        <div className="col-6">
                          <label htmlFor="house" className="form-label p-1">House Name</label>
                          <input type="text" value={house} className="form-control form-control-sm" id="house" onChange={(e) => setHouse(e.target.value)} />
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
                          <input type="text" value={pin} className="form-control form-control-sm" id="pin" onChange={(e) => setPin(e.target.value)} />
                          {formErrors.pin && <div className="text-danger">{formErrors.pin}</div>}
                        </div>
                        <div className="col-4">
                          <label htmlFor="experience" className="form-label p-1">Experience</label>
                          <input type="text" value={experience} className="form-control form-control-sm" id="experience" onChange={(e) => setExperience(e.target.value)} />
                          {formErrors.experience && <div className="text-danger">{formErrors.experience}</div>}
                        </div>
                        <div className="col-6">
                          <label htmlFor="qualification" className="form-label p-1">Qualification</label>
                          <input type="text" value={qualification} className="form-control form-control-sm" id="qualification" onChange={(e) => setQualification(e.target.value)} />
                          {formErrors.qualification && <div className="text-danger">{formErrors.qualification}</div>}
                        </div>
                        <div className="col-6">
                          <label htmlFor="certificate" className="form-label p-1">Certificate</label>
                          <input type="file" className="form-control form-control-sm" id="certificate" onChange={(e) => setCertificate(e.target.files[0])} />
                        </div>
                      </div>
                      <div className="col-12 mt-2 text-center">
                        <button className="btn btn-lg btn-outline-success mybtn" type="submit">Update</button>
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

export default Editemployee;

