import React from 'react'
import Navbar from '../../navigation/navbar/Navbar'
import Sidebar from '../../navigation/sidebar/Sidebar'

const Rooms = () => {
  return (
    <div className='home-container'>
      <Sidebar/>
      <div className="home-container-screen">
        <Navbar/>
        <h1>Rooms</h1>
      </div>
    </div>
  )
}

export default Rooms