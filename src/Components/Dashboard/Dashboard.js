import React from 'react'
import { Link } from 'react-router-dom';

import { CgProfile } from 'react-icons/cg'


export const Dashboard = () => {
  return (
    <div className="navbar__container">
      This is Dashboard board 
      <div className="navbar__list-items">
        <Link to="/profile"><CgProfile size={40}/></Link>
      </div>

    </div>
  )
}

