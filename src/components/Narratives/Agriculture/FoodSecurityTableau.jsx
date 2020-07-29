import React, { useRef } from "react"
import { gsap, TimelineMax, Power2 } from "gsap"
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin"

import "./FoodSecurityTableau.scss"
import { useState } from "react"
import { useCallback } from "react"
import { useEffect } from "react"
import { useNarrative } from "../NarrativeContext"

gsap.registerPlugin(MorphSVGPlugin)

const toggleVisibility = (id, toggleVar) => {
  const el = document.getElementById(id)
  console.log("el", el, toggleVar)
  if (el) {
    el.setAttribute("visibility", toggleVar ? "visible" : "hidden")
  }
}

const itemHelper = (objClass, id, index) => {
  return gsap.to(
    `#groundwater-0 .${objClass}`,
    {
      morphSVG: { shape: `#groundwater-${id} .${objClass}` },
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
    toggleVisibility("sea_level_rise_storm_surge", stormSurgeVisible)
  }, [stormSurgeVisible])

  useEffect(() => {
    toggleVisibility("heavy_rain_event", rainVisible)
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
      <svg
        id="present_day"
        data-name="present day"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1963.11 247.39"
      >
        <g className="groundwater">
          <g id="groundwater-0">
            <path
              className="saltwater-wedge"
              d="M0 108.66L113.93 85.3l78.42-16.52 64.34-1.45 27.47-5.75 85.68-5.08 107.11-1.07 51.56-3.81 63.96-.55 42.07-7.16 65.56 79.79 47.04 37.26 185.87 86.43L0 247.1V108.66z"
            />
            <path
              className="fresh-water"
              d="M933.01 247.39h1030.1V58.15l-908.53.76-166.43.45-85.75-2.49-108.86-8.77-59-4.19 39.47 52.97 26.09 26.82 35.49 28.11 25.91 15.82 24.18 11.25 147.33 68.51z"
            />
            <path
              className="mean-sea-level"
              d="M515.57 53.75H0v54.91l39.55-7.02 59.96-12.39 57.25-12.97 41.78-8.19 37.36-2.22 20.79 1.46 21.11-3.86 17.1-4.01 57.29-2.59h82.31l35.09-.99 45.98-2.13z"
            />
          </g>
          <g id="groundwater-1">
            <path
              className="saltwater-wedge"
              d="M0 103.99l113.93-23.35 78.42-16.52 64.34-1.46 27.47-5.74 85.68-5.08 107.11-1.07 51.56-3.82 63.96-.55 42.07-7.16 38.1.31 70.99 29.62 137.01 51.16 98.04 32.65 462.94 89.91h-82.35L0 242.09v-138.1z"
            />
            <path
              className="fresh-water"
              d="M1435.45 242.89h527.82V50.65l-651.61-1.7-170.2.33-86.71.93-192.44.44-189.67-11.1 124.47 48.34 83.53 32.44 98.04 32.65 98.25 20.72 121.78 22.46 236.74 46.73z"
            />
            <path
              className="mean-sea-level"
              d="M633.12 38.06L.15 35.59v68.56l39.55-7.02 59.96-12.38 57.25-12.97 41.78-8.19 37.36-2.23 20.79 1.46 21.11-3.85 17.11-4.01 57.28-2.59h82.31l43.04-.22 80.63-5.37 48.37-.1 18.76-4.03 7.67-4.59z"
            />
          </g>
          <g id="groundwater-2">
            <path
              className="saltwater-wedge"
              d="M0 118.92l113.93-23.35 78.42-16.52 64.34-1.46 27.47-5.74 85.68-5.09 107.11-1.06 51.56-3.82 63.96-.55 42.07-7.16 11.73-9.96 57.96 1.02 62.69 16.37 93.22 25.1 119.94 29.34 215.57 37.87 117.51 13.74 274.21 36.63 363.09 53.54L0 259.12v-140.2z"
            />
            <path
              className="fresh-water"
              d="M1906.35 251.43l56.92 6.39V65.58l-651.6-1.7-170.21.33-86.71.93-201.57-8.8-165.83-12.36 183.04 44.8 119.67 29.74 142.74 35.61 192.14 14.9 215.8 29.03 365.61 53.37z"
            />
            <path
              className="mean-sea-level"
              d="M660.06 36.87L.15 37.46v81.62l39.55-7.02 59.96-12.39 57.25-12.97 42.12-5.5 36.57-.67 21.24-2.78 21.11-3.86 17.18-1.34 56.53-1.99 82.99-3.26 43.04-.23 80.63-5.36 48.37-.11L629 58.1l31.06-21.23z"
            />
          </g>
        </g>
        <g className="invisible">
          <g id="present" data-name="present">
            <path
              d="M1466.22 369.82c-37.06 0-74.09 1.35-111.17-.43-2.87-.14-5.17-1.35-7.62-2.52-5.22-2.49-10.35-2.09-15.72-2.15-37.7-.36-75.33 1.41-113 2.33q-124.18 3-248.41 4.73c-24.14.31-48.24-.51-72.39 2a126.5 126.5 0 01-20 .07c-6.56-.36-10.1 3.16-14.36 7a64.44 64.44 0 00-7.3 7.84c-2 2.52-2.75 6-7.06 6.25-8.37.56-8.92-7.16-13.29-10.85a12.33 12.33 0 00-5.83-2.85c1.39 0-80.42-30.57-80.42-30.57h-51.88L631.41 395a63.3 63.3 0 00-6.12 1.78c-12.83 4.51-25.38 4-38.42 3.78-9.58-.19-19.15.29-28.72.29-22.31 0-44.31 3-66.45 4.64-24.37 1.85-48.65.95-73 .8-39.6-.26-79.06.7-118.56 3.74-8.72.67-17.3.23-25.81 3.81-10.11 4.25-19.82 3-30 2.7-12.45-.41-24.75.88-37.12 1.56-17.22.95-33.95 3.95-50.74 7.6C104.42 437.05 52.77 450 0 458.29L.88 598h1962.23V369.82z"
              transform="translate(0 -350.64)"
              fill="#565656"
              id="section_fill"
              data-name="section fill"
              opacity=".9"
            />

            <path
              fill="#083860"
              d="M0 53.75V19.88h667.22l-21.1 16.88-20.83 11.38-20.39 1.54-62.02 1.52-31.2 2L0 53.75z"
              id="sea_level_rise_storm_surge"
              data-name="sea level rise + storm surge"
            />
          </g>
          <g id="near_future" data-name="near future">
            <path
              d="M1467.6 375.9c-37.06 0-70.57 1.51-107.66-.28-2.86-.14-8.21-.3-10.66-1.47-5.22-2.49-10.08-3-15.45-3.09-37.7-.36-76.5.63-114.17 2-82.39 2.92-165.76 2.73-248.57 3.78-24.14.31-47.64-.81-71.78 1.7a119.11 119.11 0 01-19.43.53c-6.56-.36-9.33 1.26-13.6 5.07-2.68 2.4-11.12 13.88-15.63 14.49-8.31 1.12-5.45-1.45-10.35-4.4-4.16-2.51-6.25-7.73-13.89-10.55 1.4-.05-72.18-27.78-72.18-27.78l-28.43-.21-33.09.09-61.15 39.77c-2 .5-4.08 1.08-6.11 1.79-12.83 4.51-25.38 4-38.43 3.78-9.58-.2-19.14.28-28.72.29-22.31 0-44.31 2.95-66.45 4.64-24.36 1.85-48.65.95-73 .79-39.59-.25-79.05.71-118.56 3.75-8.71.67-17.3.23-25.81 3.81-10.11 4.25-19.82 3-30 2.7-12.45-.42-24.75.87-37.11 1.56-17.23.95-34 3.95-50.74 7.6C104.57 437.55 52.92 450.53.15 458.8L0 597.74l1963.26.8V375c-165.63 0-330.03.9-495.66.9z"
              transform="translate(0 -355.65)"
              fill="#565656"
              id="subsidence"
            />
            <g
              id="groundwater_salinization_copy"
              data-name="groundwater + salinization copy"
            >
              <g id="groundwater_copy" data-name="groundwater copy">
                <path
                  fill="#436689"
                  d="M0 103.99l113.93-23.35 78.42-16.52 64.34-1.46 27.47-5.74 85.68-5.08 107.11-1.07 51.56-3.82 63.96-.55 42.07-7.16 38.1.31 70.99 29.62 137.01 51.16 98.04 32.65 462.94 89.91h-82.35L0 242.09v-138.1z"
                />
                <path
                  fill="#6f90c1"
                  d="M1435.45 242.89h527.82V50.65l-651.61-1.7-170.2.33-86.71.93-192.44.44-189.67-11.1 124.47 48.34 83.53 32.44 98.04 32.65 98.25 20.72 121.78 22.46 236.74 46.73z"
                />
              </g>
            </g>

            <path
              fill="#083860"
              d="M.15 37.47V.01L689.42 1.9l-28.13 19.2-25.5 17.05L.15 37.47z"
              id="sea_level_rise_storm_surge_copy"
              data-name="sea level rise + storm surge copy"
            />
          </g>
          <g id="future" data-name="future">
            <path
              d="M.15 376.08v-37.45l718.32 4.27 35.76-.32 77.64 21.76 639.89.47 489.65 3v10.09h-419.14l-189.46-.86-19.94-3-151.08 1.2c-104.8 1.42-194.65 3.92-299.06 5.32-6.19 4.58-19.46 13.21-25.23 14.58-15.27 3.63-14.38.13-17.2-2.32-28.69-13-57.38-25.31-86.07-38.33l-60.61 4.35-33.56 16.63-52.87.67-81.62-.09-13.74-.53z"
              transform="translate(0 -338.63)"
              fill="#083860"
              id="sea_level_rise_storm_surge_copy_2"
              data-name="sea level rise + storm surge copy 2"
            />
            <path
              d="M1467.6 374.55c-37.06 0-70.57 1.51-107.66-.28-2.86-.14-8.21-.3-10.66-1.47-5.22-2.49-10.08-3-15.45-3.09-37.7-.36-76.5.63-114.17 2-82.39 2.91-165.76 2.73-248.57 3.78-24.14.31-47.64-.81-71.78 1.7a119.11 119.11 0 01-19.43.53c-6.56-.36-9.33 1.26-13.6 5.07-2.68 2.4-11.12 13.88-15.63 14.49-8.31 1.12-5.45-1.45-10.35-4.4-4.16-2.51-6.25-7.73-13.89-10.55 1.4-.05-72.18-27.78-72.18-27.78l-28.43-.21-33.09.09-61.15 39.77c-2 .5-4.08 1.08-6.11 1.79-12.83 4.51-25.38 4-38.43 3.78-9.58-.2-19.14.28-28.72.29-22.31 0-44.31 3-66.45 4.64-24.36 1.85-48.65.95-73 .79-39.59-.25-79.05.71-118.56 3.75-8.71.67-17.3.23-25.81 3.81-10.11 4.25-19.82 3-30 2.7-12.45-.42-24.75.87-37.11 1.56-17.23 1-34 4-50.74 7.6C104.57 436.2 52.92 449.18.15 457.45L1 597.19h1962.26V373.67c-165.63 0-330.03.88-495.66.88z"
              transform="translate(0 -338.63)"
              fill="#565656"
              id="subsidence_copy"
              data-name="subsidence copy"
            />
            <g
              id="groundwater_salinization_copy_2"
              data-name="groundwater + salinization copy 2"
            ></g>
          </g>
        </g>
      </svg>
      <div className="mt-2">
        <button className="btn btn-sm btn-primary" onClick={toggleRain}>
          Toggle rain
        </button>
        <button
          className="btn btn-sm btn-primary ml-2"
          onClick={toggleStormSurge}
        >
          Toggle storm surge
        </button>
      </div>
    </div>
  )
}

export default FoodSecurityTableau
