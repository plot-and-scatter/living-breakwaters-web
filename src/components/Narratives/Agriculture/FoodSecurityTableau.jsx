import React, { useRef } from "react"
import { gsap, TimelineMax, Power2 } from "gsap"
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin"

import "./FoodSecurityTableau.scss"
import { useState } from "react"
import { useCallback } from "react"
import { useEffect } from "react"
import { useNarrative } from "../NarrativeContext"
import SVGLinearGradient from "../Elements/Helpers/SVGLinearGradient"
import BaseLayerStage from "./BaseLayers/BaseLayerStage"
import { toggleSeaSurge } from "./BaseLayers/SeaSurge"
import HeavyRain, { toggleRainStorm } from "./BaseLayers/HeavyRain"
import SaturatedGround from "./BaseLayers/SaturatedGround"
import Oak from "../Elements/Trees/Oak"
import Farmhouse from "../Elements/Buildings/Farmhouse"
import Truck from "../Elements/Vehicles/Truck"
import Pump from "../Elements/Buildings/Pump"
import Wheat from "../Elements/Plants/Wheat"
import Reeds from "../Elements/Plants/Reeds"
import Seaweed from "../Elements/Plants/Seaweed"
import Grass from "../Elements/Plants/Grass"
import Eelgrass from "../Elements/Plants/Eelgrass"
import Deadwood from "../Elements/Trees/Deadwood"
import Bush2 from "../Elements/Plants/Bush2"
import Roots from "../Elements/Trees/Roots"
import Cypress from "../Elements/Trees/Cypress"
import Birds from "../Elements/Fauna/Birds"
import Well from "../Elements/Buildings/Well"
import Irrigation from "../Elements/Objects/Irrigation"
import Bush1 from "../Elements/Plants/Bush1"
import RainOverflow from "./BaseLayers/RainOverflow"

gsap.registerPlugin(MorphSVGPlugin)

const itemHelper = (objClass, id, index) => {
  return gsap.to(
    `#groundwater-0 .${objClass}`,
    {
      morphSVG: {
        shape: `#groundwater-${id} .${objClass}`,
        shapeIndex: 0,
      },
      ease: Power2.easeInOut,
      duration: 1,
    },
    index
  )
}

const chainHelper = id => {
  return [
    itemHelper("saltwater-wedge", id, id - 1),
    itemHelper("fresh-water", id, id - 1),
    itemHelper("mean-sea-level", id, id - 1),
    itemHelper("ground", id, id - 1),
    // itemHelper("sea-surge", id, id - 1),
  ]
}

const FoodSecurityTableau = () => {
  const { narrativeStage } = useNarrative()
  const prevNarrativeStage = useRef(narrativeStage)

  const [rainVisible, setRainVisible] = useState(false)
  const [stormSurgeVisible, setStormSurgeVisible] = useState(false)

  const toggleRain = useCallback(() => setRainVisible(!rainVisible), [
    rainVisible,
    setRainVisible,
  ])

  const toggleStormSurge = useCallback(
    () => setStormSurgeVisible(!stormSurgeVisible),
    [stormSurgeVisible, setStormSurgeVisible]
  )

  const timeline = useRef()

  useEffect(() => {
    timeline.current = new TimelineMax({ paused: true })
    timeline.current.add(chainHelper(1))
    timeline.current.add(chainHelper(2))
  }, [])

  useEffect(() => {
    toggleSeaSurge("sea-surge", stormSurgeVisible)
  }, [stormSurgeVisible])

  useEffect(() => {
    toggleRainStorm("HeavyRain", rainVisible)
  }, [rainVisible])

  useEffect(() => {
    console.log(
      "narrativeStage",
      narrativeStage,
      "prev",
      prevNarrativeStage.current
    )

    timeline.current.tweenFromTo(prevNarrativeStage.current, narrativeStage)
    console.log(timeline.current)
    prevNarrativeStage.current = narrativeStage
  }, [narrativeStage])

  return (
    <div className="FoodSecurityTableau">
      <div className="mb-2 p-2">
        <button
          className={`btn btn-sm ${
            !rainVisible ? "btn-outline-secondary" : "btn-primary"
          }`}
          onClick={toggleRain}
        >
          Toggle rain
        </button>
        <button
          className={`btn btn-sm ${
            !stormSurgeVisible ? "btn-outline-secondary" : "btn-primary"
          } ml-2`}
          onClick={toggleStormSurge}
        >
          Toggle storm surge
        </button>
      </div>
      <svg
        id="present_day"
        data-name="present day"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1963 519"
      >
        <defs>
          <SVGLinearGradient idPrefix={"saltwater-wedge"} />
          <SVGLinearGradient idPrefix={"fresh-water"} />
          <SVGLinearGradient idPrefix={"mean-sea-level"} />
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
          <BaseLayerStage stage={0} />
          <BaseLayerStage stage={1} />
          <BaseLayerStage stage={2} />
          <SaturatedGround />
        </g>
        <g id="Trees">
          <Oak xOffset={680} yOffset={120} />
          <Oak xOffset={1519} yOffset={136} />
          <Oak xOffset={1600} yOffset={150} />
          <Deadwood />
          <Bush1 />
          <Bush2 />
          <Roots />
          <Cypress />
        </g>
        <g id="Farm">
          <Farmhouse />
          <Truck />
          <Pump />
          <Wheat />
          <Well />
          <Irrigation />
          <RainOverflow />
        </g>
        <g id="OceanLife">
          <Reeds />
          <Seaweed />
          <Grass />
          <Eelgrass />
          <Birds />
        </g>
      </svg>
    </div>
  )
}

export default FoodSecurityTableau
