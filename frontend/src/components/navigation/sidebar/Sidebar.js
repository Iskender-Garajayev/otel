import React from 'react'
import './sidebar.css'
import { Link } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div className='sidebar-container' >
      <div className="sidebar-nav">
      <ul>
        <li><Link to='/'>home</Link></li>
        <li><Link to='/rooms'>rooms</Link></li>
        <li><Link to='/registr'>registration</Link></li>
        <li><Link to='/gests'>gests</Link></li>
        <li><Link to='/personal'>personal</Link></li>
        <li><Link to='/nots'>nots</Link></li>
      </ul>
      </div>
    </div>
  )
}

export default Sidebar