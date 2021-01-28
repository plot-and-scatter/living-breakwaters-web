import { MorphSVGPlugin } from 'gsap/MorphSVGPlugin'
import { Power2, TimelineMax, gsap } from 'gsap'
import React, { useEffect, useRef, useState } from 'react'

import { toggleSeaSurge } from './BaseLayers/CriticalInfrastructureSeaSurge'
import { useNarrative } from '../NarrativeContext'
import AntennaTower from '../PlaceableSVGs/Buildings/AntennaTower'
import BaseLayerStage from './BaseLayers/BaseLayerStage'
import Building1 from '../PlaceableSVGs/Buildings/Building1'
import Bush2 from '../PlaceableSVGs/Plants/Bush2'
import Cypress from '../PlaceableSVGs/Trees/Cypress'
import FixTypeLater from '../../Types/FixTypeLater'
import Harbor from '../PlaceableSVGs/Maritime/Harbor'
import HeavyRain, { toggleRainStorm } from './BaseLayers/HeavyRain'
import Hotspot from '../Hotspot/Hotspot'
import House1 from '../PlaceableSVGs/Buildings/House1'
import Oak from '../PlaceableSVGs/Trees/Oak'
import RedShip from '../PlaceableSVGs/Maritime/RedShip'
import ShippingPopover from './Popovers/ShippingPopover'
import SVGLinearGradient from '../PlaceableSVGs/Helpers/SVGLinearGradient'
import TableauProps from '../../../@types/TableauProps'

import '../PlaceableSVGs/Elements.scss'
import './CriticalInfrastructureTableau.scss'

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
    } as FixTypeLater, // NB: the morphSVG argument is not in the GSAP typings
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

const CriticalInfrastructureTableau = ({
  showRain,
  showStorm
}: TableauProps): JSX.Element => {
  const { narrativeStage, setNarrativeStage } = useNarrative()
  const prevNarrativeStage = useRef(narrativeStage)

  const [zoomXY] = useState([1963, 519])

  const svgRef = useRef(null)

  const timeline = useRef<TimelineMax>()
  const groundLevelRef = useRef()
  const interfaceRef = useRef()

  useEffect(() => {
    timeline.current = new TimelineMax({ paused: true })
    timeline.current.add(chainHelper(1))
    timeline.current.add(chainHelper(2))
  }, [])

  useEffect(() => {
    toggleSeaSurge('sea-surge', showStorm)
  }, [showStorm])

  useEffect(() => {
    toggleRainStorm('HeavyRain', showRain)
  }, [showRain])

  useEffect(() => {
    timeline.current.tweenFromTo(prevNarrativeStage.current, narrativeStage)
    // console.log(timeline.current)
    prevNarrativeStage.current = narrativeStage

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
    <div className="CriticalInfrastructureTableau">
      <div>
        <svg
          id="CriticalInfrastructureTableauSVG"
          data-name="present day"
          xmlns="http://www.w3.org/2000/svg"
          viewBox={`0 0 ${zoomXY[0]} ${zoomXY[1]}`}
          ref={svgRef}
        >
          <g className="Wrapper" transform={`scale(1)`}>
            <defs>
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
              <path id="SVGID_1_" d="M0 0h1962.7v542.9H0z" />
              <path id="SVGID_5_" d="M0 0h1962.7v542.9H0z" />
              <path id="SVGID_7_" d="M845.1 415.3h4.3v5.5H845z" />
              <path id="SVGID_9_" d="M740.1 412.3h27.3v4.6H740z" />
              <path id="SVGID_11_" d="M760.7 412.3h13.1v4.6h-13z" />
              <path id="SVGID_13_" d="M785.7 413.5h13.1v4.6h-13z" />
              <path id="SVGID_15_" d="M772.3 412.9h8v4.6h-8z" />
              <path id="SVGID_17_" d="M815.3 415.4h8v4.6h-8z" />
            </defs>
            <HeavyRain />
            <g id="BaseLayers" data-name="Base Layers" opacity=".9">
              <BaseLayerStage stage={2} />
              <BaseLayerStage stage={1} />
              <BaseLayerStage stage={0} />
            </g>
            <g id="Maritime">
              <Harbor />
              <RedShip />
            </g>
            <g id="GroundLevel" ref={groundLevelRef}>
              <g id="Trees">
                <Oak xOffset={1200} yOffset={230} />
                <Oak xOffset={1280} yOffset={210} />
                <Oak xOffset={1400} yOffset={190} />
                <Bush2 />
                <Cypress xOffset={1350} yOffset={230} />
                <Cypress xOffset={1375} yOffset={215} />
              </g>
              <g id="Buildings">
                <AntennaTower />
                <House1 />
                <Building1 />
              </g>
            </g>
            <g id="Labels"></g>
            <g id="Hotspots">
              <Hotspot
                xOffset={350}
                yOffset={350}
                width={700}
                title={`Shipping ${narrativeStage}`}
                childElement={
                  <ShippingPopover
                    key={narrativeStage}
                    narrativeStage={narrativeStage}
                  />
                }
                narrativeStage={narrativeStage}
                setNarrativeStage={setNarrativeStage}
              />
            </g>
          </g>
        </svg>
      </div>
      <div id="HotspotText"></div>
    </div>
  )
}

export default CriticalInfrastructureTableau
