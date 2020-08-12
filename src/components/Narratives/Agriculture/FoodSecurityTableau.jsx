import React, { useRef } from "react"
import { gsap, TimelineMax, TimelineLite, Power2 } from "gsap"
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin"

import "./FoodSecurityTableau.scss"
import { useState } from "react"
import { useCallback } from "react"
import { useEffect } from "react"
import { useNarrative } from "../NarrativeContext"
import SVGLinearGradient from "../Elements/Helpers/SVGLinearGradient"
import BaseLayerStage from "./BaseLayers/BaseLayerStage"
import { toggleSeaSurge } from "./BaseLayers/SeaSurge"

gsap.registerPlugin(MorphSVGPlugin)

const toggleRainStorm = (id, toggleVar) => {
  const el = document.getElementById(id)
  if (el) {
    if (toggleVar) {
      new TimelineLite()
        .to(".Tableau", {
          backgroundImage: "linear-gradient(#ccc, #fff)",
          duration: 2,
        })
        .to(".rainfall", { opacity: 1, duration: 1 })
        .to(".saturated-ground", { opacity: 1, duration: 3 })
    } else {
      new TimelineLite()
        .to(".Tableau", {
          backgroundImage: "linear-gradient(#bbddff, #fff)",
          duration: 0.5,
        })
        .to(".rainfall", { opacity: 0, duration: 0.5 })
        .to(".saturated-ground", { opacity: 0, duration: 0.5 })
    }
  }
}

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
    toggleRainStorm("heavy_rain_event", rainVisible)
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
            patternTransform="matrix(.75 0 0 .75 -574.31 -173.65)"
            patternUnits="userSpaceOnUse"
          >
            <path className="cls-1a" d="M0 0h28.8v28.8H0z" />
            <path
              className="cls-2a"
              d="M28.8 30.24a1.44 1.44 0 10-1.44-1.44 1.44 1.44 0 001.44 1.44zM14.4 30.24A1.44 1.44 0 1013 28.8a1.44 1.44 0 001.4 1.44zM28.8 15.84a1.44 1.44 0 10-1.44-1.44 1.44 1.44 0 001.44 1.44zM14.4 15.84A1.44 1.44 0 1013 14.4a1.44 1.44 0 001.4 1.44zM7.2 23a1.44 1.44 0 10-1.44-1.4A1.44 1.44 0 007.2 23zM21.6 23a1.44 1.44 0 10-1.44-1.44A1.44 1.44 0 0021.6 23zM7.2 8.64A1.44 1.44 0 105.76 7.2 1.44 1.44 0 007.2 8.64zM21.6 8.64a1.44 1.44 0 10-1.44-1.44 1.44 1.44 0 001.44 1.44zM0 30.24a1.44 1.44 0 001.44-1.44A1.45 1.45 0 000 27.36a1.44 1.44 0 00-1.44 1.44A1.43 1.43 0 000 30.24zM0 15.84a1.44 1.44 0 001.44-1.44A1.45 1.45 0 000 13a1.44 1.44 0 00-1.44 1.4A1.43 1.43 0 000 15.84zM28.8 1.44A1.45 1.45 0 0030.24 0a1.44 1.44 0 00-1.44-1.44A1.43 1.43 0 0027.36 0a1.44 1.44 0 001.44 1.44zM14.4 1.44A1.45 1.45 0 0015.84 0a1.44 1.44 0 00-1.44-1.44A1.43 1.43 0 0013 0a1.44 1.44 0 001.4 1.44zM0 1.44A1.45 1.45 0 001.44 0 1.44 1.44 0 000-1.44 1.43 1.43 0 00-1.44 0 1.44 1.44 0 000 1.44z"
            />
          </pattern>
          <pattern
            id="_10_dpi_20_3"
            data-name="10 dpi 20%"
            width="28.8"
            height="28.8"
            patternTransform="translate(-5.64 -6.14)"
            patternUnits="userSpaceOnUse"
          >
            <path className="cls-1a" d="M0 0h28.8v28.8H0z" />
            <path
              className="cls-2a"
              d="M28.8 30.24a1.44 1.44 0 10-1.44-1.44 1.44 1.44 0 001.44 1.44zM14.4 30.24A1.44 1.44 0 1013 28.8a1.44 1.44 0 001.4 1.44zM28.8 15.84a1.44 1.44 0 10-1.44-1.44 1.44 1.44 0 001.44 1.44zM14.4 15.84A1.44 1.44 0 1013 14.4a1.44 1.44 0 001.4 1.44zM7.2 23a1.44 1.44 0 10-1.44-1.4A1.44 1.44 0 007.2 23zM21.6 23a1.44 1.44 0 10-1.44-1.44A1.44 1.44 0 0021.6 23zM7.2 8.64A1.44 1.44 0 105.76 7.2 1.44 1.44 0 007.2 8.64zM21.6 8.64a1.44 1.44 0 10-1.44-1.44 1.44 1.44 0 001.44 1.44zM0 30.24a1.44 1.44 0 001.44-1.44A1.45 1.45 0 000 27.36a1.44 1.44 0 00-1.44 1.44A1.43 1.43 0 000 30.24zM0 15.84a1.44 1.44 0 001.44-1.44A1.45 1.45 0 000 13a1.44 1.44 0 00-1.44 1.4A1.43 1.43 0 000 15.84zM28.8 1.44A1.45 1.45 0 0030.24 0a1.44 1.44 0 00-1.44-1.44A1.43 1.43 0 0027.36 0a1.44 1.44 0 001.44 1.44zM14.4 1.44A1.45 1.45 0 0015.84 0a1.44 1.44 0 00-1.44-1.44A1.43 1.43 0 0013 0a1.44 1.44 0 001.4 1.44zM0 1.44A1.45 1.45 0 001.44 0 1.44 1.44 0 000-1.44 1.43 1.43 0 00-1.44 0 1.44 1.44 0 000 1.44z"
            />
          </pattern>
        </defs>
        <g id="Base_Layers" data-name="Base Layers" opacity=".9">
          <BaseLayerStage stage={0} />
          <BaseLayerStage stage={1} />
          <BaseLayerStage stage={2} />
        </g>
      </svg>
    </div>
  )
}

export default FoodSecurityTableau
