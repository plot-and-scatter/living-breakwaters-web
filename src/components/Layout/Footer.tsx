import React from 'react'

import './Footer.scss'

interface Props {
  title: string
}

const Footer = ({ title }: Props): JSX.Element => {
  return (
    <footer className="Footer container-fluid py-2 text-muted">
      <div className="row">
        <div className="col">
          <h5>{title}</h5>
        </div>
      </div>
      <div className="row pt-0">
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

export default Footer
