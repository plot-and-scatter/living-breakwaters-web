import gsap from 'gsap'
import React, { useEffect, useRef, useState } from 'react'

import { attributesForPlacedItem } from './PlaceableSVGHelper'
import { SVG_FRAME_X } from '../Frames/SVGFrame'
import { ViewBox } from '../../../@types/ViewBox'

import './PlaceableSVG.scss'

interface Props extends React.SVGProps<SVGSVGElement> {
  children: React.ReactNode
  defaultScale?: number
  scale?: number
  viewBoxObj: ViewBox
  xOffset?: number
  yOffset?: number
  useGsap?: boolean
  rotate?: number
}

const PlaceableSVG = (props: Props): JSX.Element => {
  const {
    viewBoxObj: vb,
    children,
    xOffset,
    yOffset,
    defaultScale,
    scale,
    rotate
  } = props

  const actualScale = scale || defaultScale || 0.5

  const [xPc] = useState<number>(xOffset)
  const [yPc] = useState<number>(yOffset)

  const [rotation] = useState<number>(rotate || 0)

  const gRef = useRef()
  const elementRef = useRef()

  useEffect(() => {
    if (props.rotate !== undefined) {
      gsap.to(gRef.current, { rotate: props.rotate, transformOrigin: 'center' })
    }
  }, [props.rotate])

  useEffect(() => {
    const attrs = attributesForPlacedItem(
      actualScale,
      props.xOffset - xPc,
      props.yOffset - yPc + 0.5
    )

    console.log('attrs', attrs, gRef.current)

    gsap.to(gRef.current, {
      x: ((attrs.x / actualScale) * vb.width) / SVG_FRAME_X,
      y: ((attrs.y / actualScale) * vb.width) / SVG_FRAME_X,
      duration: 1,
      ease: Power2.easeInOut
    })
  }, [props.xOffset, props.yOffset])

  return (
    <svg
      className="PlaceableSVG"
      ref={elementRef}
      viewBox={`${vb.x} ${vb.y} ${vb.width} ${vb.height}`}
      {...attributesForPlacedItem(actualScale, xPc, yPc)}
      style={props.style}
    >
      <g ref={gRef} transform={`rotate(${rotation})`}>
        <rect
          x={vb.x}
          y={vb.y}
          width={vb.width}
          height={vb.height}
          fill={`green`}
          fillOpacity={0}
        />
        {children}
      </g>
    </svg>
  )
}

export default PlaceableSVG
