import '../css/bootstrap/css/bootstrap.css';
import '../css/bootstrap/css/style.css';
import '../css/bootstrap/css/panel.css';
import React, { useEffect } from 'react';
import Head1 from './Head1';
import Headeradmin from './Headeradmin';


function Adminpanel() {
  
  return (
    <div className='home-body'>
      {/* <Head1/> */}
      <Headeradmin/>
      <h1 className='text-white text-center' style={{ marginTop: '30vh' }}>AM CONSTRUCTIONS</h1>
      <h2 className='text-white text-center '>Welcome admin!</h2>
    </div>
  );
}

export default Adminpanel;
