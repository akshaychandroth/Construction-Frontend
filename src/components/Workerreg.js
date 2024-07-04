// import React from 'react'
// import Headersupervisor from './Headersupervisor'
// import axios from 'axios'
// import { useState , useEffect} from 'react'
// import uuid from 'react-uuid'
// import { useNavigate } from 'react-router-dom'

// function Workerreg() {
//     const [id,setId] = useState()
//     const [name,setname] = useState()
//     const [house,sethouse] = useState()
//     const [place,setplace] = useState()
//     const [post,setpost] = useState()
//     const [pin,setpin] = useState()
//     const [gender,setgender] = useState()
//     const [age,setage] = useState()
//     const [email,setemail] = useState()
//     const [Phone,setphone] = useState()
//     const [photo,setphoto] = useState()
//     const [worktype,setworktype] = useState()
//     const [aadhaar,setaadhaar] = useState() 
//     const navigate= useNavigate()
//     useEffect(() => {
//      setId(uuid().slice(0,4))
//     }, []);

//     const handlePhotoChange = (e) => {
//       setphoto(e.target.files[0]) 
//     }


//     const datasubmit = (e) => {
//       e.preventDefault();
//       const formData = new FormData();
//       formData.append("photo", photo); 
//       formData.append("id", id);
//       formData.append("name", name);
//       formData.append("email", email);
//       formData.append("gender", gender);
//       formData.append("house", house);
//       formData.append("place", place);
//       formData.append("post", post);
//       formData.append("pin", pin);
//       formData.append("Phone", Phone);
//       formData.append("aadhaar", aadhaar);
//       formData.append('worktype',worktype);
//       formData.append('age',age);
    
//       axios.post("http://localhost:8000/workerreg", formData, {
//         headers: {
//           "Content-Type": "multipart/form-data",
//         },
//       })
//         .then((res) => {
//           if (res.data.status === "Username already exist") {
//             alert("User already exists");
//           } else {
//             alert("Registration successful");
//             navigate('/listworkers');
//           }
//         })
//         .catch((err) => {
//           console.error(err);
//           alert("An error occurred while registering. Please try again.");
//         });
//     };

  

//   return (
//     <div>
//       <div class="container">
//           <div class="row mb-2">
//                 <div class=" col-md-1 col-lg-3"></div>
//                 <div class=" col-12 col-md-10 col-lg-6">
//                 <div class="row">
//                   <div class=" col-12">
//                           <h4 class="mb-2 text-light text-center">Worker Registration :</h4>
//                   </div>
//                   <div class="col-12 d-flex justify-content-center px-3 px-md-4">
//                     <div class="card border border-success rounded-4 col-10 ">
//                       <div class="card-body px-4 py-3 ">
//                         <form onSubmit={datasubmit}>
//                           <div class="row">
//                             <div class="col-6">
//                               <label for="photo" class="form-label p-1">photo</label>
//                               <input onChange={handlePhotoChange} class="form-control form-control-sm" type="file"/>
//                             </div>
//                             <div class="col-6">
//                               <label for="name" class="form-label p-1">name</label>
//                               <input type="text" class="form-control form-control-sm" id="name"onChange={(e)=>setname(e.target.value)}/>
//                             </div>
//                             <div class="col-6">
//                               <label for="house" class="form-label p-1">house name</label>
//                               <input type="text" class="form-control form-control-sm" id="house" onChange={(e)=>sethouse(e.target.value)}/>
//                             </div>
//                             <div class="col-6">
//                               <label for="place" class="form-label p-1">place</label>
//                               <input type="text" class="form-control form-control-sm" id="place" onChange={(e)=>setplace(e.target.value)}/>
//                             </div>
//                             <div class="col-6 ">
//                               <label for="post" class="form-label p-1">post</label>
//                               <input type="text" class="form-control form-control-sm" id="post" onChange={(e)=>setpost(e.target.value)}/>
//                             </div>
//                             <div class="col-6">
//                               <label for="pincode" class="form-label p-1">pincode</label>
//                               <input type="text" class="form-control form-control-sm" id="pincode" onChange={(e)=>setpin(e.target.value)}/>
//                             </div>
//                             <div class="col-6">
//                               <label for="email" class="form-label p-1">email</label>
//                               <input type="email" class="form-control form-control-sm" id="email" onChange={(e)=>setemail(e.target.value)}/>
//                             </div>
                            
//                             <div class="col-6">
//                               <label for="gender" class="form-label p-1">gender</label>
//                               <select id="gender" class="form-select form-select-sm" onChange={(e)=>setgender(e.target.value)}>
//                                 <option selected>Choose...</option>
//                                 <option value="male">Male</option>
//                                 <option value="female">Female</option>
//                                 <option value="other">Other</option>
//                               </select>
//                             </div>
//                             <div class="col-6">
//                               <label for="age" class="form-label p-1">age</label>
//                               <input type="number" class="form-control form-control-sm" id="age" onChange={(e)=>setage(e.target.value)}/>
//                             </div>
//                             <div class="col-6">
//                               <label for="phone" class="form-label p-1">phone number</label>
//                               <input type="number" class="form-control form-control-sm" id="Phone" onChange={(e)=>setphone(e.target.value)}/>
//                             </div>
//                             <div class="col-6">
//                               <label for="worktype" class="form-label p-1">work type</label>
//                               <select id="worktype" class="form-select form-select-sm" onChange={(e)=>setworktype(e.target.value)}>
//                                 <option selected>Choose...</option>
//                                 <option value="carpenter">Carpenter</option>
//                                 <option value="mason">Mason</option>
//                                 <option value="painter">Painter</option>
//                               </select>
//                             </div>
//                             <div class="col-6">
//                               <label for="aadhaar" class="form-label p-1">aadhaar number</label>
//                               <input type="number" maxlength="12" class="form-control form-control-sm" id="aadhaar" onChange={(e)=>setaadhaar(e.target.value)}/>
//                             </div>
                            
//                             <div class="col-12 mt-2 text-center">
//                               <button class="btn btn-lg btn-outline-success mybtn" type="submit">Register</button>
//                             </div>
//                           </div>
//                         </form>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//               <div class=" col-md-1 col-lg-3"></div>
//             </div>
//         </div>
//     </div>
//   )
// }

// export default Workerreg
import React from 'react'
import Headersupervisor from './Headersupervisor'
import axios from 'axios'
import { useState, useEffect } from 'react'
import uuid from 'react-uuid'
import { useNavigate } from 'react-router-dom'

function Workerreg() {
    const [id, setId] = useState('')
    const [name, setName] = useState('')
    const [house, setHouse] = useState('')
    const [place, setPlace] = useState('')
    const [post, setPost] = useState('')
    const [pin, setPin] = useState('')
    const [gender, setGender] = useState('')
    const [age, setAge] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [photo, setPhoto] = useState(null)
    const [worktype, setWorktype] = useState('')
    const [aadhaar, setAadhaar] = useState('')
    const [errors, setErrors] = useState({}) // State for form errors
    const navigate = useNavigate()

    useEffect(() => {
        setId(uuid().slice(0, 4))
    }, []);

    const handlePhotoChange = (e) => {
        setPhoto(e.target.files[0])
    }

    const validateEmail = (email) => {
        // Email regex pattern for basic validation
        const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return pattern.test(email);
    }

    const datasubmit = (e) => {
        e.preventDefault();

        const newErrors = {}; // Object to store new errors

        // Simple validation checks
        if (!name || !house || !place || !post || !pin || !gender || !age || !email || !phone || !photo || !worktype || !aadhaar) {
            newErrors.allFields = "Please fill in all fields";
        }

        if (!/^[a-zA-Z ]+$/.test(name)) {
            newErrors.name = "Name should only contain alphabets and spaces";
        }

        if (pin.length !== 6) {
            newErrors.pin = "Pincode should be 6 digits";
        }

        if (age.length > 2) {
            newErrors.age = "Age should be maximum 2 digits";
        }

        if (!validateEmail(email)) {
            newErrors.email = "Invalid email format";
        }

        if (phone.length !== 10) {
            newErrors.phone = "Phone number should be 10 digits";
        }

        if (aadhaar.length !== 12) {
            newErrors.aadhaar = "Aadhaar number should be exactly 12 digits";
        }

        setErrors(newErrors); // Update errors state

        // If there are errors, stop form submission
        if (Object.keys(newErrors).length > 0) {
            return;
        }

        const formData = new FormData();
        formData.append("photo", photo);
        formData.append("id", id);
        formData.append("name", name);
        formData.append("email", email);
        formData.append("gender", gender);
        formData.append("house", house);
        formData.append("place", place);
        formData.append("post", post);
        formData.append("pin", pin);
        formData.append("Phone", phone);
        formData.append("aadhaar", aadhaar);
        formData.append('worktype', worktype);
        formData.append('age', age);

        axios.post("http://localhost:8000/workerreg", formData, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        })
            .then((res) => {
                if (res.data.status === "Username already exist") {
                    alert("User already exists");
                } else {
                    alert("Registration successful");
                    navigate('/listworkers');
                }
            })
            .catch((err) => {
                console.error(err);
                alert("An error occurred while registering. Please try again.");
            });
    };

    return (
        <div>
            <div className="container">
                <div className="row mb-2">
                    <div className=" col-md-1 col-lg-3"></div>
                    <div className=" col-12 col-md-10 col-lg-6">
                        <div className="row">
                            <div className=" col-12">
                                <h4 className="mb-2 text-light text-center">Worker Registration :</h4>
                            </div>
                            <div className="col-12 d-flex justify-content-center px-3 px-md-4">
                                <div className="card border border-success rounded-4 col-10 ">
                                    <div className="card-body px-4 py-3 ">
                                        <form onSubmit={datasubmit}>
                                            <div className="row">
                                                <div className="col-6">
                                                    <label htmlFor="photo" className="form-label p-1">photo</label>
                                                    <input onChange={handlePhotoChange} className="form-control form-control-sm" type="file" />
                                                </div>
                                                <div className="col-6">
                                                    <label htmlFor="name" className="form-label p-1">name</label>
                                                    <input type="text" className="form-control form-control-sm" id="name" onChange={(e) => setName(e.target.value)} />
                                                    {errors.name && <div className="text-danger">{errors.name}</div>}
                                                </div>
                                                <div className="col-6">
                                                    <label htmlFor="house" className="form-label p-1">house name</label>
                                                    <input type="text" className="form-control form-control-sm" id="house" onChange={(e) => setHouse(e.target.value)} />
                                                </div>
                                                <div className="col-6">
                                                    <label htmlFor="place" className="form-label p-1">place</label>
                                                    <input type="text" className="form-control form-control-sm" id="place" onChange={(e) => setPlace(e.target.value)} />
                                                </div>
                                                <div className="col-6 ">
                                                    <label htmlFor="post" className="form-label p-1">post</label>
                                                    <input type="text" className="form-control form-control-sm" id="post" onChange={(e) => setPost(e.target.value)} />
                                                </div>
                                                <div className="col-6">
                                                    <label htmlFor="pincode" className="form-label p-1">pincode</label>
                                                    <input type="text" className="form-control form-control-sm" id="pincode" onChange={(e) => setPin(e.target.value)} />
                                                    {errors.pin && <div className="text-danger">{errors.pin}</div>}
                                                </div>
                                                <div className="col-6">
                                                    <label htmlFor="email" className="form-label p-1">email</label>
                                                    <input type="email" className="form-control form-control-sm" id="email" onChange={(e) => setEmail(e.target.value)} />
                                                    {errors.email && <div className="text-danger">{errors.email}</div>}
                                                </div>

                                                <div className="col-6">
                                                    <label htmlFor="gender" className="form-label p-1">gender</label>
                                                    <select id="gender" className="form-select form-select-sm" onChange={(e) => setGender(e.target.value)}>
                                                        <option defaultValue>Choose...</option>
                                                        <option value="male">Male</option>
                                                        <option value="female">Female</option>
                                                        <option value="other">Other</option>
                                                    </select>
                                                </div>
                                                <div className="col-6">
                                                    <label htmlFor="age" className="form-label p-1">age</label>
                                                    <input type="number" className="form-control form-control-sm" id="age" onChange={(e) => setAge(e.target.value)} />
                                                    {errors.age && <div className="text-danger">{errors.age}</div>}
                                                </div>
                                                <div className="col-6">
                                                    <label htmlFor="phone" className="form-label p-1">phone number</label>
                                                    <input type="number" className="form-control form-control-sm" id="Phone" onChange={(e) => setPhone(e.target.value)} />
                                                    {errors.phone && <div className="text-danger">{errors.phone}</div>}
                                                </div>
                                                <div className="col-6">
                                                    <label htmlFor="worktype" className="form-label p-1">work type</label>
                                                    <select id="worktype" className="form-select form-select-sm" onChange={(e) => setWorktype(e.target.value)}>
                                                        <option defaultValue>Choose...</option>
                                                        <option value="Carpenter">Carpenter</option>
                                                        <option value="Mason">Mason</option>
                                                        <option value="Painter">Painter</option>
                                                    </select>
                                                </div>
                                                <div className="col-6">
                                                    <label htmlFor="aadhaar" className="form-label p-1">aadhaar number</label>
                                                    <input type="number" className="form-control form-control-sm" id="aadhaar" onChange={(e) => setAadhaar(e.target.value)} />
                                                    {errors.aadhaar && <div className="text-danger">{errors.aadhaar}</div>}
                                                </div>

                                                <div className="col-12 mt-2 text-center">
                                                    <button className="btn btn-lg btn-outline-success mybtn" type="submit">Register</button>
                                                </div>
                                                {errors.allFields && <div className="col-12 mt-2 text-danger text-center">{errors.allFields}</div>}
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className=" col-md-1 col-lg-3"></div>
                </div>
            </div>
        </div>
    )
}

export default Workerreg