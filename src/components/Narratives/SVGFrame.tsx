import React from 'react'

import './SVGFrame.scss'

interface Props {
  id: string
  children: React.ReactNode
}

export const SVG_FRAME_X = 800
export const SVG_FRAME_Y = 300

const SVGFrame = ({ id, children }: Props): JSX.Element => {
  // const width = '300px'
  // const height = '150px'

  // {(width, height)}
  return (
    <div className="SVGFrame" style={{}}>
      <svg
        id={id}
        // width={SVG_FRAME_X}
        // height={SVG_FRAME_Y}
        viewBox={`0 0 ${SVG_FRAME_X} ${SVG_FRAME_Y}`}
      >
        {children}
      </svg>
    </div>
  )
}

export default SVGFrame
