




// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import uuid from 'react-uuid';
// import Headeradmin from './Headeradmin';

// function Employeereg() {
//   const [id, setId] = useState('');
//   const [role, setRole] = useState('');
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
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
//   const navigate = useNavigate();

//   useEffect(() => {
//     setId(uuid().slice(0, 4));
//   }, []);

//   const handlePhotoChange = (e) => {
//     setPhoto(e.target.files[0]);
//   };

//   const handleCertificateChange = (e) => {
//     setCertificate(e.target.files[0]);
//   };

//   const datasubmit = (e) => {
//     e.preventDefault();

//     const formData = new FormData();
//     formData.append('id', id);
//     formData.append('role', role);
//     formData.append('username', username);
//     formData.append('password', password);
//     formData.append('name', name);
//     formData.append('email', email);
//     formData.append('age', age);
//     formData.append('gender', gender);
//     formData.append('photo', photo);
//     formData.append('phone', phone);
//     formData.append('house', house);
//     formData.append('place', place);
//     formData.append('post', post);
//     formData.append('pin', pin);
//     formData.append('experience', experience);
//     formData.append('qualification', qualification);
//     formData.append('certificate', certificate);

//     axios.post('http://localhost:8000/employeereg', formData)
//       .then((res) => {
//         if (res.data.status === 'Username already exist') {
//           alert('User already exist');
//         } else {
//           alert('success');
//           navigate('/listemployees');
//         }
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   };

//   return (
//     <div>
//       <Headeradmin />

//       <div className="container">
//         <div className="row ">
//           <div className="col-md-1 col-lg-2"></div>
//           <div className="col-12 col-md-10 col-lg-8">
//             <div className="row">
//               <div className="col-12">
//                 <h4 className="mt-2 text-light text-center">Employee Registration :</h4>
//               </div>
//               <div className="col-12 d-flex justify-content-center px-3 px-md-4">
//                 <div className="card border border-success rounded-4 col-10 ">
//                   <div className="card-body px-4 py-2 ">
//                     <form onSubmit={datasubmit}>
//                       <div className="row">
//                         <div className="col-6">
//                           <label htmlFor="role" className="form-label p-1">Role</label>
//                           <select id="role" className="form-select form-select-sm" onChange={(e) => setRole(e.target.value)}>
//                             <option selected>Choose...</option>
//                             <option value="Engineer">Engineer</option>
//                             <option value="Contractor">Contractor</option>
//                             <option value="Supervisor">Supervisor</option>
//                           </select>
//                         </div>
//                         <div className="col-6">
//                           <label htmlFor="photo" className="form-label p-1">Photo</label>
//                           <input className="form-control form-control-sm" type="file" id="photo" onChange={handlePhotoChange} />
//                         </div>
//                         <div className="col-6">
//                           <label htmlFor="name" className="form-label p-1">Name</label>
//                           <input type="text" className="form-control form-control-sm" id="name" onChange={(e) => setName(e.target.value)} />
//                         </div>
//                         <div className="col-6">
//                           <label htmlFor="email" className="form-label p-1">Email</label>
//                           <input type="email" className="form-control form-control-sm" id="email" onChange={(e) => setEmail(e.target.value)} />
//                         </div>
//                         <div className="col-6">
//                           <label htmlFor="username" className="form-label p-1">Username</label>
//                           <input type="text" className="form-control form-control-sm" id="username" onChange={(e) => setUsername(e.target.value)} />
//                         </div>
//                         <div className="col-6">
//                           <label htmlFor="password" className="form-label p-1">Password</label>
//                           <input type="password" className="form-control form-control-sm" id="password" onChange={(e) => setPassword(e.target.value)} />
//                         </div>
//                         <div className="col-4">
//                           <label htmlFor="age" className="form-label p-1">Age</label>
//                           <input type="number" className="form-control form-control-sm" id="age" onChange={(e) => setAge(e.target.value)} />
//                         </div>
//                         <div className="col-4">
//                           <label htmlFor="gender" className="form-label p-1">Gender</label>
//                           <select id="gender" className="form-select form-select-sm" onChange={(e) => setGender(e.target.value)}>
//                             <option selected>Choose...</option>
//                             <option>Male</option>
//                             <option>Female</option>
//                             <option>Other</option>
//                           </select>
//                         </div>
//                         <div className="col-4">
//                           <label htmlFor="phone" className="form-label p-1">Phone Number</label>
//                           <input type="tel" className="form-control form-control-sm" id="phone" onChange={(e) => setPhone(e.target.value)} />
//                         </div>
//                         <div className="col-6">
//                           <label htmlFor="house" className="form-label p-1">House Name</label>
//                           <input type="text" className="form-control form-control-sm" id="house" onChange={(e) => setHouse(e.target.value)} />
//                         </div>
//                         <div className="col-6">
//                           <label htmlFor="place" className="form-label p-1">Place</label>
//                           <input type="text" className="form-control form-control-sm" id="place" onChange={(e) => setPlace(e.target.value)} />
//                         </div>
//                         <div className="col-6">
//                           <label htmlFor="post" className="form-label p-1">Post</label>
//                           <input type="text" className="form-control form-control-sm" id="post" onChange={(e) => setPost(e.target.value)} />
//                         </div>
//                         <div className="col-6">
//                           <label htmlFor="pin" className="form-label p-1">Pincode</label>
//                           <input type="text" className="form-control form-control-sm" id="pin" onChange={(e) => setPin(e.target.value)} />
//                         </div>
//                         <div className="col-4">
//                           <label htmlFor="experience" className="form-label p-1">Years of Experience</label>
//                           <input type="text" className="form-control form-control-sm" id="experience" onChange={(e) => setExperience(e.target.value)} />
//                         </div>
//                         <div className="col-4">
//                           <label htmlFor="qualification" className="form-label p-1">Qualification</label>
//                           <input type="text" className="form-control form-control-sm" id="qualification" onChange={(e) => setQualification(e.target.value)} />
//                         </div>
//                         <div className="col-4">
//                           <label htmlFor="certificate" className="form-label p-1">Certificate</label>
//                           <input className="form-control form-control-sm" type="file" id="certificate" onChange={handleCertificateChange} />
//                         </div>
//                       </div>
//                       <div className="col-12 mt-2 text-center">
//                         <button className="btn btn-lg btn-outline-success mybtn" type="submit">Register</button>
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

// export default Employeereg;
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import uuid from 'react-uuid';
import Headeradmin from './Headeradmin';

function Employeereg() {
  const [id, setId] = useState('');
  const [role, setRole] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
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
  const navigate = useNavigate();

  useEffect(() => {
    setId(uuid().slice(0, 4));
  }, []);

  const handlePhotoChange = (e) => {
    setPhoto(e.target.files[0]);
  };

  const handleCertificateChange = (e) => {
    setCertificate(e.target.files[0]);
  };

  const validateForm = () => {
    let errors = {};
    let formIsValid = true;

    // Username validation
    if (!/^[a-zA-Z]+$/.test(username)) {
      formIsValid = false;
      errors["username"] = "Username should contain only alphabets.";
    }

    // Name validation
    if (!/^[a-zA-Z]+$/.test(name)) {
      formIsValid = false;
      errors["name"] = "Name should contain only alphabets.";
    }

    // Password validation
    if (password.length < 8) {
      formIsValid = false;
      errors["password"] = "Password should be minimum 8 characters.";
    }

    // Email validation
    if (!/\S+@\S+\.\S+/.test(email)) {
      formIsValid = false;
      errors["email"] = "Please enter a valid email address.";
    }

    // Age validation
    if (!age || isNaN(age) || age < 18 || age > 100) {
      formIsValid = false;
      errors["age"] ='Age is required and must be between 18 and 100';
    }

    // Phone validation
    if (!/^\d{10,}$/.test(phone)) {
      formIsValid = false;
      errors["phone"] = "Phone should be minimum 10 digits.";
    }

    // Pin validation
    if (!/^\d{6}$/.test(pin)) {
      formIsValid = false;
      errors["pin"] = "Pin should be 6 digits.";
    }

    // Experience validation
    if (!/^\d+$/.test(experience)) {
      formIsValid = false;
      errors["experience"] = "Experience should be a number.";
    }

    // Qualification validation
    if (!/^[a-zA-Z]+$/.test(qualification)) {
      formIsValid = false;
      errors["qualification"] = "Qualification should contain only alphabets.";
    }

    setFormErrors(errors);
    return formIsValid;
  };

  const datasubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      const formData = new FormData();
      formData.append('id', id);
      formData.append('role', role);
      formData.append('username', username);
      formData.append('password', password);
      formData.append('name', name);
      formData.append('email', email);
      formData.append('age', age);
      formData.append('gender', gender);
      formData.append('photo', photo);
      formData.append('phone', phone);
      formData.append('house', house);
      formData.append('place', place);
      formData.append('post', post);
      formData.append('pin', pin);
      formData.append('experience', experience);
      formData.append('qualification', qualification);
      formData.append('certificate', certificate);

      axios.post('http://localhost:8000/employeereg', formData)
        .then((res) => {
          if (res.data.status === 'Username already exist') {
            alert('User already exists');
          } else {
            alert('Registration successful');
            navigate('/listemployees');
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  return (
    <div>
      <Headeradmin />

      <div className="container">
        <div className="row">
          <div className="col-md-1 col-lg-2"></div>
          <div className="col-12 col-md-10 col-lg-8">
            <div className="row">
              <div className="col-12">
                <h4 className="mt-2 text-light text-center">Employee Registration:</h4>
              </div>
              <div className="col-12 d-flex justify-content-center px-3 px-md-4">
                <div className="card border border-success rounded-4 col-10">
                  <div className="card-body px-4 py-2">
                    <form onSubmit={datasubmit}>
                      <div className="row">
                        <div className="col-6">
                          <label htmlFor="role" className="form-label p-1">Role</label>
                          <select id="role" className="form-select form-select-sm" onChange={(e) => setRole(e.target.value)}>
                            <option value="" disabled selected>Choose...</option>
                            <option value="Engineer">Engineer</option>
                            <option value="Contractor">Contractor</option>
                            <option value="Supervisor">Supervisor</option>
                          </select>
                        </div>
                        <div className="col-6">
                          <label htmlFor="photo" className="form-label p-1">Photo</label>
                          <input className="form-control form-control-sm" type="file" id="photo" onChange={handlePhotoChange} />
                        </div>
                        <div className="col-6">
                          <label htmlFor="name" className="form-label p-1">Name</label>
                          <input type="text" className="form-control form-control-sm" id="name" onChange={(e) => setName(e.target.value)} />
                          {formErrors.name && <div className="text-danger">{formErrors.name}</div>}
                        </div>
                        <div className="col-6">
                          <label htmlFor="email" className="form-label p-1">Email</label>
                          <input type="email" className="form-control form-control-sm" id="email" onChange={(e) => setEmail(e.target.value)} />
                          {formErrors.email && <div className="text-danger">{formErrors.email}</div>}
                        </div>
                        <div className="col-6">
                          <label htmlFor="username" className="form-label p-1">Username</label>
                          <input type="text" className="form-control form-control-sm" id="username" onChange={(e) => setUsername(e.target.value)} />
                          {formErrors.username && <div className="text-danger">{formErrors.username}</div>}
                        </div>
                        <div className="col-6">
                          <label htmlFor="password" className="form-label p-1">Password</label>
                          <input type="password" className="form-control form-control-sm" id="password" onChange={(e) => setPassword(e.target.value)} />
                          {formErrors.password && <div className="text-danger">{formErrors.password}</div>}
                        </div>
                        <div className="col-4">
                          <label htmlFor="age" className="form-label p-1">Age</label>
                          <input type="text" className="form-control form-control-sm" id="age" onChange={(e) => setAge(e.target.value)} />
                          {formErrors.age && <div className="text-danger">{formErrors.age}</div>}
                        </div>
                        <div className="col-4">
                          <label htmlFor="gender" className="form-label p-1">Gender</label>
                          <select id="gender" className="form-select form-select-sm" onChange={(e) => setGender(e.target.value)}>
                            <option value="" disabled selected>Choose...</option>
                            <option>Male</option>
                            <option>Female</option>
                            <option>Other</option>
                          </select>
                        </div>
                        <div className="col-4">
                          <label htmlFor="phone" className="form-label p-1">Phone Number</label>
                          <input type="text" className="form-control form-control-sm" id="phone" onChange={(e) => setPhone(e.target.value)} />
                          {formErrors.phone && <div className="text-danger">{formErrors.phone}</div>}
                        </div>
                        <div className="col-6">
                          <label htmlFor="house" className="form-label p-1">House Name</label>
                          <input type="text" className="form-control form-control-sm" id="house" onChange={(e) => setHouse(e.target.value)} />
                        </div>
                        <div className="col-6">
                          <label htmlFor="place" className="form-label p-1">Place</label>
                          <input type="text" className="form-control form-control-sm" id="place" onChange={(e) => setPlace(e.target.value)} />
                        </div>
                        <div className="col-6">
                          <label htmlFor="post" className="form-label p-1">Post</label>
                          <input type="text" className="form-control form-control-sm" id="post" onChange={(e) => setPost(e.target.value)} />
                        </div>
                        <div className="col-6">
                          <label htmlFor="pin" className="form-label p-1">Pincode</label>
                          <input type="text" className="form-control form-control-sm" id="pin" onChange={(e) => setPin(e.target.value)} />
                          {formErrors.pin && <div className="text-danger">{formErrors.pin}</div>}
                        </div>
                        <div className="col-4">
                          <label htmlFor="experience" className="form-label p-1">Years of Experience</label>
                          <input type="text" className="form-control form-control-sm" id="experience" onChange={(e) => setExperience(e.target.value)} />
                          {formErrors.experience && <div className="text-danger">{formErrors.experience}</div>}
                        </div>
                        <div className="col-4">
                          <label htmlFor="qualification" className="form-label p-1">Qualification</label>
                          <input type="text" className="form-control form-control-sm" id="qualification" onChange={(e) => setQualification(e.target.value)} />
                          {formErrors.qualification && <div className="text-danger">{formErrors.qualification}</div>}
                        </div>
                        <div className="col-4">
                          <label htmlFor="certificate" className="form-label p-1">Certificate</label>
                          <input className="form-control form-control-sm" type="file" id="certificate" onChange={handleCertificateChange} />
                        </div>
                      </div>
                      <div className="col-12 mt-2 text-center">
                        <button className="btn btn-lg btn-outline-success mybtn" type="submit">Register</button>
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

export default Employeereg;