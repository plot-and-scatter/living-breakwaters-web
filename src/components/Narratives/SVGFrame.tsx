import React from 'react'

import './SVGFrame.scss'

interface Props {
  id: string
  children: React.ReactNode
}

const SVGFrame = ({ id, children }: Props): JSX.Element => {
  const width = '50%'
  const height = '150px'

  return (
    <div className="SVGFrame" style={{ width, height }}>
      <svg id={id} xmlns="http://www.w3.org/2000/svg" viewBox={'0 0 100 50'}>
        {children}
      </svg>
    </div>
  )
}

export default SVGFrame
