import PropTypes from 'prop-types'
import React from 'react'
import { Link } from 'gatsby'

import './Nav.scss'

class Nav extends React.Component {
  render() {
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
            <li className="nav-item">
              <Link className="nav-link" to="/map">
                Map
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/narratives">
                Narratives
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/strategies">
                Strategies
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/case-study">
                Case study
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    )
  }
}

export default Nav

Nav.propTypes = {
  title: PropTypes.string
}
