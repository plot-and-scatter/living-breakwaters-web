import React from "react"

import "./FoodSecurityTableau.scss"
import { useState } from "react"
import { useCallback } from "react"
import { useEffect } from "react"

const toggleVisibility = (id, toggleVar) => {
  const el = document.getElementById(id)
  console.log("el", el, toggleVar)
  if (el) {
    el.setAttribute("visibility", toggleVar ? "visible" : "hidden")
  }
}

const Reeds = ({ narrativeStage }) => {
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

  useEffect(() => {
    toggleVisibility("sea_level_rise_storm_surge", stormSurgeVisible)
  }, [stormSurgeVisible])

  useEffect(() => {
    toggleVisibility("heavy_rain_event", rainVisible)
  }, [rainVisible])

  return (
    <div className="FoodSecurityTableau">
      <svg
        id="present_day"
        data-name="present day"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1965.11 443.41"
      >
        <defs>
          <pattern
            id="_10_dpi_20_"
            data-name="10 dpi 20%"
            width="28.8"
            height="28.8"
            patternTransform="matrix(.75 0 0 .75 3.06 -14.55)"
            patternUnits="userSpaceOnUse"
          >
            <path className="cls-1" d="M0 0h28.8v28.8H0z" />
            <path
              className="cls-2"
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
            <path className="cls-1" d="M0 0h28.8v28.8H0z" />
            <path
              className="cls-2"
              d="M28.8 30.24a1.44 1.44 0 10-1.44-1.44 1.44 1.44 0 001.44 1.44zM14.4 30.24A1.44 1.44 0 1013 28.8a1.44 1.44 0 001.4 1.44zM28.8 15.84a1.44 1.44 0 10-1.44-1.44 1.44 1.44 0 001.44 1.44zM14.4 15.84A1.44 1.44 0 1013 14.4a1.44 1.44 0 001.4 1.44zM7.2 23a1.44 1.44 0 10-1.44-1.4A1.44 1.44 0 007.2 23zM21.6 23a1.44 1.44 0 10-1.44-1.44A1.44 1.44 0 0021.6 23zM7.2 8.64A1.44 1.44 0 105.76 7.2 1.44 1.44 0 007.2 8.64zM21.6 8.64a1.44 1.44 0 10-1.44-1.44 1.44 1.44 0 001.44 1.44zM0 30.24a1.44 1.44 0 001.44-1.44A1.45 1.45 0 000 27.36a1.44 1.44 0 00-1.44 1.44A1.43 1.43 0 000 30.24zM0 15.84a1.44 1.44 0 001.44-1.44A1.45 1.45 0 000 13a1.44 1.44 0 00-1.44 1.4A1.43 1.43 0 000 15.84zM28.8 1.44A1.45 1.45 0 0030.24 0a1.44 1.44 0 00-1.44-1.44A1.43 1.43 0 0027.36 0a1.44 1.44 0 001.44 1.44zM14.4 1.44A1.45 1.45 0 0015.84 0a1.44 1.44 0 00-1.44-1.44A1.43 1.43 0 0013 0a1.44 1.44 0 001.4 1.44zM0 1.44A1.45 1.45 0 001.44 0 1.44 1.44 0 000-1.44 1.43 1.43 0 00-1.44 0 1.44 1.44 0 000 1.44z"
            />
          </pattern>
        </defs>
        <path
          id="ground"
          d="M1465.34 210.87c-37.06 0-74.09 1.35-111.18-.44-2.86-.13-5.16-1.34-7.62-2.51-5.21-2.49-10.34-2.09-15.71-2.15-37.71-.36-75.33 1.41-113 2.33q-124.2 3-248.41 4.73c-24.14.3-48.24-.51-72.39 2a127.7 127.7 0 01-20 .07c-6.57-.36-10.1 3.16-14.37 7a64.36 64.36 0 00-7.29 7.84c-2 2.52-2.75 6-7.06 6.25-8.37.56-8.92-7.16-13.29-10.86a12.4 12.4 0 00-5.83-2.84c1.39 0-80.42-30.57-80.42-30.57h-51.88l-66.36 44.36c-2 .5-4.09 1.08-6.12 1.79-12.83 4.51-25.38 4-38.43 3.78-9.58-.2-19.14.28-28.71.29-22.31 0-44.31 3-66.46 4.64-24.36 1.85-48.64.95-73 .79-39.6-.25-79.06.71-118.56 3.75-8.72.67-17.3.23-25.82 3.81-10.1 4.25-19.81 3-30 2.7-12.44-.42-24.74.87-37.11 1.56-17.22.95-34 3.95-50.74 7.6-52.04 11.31-103.7 24.28-156.46 32.55L0 439.08h1962.23V210.87z"
          transform="translate(1.88 2.97)"
          fill="#565656"
          opacity=".9"
        />
        <g id="groundwater_salinization" data-name="groundwater + salinization">
          <g id="groundwater">
            <path
              fill="#436689"
              d="M1 303.31l113.93-23.36 78.42-16.51 64.34-1.46 27.47-5.75 85.68-5.08 107.1-1.07 51.57-3.81 63.96-.55 42.07-7.16 65.56 79.79 47.04 37.26 185.87 86.44H1.88L1 303.31z"
            />
            <path
              fill="#6f90c1"
              d="M934.01 442.05h1030.1V252.8l-908.53.76-166.43.45-85.75-2.48-108.86-8.77-59-4.2 39.47 52.97 26.09 26.82 35.49 28.11 25.91 15.83 24.18 11.24 147.33 68.52z"
            />
          </g>
          <g id="groundwater_lines" data-name="groundwater lines">
            <path
              className="cls-6"
              d="M633.66 235.59L671 285.32c20.56 27.34 66.76 63.38 102.66 80.08l158.43 73.68M1962.23 249.84h-561.37c-39.6 0-104.4.08-144 .19l-332.71.97c-39.6.11-104.32-2.1-143.82-4.92l-146.67-10.49"
              transform="translate(1.88 2.97)"
            />
          </g>
        </g>
        <path
          className="cls-7"
          d="M516.57 248.4H1v54.91l39.55-7.02 59.96-12.39 57.25-12.97 41.77-8.18 37.37-2.23 20.79 1.46 21.11-3.86 17.1-4.01 57.29-2.58h82.31l35.09-1 45.98-2.13z"
          id="mean_sea_level"
          data-name="mean sea level"
        />
        <g
          id="sea_level_rise_storm_surge"
          data-name="sea level rise + storm surge"
        >
          <path
            fill="#083860"
            d="M1 248.4v-33.87h667.22l-21.1 16.89-20.83 11.37-20.39 1.54-62.02 1.52-31.2 2.01L1 248.4z"
          />
          <path className="cls-6" d="M1 248.4h504.47" />
        </g>
        <g id="objects">
          <g id="farming">
            <g id="barn">
              <path className="cls-9" d="M1396.58 140.09h14.43v8.85h-14.43z" />
              <path
                className="cls-9"
                d="M1392.85 147.7a.75.75 0 01-.12-.14M1407.8 148.17c-1.62.14-3.76.13-6.56.09-4.9 0-7.14.35-8.18-.36M1411.69 146.29a1.78 1.78 0 01-.45.64M1372.45 174.43l-2-2.51c-.66-.84-1.32-1.68-2-2.54M1391.2 200.59l2.42 3.07c1.91 2.42 3.83 4.86 5.82 7.35M1384.93 190.22c5 6.3 9.88 12.42 15.19 19.09v-38.18c-5.33 6.69-10.06 12.66-15.19 19.09zM1403.73 171.08v38.35l15.2-19.24c-5.13-6.43-9.93-12.48-15.2-19.11zM1404.4 169.4c5.3 6.66 10.27 12.93 15.55 19.57l15.41-19.57z"
                transform="translate(1.88 2.97)"
              />
              <path
                className="cls-9"
                d="M1368.45 169.37c.67.86 1.35 1.7 2 2.54l2 2.51L1384 189l15.49-19.6zM1436.42 209.78V170.7c-5.49 6.89-10.47 13.18-15.51 19.52zM1435.55 211.21l-15.67-19.73-15.54 19.73zM1391.2 200.59l-7.26-9.15c-5.17 6.61-10.19 13-15.39 19.59h30.91c-2-2.49-3.91-4.93-5.82-7.35zM1446.2 132.67c-.22-.22-.47-.43-.71-.63s-.51-.38-.78-.56M1444.38 145.38c-.61-1.12-1.22-2.24-1.79-3.36"
                transform="translate(1.88 2.97)"
              />
              <path
                className="cls-9"
                d="M1444.38 145.38c4 7.25 8.67 14.41 9.84 22.09 2.15 14.13.57 28.82.57 43.74h-16.28v-43.14l2.87-1c-.15-2-74.47-2.38-79.4-.41l3.48 1.41v43h-16.52c0-6.66.55-13.28-.11-19.78-1.65-16.44 2.09-31.34 10.35-45.6 3.33-5.74 6.73-10.54 12.56-13.95 9.35-5.47 18.35-11.56 27.42-17.52a4.32 4.32 0 015.52 0c11 7.24 22.18 14.26 33.21 21.47 1.41.92 2.37 2.53 3.52 3.85a3 3 0 01.33.75c.27.56.55 1.12.85 1.68.57 1.17 1.17 2.29 1.79 3.41z"
                transform="translate(1.88 2.97)"
              />
              <path
                className="cls-9"
                d="M1411.69 146.29c.89-1.7.41-4.85-.46-10.57a7.09 7.09 0 00-1.35-.35c-4.69 0-9.35.13-14-.1-3-.14-3.76 1-3.69 3.8.12 5.14-.18 7.46.56 8.49a.33.33 0 00.12.14.66.66 0 00.21.2c1 .73 3.28.33 8.18.38 2.8 0 4.94 0 6.56-.11s2.79-.52 3.44-1.24a1.78 1.78 0 00.43-.64zM1383 190.21c-5.15 6.49-10.09 12.74-15.45 19.52v-38.91c5.27 6.63 10.23 12.84 15.45 19.39zM1472.9 196.5v14.58h-15.44v-41.75h8.59c-2.69-5.67-5.07-10.71-7.46-15.76-1.65-3.46-3.61-6.82-4.91-10.42-3-8.34-8-14.75-16.21-18.56a5 5 0 01-2.42-3.71c-.21-8.51-.1-17-.1-25.83h38V196.5z"
                transform="translate(1.88 2.97)"
              />
              <path
                className="cls-10"
                d="M1472.9 120.9v4.51l-.23 9.85.23.08v30.8l-.46.94h.46v44h-15.44v-41.75h8.59c-2.69-5.67-5.07-10.71-7.46-15.76-1.65-3.46-3.61-6.82-4.91-10.42-3-8.34-8-14.75-16.21-18.56a5 5 0 01-2.42-3.71c-.21-8.51-.1-17-.1-25.83h38v25.85z"
                transform="translate(1.88 2.97)"
              />
              <path
                className="cls-10"
                d="M1399.16 114.29a4.32 4.32 0 015.52 0c11 7.24 22.18 14.26 33.21 21.47 1.41.92 2.37 2.53 3.52 3.85a3 3 0 01.33.75c.27.56.55 1.12.85 1.68.57 1.12 1.17 2.24 1.79 3.36 4 7.25 8.67 14.41 9.84 22.09 2.15 14.13.57 28.82.57 43.74h-16.28v-43.16l2.87-1c-.15-2-74.47-2.38-79.4-.41l3.48 1.41v43h-16.52c0-6.66.55-13.28-.11-19.78-1.65-16.44 2.09-31.34 10.35-45.6 3.33-5.74 6.73-10.54 12.56-13.95 9.35-5.4 18.35-11.49 27.42-17.45zm12.53 32c.89-1.7.41-4.85-.46-10.57a7.09 7.09 0 00-1.35-.35c-4.69 0-9.35.13-14-.1-3-.14-3.76 1-3.69 3.8.12 5.14-.18 7.46.56 8.49a.33.33 0 00.12.14.66.66 0 00.21.2c1 .73 3.28.33 8.18.38 2.8 0 4.94 0 6.56-.11s2.79-.52 3.44-1.24a1.78 1.78 0 00.43-.64z"
                transform="translate(1.88 2.97)"
              />
              <path
                className="cls-9"
                d="M1472.72 92.06h-37.49c.86-9.59 9.58-16.78 19.51-16.22 10.15.59 17.98 7.62 17.98 16.22z"
                transform="translate(1.88 2.97)"
              />
              <path
                d="M1454.74 75.84c10.15.59 18 7.62 18 16.22h-37.49c.84-9.59 9.56-16.78 19.49-16.22z"
                transform="translate(1.88 2.97)"
              />
              <path className="cls-11" d="M1396.58 140.09h14.43v8.85h-14.43z" />
              <path
                className="cls-9"
                d="M1446.2 132.67a4 4 0 01.79 1.07c5.37 11.1 10.65 22.26 16 33.45-3.61 1.17-5.59.23-7.14-3.23-3.88-8.62-8.16-17.08-12.42-25.54a10.45 10.45 0 00-3.33-3.94c-11.72-7.66-23.56-15.15-35.26-22.83-2.16-1.4-3.68-1.34-5.8.06-11.36 7.46-22.87 14.68-34.2 22.18a14.91 14.91 0 00-4.76 5.34c-4.09 7.93-7.9 16-11.76 24.05-2.62 5.46-1.55 4.29-7.51 4.16 5.42-11.34 10.65-22.36 16-33.32a7.91 7.91 0 012.84-2.85c13.19-8.44 26.43-16.79 39.58-25.26 2-1.33 3.5-1.27 5.53 0 13.15 8.48 26.42 16.79 39.61 25.19l.38.25c.27.18.53.36.78.56s.47.44.67.66z"
                transform="translate(1.88 2.97)"
              />
              <path
                d="M1399.19 106c2-1.33 3.5-1.27 5.53 0 13.15 8.48 26.42 16.79 39.61 25.19l.38.25c.27.18.53.36.78.56s.49.41.71.63a4 4 0 01.79 1.07c5.37 11.1 10.65 22.26 16 33.45-3.61 1.17-5.59.23-7.14-3.23-3.88-8.62-8.16-17.08-12.42-25.54a10.45 10.45 0 00-3.33-3.94c-11.72-7.66-23.56-15.15-35.26-22.83-2.16-1.4-3.68-1.34-5.8.06-11.36 7.46-22.87 14.68-34.2 22.18a14.91 14.91 0 00-4.76 5.34c-4.09 7.93-7.9 16-11.76 24.05-2.62 5.46-1.55 4.29-7.51 4.16 5.42-11.34 10.65-22.36 16-33.32a7.91 7.91 0 012.84-2.85c13.15-8.4 26.35-16.75 39.54-25.23z"
                transform="translate(1.88 2.97)"
              />
              <path
                className="cls-11"
                d="M1436.42 170.7v39.08l-15.51-19.56c5.09-6.34 10.02-12.63 15.51-19.52zM1404.34 211.21l15.54-19.73 15.67 19.73zM1403.73 171.08c5.27 6.63 10.07 12.68 15.2 19.11l-15.2 19.24zM1435.36 169.4L1420 189c-5.28-6.64-10.25-12.91-15.55-19.57zM1367.54 170.82c5.28 6.63 10.24 12.84 15.45 19.39-5.15 6.49-10.09 12.74-15.45 19.52zM1399.44 211h-30.89c5.2-6.61 10.22-13 15.39-19.59l7.26 9.15 2.42 3.07c1.91 2.42 3.83 4.86 5.82 7.35zM1400.12 171.13v38.18c-5.31-6.67-10.16-12.79-15.19-19.09 5.13-6.43 9.86-12.4 15.19-19.09zM1399.47 169.37L1384 189l-11.53-14.54-2-2.51c-.66-.84-1.32-1.68-2-2.54h31z"
                transform="translate(1.88 2.97)"
              />
            </g>
          </g>
          <g id="pumps-wells">
            <path
              id="pump"
              className="cls-12"
              d="M755.08 197.9v-23.59h77.42v51.95l-77.42-28.36z"
            />
            <path
              id="well-2"
              className="cls-13"
              d="M1284.47 194.91h17.08v15.53h-17.08z"
            />
            <path
              id="well-1"
              className="cls-13"
              d="M1742.4 199.83h17.08v15.53h-17.08z"
            />
            <path
              id="pump-pipe"
              className="cls-12"
              d="M639.32 218.8H832.5v7.46H639.32z"
            />
          </g>
          <g id="ground-lines">
            <path
              className="cls-14"
              d="M826.32 222c5.18-.56 4.12.25 8.67 4.1 4.37 3.7 4.92 11.42 13.29 10.86 4.31-.29 5-3.73 7.06-6.25a64.36 64.36 0 017.29-7.84c4.27-3.81 7.8-7.33 14.37-7a127.7 127.7 0 0020-.07c24.15-2.51 48.25-1.7 72.39-2q124.22-1.58 248.41-4.73c37.66-.92 75.28-2.69 113-2.33 5.37.06 10.5-.34 15.71 2.15 2.46 1.17 4.76 2.38 7.62 2.51 37.09 1.79 74.12.44 111.18.44h496.89M633.66 235.59c-3.13.46 0 0-9.25 3.25-12.83 4.51-25.38 4-38.43 3.78-9.58-.2-19.14.28-28.71.29-22.31 0-44.31 3-66.46 4.64-24.36 1.85-48.64.95-73 .79-39.6-.25-79.06.71-118.56 3.75-8.72.67-17.3.23-25.82 3.81-10.1 4.25-19.81 3-30 2.7-12.44-.42-24.74.87-37.11 1.56-17.22.95-34 3.95-50.74 7.6-52.04 11.34-103.7 24.31-156.46 32.58"
              transform="translate(1.88 2.97)"
            />
          </g>
        </g>
        <g
          id="heavy_rain_event"
          data-name="heavy rain event"
          visibility={rainVisible ? "visible" : "hidden"}
        >
          <path
            fill="url(#_10_dpi_20_)"
            d="M854.03 240.57h1110.08v-25.74l-560.5.56-36.19-.2-12.66-.94-12.79-4.21-26.75-.33-147.16 1.8-148.04 3.4-76.12 1.71-33.74 1.4-14.18.73-8.8 1.72-13.41-1.66-15.59 10.04-4.15 11.72z"
          />
          <path
            className="cls-7"
            d="M870.65 220.69l-44.7.19 2.26 4.09 6.69 2.7 4.75 3.79 3.52 5.99 3.37 1.11 3.62 1.37 3.63-2.48 4.09-3.99 3.05-4.09 5.68-5.4 4.04-3.28zM639.32 222.76l-62.83 23.07 26.45.51 13.45-1.95 9.9-2.58 13.03-15.55v-3.5"
          />
          <path
            className="cls-7"
            d="M832.16 221.09l-192.84 2.47v2.06l101.65.57 90.07-.16 1.12-4.94z"
          />
          <path
            className="cls-17"
            d="M903.18 178.9L993.87.11M927.01 165.6L1010.96.11M934.67 178.9L1025.36.11M964.07 149.94l76-149.83M966.13 178.9L1056.82.11M985.97 165.6L1069.92.11M993.62 178.9L1084.32.11M1023.03 149.94l76-149.83M1029.97 178.9L1120.67.11M1049.81 165.6L1133.76.11M1057.47 178.9L1148.16.11M1086.87 149.94l76-149.83M1086.93 178.9L1177.62.11M1106.76 165.6L1190.71.11M1114.42 178.9L1205.11.11M1143.82 149.94l76-149.83M1661.11 178.9L1751.8.11M1680.94 165.6L1764.89.11M1688.6 178.9L1779.29.11M1718 149.94L1794 .11M1720.06 178.9L1810.76.11M1739.9 165.6L1823.85.11M1747.55 178.9L1838.25.11M1776.96 149.94l76-149.83M1783.9 178.9L1874.6.11M1803.74 165.6L1887.69.11M1811.4 178.9L1902.09.11M1840.8 149.94l76-149.83M1842.86 178.9L1933.55.11M1862.7 165.6L1946.64.11M1870.35 178.9L1961.04.11M1146.12 178.9L1236.82.11M1169.96 165.6L1253.91.11M1177.61 178.9L1268.31.11M1207.02 149.94l76-149.83M1352.62 132.93L1419.99.11M1369.41 128.22L1434.39.11M1388.65 119.28L1449.1.11M1409.73 110.75L1465.86.11M1422.29 111.8L1478.95.11M1455.23 75.25L1493.35.11M1467.24 80.57L1508.06.11M1476.97 96.68L1525.96.11M1219.6 165.6L1303.54.11M1227.25 178.9L1317.94.11M1256.65 149.94L1332.66.11M1262.95 178.9L1353.65.11M1282.79 165.6L1366.74.11M1290.44 178.9L1381.14.11M1323.85 149.94l76-149.83M1556.01 165.6L1639.96.11M1563.66 178.9L1654.36.11M1593.07 149.94l76-149.83M1599.37 178.9L1690.06.11M1619.2 165.6L1703.15.11M1626.86 178.9L1717.55.11M1656.26 149.94l76-149.83M1455.63 178.9L1546.33.11M1485.04 149.94l76-149.83M1487.1 178.9L1577.79.11M1506.93 165.6L1590.88.11M1514.59 178.9L1605.28.11M1543.99 149.94l76-149.83M797.05 178.9L887.75.11M816.89 165.6L900.84.11M824.54 178.9L915.24.11M853.95 149.94l76-149.83M856.01 178.9L946.7.11M875.84 165.6L959.79.11M883.5 178.9L974.19.11M683.24 178.9L773.93.11M703.07 165.6L787.02.11M710.73 178.9L801.42.11M740.13 149.94l76-149.83M742.19 178.9L832.88.11M762.03 165.6L845.98.11M769.68 178.9L860.38.11M628.93 149.94l76-149.83M630.99 178.9L721.68.11M654.82 165.6L738.77.11M663.48 178.9L754.17.11"
          />
        </g>
        <g id="text">
          <path
            className="cls-18"
            d="M879.53 296.63l-35 .87c-19.26.48-45.29 9.19-57.86 19.36l-13.56 11"
            transform="translate(1.88 2.97)"
          />
          <path d="M774.69 321.52l2.21 7.74 7.11 3.77-18.31 5.29 8.99-16.8z" />
          <path
            className="cls-18"
            d="M940.47 330.16l-35 .87c-19.26.48-45.29 9.19-57.86 19.37l-13.56 11"
            transform="translate(1.88 2.97)"
          />
          <path d="M835.63 355.05l2.21 7.74 7.11 3.77-18.31 5.3 8.99-16.81z" />
          <path
            className="cls-18"
            d="M631.34 407.59l35-.87c19.26-.48 45.29-9.19 57.85-19.36l13.57-11"
            transform="translate(1.88 2.97)"
          />
          <path d="M739.94 388.63l-2.21-7.73-7.11-3.78 18.31-5.29-8.99 16.8z" />
          <path
            className="cls-18"
            d="M570.4 374.06l35-.87c19.26-.48 45.29-9.19 57.85-19.37l13.57-11"
            transform="translate(1.88 2.97)"
          />
          <path d="M679 355.1l-2.21-7.74-7.11-3.77 18.31-5.3L679 355.1z" />
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

export default Reeds
