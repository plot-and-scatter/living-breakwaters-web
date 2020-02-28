import PropTypes from "prop-types"
import React from "react"

import "./Footer.scss"

class Footer extends React.Component {
  render() {
    const { title } = this.props

    return (
      <footer className="Footer container-fluid pt-5 text-muted">
        <div className="row">
          <div className="col">
            <hr />
            <h5>{title}</h5>
          </div>
        </div>
        <div className="row py-3">
          <div className="col">
            UBC SALA
            <br />
            <a href="https://sala.ubc.ca/">https://sala.ubc.ca/</a>
          </div>
          <div className="col text-right">
            <small className="text-muted">
              &copy; {new Date().getFullYear()}
            </small>
          </div>
        </div>
      </footer>
    )
  }
}

export default Footer

Footer.propTypes = {
  title: PropTypes.string,
}
