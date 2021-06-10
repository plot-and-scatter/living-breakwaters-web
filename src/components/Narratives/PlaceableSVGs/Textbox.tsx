import React from 'react'

import { viewBox } from './PlaceableSVGHelper'
import PlaceableSVG from './PlaceableSVG'
import PlaceableSVGProps from '../../../@types/PlaceableSVGProps'

import './Textbox.scss'

interface Props extends PlaceableSVGProps {
  children: string
  textboxWidth?: number
}

const DEFAULT_TEXTBOX_WIDTH = 150

const Textbox = (props: Props): JSX.Element => {
  const textboxWidth = props.textboxWidth || DEFAULT_TEXTBOX_WIDTH

  return (
    <PlaceableSVG
      defaultScale={0.015}
      className={'Textbox'}
      viewBoxObj={viewBox(0, 0, 20, 20)}
      {...props}
    >
      <g className="Textbox">
        <rect
          x={-(textboxWidth * 0.5)}
          y={-5}
          width={textboxWidth}
          height={30}
        />
        <text x={10} y={10} dy={5} dx={-10}>
          {props.children}
        </text>
      </g>
    </PlaceableSVG>
  )
}

export default Textbox
