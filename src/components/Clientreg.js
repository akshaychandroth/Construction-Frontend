
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import { useNavigate } from 'react-router-dom';
import Headeradmin from './Headeradmin';

function Clientreg() {
  const [id, setId] = useState(uuidv4().slice(0, 4));
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

  const handlePhotoChange = (e) => {
    setPhoto(e.target.files[0]);
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

    if (!password.trim()) {
      errors.password = 'Password is required';
      isValid = false;
    } else if (password.trim().length < 8) {
      errors.password = 'Password should be at least 8 characters long';
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

    if (!pin.trim()) {
      errors.pin = 'Pincode is required';
      isValid = false;
    } else if (!/^\d{6}$/.test(pin)) {
      errors.pin = 'Pincode should be 6 digits';
      isValid = false;
    }

    if (!phone.trim()) {
      errors.phone = 'Phone number is required';
      isValid = false;
    } else if (!/^\d{10}$/.test(phone)) {
      errors.phone = 'Phone number should be 10 digits';
      isValid = false;
    }

    if (!aadhar.trim()) {
      errors.aadhar = 'Aadhar number is required';
      isValid = false;
    } else if (!/^\d{12}$/.test(aadhar)) {
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

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    const formData = new FormData();
    formData.append('photo', photo);
    formData.append('id', id);
    formData.append('username', username);
    formData.append('password', password);
    formData.append('name', name);
    formData.append('email', email);
    formData.append('gender', gender);
    formData.append('house', house);
    formData.append('place', place);
    formData.append('post', post);
    formData.append('pin', pin);
    formData.append('phone', phone);
    formData.append('aadhar', aadhar);

    axios
      .post('http://localhost:8000/clientreg', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      .then((res) => {
        if (res.data.status === 'Username already exist') {
          alert('User already exists');
        } else {
          alert('Registration successful');
          navigate('/listclients');
        }
      })
      .catch((err) => {
        console.error(err);
        alert('An error occurred while registering. Please try again.');
      });
  };

  return (
    <div>
      <Headeradmin />

      <div className="container">
        <div className="row mb-2">
          <div className="col-md-1 col-lg-3"></div>
          <div className="col-12 col-md-10 col-lg-6">
            <div className="row">
              <div className="col-12">
                <h4 className="mb-2 text-light text-center">Client Registration :</h4>
              </div>
              <div className="col-12 d-flex justify-content-center px-3 px-md-4">
                <div className="card border border-success rounded-4 col-10 ">
                  <div className="card-body px-4 py-3 ">
                    <form encType="multipart/form-data" onSubmit={handleSubmit}>
                      <div className="row">
                        <div className="col-6">
                          <label htmlFor="photo" className="form-label p-1">
                            Photo
                          </label>
                          <input
                            onChange={handlePhotoChange}
                            className="form-control form-control-sm"
                            name="photo"
                            type="file"
                          />
                          {formErrors.photo && (
                            <div className="text-danger">{formErrors.photo}</div>
                          )}
                        </div>
                        <div className="col-6">
                          <label htmlFor="name" className="form-label p-1">
                            Name
                          </label>
                          <input
                            type="text"
                            className="form-control form-control-sm"
                            id="name"
                            onChange={(e) => setName(e.target.value)}
                          />
                          {formErrors.name && (
                            <div className="text-danger">{formErrors.name}</div>
                          )}
                        </div>
                        <div className="col-6">
                          <label htmlFor="email" className="form-label p-1">
                            Email
                          </label>
                          <input
                            type="email"
                            className="form-control form-control-sm"
                            id="email"
                            onChange={(e) => setEmail(e.target.value)}
                          />
                          {formErrors.email && (
                            <div className="text-danger">{formErrors.email}</div>
                          )}
                        </div>
                        <div className="col-6">
                          <label htmlFor="cluname" className="form-label p-1">
                            Username
                          </label>
                          <input
                            type="text"
                            className="form-control form-control-sm"
                            id="uname"
                            onChange={(e) => setUsername(e.target.value)}
                          />
                          {formErrors.username && (
                            <div className="text-danger">{formErrors.username}</div>
                          )}
                        </div>
                        <div className="col-6">
                          <label htmlFor="psw" className="form-label p-1">
                            Password
                          </label>
                          <input
                            type="password"
                            className="form-control form-control-sm"
                            id="psw"
                            onChange={(e) => setPassword(e.target.value)}
                          />
                          {formErrors.password && (
                            <div className="text-danger">{formErrors.password}</div>
                          )}
                        </div>
                        <div className="col-6">
                          <label htmlFor="gender" className="form-label p-1">
                            Gender
                          </label>
                          <select
                            id="gender"
                            className="form-select form-select-sm"
                            onChange={(e) => setGender(e.target.value)}
                          >
                            <option value="">Choose...</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="other">Other</option>
                          </select>
                          {formErrors.gender && (
                            <div className="text-danger">{formErrors.gender}</div>
                          )}
                        </div>
                        <div className="col-6">
                          <label htmlFor="house" className="form-label p-1">
                            House Name
                          </label>
                          <input
                            type="text"
                            className="form-control form-control-sm"
                            id="house"
                            onChange={(e) => setHouse(e.target.value)}
                          />
                          {formErrors.house && (
                            <div className="text-danger">{formErrors.house}</div>
                          )}
                        </div>
                        <div className="col-6">
                          <label htmlFor="place" className="form-label p-1">
                            Place
                          </label>
                          <input
                            type="text"
                            className="form-control form-control-sm"
                            id="place"
                            onChange={(e) => setPlace(e.target.value)}
                          />
                          {formErrors.place && (
                            <div className="text-danger">{formErrors.place}</div>
                          )}
                        </div>
                        <div className="col-6">
                          <label htmlFor="post" className="form-label p-1">
                            Post
                          </label>
                          <input
                            type="text"
                            className="form-control form-control-sm"
                            id="post"
                            onChange={(e) => setPost(e.target.value)}
                          />
                          {formErrors.post && (
                            <div className="text-danger">{formErrors.post}</div>
                          )}
                        </div>
                        <div className="col-6">
                          <label htmlFor="pincode" className="form-label p-1">
                            Pincode
                          </label>
                          <input
                            type="text"
                            className="form-control form-control-sm"
                            id="pincode"
                            onChange={(e) => setPin(e.target.value)}
                          />
                          {formErrors.pin && (
                            <div className="text-danger">{formErrors.pin}</div>
                          )}
                        </div>
                        <div className="col-6">
                          <label htmlFor="phone" className="form-label p-1">
                            Phone Number
                          </label>
                          <input
                            type="tel"
                            className="form-control form-control-sm"
                            id="phone"
                            onChange={(e) => setPhone(e.target.value)}
                          />
                          {formErrors.phone && (
                            <div className="text-danger">{formErrors.phone}</div>
                          )}
                        </div>
                        <div className="col-6">
                          <label htmlFor="aadhar" className="form-label p-1">
                            Aadhar Number
                          </label>
                          <input
                            type="number"
                            maxLength="12"
                            className="form-control form-control-sm"
                            id="aadhar"
                            onChange={(e) => setAadhar(e.target.value)}
                          />
                          {formErrors.aadhar && (
                            <div className="text-danger">{formErrors.aadhar}</div>
                          )}
                        </div>
                        <div className="col-12 mt-2 text-center">
                          <button className="btn btn-lg btn-outline-success mybtn" type="submit">
                            Register
                          </button>
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

export default Clientreg;