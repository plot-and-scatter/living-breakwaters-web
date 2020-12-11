import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import { TimelineMax, gsap } from 'gsap'
import { CSSPlugin } from 'gsap/CSSPlugin'
// import { MorphSVGPlugin } from "gsap/MorphSVGPlugin"

import './Hotspot.scss'
import { useCallback } from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useRef } from 'react'
import HotspotElement from './HotspotElement'

if (gsap) gsap.registerPlugin(CSSPlugin)

const BASE_RADIUS = 40
const EXPANDED_RADIUS = BASE_RADIUS + 5

const Hotspot = ({
  xOffset,
  yOffset,
  title,
  childElement,
  height,
  width,
  xPopupOffset,
  yPopupOffset
}) => {
  const [showHotspot, setShowHotspot] = useState(false)
  const [isHovered, setIsHovered] = useState(false)
  const [clientX, setClientX] = useState(0)
  const [clientY, setClientY] = useState(0)

  const hotspotClick = useCallback(
    (e) => {
      setClientX(e.clientX)
      setClientY(e.clientY)
      setShowHotspot(!showHotspot)
    },
    [setClientX, setClientY, setShowHotspot, showHotspot]
  )

  const hotspotMouseEnter = useCallback(() => {
    setIsHovered(true)
  }, [])

  const hotspotMouseLeave = useCallback(() => {
    setIsHovered(false)
  })

  const timeline = useRef()
  const circleRef = useRef()

  useEffect(() => {
    // Set up timeline
    timeline.current = new TimelineMax({ repeat: -1, repeatDelay: 0.2 })
      .to(circleRef.current, {
        r: EXPANDED_RADIUS,
        autoRound: false,
        force3D: true
      })
      .to(circleRef.current, {
        r: BASE_RADIUS,
        autoRound: false,
        force3D: true
      })
      .duration(2)
  }, [])

  useEffect(() => {
    const el = document.getElementById('HotspotText')
    if (showHotspot) {
      ReactDOM.render(
        <HotspotElement
          title={title}
          height={height}
          width={width}
          childElement={childElement}
          onClick={() => {
            console.log('click!!!')
            setShowHotspot(false)
          }}
        />,
        el
      )
      el.style.left = `${clientX - 15 + (xPopupOffset || 0)}px`
      el.style.top = `${clientY - 100 + (yPopupOffset || 0)}px`
      el.style.visibility = 'visible'
    } else {
      ReactDOM.unmountComponentAtNode(el)
      el.style.visibility = 'hidden'
    }
  }, [showHotspot])

  useEffect(() => {
    if (isHovered) {
      timeline.current.resume()
    } else {
      timeline.current.pause()
    }
  }, [isHovered])

  return (
    <g className="Hotspot">
      <circle
        ref={circleRef}
        className="animate"
        r={BASE_RADIUS}
        cx={xOffset || 0}
        cy={yOffset || 0}
        onClick={hotspotClick}
        onMouseEnter={hotspotMouseEnter}
        onMouseLeave={hotspotMouseLeave}
      />
    </g>
  )
}

Hotspot.propTypes = {
  xOffset: PropTypes.number,
  yOffset: PropTypes.number,
  title: PropTypes.string,
  text: PropTypes.any
}

export default Hotspot
