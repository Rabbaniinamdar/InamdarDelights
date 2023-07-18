import React from 'react'
import "../components/styles/Specials.css"
import SpecialsCard from './SpecialsCard'
import { NavLink } from 'react-router-dom';

const Specials = () => {
  return (
    <div className="specials-section-container">
      <div className="specials-section-title">
        <h2>This Week's Specials</h2>
        <div className="btn-container">
          <NavLink to="/menu"><button className="btn btn-menu">Check Our Menu</button></NavLink>

        </div>
      </div>
      <SpecialsCard />

    </div>
  )
}

export default Specials
