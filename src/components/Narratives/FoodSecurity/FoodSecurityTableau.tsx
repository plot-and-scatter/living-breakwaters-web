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
          <HeavyRain xOffset={0} yOffset={0.34} />
          {/* <Land /> */}
          {/* <g id="GroundLevel" ref={groundLevelRef}>
            <g id="Trees">
              <Oak xOffset={680 / 2000} yOffset={120 / 400} />
              <Oak xOffset={1280 / 2000} yOffset={136 / 400} />
              <Oak xOffset={1500 / 2000} yOffset={136 / 400} />
              <Roots xOffset={1529 / 2000} yOffset={300 / 400} />
              <Deadwood xOffset={0.3} yOffset={0.3 / 400} />
              <Bush2 xOffset={1070 / 2000} yOffset={375 / 400} />
              <Cypress xOffset={1605 / 2000} yOffset={160 / 400} />
              <Cypress xOffset={1625 / 2000} yOffset={160 / 400} />
            </g>
          </g> */}
        </SVGFrame>
      </div>
      <div id="HotspotText"></div>
    </div>
  )
}

export default FoodSecurityTableau
