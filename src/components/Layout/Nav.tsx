import { Link } from 'gatsby'
import React from 'react'

import './Nav.scss'
import NavLink from './NavLink'

const Nav = (): JSX.Element => {
  return (
    <nav
      className="Nav navbar navbar-expand-sm fixed-top navbar-dark bg-dark border-bottom border-dark py-3"
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
          <NavLink path="/about" title="About" />
          <NavLink path="/map" title="Map" />
          <NavLink path="/narratives" title="Narratives" />
          <NavLink path="/strategies" title="Adaptation Strategies" />
          <NavLink path="/case-study" title="Case Study" />

          {/* <NavLink path="/cultural-landscapes" title="Cultural Landscapes" />
          <NavLink path="/food-security" title="Food Security" />
          <NavLink path="/logistics-networks" title="Logistics Networks" />
          <NavLink path="/utility-systems" title="Utility Systems" /> */}
          {/* Put stories into a dropdown called "Challenges" */}
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdownMenuLink"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Explore
            </a>
            <div
              className="dropdown-menu dropdown-menu-right"
              aria-labelledby="navbarDropdownMenuLink"
            >
              <Link className="dropdown-item" to="/cultural-landscapes">
                Cultural Landscapes
              </Link>
              <Link className="dropdown-item" to="/food-security">
                Food Security
              </Link>
              <Link className="dropdown-item" to="/logistics-networks">
                Logistics Networks
              </Link>
              <Link className="dropdown-item" to="/utility-systems">
                Utility Systems
              </Link>
            </div>
          </li>

          {/* <NavLink path="/contact" title="Contact" /> */}
        </ul>
      </div>
    </nav>
  )
}

export default Nav
