import { MorphSVGPlugin } from 'gsap/MorphSVGPlugin'
import { Power2, TimelineMax, gsap } from 'gsap'
import React, { useEffect, useRef, useState } from 'react'

import { toggleSeaSurge } from './BaseLayers/CriticalInfrastructureSeaSurge'
import { useNarrative } from '../NarrativeContext'
import AntennaTower from '../PlaceableSVGs/Buildings/AntennaTower'
import BaseLayerStage from './BaseLayers/BaseLayerStage'
import Building1 from '../PlaceableSVGs/Buildings/Building1'
import Biker from '../PlaceableSVGs/People/Biker'
import Person1 from '../PlaceableSVGs/People/Person1'
import Person2 from '../PlaceableSVGs/People/Person2'
import Bush1 from '../PlaceableSVGs/Plants/Bush1'
import Bush2 from '../PlaceableSVGs/Plants/Bush2'
import Grass from '../PlaceableSVGs/Plants/Grass'
import Cypress from '../PlaceableSVGs/Trees/Cypress'
import Deadwood from '../PlaceableSVGs/Trees/Deadwood'
import Roots from '../PlaceableSVGs/Trees/Roots'
import Harbor from '../PlaceableSVGs/Maritime/Harbor'
import Hotspot from '../Hotspot/Hotspot'
import House1 from '../PlaceableSVGs/Buildings/House1'
import House2 from '../PlaceableSVGs/Buildings/House2'
import House3 from '../PlaceableSVGs/Buildings/House3'
import Oak from '../PlaceableSVGs/Trees/Oak'
import RedShip from '../PlaceableSVGs/Maritime/RedShip'
import Car from '../PlaceableSVGs/Vehicles/Car'
import TrafficLight from '../PlaceableSVGs/Objects/TrafficLight'
import TrafficLight2 from '../PlaceableSVGs/Objects/TrafficLight2'
import LargeStormDrain from '../PlaceableSVGs/Objects/LargeStormDrain'
import SmallStormDrain from '../PlaceableSVGs/Objects/SmallStormDrain'
import ShippingPopover from './Popovers/ShippingPopover'
import SVGLinearGradient from '../PlaceableSVGs/Helpers/SVGLinearGradient'
import TableauProps from '../../../@types/TableauProps'

import '../PlaceableSVGs/Elements.scss'
import './CriticalInfrastructureTableau.scss'
import SVGFrame from '../Frames/SVGFrame'
import HeavyRain from '../PlaceableSVGs/HeavyRain'
import Land from './SVGGroups/Land'

if (gsap) gsap.registerPlugin(MorphSVGPlugin)

const CriticalInfrastructureTableau = (): JSX.Element => {
  const { narrativeStage, setNarrativeStage } = useNarrative()
  const prevNarrativeStage = useRef(narrativeStage)

  const timeline = useRef<TimelineMax>()
  const groundLevelRef = useRef()
  const interfaceRef = useRef()

  useEffect(() => {
    timeline.current = new TimelineMax({ paused: true })
  }, [])

  useEffect(() => {
    timeline.current.tweenFromTo(prevNarrativeStage.current, narrativeStage)
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
        <SVGFrame id="CriticalInfrastructureTableau">
          <HeavyRain xOffset={0} yOffset={0.35} />
          <Land />
          {/* <defs>
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
            <g id="BaseLayers" data-name="Base Layers" opacity=".9">
              <BaseLayerStage stage={2} />
              <BaseLayerStage stage={1} />
              <BaseLayerStage stage={0} />
            </g> */}
          <g id="Maritime">
            <Harbor xOffset={-0.06} yOffset={0.73} scale={0.4} />
            <RedShip xOffset={-0.005} yOffset={0.75} scale={0.2} />
          </g>
          <g id="GroundLevel" ref={groundLevelRef}>
            <g id="Trees">
              <Roots xOffset={0.379} yOffset={0.81} scale={0.01} />
              <Oak xOffset={0.37} yOffset={0.72} scale={0.03} />
              <Deadwood xOffset={0.39} yOffset={0.73} scale={0.015} />
              <Cypress xOffset={0.61} yOffset={0.66} scale={0.011} />
              <Cypress xOffset={0.515} yOffset={0.76} scale={0.0045} />
              <Cypress xOffset={0.514} yOffset={0.76} scale={0.004} />
              <Oak xOffset={0.619} yOffset={0.71} scale={0.015} />
              <Oak xOffset={0.62} yOffset={0.635} scale={0.04} />
              <Cypress xOffset={0.66} yOffset={0.6} scale={0.011} />
              <Cypress xOffset={0.665} yOffset={0.6} scale={0.011} />
              <Cypress xOffset={0.653} yOffset={0.6} scale={0.011} />
              <Oak xOffset={0.7} yOffset={0.555} scale={0.045} />
              <Oak xOffset={0.67} yOffset={0.592} scale={0.047} />
              <Oak xOffset={0.69} yOffset={0.586} scale={0.04} />
              <Roots xOffset={0.396} yOffset={0.8} scale={0.005} />
              <Roots xOffset={0.402} yOffset={0.802} scale={0.006} />
              <Roots xOffset={0.609} yOffset={0.79} scale={0.006} />
              <Roots xOffset={0.633} yOffset={0.758} scale={0.013} />
              <Roots xOffset={0.675} yOffset={0.73} scale={0.009} />
              <Roots xOffset={0.687} yOffset={0.73} scale={0.012} />
              <Roots xOffset={0.703} yOffset={0.71} scale={0.012} />
              <Roots xOffset={0.716} yOffset={0.685} scale={0.011} />
              <Roots xOffset={0.74} yOffset={0.655} scale={0.009} />
              <Cypress xOffset={0.83} yOffset={0.565} scale={0.0055} />
              <Cypress xOffset={0.886} yOffset={0.545} scale={0.007} />
              <Roots xOffset={0.885} yOffset={0.635} scale={0.008} />
            </g>
            <g id="Plants">
              <Grass xOffset={0.385} yOffset={0.78} scale={0.004} />
              <Grass xOffset={0.38} yOffset={0.78} scale={0.004} />
              <Grass xOffset={0.376} yOffset={0.78} scale={0.004} />
              <Grass xOffset={0.374} yOffset={0.78} scale={0.004} />
              <Grass xOffset={0.37} yOffset={0.78} scale={0.004} />
              <Grass xOffset={0.366} yOffset={0.78} scale={0.004} />
              <Grass xOffset={0.363} yOffset={0.785} scale={0.004} />
              <Grass xOffset={0.36} yOffset={0.785} scale={0.004} />
              <Grass xOffset={0.356} yOffset={0.785} scale={0.004} />
              <Bush2 xOffset={0.4} yOffset={0.77} scale={0.01} />
              <Bush1 xOffset={0.394} yOffset={0.775} scale={0.008} />
              <Bush1 xOffset={0.43} yOffset={0.78} scale={0.01} />
              <Bush1 xOffset={0.615} yOffset={0.735} scale={0.01} />
              <Bush2 xOffset={0.606} yOffset={0.76} scale={0.01} />
              <Bush1 xOffset={0.64} yOffset={0.7} scale={0.012} />
              <Bush2 xOffset={0.65} yOffset={0.7} scale={0.01} />
              <Bush2 xOffset={0.66} yOffset={0.69} scale={0.01} />
              <Bush2 xOffset={0.67} yOffset={0.665} scale={0.02} />
              <Bush2 xOffset={0.73} yOffset={0.57} scale={0.03} />
              <Bush2 xOffset={0.835} yOffset={0.585} scale={0.015} />
              <Bush1 xOffset={0.94} yOffset={0.595} scale={0.01} />
            </g>
            <g id="Objects">
              <TrafficLight xOffset={0.465} yOffset={0.77} scale={0.004} />
              <LargeStormDrain xOffset={0.44} yOffset={0.81} scale={0.035} />
              <TrafficLight2 xOffset={0.951} yOffset={0.55} scale={0.017} />
              <TrafficLight xOffset={0.993} yOffset={0.579} scale={0.005} />
              <LargeStormDrain xOffset={0.82} yOffset={0.63} scale={0.035} />
              <SmallStormDrain xOffset={0.934} yOffset={0.625} scale={0.02} />
            </g>
            <g id="Vehicles">
              <Car xOffset={0.454} yOffset={0.78} scale={0.012} />
              <Car xOffset={0.956} yOffset={0.596} scale={0.012} />
              <Car xOffset={0.98} yOffset={0.595} scale={0.012} />
            </g>
            <g id="People">
              <Person1 xOffset={0.35} yOffset={0.785} scale={0.003} />
              <Person2 xOffset={0.345} yOffset={0.787} scale={0.003} />
              <Biker xOffset={0.33} yOffset={0.79} scale={0.006} />
            </g>
            <g id="Buildings">
              <AntennaTower xOffset={0.41} yOffset={0.675} scale={0.018} />
              <Building1 xOffset={0.52} yOffset={0.71} scale={0.09} />
              <House1 xOffset={0.47} yOffset={0.745} scale={0.04} />
              <House2 xOffset={0.76} yOffset={0.566} scale={0.07} />
              <House1 xOffset={0.846} yOffset={0.565} scale={0.04} />
              <House3 xOffset={0.894} yOffset={0.542} scale={0.05} />
            </g>
          </g>
          <g id="Hotspots">
            <Hotspot
              index={0}
              xOffset={350}
              yOffset={350}
              width={700}
              title={`Shipping ${narrativeStage}`}
              narrativeStage={narrativeStage}
              setNarrativeStage={setNarrativeStage}
            >
              <ShippingPopover
                key={narrativeStage}
                narrativeStage={narrativeStage}
              />
            </Hotspot>
          </g>
        </SVGFrame>
      </div>
      <div id="HotspotText0"></div>
    </div>
  )
}

export default CriticalInfrastructureTableau
