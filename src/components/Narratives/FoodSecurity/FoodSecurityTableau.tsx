import { MorphSVGPlugin } from 'gsap/MorphSVGPlugin'
import { Power2, TimelineMax, gsap } from 'gsap'
import React, { useRef } from 'react'

import { useEffect } from 'react'
import { useNarrative } from '../NarrativeContext'
import Bush2 from '../PlaceableSVGs/Plants/Bush2'
import Cypress from '../PlaceableSVGs/Trees/Cypress'
import Deadwood from '../PlaceableSVGs/Trees/Deadwood'
import DikePopover from './Popovers/DikePopover'
import Farmhouse from '../PlaceableSVGs/Buildings/Farmhouse'
import HeavyRain from '../PlaceableSVGs/HeavyRain'
import Hotspot from '../Hotspot/Hotspot'
import Land from './SVGGroups/Land'
import Oak from '../PlaceableSVGs/Trees/Oak'
import Pump from '../PlaceableSVGs/Buildings/Pump'
import Roots from '../PlaceableSVGs/Trees/Roots'
import SVGFrame from '../Frames/SVGFrame'
import Text from '../PlaceableSVGs/Text'
import Truck from '../PlaceableSVGs/Vehicles/Truck'

import '../PlaceableSVGs/Elements.scss'
import './FoodSecurityTableau.scss'

if (gsap) gsap.registerPlugin(MorphSVGPlugin)

const FoodSecurityTableau = (): JSX.Element => {
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

    const baseGroundLevelTransition = {
      y: 0,
      duration: 1,
      ease: Power2.easeInOut
    }

    const baseInterfaceTransition = {
      xPercent: '15%',
      yPercent: '30%',
      rotate: 30,
      duration: 1,
      ease: Power2.easeInOut
    }

    switch (narrativeStage) {
      case 1:
        baseGroundLevelTransition.y = 1
        baseInterfaceTransition.xPercent = '50%'
        baseInterfaceTransition.yPercent = '35%'
        baseInterfaceTransition.rotate = 20
        break
      case 2:
        baseGroundLevelTransition.y = 4
        break
    }

    gsap.to(groundLevelRef.current, baseGroundLevelTransition)
    // gsap.to(interfaceRef.current, baseInterfaceTransition)

    // narrativeStage === 0
    //   ? gsap.to(interfaceRef.current, {
    //       x: 15,
    //       y: -17,
    //       rotate: 30,
    //       duration: 1,
    //       ease: Power2.easeInOut
    //     })
    //   : narrativeStage === 1
    //   ? gsap.to(interfaceRef.current, {
    //       x: 150,
    //       y: -30,
    //       rotate: 20,
    //       duration: 1,
    //       ease: Power2.easeInOut
    //     })
    //   : gsap.to(interfaceRef.current, {
    //       x: 250,
    //       y: -50,
    //       rotate: 10,
    //       duration: 1,
    //       ease: Power2.easeInOut
    //     })
  }, [narrativeStage])

  return (
    <div className="FoodSecurityTableau">
      <div>
        <SVGFrame id="FoodSecurityTableau">
          <HeavyRain xOffset={0} yOffset={0.35} />
          <Land />
          <g id="GroundLevel" ref={groundLevelRef}>
            <g id="Trees">
              <Oak xOffset={0.33} yOffset={0.46} scale={0.055} />
              <Oak xOffset={0.36} yOffset={0.43} scale={0.065} />
              <Deadwood xOffset={0.335} yOffset={0.565} scale={0.015} />
              <Bush2 xOffset={0.35} yOffset={0.545} scale={0.015} />
              <Oak xOffset={0.635} yOffset={0.435} scale={0.07} />
              <Roots xOffset={0.783} yOffset={0.685} scale={0.03} />
              <Oak xOffset={0.76} yOffset={0.43} scale={0.08} />
              <Cypress xOffset={0.855} yOffset={0.42} scale={0.02} />
              <Cypress xOffset={0.84} yOffset={0.42} scale={0.02} />
            </g>
            <g id="Pump">
              <Pump xOffset={0.32} yOffset={0.588} scale={0.105} />
            </g>
            <g id="Farm">
              <Farmhouse xOffset={0.68} yOffset={0.495} scale={0.07} />
              <Truck xOffset={0.755} yOffset={0.57} scale={0.04} />
            </g>
            <g id="Labels">
              <text x="73%" y="73%">
                water table
              </text>
              <text x="25%" y="80%">
                saltwater wedge
              </text>
              <Text
                narrativeStage={narrativeStage}
                rotate={narrativeStage === 0 ? 30 : 15}
                xOffset={0.12}
                yOffset={0.9}
              >
                saltwater wedge
              </Text>
              <Text xOffset={0.42} yOffset={0.9}>
                interface
              </Text>
              {/* <svg
                x="42%"
                y="90%"
                id="Interface"
                ref={interfaceRef}
                style={{ overflow: 'visible' }}
              >
                <text transform={`rotate(27)`}></text>
              </svg> */}
              <text x={1500} y={450}>
                fresh water
              </text>
              <text x={1820} y={425} transform="rotate(-90, 1820, 425)">
                pumping well
              </text>
              <text x={1290} y={425} transform="rotate(-90, 1290, 425)">
                pumping well
              </text>
              <text
                x={1900}
                y={325}
                id="Subsidence"
                visibility={narrativeStage === 2 ? 'visible' : 'hidden'}
              >
                subsidence
              </text>
            </g>
            <g id="Hotspots">
              <Hotspot
                xOffset={0.38}
                yOffset={0.6}
                scale={0.05}
                title={'Flood wall'}
                narrativeStage={narrativeStage}
                setNarrativeStage={setNarrativeStage}
              >
                <DikePopover narrativeStage={narrativeStage} />
              </Hotspot>
            </g>
          </g>
        </SVGFrame>
      </div>
      <div id="HotspotText"></div>
    </div>
  )
}

export default FoodSecurityTableau
