import React from 'react'

import './HotspotElement.scss'

const HotspotElement = ({ children, title, onClick, width, height }) => {
  const _width = width || 300

  console.log('_width', _width, width)

  return (
    <div className="HotspotElement" style={{ width: _width }}>
      <h1>{title}</h1>
      {children}
      <button
        className="btn btn-sm btn-outline-brand-light mt-2"
        onClick={onClick}
      >
        <i className="fas fa-times mr-2" />
        Close
      </button>
    </div>
  )
}

export default HotspotElement
