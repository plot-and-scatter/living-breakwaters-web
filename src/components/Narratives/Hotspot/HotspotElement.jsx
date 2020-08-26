import React from "react"

const HotspotElement = ({ text, title, onClick }) => {
  return (
    <div className="HotspotElement">
      <h1>{title}</h1>
      <p>{text}</p>
      <button className="btn btn-sm btn-outline-brand-light" onClick={onClick}>
        <i className="fas fa-times mr-2" />
        Close
      </button>
    </div>
  )
}

export default HotspotElement
