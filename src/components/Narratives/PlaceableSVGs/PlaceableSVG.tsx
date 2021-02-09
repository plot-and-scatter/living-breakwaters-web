import React from 'react'
import { ViewBox } from '../../../@types/ViewBox'

import { attributesForPlacedItem } from './PlaceableSVGHelper'

interface Props {
  children: React.ReactNode
  defaultScale?: number
  scale?: number
  viewBox: ViewBox
  xOffset?: number
  yOffset?: number
}

const PlaceableSVG = ({
  children,
  defaultScale,
  scale,
  viewBox,
  xOffset,
  yOffset
}: Props): JSX.Element => {
  return (
    <svg
      viewBox={`${viewBox.x} ${viewBox.y} ${viewBox.width} ${viewBox.height}`}
      {...attributesForPlacedItem(
        scale || defaultScale || 0.5,
        xOffset,
        yOffset
      )}
    >
      <rect
        x={viewBox.x}
        y={viewBox.y}
        width={viewBox.width}
        height={viewBox.height}
        fill={`green`}
        fillOpacity={0}
      />
      {children}
    </svg>
  )
}

export default PlaceableSVG
