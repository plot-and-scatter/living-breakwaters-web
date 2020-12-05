import React, { useRef } from 'react'
import { Power2, TimelineMax, gsap } from 'gsap'
import { MorphSVGPlugin } from 'gsap/MorphSVGPlugin'
// import * as d3 from "d3"

import './CriticalInfrastructureTableau.scss'
import '../Elements/Elements.scss'
import { useState } from 'react'
import { useCallback } from 'react'
import { useEffect } from 'react'
import { useNarrative } from '../NarrativeContext'
import SVGLinearGradient from '../Elements/Helpers/SVGLinearGradient'
import BaseLayerStage from './BaseLayers/BaseLayerStage'
import { toggleSeaSurge } from './BaseLayers/SeaSurge'
import HeavyRain, { toggleRainStorm } from './BaseLayers/HeavyRain'
import SaturatedGround from './BaseLayers/SaturatedGround'
import Oak from '../Elements/Trees/Oak'
import Farmhouse from '../Elements/Buildings/Farmhouse'
import Truck from '../Elements/Vehicles/Truck'
import Pump from '../Elements/Buildings/Pump'
import Wheat from '../Elements/Plants/Wheat'
import Reeds from '../Elements/Plants/Reeds'
import Seaweed from '../Elements/Plants/Seaweed'
import Grass from '../Elements/Plants/Grass'
import Eelgrass from '../Elements/Plants/Eelgrass'
import Deadwood from '../Elements/Trees/Deadwood'
import Bush2 from '../Elements/Plants/Bush2'
import Roots from '../Elements/Trees/Roots'
import Cypress from '../Elements/Trees/Cypress'
import BirdOnGround from '../Elements/Fauna/BirdOnGround'
import FlyingGull1 from '../Elements/Fauna/FlyingGull1'
import FlyingGull2 from '../Elements/Fauna/FlyingGull2'
import FlyingGull3 from '../Elements/Fauna/FlyingGull3'
import Well from '../Elements/Buildings/Well'
import Irrigation from '../Elements/Objects/Irrigation'
import Bush1 from '../Elements/Plants/Bush1'
import RainOverflow from './BaseLayers/RainOverflow'
import Hotspot from '../Hotspot/Hotspot'
// import Ground from './BaseLayers/Ground'
// import { useLayoutEffect } from "react"

if (gsap) gsap.registerPlugin(MorphSVGPlugin)

const itemHelper = (objClass, id, index) => {
  return gsap.to(
    `#groundwater-0 .${objClass}`,
    {
      morphSVG: {
        shape: `#groundwater-${id} .${objClass}`,
        shapeIndex: 0
      },
      ease: Power2.easeInOut,
      duration: 1
    },
    index
  )
}

const chainHelper = (id) => {
  return [
    itemHelper('saltwater-wedge', id, id - 1),
    itemHelper('fresh-water', id, id - 1),
    itemHelper('mean-sea-level', id, id - 1),
    itemHelper('ground', id, id - 1),
    itemHelper('sea-surge', id, id - 1)
  ]
}

const FoodSecurityTableau = () => {
  const { narrativeStage } = useNarrative()
  const prevNarrativeStage = useRef(narrativeStage)

  const [rainVisible, setRainVisible] = useState(false)
  const [stormSurgeVisible, setStormSurgeVisible] = useState(false)
  const [zoomXY, setZoomXY] = useState([1963, 519])

  const svgRef = useRef(null)

  const zoomCallback = useCallback(() => {
    console.log('Zooming!')
    // d3.select(svgRef.current).attr("transform", d3.event.transform)
  })

  // useLayoutEffect(() => {
  //   console.log(svgRef, svgRef.current, d3.select(svgRef.current))
  //   const foo = d3.zoom().on("zoom")
  //   d3.select(svgRef.current).call(foo, zoomCallback)
  // }, [])

  const toggleRain = useCallback(() => setRainVisible(!rainVisible), [
    rainVisible,
    setRainVisible
  ])

  const toggleStormSurge = useCallback(
    () => setStormSurgeVisible(!stormSurgeVisible),
    [stormSurgeVisible, setStormSurgeVisible]
  )

  const timeline = useRef()
  const groundLevelRef = useRef()
  const interfaceRef = useRef()

  useEffect(() => {
    timeline.current = new TimelineMax({ paused: true })
    timeline.current.add(chainHelper(1))
    timeline.current.add(chainHelper(2))
  }, [])

  useEffect(() => {
    toggleSeaSurge('sea-surge', stormSurgeVisible)
  }, [stormSurgeVisible])

  useEffect(() => {
    toggleRainStorm('HeavyRain', rainVisible)
  }, [rainVisible])

  useEffect(() => {
    timeline.current.tweenFromTo(prevNarrativeStage.current, narrativeStage)
    // console.log(timeline.current)
    prevNarrativeStage.current = narrativeStage

    narrativeStage === 0
      ? gsap.to(groundLevelRef.current, {
          y: 0,
          duration: 1,
          ease: Power2.easeInOut
        })
      : narrativeStage === 1
      ? gsap.to(groundLevelRef.current, {
          y: 4,
          duration: 1,
          ease: Power2.easeInOut
        })
      : gsap.to(groundLevelRef.current, {
          y: 12,
          duration: 1,
          ease: Power2.easeInOut
        })

    narrativeStage === 0
      ? gsap.to(interfaceRef.current, {
          x: 15,
          y: -17,
          rotate: 30,
          duration: 1,
          ease: Power2.easeInOut
        })
      : narrativeStage === 1
      ? gsap.to(interfaceRef.current, {
          x: 150,
          y: -30,
          rotate: 20,
          duration: 1,
          ease: Power2.easeInOut
        })
      : gsap.to(interfaceRef.current, {
          x: 250,
          y: -50,
          rotate: 10,
          duration: 1,
          ease: Power2.easeInOut
        })
  }, [narrativeStage])

  return (
    <div className="FoodSecurityTableau">
      <div className="my-2 py-2">
        <button
          className={`btn btn-sm ${
            !rainVisible ? 'btn-outline-secondary' : 'btn-primary'
          }`}
          onClick={toggleRain}
        >
          Toggle rain
        </button>
        <button
          className={`btn btn-sm ${
            !stormSurgeVisible ? 'btn-outline-secondary' : 'btn-primary'
          } ml-2`}
          onClick={toggleStormSurge}
        >
          Toggle storm surge
        </button>
      </div>
      <div>
        <svg
          id="FoodSecurityTableauSVG"
          data-name="present day"
          xmlns="http://www.w3.org/2000/svg"
          viewBox={`0 0 ${zoomXY[0]} ${zoomXY[1]}`}
          ref={svgRef}
        >
          <g className="Wrapper" transform={`scale(1)`}>
            <defs>
              <SVGLinearGradient idPrefix={'saltwater-wedge'} />
              <SVGLinearGradient idPrefix={'fresh-water'} />
              <SVGLinearGradient idPrefix={'mean-sea-level'} />
              <pattern
                id="_10_dpi_20_"
                data-name="10 dpi 20%"
                width="28.8"
                height="28.8"
                patternTransform="matrix(.75 0 0 .75 1.2 -41.7)"
                patternUnits="userSpaceOnUse"
              >
                <path fill="none" d="M0 0h28.8v28.8H0z" />
                <path
                  className="cls-2"
                  d="M28.8 30.2a1.4 1.4 0 10-1.4-1.4 1.4 1.4 0 001.4 1.4zM14.4 30.2a1.4 1.4 0 10-1.4-1.4 1.4 1.4 0 001.4 1.4zM28.8 15.8a1.4 1.4 0 10-1.4-1.4 1.4 1.4 0 001.4 1.4zM14.4 15.8a1.4 1.4 0 10-1.4-1.4 1.4 1.4 0 001.4 1.4zM7.2 23a1.4 1.4 0 10-1.4-1.4A1.4 1.4 0 007.2 23zM21.6 23a1.4 1.4 0 10-1.4-1.4 1.4 1.4 0 001.4 1.4zM7.2 8.6a1.4 1.4 0 10-1.4-1.4 1.4 1.4 0 001.4 1.4zM21.6 8.6a1.4 1.4 0 10-1.4-1.4 1.4 1.4 0 001.4 1.4zM0 30.2a1.4 1.4 0 001.4-1.4A1.4 1.4 0 000 27.4a1.4 1.4 0 00-1.4 1.4A1.4 1.4 0 000 30.2zM0 15.8a1.4 1.4 0 001.4-1.4A1.4 1.4 0 000 13a1.4 1.4 0 00-1.4 1.4A1.4 1.4 0 000 15.8zM28.8 1.4A1.4 1.4 0 0030.2 0a1.4 1.4 0 00-1.4-1.4A1.4 1.4 0 0027.4 0a1.4 1.4 0 001.4 1.4zM14.4 1.4A1.4 1.4 0 0015.8 0a1.4 1.4 0 00-1.4-1.4A1.4 1.4 0 0013 0a1.4 1.4 0 001.4 1.4zM0 1.4A1.4 1.4 0 001.4 0 1.4 1.4 0 000-1.4 1.4 1.4 0 00-1.4 0 1.4 1.4 0 000 1.4z"
                />
              </pattern>
            </defs>
            <HeavyRain />
            <g id="BaseLayers" data-name="Base Layers" opacity=".9">
              <BaseLayerStage stage={2} />
              <BaseLayerStage stage={1} />
              <BaseLayerStage stage={0} />
              <SaturatedGround />
            </g>
            <g id="GroundLevel" ref={groundLevelRef}>
              <g id="Trees">
                <Oak xOffset={680} yOffset={120} />
                <Oak xOffset={1280} yOffset={136} />
                <Oak xOffset={1500} yOffset={136} />
                <Roots xOffset={1529} yOffset={300} />
                {/* <Oak xOffset={1600} yOffset={150} />  */}
                <Deadwood />
                <Bush2 />
                <Cypress xOffset={1605} yOffset={160} />
                <Cypress xOffset={1625} yOffset={160} />
              </g>
              <g id="Farm"></g>
            </g>
            <g id="Labels"></g>
            <g id="Hotspots">
              <Hotspot
                xOffset={200}
                yOffset={100}
                title={'Test'}
                text={'Testing text'}
              />
            </g>
          </g>
        </svg>
      </div>
      <div id="HotspotText"></div>
    </div>
  )
}

export default FoodSecurityTableau