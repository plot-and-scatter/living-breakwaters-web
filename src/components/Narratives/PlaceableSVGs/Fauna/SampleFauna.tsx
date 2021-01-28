import React, { useEffect, useRef } from 'react'

import PlaceableSVGProps from '../../../../@types/PlaceableSVGProps'

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
  const baseXTransform = -260
  const baseYTransform = -17

  const xTransform = baseXTransform + xOffset
  const yTransform = baseYTransform + yOffset

  const translate = `translate(${xTransform}, ${yTransform})`

  console.log(translate)

  return (
    <>
      <svg
        x={0}
        y={0}
        viewBox={`0 0 100 200`}
        fill={'purple'}
        fillOpacity={0.5}
      >
        <path d="M 0 0 H 100 V 50 H 0 L 0 0" />
      </svg>
      <svg
        x={-50}
        y={0}
        viewBox={`0 0 200 200`}
        fill={'blue'}
        fillOpacity={0.5}
      >
        <path d="M 0 0 H 200 V 200 H 0 L 0 0" />
      </svg>
      <svg x={50} y={0} viewBox={`0 0 50 50`} fill={'green'} fillOpacity={0.5}>
        <path d="M 0 0 H 50 V 50 H 0 L 0 0" />
      </svg>
    </>
  )
}

export default SampleFauna
