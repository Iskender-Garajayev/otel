import React from 'react'
import Navbar from '../../navigation/navbar/Navbar'
import Sidebar from '../../navigation/sidebar/Sidebar'

const Nots = () => {
  return (
    <div className='home-container'>
    <Sidebar/>
    <div className="home-container-screen">
      <Navbar/>
      <h2>Nots</h2>
    </div>
  </div>
  )
}

export default Nots