import React from 'react'
import { ViewBox } from '../../../@types/ViewBox'

import { attributesForPlacedItem } from './PlaceableSVGHelper'

interface Props {
  children: React.ReactNode
  viewBox: ViewBox
  scale: number
  xOffset: number
  yOffset: number
}

const PlaceableSVG = ({
  children,
  viewBox,
  scale,
  xOffset,
  yOffset
}: Props): JSX.Element => {
  return (
    <svg
      viewBox={`${viewBox.x} ${viewBox.y} ${viewBox.width} ${viewBox.height}`}
      {...attributesForPlacedItem(scale, xOffset, yOffset)}
    >
      <rect
        x={viewBox.x}
        y={viewBox.y}
        width={viewBox.width}
        height={viewBox.height}
        fill={`green`}
        fillOpacity={0.2}
      />
      {children}
    </svg>
  )
}

export default PlaceableSVG
