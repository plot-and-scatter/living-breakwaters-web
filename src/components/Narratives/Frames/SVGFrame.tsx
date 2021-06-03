import React from 'react'

import './SVGFrame.scss'

interface Props {
  id: string
  children: React.ReactNode
}

export const SVG_FRAME_X = 800
export const SVG_FRAME_Y = 320

const SVGFrame = ({ id, children }: Props): JSX.Element => {
  return (
    <div className="SVGFrame">
      <svg id={id} viewBox={`0 0 ${SVG_FRAME_X} ${SVG_FRAME_Y}`}>
        {children}
      </svg>
    </div>
  )
}

export default SVGFrame
