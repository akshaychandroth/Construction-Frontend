// import React from 'react'
// import axios from 'axios'
// import { useState , useEffect} from 'react'
// import { useParams } from 'react-router-dom'
// import { useNavigate } from 'react-router-dom'



// function EditWorker() {
//   const [id,setId] = useState()
//   const [name,setname] = useState()
//   const [house,sethouse] = useState()
//   const [place,setplace] = useState()
//   const [post,setpost] = useState()
//   const [pin,setpin] = useState()
//   const [gender,setgender] = useState()
//   const [age,setage] = useState()
//   const [email,setemail] = useState()
//   const [Phone,setphone] = useState()
//   const [photo,setphoto] = useState()
//   const [worktype,setworktype] = useState()
//   const [aadhaar,setaadhaar] = useState() 
//   const params = useParams()
//   const navigate = useNavigate()

//   useEffect(() => {
//     getWorker();
//   }, []);
  
//   const getWorker = async () => {
//     try {
//       const response = await axios.get(`http://localhost:8000/partiworker/${params.id}`);
//       const workdata = response.data.worker;
//       console.log(workdata);
  
//       // setRole(empdata.role);
//       setId(workdata.id)
//       setname(workdata.name);
//       sethouse(workdata.house);
//       setplace(workdata.place);
//       setpost(workdata.post);
//       setpin(workdata.pin);
//       setgender(workdata.gender)
//       setage(workdata.age)
//       setemail(workdata.email);
//       setphoto(workdata.photo); 
//       setworktype(workdata.worktype)
//       setaadhaar(workdata.aadhaar)
//       setphone(workdata.Phone)

//     } catch (error) {
//       console.error('Error:', error);
//     }
//   };


//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const formData = new FormData();
//     formData.append('id',id);
//     formData.append('name', name);
//     formData.append('house', house);
//     formData.append('place', place);
//     formData.append('post', post);
//     formData.append('pin', pin);
//     formData.append('gender', gender);
//     formData.append('age',age)

//     formData.append('email', email);
//     formData.append('photo', photo);

//     formData.append('Phone', Phone);
//     formData.append('worktype',worktype)
//     formData.append('aadhaar', aadhaar);
  
//     try {
//       await axios.put(`http://localhost:8000/editworker/${id}`, formData, {
//         headers: {
//           'Content-Type': 'multipart/form-data'
//         }
      
//       });

//       alert('Succesfully updated')
//       navigate('/listworkers')
//     } catch (error) {
//       console.error('Error:', error);
//     }
//   };



//   return (
//     <div>
//     <div class="container">
//         <div class="row mb-2">
//               <div class=" col-md-1 col-lg-3"></div>
//               <div class=" col-12 col-md-10 col-lg-6">
//               <div class="row">
//                 <div class=" col-12">
//                         <h4 class="mb-2 text-light text-center">Edit Worker:</h4>
//                 </div>
//                 <div class="col-12 d-flex justify-content-center px-3 px-md-4">
//                   <div class="card border border-success rounded-4 col-10 ">
//                     <div class="card-body px-4 py-3 ">
//                       <form enctype="multipart/form-data" onSubmit={handleSubmit}  >
//                         <div class="row">
//                         <div className="col-6">
//                           <label htmlFor="photo" className="form-label p-1">Photo</label>
//                           <input className="form-control form-control-sm" type="file" id="photo1" onChange={(e) => setphoto(e.target.files[0])} />
//                           {photo && <img src={typeof photo === 'string' ? photo : URL.createObjectURL(photo)} alt="Employee" style={{ maxWidth: '100%', marginTop: '5px' }} />}
//                         </div>
//                           <div class="col-6">
//                             <label for="name" class="form-label p-1">name</label>
//                             <input value={name} type="text" class="form-control form-control-sm" id="name"onChange={(e)=>setname(e.target.value)}/>
//                           </div>
//                           <div class="col-6">
//                             <label for="house" class="form-label p-1">house name</label>
//                             <input value={house} type="text" class="form-control form-control-sm" id="house" onChange={(e)=>sethouse(e.target.value)}/>
//                           </div>
//                           <div class="col-6">
//                             <label for="place" class="form-label p-1">place</label>
//                             <input value={place} type="text" class="form-control form-control-sm" id="place" onChange={(e)=>setplace(e.target.value)}/>
//                           </div>
//                           <div class="col-6 ">
//                             <label for="post" class="form-label p-1">post</label>
//                             <input value={post} type="text" class="form-control form-control-sm" id="post" onChange={(e)=>setpost(e.target.value)}/>
//                           </div>
//                           <div class="col-6">
//                             <label for="pincode" class="form-label p-1">pincode</label>
//                             <input value={pin} type="text" class="form-control form-control-sm" id="pincode" onChange={(e)=>setpin(e.target.value)}/>
//                           </div>
//                           <div class="col-6">
//                             <label for="email" class="form-label p-1">email</label>
//                             <input value={email} type="email" class="form-control form-control-sm" id="email" onChange={(e)=>setemail(e.target.value)}/>
//                           </div>
                          
//                           <div class="col-6">
//                             <label for="gender" class="form-label p-1">gender</label>
//                             <select value={gender} id="gender" class="form-select form-select-sm" onChange={(e)=>setgender(e.target.value)}>
//                               <option selected>Choose...</option>
//                               <option value="male">Male</option>
//                               <option value="female">Female</option>
//                               <option value="other">Other</option>
//                             </select>
//                           </div>
//                           <div class="col-6">
//                             <label for="age" class="form-label p-1">age</label>
//                             <input value={age} type="number" class="form-control form-control-sm" id="age" onChange={(e)=>setage(e.target.value)}/>
//                           </div>
//                           <div class="col-6">
//                             <label for="phone" class="form-label p-1">phone number</label>
//                             <input value={Phone} type="text" class="form-control form-control-sm" id="phone" onChange={(e)=>setphone(e.target.value)}/>
//                           </div>
//                           <div class="col-6">
//                             <label for="worktype" class="form-label p-1">work type</label>
//                             <select value={worktype} id="worktype" class="form-select form-select-sm" onChange={(e)=>setworktype(e.target.value)}>
//                               <option selected>Choose...</option>
//                               <option value="male">Carpenter</option>
//                               <option value="female">Mason</option>
//                               <option value="other">Painter</option>
//                             </select>
//                           </div>
//                           <div class="col-6">
//                             <label for="aadhaar" class="form-label p-1">aadhaar number</label>
//                             <input value={aadhaar} type="number" maxlength="12" class="form-control form-control-sm" id="aadhaar" onChange={(e)=>setaadhaar(e.target.value)}/>
//                           </div>
                          
//                           <div class="col-12 mt-2 text-center">
//                             <button class="btn btn-lg btn-outline-success mybtn" type="submit">Update</button>
//                           </div>
//                         </div>
//                       </form>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div class=" col-md-1 col-lg-3"></div>
//           </div>
//       </div>
//   </div>  )
// }

// export default EditWorker
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

function EditWorker() {
  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [house, setHouse] = useState('');
  const [place, setPlace] = useState('');
  const [post, setPost] = useState('');
  const [pin, setPin] = useState('');
  const [gender, setGender] = useState('');
  const [age, setAge] = useState('');
  const [email, setEmail] = useState('');
  const [Phone, setPhone] = useState('');
  const [photo, setPhoto] = useState('');
  const [worktype, setWorkType] = useState('');
  const [aadhaar, setAadhaar] = useState('');
  const [errors, setErrors] = useState({});
  
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    getWorker();
  }, []);

  const getWorker = async () => {
    try {
      const response = await axios.get(`http://localhost:8000/partiworker/${params.id}`);
      const workdata = response.data.worker;
      setId(workdata.id);
      setName(workdata.name);
      setHouse(workdata.house);
      setPlace(workdata.place);
      setPost(workdata.post);
      setPin(workdata.pin);
      setGender(workdata.gender);
      setAge(workdata.age);
      setEmail(workdata.email);
      setPhoto(workdata.photo);
      setWorkType(workdata.worktype);
      setAadhaar(workdata.aadhaar);
      setPhone(workdata.Phone);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const validateForm = () => {
    let valid = true;
    const errors = {};

    if (!name.match(/^[a-zA-Z ]+$/)) {
      errors.name = 'Name should contain only alphabets and spaces';
      valid = false;
    }

    if (!pin.toString().match(/^\d{6}$/)) {
      errors.pin = 'Pin should be 6 digits';
      valid = false;
    }

    if (parseInt(age) < 18 || parseInt(age) > 100 || isNaN(parseInt(age))) {
      errors.age = 'Age should be between 18 and 100';
      valid = false;
    }

    if (!Phone.toString().match(/^\d{10}$/)) {
      errors.phone = 'Phone number should be 10 digits';
      valid = false;
    }

    if (!aadhaar.match(/^\d{12}$/)) {
      errors.aadhaar = 'Aadhaar number should be 12 digits';
      valid = false;
    }

    setErrors(errors);
    return valid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formIsValid = validateForm();
    if (!formIsValid) {
      return;
    }
    const formData = new FormData();
    formData.append('id', id);
    formData.append('name', name);
    formData.append('house', house);
    formData.append('place', place);
    formData.append('post', post);
    formData.append('pin', pin);
    formData.append('gender', gender);
    formData.append('age', age);
    formData.append('email', email);
    formData.append('photo', photo);
    formData.append('Phone', Phone);
    formData.append('worktype', worktype);
    formData.append('aadhaar', aadhaar);
    
    try {
      await axios.put(`http://localhost:8000/editworker/${id}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      alert('Successfully updated');
      navigate('/listworkers');
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <div className="container">
        <div className="row mb-2">
          <div className="col-md-1 col-lg-3"></div>
          <div className="col-12 col-md-10 col-lg-6">
            <div className="row">
              <div className="col-12">
                <h4 className="mb-2 text-light text-center">Edit Worker:</h4>
              </div>
              <div className="col-12 d-flex justify-content-center px-3 px-md-4">
                <div className="card border border-success rounded-4 col-10 ">
                  <div className="card-body px-4 py-3 ">
                    <form encType="multipart/form-data" onSubmit={handleSubmit}  >
                      <div className="row">
                        <div className="col-6">
                          <label htmlFor="photo" className="form-label p-1">Photo</label>
                          <input className="form-control form-control-sm" type="file" id="photo1" onChange={(e) => setPhoto(e.target.files[0])} />
                          {photo && <img src={typeof photo === 'string' ? photo : URL.createObjectURL(photo)} alt="Employee" style={{ maxWidth: '100%', marginTop: '5px' }} />}
                        </div>
                        <div className="col-6">
                          <label htmlFor="name" className="form-label p-1">Name</label>
                          <input value={name} type="text" className="form-control form-control-sm" id="name" onChange={(e) => setName(e.target.value)} />
                          {errors.name && <div className="text-danger">{errors.name}</div>}
                        </div>
                        <div className="col-6">
                          <label htmlFor="house" className="form-label p-1">House Name</label>
                          <input value={house} type="text" className="form-control form-control-sm" id="house" onChange={(e) => setHouse(e.target.value)} />
                        </div>
                        <div className="col-6">
                          <label htmlFor="place" className="form-label p-1">Place</label>
                          <input value={place} type="text" className="form-control form-control-sm" id="place" onChange={(e) => setPlace(e.target.value)} />
                        </div>
                        <div className="col-6">
                          <label htmlFor="post" className="form-label p-1">Post</label>
                          <input value={post} type="text" className="form-control form-control-sm" id="post" onChange={(e) => setPost(e.target.value)} />
                        </div>
                        <div className="col-6">
                          <label htmlFor="pincode" className="form-label p-1">Pincode</label>
                          <input value={pin} type="text" className="form-control form-control-sm" id="pincode" onChange={(e) => setPin(e.target.value)} />
                          {errors.pin && <div className="text-danger">{errors.pin}</div>}
                        </div>
                        <div className="col-6">
                          <label htmlFor="email" className="form-label p-1">Email</label>
                          <input value={email} type="email" className="form-control form-control-sm" id="email" onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div className="col-6">
                          <label htmlFor="gender" className="form-label p-1">Gender</label>
                          <select value={gender} id="gender" className="form-select form-select-sm" onChange={(e) => setGender(e.target.value)}>
                            <option selected>Choose...</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="other">Other</option>
                          </select>
                        </div>
                        <div className="col-6">
                          <label htmlFor="age" className="form-label p-1">Age</label>
                          <input value={age} type="number" className="form-control form-control-sm" id="age" onChange={(e) => setAge(e.target.value)} />
                          {errors.age && <div className="text-danger">{errors.age}</div>}
                        </div>
                        <div className="col-6">
                          <label htmlFor="phone" className="form-label p-1">Phone Number</label>
                          <input value={Phone} type="text" className="form-control form-control-sm" id="phone" onChange={(e) => setPhone(e.target.value)} />
                          {errors.phone && <div className="text-danger">{errors.phone}</div>}
                        </div>
                        <div className="col-6">
                          <label htmlFor="worktype" className="form-label p-1">Work Type</label>
                          <select value={worktype} id="worktype" className="form-select form-select-sm" onChange={(e) => setWorkType(e.target.value)}>
                            <option selected>Choose...</option>
                            <option value="Carpenter">Carpenter</option>
                            <option value="Mason">Mason</option>
                            <option value="Painter">Painter</option>
                          </select>
                        </div>
                        <div className="col-6">
                          <label htmlFor="aadhaar" className="form-label p-1">Aadhaar Number</label>
                          <input value={aadhaar} type="number" className="form-control form-control-sm" id="aadhaar" onChange={(e) => setAadhaar(e.target.value)} />
                          {errors.aadhaar && <div className="text-danger">{errors.aadhaar}</div>}
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
    </div>
  );
}

export default EditWorker;