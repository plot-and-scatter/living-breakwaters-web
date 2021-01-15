import React from 'react'

import './HotspotElement.scss'

interface Props {
  children: React.ReactNode
  height: number
  onClick: () => void
  title: string
  width: number
}

const HotspotElement = ({
  children,
  height,
  onClick,
  title,
  width
}: Props): JSX.Element => {
  const _width = width || 300

  console.log('_width', _width, width, height)

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
