import { MorphSVGPlugin } from 'gsap/MorphSVGPlugin'
import { Power2, TimelineMax, gsap } from 'gsap'
import React, { useEffect, useRef, useState } from 'react'

import PlaceableSVGProps from '../../../@types/PlaceableSVGProps'
import PlaceableSVG from './PlaceableSVG'
import { viewBox } from './PlaceableSVGHelper'

if (gsap) gsap.registerPlugin(MorphSVGPlugin)

import './Text.scss'

interface Props extends PlaceableSVGProps {
  children: string
  rotate?: number
}

const Text = (props: Props): JSX.Element => {
  const [rotation, setRotation] = useState<number>(props.rotate)

  const textRef = useRef()

  useEffect(() => {
    if (props.rotate) {
      console.log('rotation', rotation)
      gsap.to(textRef.current, { rotate: props.rotate })
    }
  }, [props.rotate])

  return (
    <PlaceableSVG
      viewBoxObj={viewBox(0, 0, 10, 10)}
      defaultScale={0.01}
      {...props}
      style={{ overflow: 'visible' }}
    >
      <g className="Text" ref={textRef} transform={`rotate(${rotation})`}>
        <text>{props.children}</text>
      </g>
    </PlaceableSVG>
  )
}

export default Text
