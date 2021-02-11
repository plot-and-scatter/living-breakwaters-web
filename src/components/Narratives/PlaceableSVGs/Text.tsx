import React from 'react'

import PlaceableSVGProps from '../../../@types/PlaceableSVGProps'
import PlaceableSVG from './PlaceableSVG'
import { viewBox } from './PlaceableSVGHelper'

import './Text.scss'

interface Props extends PlaceableSVGProps {
  children: string
}

const Text = (props: Props): JSX.Element => {
  return (
    <PlaceableSVG
      viewBoxObj={viewBox(0, 0, 20, 20)}
      defaultScale={0.015}
      {...props}
    >
      <g className="Text">
        <text x={10} y={10} dy={5}>
          {props.children}
        </text>
      </g>
    </PlaceableSVG>
  )
}

export default Text
