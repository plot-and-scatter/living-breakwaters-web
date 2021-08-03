import React from 'react'
import PlaceableSVGProps from '../../../@types/PlaceableSVGProps'
import PlaceableSVG from '../PlaceableSVGs/PlaceableSVG'
import { viewBox } from '../PlaceableSVGs/PlaceableSVGHelper'
import { SVG_FRAME_X, SVG_FRAME_Y } from './SVGFrame'

import './SVGFrame.scss'

interface Props extends PlaceableSVGProps {
  id: string
  children: React.ReactNode
  width: number
  height: number
}

const SVGInnerFrame = (props: Props): JSX.Element => {
  return (
    <PlaceableSVG
      viewBox={{
        x: 0,
        y: 0,
        width: props.width * SVG_FRAME_X,
        height: props.height * SVG_FRAME_X
      }}
      defaultScale={1}
      {...props}
    >
      {props.children}
    </PlaceableSVG>
  )
}

export default SVGInnerFrame
