import React from 'react'
import Headersupervisor from './Headersupervisor'
import { useLocation } from 'react-router-dom'

function Supervisorpanel() {
  const location = useLocation()
  const role = location.state && location.state.role
  const username = location.state && location.state.username
  
  return (
    <div className='home-body'>
      <Headersupervisor/>
      <h1 className='text-white text-center' style={{ marginTop: '30vh' }}>AM CONSTRUCTIONS</h1>
      <h2 className='text-white text-center '>Welcome to Supervisor's Panel !</h2>
    </div>
  )
}

export default Supervisorpanel
