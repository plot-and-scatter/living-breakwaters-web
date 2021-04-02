import { Link } from 'gatsby'
import React from 'react'

import './Nav.scss'
import NavLink from './NavLink'

const Nav = (): JSX.Element => {
  return (
    <nav className="Nav navbar navbar-expand-sm fixed-top navbar-dark bg-dark border-bottom border-dark">
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
          <NavLink path="/map" title="Map" />
          <NavLink path="/narratives" title="Narratives" />
          <NavLink path="/strategies" title="Strategies" />
          <NavLink
            path="/coastal-habitat-squeeze"
            title="Coastal Habitat Squeeze"
          />
          <NavLink path="/case-study" title="Case study" />
          <NavLink path="/about" title="About" />
          <NavLink path="/contact" title="Contact" />
        </ul>
      </div>
    </nav>
  )
}

export default Nav
