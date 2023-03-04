import React from 'react'
import Sidebar from '../sidebar/Sidebar'
import Navbar from '../navbar/Navbar'
// import Gests from '../../pages/gests/Gests'
import './home.css'

const Home = () => {
  return (
    <div className='home-container'>
      <Sidebar/>
      <div className="home-container-screen">
        <Navbar/>
        <h2>Home</h2>
      </div>
    </div>
  )
}

export default Home