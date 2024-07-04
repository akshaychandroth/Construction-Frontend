import '../css/bootstrap/css/bootstrap.css';
import '../css/bootstrap/css/style.css';
import '../css/bootstrap/css/panel.css';
import React from 'react';
import Headerclient from './Headerclient';
import { useLocation } from 'react-router-dom';
function Clientpanel() {
  const location = useLocation()
  const role = location.state && location.state.role
  const username = location.state && location.state.username
  return (
    <div className='home-body'>
      <Headerclient />
      <h1 className='text-white text-center' style={{ marginTop: '30vh' }}>AM CONSTRUCTIONS</h1>
      <h2 className='text-white text-center'>Welcome!</h2>
    </div>
  )
}

export default Clientpanel
