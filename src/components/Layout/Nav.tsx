import { Link } from 'gatsby'
import React from 'react'

import NavLink from './NavLink'

import './Nav.scss'

const Nav = (): JSX.Element => {
  return (
    <nav
      className="Nav navbar navbar-expand-sm fixed-top navbar-dark bg-dark border-bottom border-dark py-3"
      style={{ zIndex: 3000 }}
    >
      <Link className="navbar-brand" to="/">
        Changing Coastlines
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
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdownMenuLink"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Case Studies
            </a>
            <div
              className="dropdown-menu dropdown-menu-right"
              aria-labelledby="navbarDropdownMenuLink"
            >
              <Link className="dropdown-item" to="/case-study-point-grey">
                Point Grey Cliffs
              </Link>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Nav
