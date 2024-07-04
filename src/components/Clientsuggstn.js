


import React, { useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'


function Clientsuggstn() {
  const [suggestion, setSuggestion] = useState('');
  const [date, setDate] = useState('');
  const { clientid, projectid ,engid} = useParams(); 
  const navigate= useNavigate()

  const superId = localStorage.getItem('userId');
console.log('super',superId);


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.get(`http://localhost:8000/particlient/${superId}`);
      const superId1 = res.data.client._id;

    
      const response = await axios.post(`http://localhost:8000/suggestion/${superId1}/${projectid}/${engid}`,{suggestion,date});
      console.log('Suggestion added:', response.data);
      alert('successfully added suggestion')
      navigate('/client')
    } catch (error) {
      console.error('Error adding suggestion:', error);
    }
  };

  return (
    <div>
      <div className="container-fluid p-2 mt-5">
        <div className="row mb-2">
          <div className="col-md-1 col-lg-2"></div>
          <div className="col-12 col-md-10 col-lg-8">
            <div className="row">
              <div className="col-12">
                <h3 className="mb-4 text-light text-center">Add Plan Suggestion</h3>
              </div>
              <div className="col-12 d-flex justify-content-center px-3 px-md-4">
                <div className="card border border-success rounded-4 col-10">
                  <div className="card-title text-center border-bottom mt-3 m-0 txt-clr"><h4>Type in your suggestion:</h4></div>
                  <div className="card-body mb-3 px-4">
                    <form onSubmit={handleSubmit}>
                      <div className="mb-3">
                        <textarea className="form-control" id="suggestion" rows="5" value={suggestion} onChange={(e) => setSuggestion(e.target.value)}></textarea>
                      </div>
                      <div className="mb-3">
                      <input value={date} onChange={(e) => setDate(e.target.value)} type='date' />
                      </div>
                      <div className="text-center">
                        <button className="btn btn-lg btn-outline-success" type="submit">Submit</button>
                      </div>
                    </form>
                  </div>
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

export default Clientsuggstn;


