import React, { useRef } from "react"
import { gsap, TimelineMax, TimelineLite, Power2 } from "gsap"
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin"

import "./FoodSecurityTableau2.scss"
import { useState } from "react"
import { useCallback } from "react"
import { useEffect } from "react"
import { useNarrative } from "../NarrativeContext"

gsap.registerPlugin(MorphSVGPlugin)

const toggleSeaLevel = (className, toggleVar) => {
  const elements = document.getElementsByClassName(className)
  const elementArray = Array.from(elements)
  for (let el of elementArray) {
    console.log("el", el, toggleVar)
    if (el) {
      if (toggleVar) {
        gsap.to(el, { y: -30, duration: 3 })
      } else {
        gsap.to(el, { y: 0, duration: 3 })
      }
    }
  }
}

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
    toggleSeaLevel("sea-surge", stormSurgeVisible)
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
          <g id="groundwater-0">
            <path
              className="sea-surge"
              d="M0 315.5 H700 v40 H-700"
              fill="#123"
            />
            <path
              className="mean-sea-level"
              d="M0 700 H700 V315.5 H-700"
              fill="#345"
            />

            <path
              className="ground"
              id="Ground"
              d="M1466 315c-37 0-74 1.4-111-.4-3-.2-5.3-1.4-7.7-2.5-5.2-2.5-10.3-2.1-15.7-2.2-37.7-.4-75.3 1.4-113 2.3q-124.2 3-248.4 4.8c-24.2.3-48.3-.5-72.4 2a125.3 125.3 0 01-20 0c-6.6-.3-10.1 3.2-14.4 7a64.4 64.4 0 00-7.3 7.9 41.6 41.6 0 01-3.6 4.5 5.3 5.3 0 01-3.6 1.4c-8.4.6-8.8-6.8-13.1-10.5a12.3 12.3 0 00-5.9-2.9c1.4 0-80.4-30.5-80.4-30.5h-51.9l-66.3 44.3a60.7 60.7 0 00-6.1 1.8c-12.9 4.5-25.4 4-38.5 3.8-9.5-.2-19.1.3-28.7.3-22.3 0-44.3 3-66.4 4.6-24.4 1.9-48.7 1-73 .8-39.6-.2-79 .7-118.6 3.8-8.7.6-17.3.2-25.8 3.8-10.1 4.2-19.8 3-30 2.7-12.4-.4-24.8.8-37.1 1.5-17.2 1-34 4-50.8 7.6-52 11.3-103.5 24.2-156.3 32.5v139.8h1963V315z"
              transform="translate(0 -24.2)"
              fill="#59452c"
            />
            <path
              id="Water_BG_Start"
              className="cls-7 saltwater-wedge"
              data-name="Water BG Start"
              d="M1051.3 355.1l-166.4.5-85.8-2.5-108.7-6.1-59.1-6.8a60.7 60.7 0 00-6.1 1.8c-12.9 4.5-25.4 4-38.5 3.7-9.5-.2-19.1.3-28.7.3-22.3 0-44.3 3-66.4 4.7-24.4 1.8-48.7 1-73 .8-39.6-.3-79 .7-118.6 3.7-8.7.7-17.3.2-25.8 3.8-10.1 4.3-19.8 3-30 2.7-12.4-.4-24.8.9-37.1 1.6-17.2 1-34 4-50.8 7.6C104.3 382.2 52.8 395 0 403.4v139.8h1963V354.4z"
              transform="translate(0 -24.2)"
            />
            <path
              className="cls-8 fresh-water"
              data-name="Groundwater Start"
              d="M928.3 519H1963V330.2l-911.7.8-166.4.4-85.8-2.5-108.7-6.1-59.1-6.8 39.5 52.9 26 26.9 35.5 28.1 25.9 15.8 24.2 11.2L928.3 519z"
            />
          </g>
          <g id="groundwater-1">
            <path
              className="mean-sea-level"
              d="M0 700 H700 V310 H-700"
              fill="#345"
            />
            <path
              className="ground"
              id="Subsided_Ground_Near_Future"
              data-name="Subsided Ground Near Future"
              d="M1466 318c-37 0-74 1.4-111-.4-3-.2-5.3-1.4-7.7-2.5-5.2-2.5-10.3-2.1-15.7-2.2-37.7-.4-75.3 1.4-113 2.3q-124.2 3-248.4 4.8c-24.2.3-48.3-.5-72.4 2a125.3 125.3 0 01-20 0c-6.6-.3-10.1 3.2-14.4 7a64.4 64.4 0 00-7.3 7.9 41.6 41.6 0 01-3.6 4.5 5.3 5.3 0 01-3.6 1.4c-8.4.6-8.8-6.8-13.1-10.5-2-1.7-3.9-5.5-5.9-5.9 1.4 0-73.9-27.5-73.9-27.5h-62.8l-62 41.3a60.7 60.7 0 00-6 1.8c-12.9 4.5-25.4 4-38.5 3.8-9.5-.2-19.1.3-28.7.3-22.3 0-44.3 3-66.4 4.6-24.4 1.9-48.7 1-73 .8-39.6-.2-79 .7-118.6 3.8-8.7.6-17.3.2-25.8 3.8-10.1 4.2-19.8 3-30 2.7-12.4-.4-24.8.8-37.1 1.5-17.2 1-34 4-50.8 7.6-52 11.3-103.5 24.2-156.3 32.5v139.8h1963V318z"
              transform="translate(0 -24.2)"
              fill="#564636"
            />
            <path
              id="Water_BG_Start"
              className="cls-7 saltwater-wedge"
              data-name="Water BG Start"
              d="M1051.3 355.1l-166.4.5-85.8-2.5-108.7-6.1-59.1-6.8a60.7 60.7 0 00-6.1 1.8c-12.9 4.5-25.4 4-38.5 3.7-9.5-.2-19.1.3-28.7.3-22.3 0-44.3 3-66.4 4.7-24.4 1.8-48.7 1-73 .8-39.6-.3-79 .7-118.6 3.7-8.7.7-17.3.2-25.8 3.8-10.1 4.3-19.8 3-30 2.7-12.4-.4-24.8.9-37.1 1.6-17.2 1-34 4-50.8 7.6C104.3 382.2 52.8 395 0 403.4v139.8h1963V354.4z"
              transform="translate(0 -24.2)"
            />
            <path
              className="cls-8 fresh-water"
              data-name="Groundwater Near Future"
              d="M1394.1 519H1963V330.2l-911.7.8-166.4.4-85.8-2.5-108.7-6.1-26.4-3.1 175.6 71.6L954 417.5l63.2 27.7 36.9 16.6 80.7 22 259.3 35.2z"
            />
          </g>
          <g id="groundwater-2">
            <path
              className="mean-sea-level"
              d="M0 700 H700 V295 H-700"
              fill="#345"
            />
            <path
              className="ground"
              id="Subsided_Ground_Future"
              data-name="Subsided Ground Future"
              d="M1466 325.2c-37 0-74 1.3-111-.5-3-.1-5.3-1.3-7.7-2.5-5.2-2.5-10.3-2-15.7-2.1-37.7-.4-75.3 1.4-113 2.3q-124.2 3-248.4 4.7c-24.2.3-48.3-.5-72.4 2a127.7 127.7 0 01-20 0c-6.6-.3-10.1 3.3-14.4 7a63.7 63.7 0 00-7.3 8 41.6 41.6 0 01-3.6 4.4 5.3 5.3 0 01-3.6 1.5c-8.4.5-8.8-14-13.1-17.8-2-1.6-3.9-5.5-5.9-5.8 1.4 0-73.9-27.6-73.9-27.6h-62.8l-62 41.4a60.7 60.7 0 00-6 1.8c-12.9 4.5-25.4 4-38.5 3.7-9.5-.2-19.1.3-28.7.3-22.3 0-44.3 3-66.4 4.7-24.4 1.8-48.7 1-73 .8-39.6-.3-79 .7-118.6 3.7-8.7.7-17.3.2-25.8 3.8-10.1 4.3-19.8 3-30 2.7-12.4-.4-24.8.9-37.1 1.6-17.2 1-34 4-50.8 7.6C104.3 382.2 52.8 395 0 403.4v139.8h1963v-218z"
              transform="translate(0 -24.2)"
              fill="#6d553e"
            />
            <path
              id="Water_BG_Future"
              data-name="Water BG Future"
              className="cls-7 saltwater-wedge"
              d="M1053.2 366.3l-172.2-3-121.4-2.6-30.5-.7-27-.6c-2 .5-74.8-18.2-76.9-17.5-12.8 4.5-25.4 4-38.4 3.8-9.6-.2-19.1.3-28.7.3-22.3 0-44.3 3-66.5 4.6-24.3 1.9-48.6 1-73 .8-39.5-.2-79 .7-118.5 3.8-8.7.6-17.3.2-25.8 3.8-10.1 4.2-19.8 3-30 2.7-12.5-.4-24.8.9-37.1 1.5-17.3 1-34 4-50.8 7.7C104.3 382.2 52.8 395 0 403.4v139.8h1963v-177z"
              transform="translate(0 -24.2)"
            />
            <path
              id="Groundwater_Future"
              data-name="Groundwater Future"
              className="cls-8 fresh-water"
              d="M1915 519h48V342.1h-909.8L881 339.2l-88.3-2.2-33.2-.5-57.4-1.2L995.9 388l179.1 25.3 151.2 20.8 157 28.4 209 28.6L1915 519z"
            />
          </g>

          {/* 
    
    <path id="Groundwater_Near_Future" data-name="Groundwater Near Future" class="cls-8" d="M1394.1 519H1963V330.2l-911.7.8-166.4.4-85.8-2.5-108.7-6.1-26.4-3.1 175.6 71.6L954 417.5l63.2 27.7 36.9 16.6 80.7 22 259.3 35.2z"/>
    <path id="Water_BG_Future" data-name="Water BG Future" class="cls-7" d="M1053.2 366.3l-172.2-3-121.4-2.6-30.5-.7-27-.6c-2 .5-74.8-18.2-76.9-17.5-12.8 4.5-25.4 4-38.4 3.8-9.6-.2-19.1.3-28.7.3-22.3 0-44.3 3-66.5 4.6-24.3 1.9-48.6 1-73 .8-39.5-.2-79 .7-118.5 3.8-8.7.6-17.3.2-25.8 3.8-10.1 4.2-19.8 3-30 2.7-12.5-.4-24.8.9-37.1 1.5-17.3 1-34 4-50.8 7.7C104.3 382.2 52.8 395 0 403.4v139.8h1963v-177z" transform="translate(0 -24.2)"/>
    <path id="Groundwater_Future" data-name="Groundwater Future" class="cls-8" d="M1915 519h48V342.1h-909.8L881 339.2l-88.3-2.2-33.2-.5-57.4-1.2L995.9 388l179.1 25.3 151.2 20.8 157 28.4 209 28.6L1915 519z"/> */}
        </g>
      </svg>
    </div>
  )
}

export default FoodSecurityTableau
