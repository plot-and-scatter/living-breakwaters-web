import React, { useEffect, useRef } from 'react'

import PlaceableSVGProps from '../../../../@types/PlaceableSVGProps'
import { SVG_FRAME_X, SVG_FRAME_Y } from '../../SVGFrame'

const BASE_WIDTH = 0.1
const BASE_HEIGHT = 0.1
const BASE_SCALE = 50
const BASE_X = 10
const BASE_Y = 10

const SampleFauna = ({
  xOffset = 0,
  yOffset = 0,
  xScale = 1,
  yScale = 1
}: PlaceableSVGProps): JSX.Element => {
  // const baseXTransform = -260
  // const baseYTransform = -17

  // const xTransform = baseXTransform + xOffset
  // const yTransform = baseYTransform + yOffset

  // const translate = `translate(${xTransform}, ${yTransform})`

  // console.log(translate)

  // We want the purple square to be right in the middle of the outer blue square,
  // and take up 10% of its width.

  const purpleBoxScale = 0.2
  const purpleBoxWidth = purpleBoxScale * SVG_FRAME_X
  const purpleBoxCenterXPercent = 0.8
  const purpleBoxCenterYPercent = 0.0
  const purpleBoxX = purpleBoxCenterXPercent * SVG_FRAME_X - purpleBoxWidth / 2
  const purpleBoxYPC = purpleBoxCenterYPercent * 100 - 50

  const yellowBoxScale = 0.3
  const yellowBoxWidth = yellowBoxScale * SVG_FRAME_X
  const yellowBoxCenterXPercent = 0.5
  const yellowBoxX = yellowBoxCenterXPercent * SVG_FRAME_X - yellowBoxWidth / 2

  return (
    <>
      <svg
        className="Example1"
        fillOpacity={0.5}
        width={purpleBoxWidth}
        // height={height}
        x={purpleBoxX}
        y={`${purpleBoxYPC}%`}
        viewBox={`0 0 50 100`}
      >
        <rect width={50} height={100} fill={`purple`} />
        <circle r={1} cx={25} cy={50} />
      </svg>
      <svg
        viewBox={`0 0 150 150`}
        fill={'red'}
        fillOpacity={0.5}
        x={yellowBoxX}
        width={yellowBoxWidth}
      >
        <rect width={150} height={150} fill={`red`} fillOpacity={0.1} />
        <path d="M 75,0 L 0,150 L 150,150 z" fill={'yellow'} />
      </svg>
    </>
  )
}

export default SampleFauna
