import { CSSPlugin } from 'gsap/CSSPlugin'
import { TimelineMax, gsap } from 'gsap'
import React, { useCallback, useEffect, useRef, useState } from 'react'
import ReactDOM from 'react-dom'

import FixTypeLater from '../../../@types/FixTypeLater'
import HotspotElement from './HotspotElement'

import './Hotspot.scss'
import PlaceableSVG from '../PlaceableSVGs/PlaceableSVG'
import PlaceableSVGProps from '../../../@types/PlaceableSVGProps'
import { viewBox } from '../PlaceableSVGs/PlaceableSVGHelper'

if (gsap) gsap.registerPlugin(CSSPlugin)

const BASE_RADIUS = 40
const EXPANDED_RADIUS = BASE_RADIUS + 5

interface Props extends PlaceableSVGProps {
  childElement: React.ReactNode
  width?: number
  height?: number
  narrativeStage: number
  setNarrativeStage: (narrativeStage: number) => void
  title: string
}

const Hotspot = (props: Props): JSX.Element => {
  const [showHotspot, setShowHotspot] = useState(false)
  const [isHovered, setIsHovered] = useState(false)
  const [clientX, setClientX] = useState(0)
  const [clientY, setClientY] = useState(0)

  const _width = props.width || 300
  const _height = props.height || 200

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
          title={props.title}
          height={props.height}
          width={props.width}
          onClick={() => {
            setShowHotspot(false)
          }}
          narrativeStage={props.narrativeStage}
          setNarrativeStage={props.setNarrativeStage}
        >
          {props.childElement}
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
  }, [showHotspot, props.childElement])

  useEffect(() => {
    isHovered ? timeline.current.resume() : timeline.current.pause()
  }, [isHovered])

  return (
    <PlaceableSVG
      viewBox={viewBox(
        -EXPANDED_RADIUS - 2.5,
        -EXPANDED_RADIUS - 2.5,
        EXPANDED_RADIUS * 2 + 5,
        EXPANDED_RADIUS * 2 + 5
      )}
      defaultScale={0.25}
      {...props}
    >
      <circle
        ref={circleRef}
        className="Hotspot animate"
        r={BASE_RADIUS}
        onClick={hotspotClick}
        onMouseEnter={hotspotMouseEnter}
        onMouseLeave={hotspotMouseLeave}
      />
    </PlaceableSVG>
  )
}

export default Hotspot
