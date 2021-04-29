import { Link } from 'gatsby'
import React from 'react'
import { readBuilderProgram } from 'typescript'

import './Nav.scss'
import NavLink from './NavLink'

const Nav = (): JSX.Element => {
  return (
    <nav
      className="Nav navbar navbar-expand-sm fixed-top navbar-dark bg-dark border-bottom border-dark"
      style={{ zIndex: 3000 }}
    >
      <Link className="navbar-brand" to="/">
        Living Breakwaters
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ml-auto">
          {/* <NavLink path="/map" title="Map" /> */}
          {/* <NavLink path="/narratives" title="Narratives" /> */}
          {/* <NavLink path="/strategies" title="Strategies" /> */}
          <NavLink
            path="/critical-infrastructures"
            title="Critical Infrastructures"
          />
          <NavLink
            path="/coastal-habitat-squeeze"
            title="Coastal Habitat Squeeze"
          />
          <NavLink
            path="/emergency-preparedness"
            title="Emergency Preparedness"
          />
          <NavLink path="/food-security" title="Food Security" />
          <div className="dropdown">
            <button
              className={`btn dropdown-toggle btn-primary}`}
              type="button"
              id="dropdownMenuButton"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
              style={{ color: `rgba(255, 255, 255, 0.5)` }}
            >
              Explore
            </button>
            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <Link className="dropdown-item" to="/map">
                Map
              </Link>
              <Link className="dropdown-item" to="/narratives">
                Narratives
              </Link>
              <Link className="dropdown-item" to="/strategies">
                Strategies
              </Link>
              <Link className="dropdown-item" to="/case-study">
                Case study
              </Link>
            </div>
          </div>
          <NavLink path="/about" title="About" />
          {/* <NavLink path="/contact" title="Contact" /> */}
        </ul>
      </div>
    </nav>
  )
}

export default Nav
