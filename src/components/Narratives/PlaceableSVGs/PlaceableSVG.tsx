import React from 'react'
import PlaceableSVGProps from '../../../@types/PlaceableSVGProps'
import { ViewBox } from '../../../@types/ViewBox'

import { attributesForPlacedItem } from './PlaceableSVGHelper'

interface Props extends React.SVGProps<SVGSVGElement> {
  children: React.ReactNode
  defaultScale?: number
  scale?: number
  viewBoxObj: ViewBox
  xOffset?: number
  yOffset?: number
  useGsap?: boolean
}

const PlaceableSVG = (props: Props): JSX.Element => {
  const {
    viewBoxObj: vb,
    children,
    xOffset,
    yOffset,
    defaultScale,
    scale
  } = props

  return (
    <svg
      viewBox={`${vb.x} ${vb.y} ${vb.width} ${vb.height}`}
      {...attributesForPlacedItem(
        scale || defaultScale || 0.5,
        xOffset,
        yOffset
      )}
      style={props.style}
    >
      <rect
        x={vb.x}
        y={vb.y}
        width={vb.width}
        height={vb.height}
        fill={`green`}
        fillOpacity={0.05}
      />
      {children}
    </svg>
  )
}

export default PlaceableSVG
