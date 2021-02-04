import { MorphSVGPlugin } from 'gsap/MorphSVGPlugin'
import { Power2, TimelineMax, gsap } from 'gsap'
import React, { useRef } from 'react'

import { toggleSeaSurge } from './BaseLayers/SeaSurge'
import { useEffect } from 'react'
import { useNarrative } from '../NarrativeContext'
import { useState } from 'react'
import BaseLayerStage from './BaseLayers/BaseLayerStage'
import BirdOnGround from '../PlaceableSVGs/Fauna/BirdOnGround'
import Bush1 from '../PlaceableSVGs/Plants/Bush1'
import Bush2 from '../PlaceableSVGs/Plants/Bush2'
import Cypress from '../PlaceableSVGs/Trees/Cypress'
import Deadwood from '../PlaceableSVGs/Trees/Deadwood'
import Eelgrass from '../PlaceableSVGs/Plants/Eelgrass'
import Farmhouse from '../PlaceableSVGs/Buildings/Farmhouse'
import FixTypeLater from '../../../@types/FixTypeLater'
import FlyingGull1 from '../PlaceableSVGs/Fauna/FlyingGull1'
import FlyingGull2 from '../PlaceableSVGs/Fauna/FlyingGull2'
import FlyingGull3 from '../PlaceableSVGs/Fauna/FlyingGull3'
import Grass from '../PlaceableSVGs/Plants/Grass'
import HeavyRain, { toggleRainStorm } from './BaseLayers/HeavyRain'
import Hotspot from '../Hotspot/Hotspot'
import Irrigation from '../PlaceableSVGs/Objects/Irrigation'
import Oak from '../PlaceableSVGs/Trees/Oak'
import Pump from '../PlaceableSVGs/Buildings/Pump'
import RainOverflow from './BaseLayers/RainOverflow'
import Reeds from '../PlaceableSVGs/Plants/Reeds'
import Roots from '../PlaceableSVGs/Trees/Roots'
import SaturatedGround from './BaseLayers/SaturatedGround'
import Seaweed from '../PlaceableSVGs/Plants/Seaweed'
import SVGLinearGradient from '../PlaceableSVGs/Helpers/SVGLinearGradient'
import TableauProps from '../../../@types/TableauProps'
import Truck from '../PlaceableSVGs/Vehicles/Truck'
import Well from '../PlaceableSVGs/Buildings/Well'
import Wheat from '../PlaceableSVGs/Plants/Wheat'

import './FoodSecurityTableau.scss'
import '../PlaceableSVGs/Elements.scss'
import SVGFrame from '../Frames/SVGFrame'
import Land from './SVGGroups/Land'

if (gsap) gsap.registerPlugin(MorphSVGPlugin)

const FoodSecurityTableau = (props: TableauProps): JSX.Element => {
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
      <div>
        <SVGFrame id="FoodSecurityTableau">
          <HeavyRain xOffset={0} yOffset={0.35} />
          <Land />
          <g id="GroundLevel" ref={groundLevelRef}>
            <g id="Trees">
              <Oak xOffset={0.33} yOffset={0.4} scale={0.08} />
              <Deadwood xOffset={0.335} yOffset={0.565} scale={0.015} />
              <Bush2 xOffset={0.35} yOffset={0.545} scale={0.015} />
              <Oak xOffset={0.635} yOffset={0.435} scale={0.07} />
              <Roots xOffset={0.783} yOffset={0.685} scale={0.03} />
              <Oak xOffset={0.76} yOffset={0.43} scale={0.08} />
              <Cypress xOffset={0.855} yOffset={0.42} scale={0.02} />
              <Cypress xOffset={0.84} yOffset={0.42} scale={0.02} />
            </g>
          </g>
          <g id="Farm">
            <Farmhouse xOffset={0.68} yOffset={0.495} scale={0.07} />
            <Truck xOffset={0.755} yOffset={0.57} scale={0.04} />
          </g>
          <g id="Hotspots">
            <Hotspot
              xOffset={0.9}
              yOffset={0.6}
              scale={0.05}
              title={'Flood wall'}
              narrativeStage={narrativeStage}
              setNarrativeStage={setNarrativeStage}
              childElement={
                <p>
                  Coastal squeeze has led to the loss of the intertidal zone.
                  Hence, a flood wall was constructed to protect the remaining
                  farmlands in zone 2.
                </p>
              }
            />
          </g>
        </SVGFrame>
      </div>
      <div id="HotspotText"></div>
    </div>
  )
}

export default FoodSecurityTableau
