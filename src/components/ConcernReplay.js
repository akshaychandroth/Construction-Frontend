import React, { useState } from 'react';
import axios from 'axios';
import '../css/bootstrap/css/bootstrap.css';
import '../css/bootstrap/css/style.css';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function ConcernReplay() {
    const [replay, setReplay] = useState('');
    const [hasReply, setHasReply] = useState(false);
  
    const params = useParams();
    console.log(params.id);
    const navigate = useNavigate()
  
  
  
    const handleSubmit = async (e) => {
      e.preventDefault();
    
      try {
        const response = await axios.put(`http://localhost:8000/concernreply/${params.id}`, {
          replay: replay
        });
    
        console.log(response.data);
        navigate('/contractor')
      
      } catch (error) {
        if (error.response && error.response.status === 400) {
          alert("Suggestion already has a reply");
          navigate('/contractor')
        } else {
          console.error("Error submitting reply:", error);
        }
      }
    };
  return (
    <div>
    <nav className="navbar navbar-expand-lg navbar-light pb-0 mb-0">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img src={require("../img/logowhite.png")} width="55" height="55" alt="logo" />
        </a>
      </div>
    </nav>
    <div className="container-fluid p-2">
      <div className="row mb-2">
        <div className="col-md-1 col-lg-2"></div>
        <div className="col-12 col-md-10 col-lg-8">
          <div className="row">
            <div className="col-12">
              <h4 className="mb-2 text-light text-center">Add reply to suggestion:</h4>
            </div>
            <div className="col-12 d-flex justify-content-center px-3 px-md-4">
              <div className="card border border-success rounded-4 col-10 ">
                <div className="card-body px-4 py-3 ">
                  <form onSubmit={handleSubmit}>
                    <div className="row">

                      <div className="col-12">
                        <label htmlFor="reply" className="form-label p-1">reply</label>
                        <textarea
                          onChange={(e) => setReplay(e.target.value)}
                          className="form-control"
                          id="reply"
                          rows="3"
                          disabled={hasReply} 
                        ></textarea>
                      </div>
                      <div className="col-12 mt-2 text-center">
                        {hasReply ? (
                          <p className="text-danger">This suggestion already has a reply.</p>
                        ) : (
                          <button
                            className="btn btn-lg btn-outline-success"
                            type="submit"
                            disabled={hasReply} 
                          >
                            Submit
                          </button>
                        )}
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


  </div>  )
}

export default ConcernReplay