import React from 'react'

import { viewBox } from './PlaceableSVGHelper'
import PlaceableSVG from './PlaceableSVG'
import PlaceableSVGProps from '../../../@types/PlaceableSVGProps'

import './Text.scss'

interface Props extends PlaceableSVGProps {
  children: string
}

const textBoxWidth = 150

const Text = (props: Props): JSX.Element => {
  return (
    <PlaceableSVG
      defaultScale={0.015}
      className={'Text'}
      viewBoxObj={viewBox(0, 0, 20, 20)}
      {...props}
    >
      <g className="Text">
        <rect
          x={-(textBoxWidth * 0.5)}
          y={-5}
          width={textBoxWidth}
          height={30}
        />
        <text x={10} y={10} dy={5} dx={-10}>
          {props.children}
        </text>
      </g>
    </PlaceableSVG>
  )
}

export default Text
