// import React from 'react'
// import axios from 'axios'
// import { useState , useEffect} from 'react'
// import uuid from 'react-uuid'
// import { useNavigate } from 'react-router-dom'
// import { useParams } from 'react-router-dom'

// function Editclient() {
//   const [id,setId] = useState()
//   const [username,setusername] = useState()
//   const [password,setpassword] = useState()
//   const [name,setname] = useState()
//   const [email,setemail] = useState()
//   const [gender,setgender] = useState()
//   const [photo,setphoto] = useState()
//   const [house,sethouse] = useState()
//   const [place,setplace] = useState()
//   const [post,setpost] = useState()
//   const [pin,setpin] = useState()
//   const [phone,setphone] = useState()
//   const [aadhar,setaadhar] = useState() 
// const navigate= useNavigate()
// const params = useParams()
// const superId = localStorage.getItem('userId');
// console.log('super',superId);


// useEffect(() => {
//   getEmployee();
// }, []);

// const getEmployee = async () => {
//   try {
//     const response = await axios.get(`http://localhost:8000/particlient/${superId}`);
//     const empdata = response.data.client;
//     console.log(empdata);

//     // setRole(empdata.role);
//     setId(empdata.id)
//     setusername(empdata.commondetails.username);
//     setname(empdata.name);
//     setemail(empdata.email);
//     setgender(empdata.gender)
   
//     setphoto(empdata.photo); 
//     setphone(empdata.phone);
//     sethouse(empdata.house);
//     setplace(empdata.place);
//     setpost(empdata.post);
//     setpin(empdata.pin);
//     setaadhar(empdata.aadhar)
   
//   } catch (error) {
//     console.error('Error:', error);
//   }
// };
// const handleSubmit = async (e) => {
//   e.preventDefault();
//   const formData = new FormData();
//   formData.append('id',id);
//   formData.append('username', username);
//   formData.append('name', name);
//   formData.append('email', email);
//   formData.append('gender', gender);
//   formData.append('photo', photo);
//   formData.append('house', house);
//   formData.append('place', place);
//   formData.append('post', post);
//   formData.append('pin', pin);
//   formData.append('phone', phone);
//   formData.append('aadhar', aadhar);

//   try {
//     await axios.put(`http://localhost:8000/editclient/${id}`, formData, {
//       headers: {
//         'Content-Type': 'multipart/form-data'
//       }
//     });
//     alert('successfully updated');
//     navigate('/client')
//   } catch (error) {
//     console.error('Error:', error);
//   }
// };


//   return (
  
//     <div class="container">
//     <div class="row mb-2">
//           <div class=" col-md-1 col-lg-3"></div>
//           <div class=" col-12 col-md-10 col-lg-6">
//           <div class="row">
//             <div class=" col-12">
//                     <h4 class="mb-2 text-light text-center">Client Registration :</h4>
//             </div>
//             <div class="col-12 d-flex justify-content-center px-3 px-md-4">
//               <div class="card border border-success rounded-4 col-10 ">
//                 <div class="card-body px-4 py-3 ">
//                   <form  enctype="multipart/form-data" onSubmit={handleSubmit}   >
//                     <div class="row">
//                     <div className="col-6">
//                           <label htmlFor="photo" className="form-label p-1">Photo</label>
//                           <input className="form-control form-control-sm" type="file" id="photo1" onChange={(e) => setphoto(e.target.files[0])} />
//                           {photo && <img src={typeof photo === 'string' ? photo : URL.createObjectURL(photo)} alt="Employee" style={{ maxWidth: '100%', marginTop: '5px' }} />}
//                         </div>
//                       <div class="col-6">
//                         <label for="name" class="form-label p-1">name</label>
//                         <input  value={name} type="text" class="form-control form-control-sm" id="name"onChange={(e)=>setname(e.target.value)}/>
//                       </div>
//                       <div class="col-6">
//                         <label for="email" class="form-label p-1">email</label>
//                         <input value={email} type="email" class="form-control form-control-sm" id="email" onChange={(e)=>setemail(e.target.value)}/>
//                       </div>
//                       <div class="col-6">
//                         <label for="cluname" class="form-label p-1">username</label>
//                         <input value={username} type="text" class="form-control form-control-sm" id="uname" onChange={(e)=>setusername(e.target.value)}/>
//                       </div>
//                       {/* <div class="col-6">
//                         <label for="psw" class="form-label p-1">password</label>
//                         <input type="password" class="form-control form-control-sm" id="psw" onChange={(e)=>setpassword(e.target.value)}/>
//                       </div> */}
                      
//                       <div class="col-6">
//                         <label for="gender" class="form-label p-1">gender</label>
//                         <select value={gender} id="gender" class="form-select form-select-sm" onChange={(e)=>setgender(e.target.value)}>
//                           <option selected>Choose...</option>
//                           <option value="male">Male</option>
//                           <option value="female">Female</option>
//                           <option value="other">Other</option>
//                         </select>
//                       </div>
//                       <div class="col-6">
//                         <label for="house" class="form-label p-1">house name</label>
//                         <input value={house} type="text" class="form-control form-control-sm" id="house" onChange={(e)=>sethouse(e.target.value)}/>
//                       </div>
//                       <div class="col-6">
//                         <label for="place" class="form-label p-1">place</label>
//                         <input value={place} type="text" class="form-control form-control-sm" id="place" onChange={(e)=>setplace(e.target.value)}/>
//                       </div>
//                       <div class="col-6 ">
//                         <label for="post" class="form-label p-1">post</label>
//                         <input value={post} type="text" class="form-control form-control-sm" id="post" onChange={(e)=>setpost(e.target.value)}/>
//                       </div>
//                       <div class="col-6">
//                         <label for="pincode" class="form-label p-1">pincode</label>
//                         <input value={pin} type="text" class="form-control form-control-sm" id="pincode" onChange={(e)=>setpin(e.target.value)}/>
//                       </div>
//                       <div class="col-6">
//                         <label for="phone" class="form-label p-1">phone number</label>
//                         <input value={phone} type="tel" class="form-control form-control-sm" id="phone" onChange={(e)=>setphone(e.target.value)}/>
//                       </div>
//                       <div class="col-6">
//                         <label for="aadhar" class="form-label p-1">aadhar number</label>
//                         <input value={aadhar} type="number" maxlength="12" class="form-control form-control-sm" id="aadhar" onChange={(e)=>setaadhar(e.target.value)}/>
//                       </div>
                      
//                       <div class="col-12 mt-2 text-center">
//                         <button class="btn btn-lg btn-outline-success mybtn" type="submit">Register</button>
//                       </div>
//                     </div>
//                   </form>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div class=" col-md-1 col-lg-3"></div>
//       </div>
//   </div>
// )
// }

// export default Editclient

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

function Editclient() {
  const [id, setId] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [gender, setGender] = useState('');
  const [photo, setPhoto] = useState(null);
  const [house, setHouse] = useState('');
  const [place, setPlace] = useState('');
  const [post, setPost] = useState('');
  const [pin, setPin] = useState('');
  const [phone, setPhone] = useState('');
  const [aadhar, setAadhar] = useState('');
  const [formErrors, setFormErrors] = useState({});

  const navigate = useNavigate();
  const params = useParams();
  const superId = localStorage.getItem('userId');

  useEffect(() => {
    getEmployee();
  }, []);

  const getEmployee = async () => {
    try {
      const response = await axios.get(`http://localhost:8000/particlient/${superId}`);
      const empdata = response.data.client;

      setId(empdata.id);
      setUsername(empdata.commondetails.username);
      setName(empdata.name);
      setEmail(empdata.email);
      setGender(empdata.gender);
      setPhoto(empdata.photo);
      setPhone(empdata.phone);
      setHouse(empdata.house);
      setPlace(empdata.place);
      setPost(empdata.post);
      setPin(empdata.pin);
      setAadhar(empdata.aadhar);

    } catch (error) {
      console.error('Error:', error);
    }
  };

  const validateForm = () => {
    let errors = {};
    let isValid = true;

    if (!name.trim()) {
      errors.name = 'Name is required';
      isValid = false;
    } else if (/\d/.test(name)) {
      errors.name = 'Name should not contain numbers';
      isValid = false;
    }

    if (!email.trim()) {
      errors.email = 'Email is required';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = 'Email is invalid';
      isValid = false;
    }

    if (!username.trim()) {
      errors.username = 'Username is required';
      isValid = false;
    } else if (!/^[a-zA-Z]+$/.test(username)) {
      errors.username = 'Username should contain only alphabets';
      isValid = false;
    }

    if (!gender) {
      errors.gender = 'Gender is required';
      isValid = false;
    }

    if (!house.trim()) {
      errors.house = 'House name is required';
      isValid = false;
    }

    if (!place.trim()) {
      errors.place = 'Place is required';
      isValid = false;
    }

    if (!post.trim()) {
      errors.post = 'Post is required';
      isValid = false;
    }

    if (!pin.toString().trim()) {
      errors.pin = 'Pincode is required';
      isValid = false;
    } else if (!/^\d{6}$/.test(pin.toString().trim())) {
      errors.pin = 'Pincode should be 6 digits';
      isValid = false;
    }

    if (!phone.toString().trim()) {
      errors.phone = 'Phone number is required';
      isValid = false;
    } else if (!/^\d{10}$/.test(phone.toString().trim())) {
      errors.phone = 'Phone number should be 10 digits';
      isValid = false;
    }

    if (!aadhar.toString().trim()) {
      errors.aadhar = 'Aadhar number is required';
      isValid = false;
    } else if (!/^\d{12}$/.test(aadhar.toString().trim())) {
      errors.aadhar = 'Aadhar number should be 12 digits';
      isValid = false;
    }

    if (!photo) {
      errors.photo = 'Photo is required';
      isValid = false;
    }

    setFormErrors(errors);
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    const formData = new FormData();
    formData.append('id', id);
    formData.append('username', username);
    formData.append('name', name);
    formData.append('email', email);
    formData.append('gender', gender);
    formData.append('photo', photo);
    formData.append('house', house);
    formData.append('place', place);
    formData.append('post', post);
    formData.append('pin', pin);
    formData.append('phone', phone);
    formData.append('aadhar', aadhar);

    try {
      await axios.put(`http://localhost:8000/editclient/${id}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      alert('Successfully updated');
      navigate('/client');
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="container">
      <div className="row mb-2">
        <div className="col-md-1 col-lg-3"></div>
        <div className="col-12 col-md-10 col-lg-6">
          <div className="row">
            <div className="col-12">
              <h4 className="mb-2 text-light text-center">Edit Client:</h4>
            </div>
            <div className="col-12 d-flex justify-content-center px-3 px-md-4">
              <div className="card border border-success rounded-4 col-10">
                <div className="card-body px-4 py-3">
                  <form enctype="multipart/form-data" onSubmit={handleSubmit}>
                    <div className="row">
                      <div className="col-6">
                        <label htmlFor="photo" className="form-label p-1">Photo</label>
                        <input className="form-control form-control-sm" type="file" id="photo1" onChange={(e) => setPhoto(e.target.files[0])} />
                        {photo && <img src={typeof photo === 'string' ? photo : URL.createObjectURL(photo)} alt="Client" style={{ maxWidth: '100%', marginTop: '5px' }} />}
                        {formErrors.photo && (
                          <div className="text-danger">{formErrors.photo}</div>
                        )}
                      </div>
                      <div className="col-6">
                        <label htmlFor="name" className="form-label p-1">Name</label>
                        <input value={name} type="text" className="form-control form-control-sm" id="name" onChange={(e) => setName(e.target.value)} />
                        {formErrors.name && (
                          <div className="text-danger">{formErrors.name}</div>
                        )}
                      </div>
                      <div className="col-6">
                        <label htmlFor="email" className="form-label p-1">Email</label>
                        <input value={email} type="email" className="form-control form-control-sm" id="email" onChange={(e) => setEmail(e.target.value)} />
                        {formErrors.email && (
                          <div className="text-danger">{formErrors.email}</div>
                        )}
                      </div>
                      <div className="col-6">
                        <label htmlFor="cluname" className="form-label p-1">Username</label>
                        <input value={username} type="text" className="form-control form-control-sm" id="uname" onChange={(e) => setUsername(e.target.value)} />
                        {formErrors.username && (
                          <div className="text-danger">{formErrors.username}</div>
                        )}
                      </div>
                      <div className="col-6">
                        <label htmlFor="gender" className="form-label p-1">Gender</label>
                        <select value={gender} id="gender" className="form-select form-select-sm" onChange={(e) => setGender(e.target.value)}>
                          <option disabled>Choose...</option>
                          <option value="male">Male</option>
                          <option value="female">Female</option>
                          <option value="other">Other</option>
                        </select>
                        {formErrors.gender && (
                          <div className="text-danger">{formErrors.gender}</div>
                        )}
                      </div>
                      <div className="col-6">
                        <label htmlFor="house" className="form-label p-1">House Name</label>
                        <input value={house} type="text" className="form-control form-control-sm" id="house" onChange={(e) => setHouse(e.target.value)} />
                        {formErrors.house && (
                          <div className="text-danger">{formErrors.house}</div>
                        )}
                      </div>
                      <div className="col-6">
                        <label htmlFor="place" className="form-label p-1">Place</label>
                        <input value={place} type="text" className="form-control form-control-sm" id="place" onChange={(e) => setPlace(e.target.value)} />
                        {formErrors.place && (
                          <div className="text-danger">{formErrors.place}</div>
                        )}
                      </div>
                      <div className="col-6">
                        <label htmlFor="post" className="form-label p-1">Post</label>
                        <input value={post} type="text" className="form-control form-control-sm" id="post" onChange={(e) => setPost(e.target.value)} />
                        {formErrors.post && (
                          <div className="text-danger">{formErrors.post}</div>
                        )}
                      </div>
                      <div className="col-6">
                        <label htmlFor="pincode" className="form-label p-1">Pincode</label>
                        <input value={pin} type="text" className="form-control form-control-sm" id="pincode" onChange={(e) => setPin(e.target.value)} />
                        {formErrors.pin && (
                          <div className="text-danger">{formErrors.pin}</div>
                        )}
                      </div>
                      <div className="col-6">
                        <label htmlFor="phone" className="form-label p-1">Phone Number</label>
                        <input value={phone} type="tel" className="form-control form-control-sm" id="phone" onChange={(e) => setPhone(e.target.value)} />
                        {formErrors.phone && (
                          <div className="text-danger">{formErrors.phone}</div>
                        )}
                      </div>
                      <div className="col-6">
                        <label htmlFor="aadhar" className="form-label p-1">Aadhar Number</label>
                        <input value={aadhar} type="number" maxLength="12" className="form-control form-control-sm" id="aadhar" onChange={(e) => setAadhar(e.target.value)} />
                        {formErrors.aadhar && (
                          <div className="text-danger">{formErrors.aadhar}</div>
                        )}
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
        <div className="col-md-1 col-lg-3"></div>
      </div>
    </div>
  );
}

export default Editclient;