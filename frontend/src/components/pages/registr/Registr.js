import React from 'react'
import Navbar from '../../navigation/navbar/Navbar'
import Sidebar from '../../navigation/sidebar/Sidebar'

const Registr = () => {
  return (
    <div className='home-container'>
    <Sidebar/>
    <div className="home-container-screen">
      <Navbar/>
      <h2>registration</h2>
    </div>
  </div>
  )
}

export default Registr