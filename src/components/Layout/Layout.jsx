import PropTypes from "prop-types"
import React from "react"

import Nav from "./Nav"
import Footer from "./Footer"

import "../../scss/app.scss"
import "../../scss/bootstrap/bootstrap.scss"
import "../../../content/assets/fonts/fonts.css"

class Layout extends React.Component {
  render() {
    const { title, children, excludeNav } = this.props

    return (
      <div>
        {!excludeNav && <Nav title={title} />}
        <div className="container-fluid bg-white">
          <main>{children}</main>
        </div>
        <Footer title={title} />
      </div>
    )
  }
}

export default Layout

Layout.propTypes = {
  excludeNav: PropTypes.bool,
  title: PropTypes.string,
  children: PropTypes.node,
}
