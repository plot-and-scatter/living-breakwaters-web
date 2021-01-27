import { CSSPlugin } from 'gsap/CSSPlugin'
import { TimelineMax, gsap } from 'gsap'
import PropTypes from 'prop-types'
import React from 'react'
import ReactDOM from 'react-dom'

import { useCallback } from 'react'
import { useEffect } from 'react'
import { useRef } from 'react'
import { useState } from 'react'
import FixTypeLater from '../../Types/FixTypeLater'
import HotspotElement from './HotspotElement'

import './Hotspot.scss'

if (gsap) gsap.registerPlugin(CSSPlugin)

const BASE_RADIUS = 40
const EXPANDED_RADIUS = BASE_RADIUS + 5

interface Props {
  childElement: React.ReactNode
  height?: number
  narrativeStage: number
  setNarrativeStage: (narrativeStage: number) => void
  title: string
  width?: number
  xOffset: number
  yOffset: number
}

const Hotspot = ({
  childElement,
  height,
  narrativeStage,
  setNarrativeStage,
  title,
  width,
  xOffset,
  yOffset
}: Props): JSX.Element => {
  const [showHotspot, setShowHotspot] = useState(false)
  const [isHovered, setIsHovered] = useState(false)
  const [clientX, setClientX] = useState(0)
  const [clientY, setClientY] = useState(0)

  const _width = width || 300
  const _height = height || 200

  const hotspotClick = useCallback(
    (e) => {
      let _clientX = e.clientX - 10
      if (_clientX + _width + 100 > window.innerWidth)
        _clientX = window.innerWidth - _width - 100
      setClientX(_clientX)
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
  }, [])

  const timeline = useRef<FixTypeLater>()
  const circleRef = useRef()

  useEffect(() => {
    // Set up timeline
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    timeline!.current = new TimelineMax({ repeat: -1, repeatDelay: 0.2 })
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
          onClick={() => {
            setShowHotspot(false)
          }}
          narrativeStage={narrativeStage}
          setNarrativeStage={setNarrativeStage}
        >
          {childElement}
        </HotspotElement>,
        el
      )
      el.style.left = `${clientX}px`
      el.style.top = `${10}px`
      // el.style.marginRight = `50%`
      el.style.width = `${_width + 20}px`
      el.style.height = `${_height + 20}px`
      el.style.visibility = 'visible'
    } else {
      ReactDOM.unmountComponentAtNode(el)
      el.style.visibility = 'hidden'
    }
  }, [showHotspot, childElement])

  useEffect(() => {
    isHovered ? timeline.current.resume() : timeline.current.pause()
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
