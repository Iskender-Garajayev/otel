import React from 'react'
import Navbar from '../../navigation/navbar/Navbar'
import Sidebar from '../../navigation/sidebar/Sidebar'

const Personal = () => {
  return (
    <div className='home-container'>
    <Sidebar/>
    <div className="home-container-screen">
      <Navbar/>
      <h2>Personals</h2>
    </div>
  </div>
  )
}

export default Personal