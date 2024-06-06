import React from 'react'
import { Link } from 'react-router-dom'

const Success = () => {
  return (
    <div>
      <p><h1>Thank You For Registering With Us.</h1></p> 
      <p>Your Appointment has been successfully booked and the details have been mailed to you.</p>
      To Return to the home page ....
      <p>
      <button className='button-1'><Link to="/">Home</Link></button>
      </p>
    </div>
  )
}

export default Success
