import React from 'react'

import { viewBox } from '../PlaceableSVGHelper'
import PlaceableSVG from '../PlaceableSVG'
import PlaceableSVGProps from '../../../../@types/PlaceableSVGProps'

import './Car3.scss'

const Car3 = (props: PlaceableSVGProps): JSX.Element => {
  return (
    <PlaceableSVG
      extraClasses={'Car3'}
      viewBoxObj={viewBox(0, 0, 25.19, 16.87)}
      defaultScale={0.03}
      {...props}
    >
      <defs>
        <linearGradient
          id="CAR3_GRADIENT_BLUE"
          x1="19.9"
          y1="14.38"
          x2="22.72"
          y2="14.38"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#fff" />
          <stop offset="0.11" stopColor="#fafbfb" />
          <stop offset="0.25" stopColor="#ebf0f0" />
          <stop offset="0.39" stopColor="#d3dede" />
          <stop offset="0.54" stopColor="#b1c5c4" />
          <stop offset="0.7" stopColor="#86a5a4" />
          <stop offset="0.87" stopColor="#517e7c" />
          <stop offset="1" stopColor="#215a58" />
        </linearGradient>
        <linearGradient
          id="CAR3_GRADIENT_BLUE-2"
          x1="2.47"
          y1="14.38"
          x2="5.29"
          y2="14.38"
          xlinkHref="#CAR3_GRADIENT_BLUE"
        />
        <linearGradient
          id="CAR3_GRADIENT_BLUE-3"
          x1="0.25"
          y1="7.47"
          x2="24.94"
          y2="7.47"
          xlinkHref="#CAR3_GRADIENT_BLUE"
        />
      </defs>
      <g id="Layer_2" data-name="Layer 2">
        <g id="EXISTING_OBJECTS">
          <g id="car">
            <g id="SPLINE">
              <path className="cls-1" d="M19.9,14.58v2h2.82V12.13" />
            </g>
            <g id="SPLINE-2" data-name="SPLINE">
              <path className="cls-2" d="M5.29,14.58v2H2.47V12.13" />
            </g>
            <g id="LINE">
              <path
                className="cls-3"
                d="M12.59.25c-3,0-4.48.06-5.3.1A3.22,3.22,0,0,0,6.14.49C6,.56,5.88.67,5.64,1S5,2,4.7,2.64,4.05,4,3.8,4.41s-.4.65-.57.92H2.87a6,6,0,0,0,0-1.16c0-.1-.1-.11-.22-.12L2.13,4a4.3,4.3,0,0,0-.87.11,1.74,1.74,0,0,0-.83.39.73.73,0,0,0-.18.6.67.67,0,0,0,.13.45c.09.11.26.15.57.19a17.62,17.62,0,0,0,2,.1,3.32,3.32,0,0,0-.28.69,7,7,0,0,0-.23,1.66c0,.64,0,1.37,0,2.23s.09,1.88.15,2.55a12.21,12.21,0,0,0,.14,1.25c0,.23.07.35.15.4s.22,0,.71,0,1.32-.07,2.46-.09,2.58,0,6.59,0,5.46,0,6.6,0,2,.06,2.46.09.63,0,.71,0,.11-.17.15-.4A12.21,12.21,0,0,0,22.65,13c.06-.67.12-1.68.15-2.55s0-1.59,0-2.23a7,7,0,0,0-.23-1.66,3.32,3.32,0,0,0-.28-.69,17.62,17.62,0,0,0,1.95-.1c.31,0,.48-.08.57-.19a.67.67,0,0,0,.13-.45.77.77,0,0,0-.18-.6,1.74,1.74,0,0,0-.83-.39A4.3,4.3,0,0,0,23.06,4l-.54,0c-.12,0-.19,0-.22.12a6,6,0,0,0,0,1.16H22c-.17-.27-.34-.51-.57-.92s-.57-1.13-.9-1.77-.7-1.25-.94-1.61-.35-.47-.5-.54A3.22,3.22,0,0,0,17.9.35C17.08.31,15.6.25,12.59.25Z"
              />
            </g>
            <g id="SPLINE-3" data-name="SPLINE">
              <path className="cls-4" d="M17.28,9.07c-.11-.63-.13-.85.06-1" />
            </g>
            <g id="SPLINE-4" data-name="SPLINE">
              <path className="cls-4" d="M7.85,8.05c.19.17.17.39.06,1" />
            </g>
            <g id="SPLINE-5" data-name="SPLINE">
              <path className="cls-4" d="M2.87,5.33H.26" />
            </g>
            <g id="SPLINE-6" data-name="SPLINE">
              <path
                className="cls-4"
                d="M8,8.55a8.45,8.45,0,0,1-2.83-.72,4.84,4.84,0,0,1-1-.68"
              />
            </g>
            <g id="SPLINE-7" data-name="SPLINE">
              <path className="cls-4" d="M4.13,7.15a2.14,2.14,0,0,0-.44,1.49" />
            </g>
            <g id="SPLINE-8" data-name="SPLINE">
              <path className="cls-4" d="M21.5,8.64a2.14,2.14,0,0,0-.44-1.49" />
            </g>
            <g id="SPLINE-9" data-name="SPLINE">
              <path
                className="cls-4"
                d="M21.06,7.15a4.84,4.84,0,0,1-1,.68,8.45,8.45,0,0,1-2.83.72"
              />
            </g>
            <g id="SPLINE-10" data-name="SPLINE">
              <path
                className="cls-4"
                d="M19.76,5.43c.83-.08.78-.36.76-.54a3.86,3.86,0,0,0-.07-.41,5.7,5.7,0,0,0-.29-.74c-.16-.36-.39-.86-.56-1.21a3,3,0,0,0-.39-.66.5.5,0,0,0-.36-.16c-.15,0-.35,0-.83,0l-1.77,0a4.62,4.62,0,0,0-1.1.05,1.64,1.64,0,0,0-.48.26.88.88,0,0,1-.56.16c-.33,0-.88,0-1.52,0"
              />
            </g>
            <g id="SPLINE-11" data-name="SPLINE">
              <path
                className="cls-4"
                d="M12.59,2.15c-.63,0-1.18,0-1.51,0A.88.88,0,0,1,10.52,2,1.64,1.64,0,0,0,10,1.7a4.62,4.62,0,0,0-1.1-.05l-1.77,0c-.48,0-.68,0-.83,0A.5.5,0,0,0,6,1.87a3,3,0,0,0-.39.66c-.17.35-.4.85-.56,1.21a5.7,5.7,0,0,0-.29.74,3.86,3.86,0,0,0-.07.41c0,.18-.07.46.76.54"
              />
            </g>
            <g id="SPLINE-12" data-name="SPLINE">
              <path
                className="cls-4"
                d="M12.59,5.49c7,0,7.43-.06,7.74-.12s.44-.12.52-.22a.59.59,0,0,0,.07-.42A3.72,3.72,0,0,0,20.68,4c-.15-.35-.36-.79-.52-1.13l-.38-.77a1.38,1.38,0,0,0-.27-.4.91.91,0,0,0-.43-.13c-.18,0-.39,0-1.37-.05S15,1.4,12.59,1.42"
              />
            </g>
            <g id="SPLINE-13" data-name="SPLINE">
              <path
                className="cls-4"
                d="M12.59,1.42c-2.38,0-4.13,0-5.11.05s-1.19,0-1.37.05a.91.91,0,0,0-.43.13,1.38,1.38,0,0,0-.27.4L5,2.82c-.16.34-.37.78-.52,1.13a3.72,3.72,0,0,0-.24.78.59.59,0,0,0,.07.42c.08.1.22.16.52.22s.79.12,7.73.12"
              />
            </g>
            <g id="ARC">
              <path className="cls-4" d="M11,11a.14.14,0,0,0-.15.15" />
            </g>
            <g id="SPLINE-14" data-name="SPLINE">
              <path className="cls-4" d="M10.84,11.16v1.05" />
            </g>
            <g id="ARC-2" data-name="ARC">
              <path className="cls-4" d="M10.84,12.21a.14.14,0,0,0,.15.15" />
            </g>
            <g id="SPLINE-15" data-name="SPLINE">
              <path className="cls-4" d="M11,12.36h1.6" />
            </g>
            <g id="SPLINE-16" data-name="SPLINE">
              <path className="cls-4" d="M12.59,12.36H14.2" />
            </g>
            <g id="ARC-3" data-name="ARC">
              <path className="cls-4" d="M14.2,12.36a.14.14,0,0,0,.15-.15" />
            </g>
            <g id="SPLINE-17" data-name="SPLINE">
              <path className="cls-4" d="M14.35,12.21V11.16" />
            </g>
            <g id="ARC-4" data-name="ARC">
              <path className="cls-4" d="M14.35,11.16A.14.14,0,0,0,14.2,11" />
            </g>
            <g id="SPLINE-18" data-name="SPLINE">
              <path className="cls-4" d="M14.2,11H12.59" />
            </g>
            <g id="SPLINE-19" data-name="SPLINE">
              <path className="cls-4" d="M12.59,11H11" />
            </g>
            <g id="SPLINE-20" data-name="SPLINE">
              <path
                className="cls-4"
                d="M12.59,14c5.63,0,6,0,6.19-.1s.08-.3-.1-.71-.47-1-.66-1.47-.28-.63-.55-.73-.74-.12-4.88-.12"
              />
            </g>
            <g id="SPLINE-21" data-name="SPLINE">
              <path
                className="cls-4"
                d="M12.59,10.87c-4.13,0-4.59,0-4.87.12s-.36.31-.55.73-.48,1-.66,1.47-.26.61-.1.71.56.1,6.18.1"
              />
            </g>
            <g id="SPLINE-22" data-name="SPLINE">
              <path
                className="cls-4"
                d="M3.35,6.66a5.54,5.54,0,0,0,2.41,1,19,19,0,0,0,2.65.46c1.2.13,2.94.24,4.18.24"
              />
            </g>
            <g id="SPLINE-23" data-name="SPLINE">
              <path
                className="cls-4"
                d="M12.59,8.36c1.25,0,3-.11,4.19-.24a19,19,0,0,0,2.65-.46,5.54,5.54,0,0,0,2.41-1"
              />
            </g>
            <g id="SPLINE-24" data-name="SPLINE">
              <path className="cls-4" d="M21.84,6.66c.12-.11.15-.37.06-.77" />
            </g>
            <g id="SPLINE-25" data-name="SPLINE">
              <path
                className="cls-4"
                d="M21.9,5.89c-.12-.38-.23-.76-.32-1.14"
              />
            </g>
            <g id="SPLINE-26" data-name="SPLINE">
              <path
                className="cls-4"
                d="M21.84,6.66c.05.15.17.4.23.63A1.08,1.08,0,0,1,22,8a1.85,1.85,0,0,1-.75.83,7.19,7.19,0,0,1-1.54.64,1.32,1.32,0,0,1-.82.08,3.58,3.58,0,0,1-.59-.29,1.5,1.5,0,0,0-.84-.16,16.65,16.65,0,0,0-1.9.15,3.85,3.85,0,0,0-1.21.3,2.08,2.08,0,0,0-.54.45,2.48,2.48,0,0,1-.44.35c-.14.09-.25.13-.8.14"
              />
            </g>
            <g id="SPLINE-27" data-name="SPLINE">
              <path
                className="cls-4"
                d="M12.59,10.46c-.54,0-.65-.05-.79-.14a2.48,2.48,0,0,1-.44-.35,2.08,2.08,0,0,0-.54-.45,3.85,3.85,0,0,0-1.21-.3,16.65,16.65,0,0,0-1.9-.15,1.5,1.5,0,0,0-.84.16,3.58,3.58,0,0,1-.59.29,1.32,1.32,0,0,1-.82-.08A7.19,7.19,0,0,1,3.92,8.8,1.85,1.85,0,0,1,3.17,8a1.08,1.08,0,0,1,0-.68c.06-.23.18-.48.23-.63"
              />
            </g>
            <g id="SPLINE-28" data-name="SPLINE">
              <path className="cls-4" d="M3.35,6.66c-.12-.11-.15-.37-.06-.77" />
            </g>
            <g id="SPLINE-29" data-name="SPLINE">
              <path className="cls-4" d="M3.29,5.89c.12-.38.23-.76.32-1.14" />
            </g>
            <g id="CIRCLE">
              <circle className="cls-4" cx="21.17" cy="12.75" r="0.53" />
            </g>
            <g id="SPLINE-30" data-name="SPLINE">
              <path
                className="cls-4"
                d="M22,13.41c0-.3,0-.86,0-1.17s0-.39,0-.48,0-.21-.08-.26a.8.8,0,0,0-.39,0l-.6.08-.78.11c-.2,0-.27.06-.3.12s0,.15.06.39.17.59.28.89a1.92,1.92,0,0,0,.32.62.48.48,0,0,0,.38.15h.85a.3.3,0,0,0,.18,0S22,13.72,22,13.41Z"
              />
            </g>
            <g id="LINE-2" data-name="LINE">
              <line
                className="cls-4"
                x1="22.32"
                y1="5.33"
                x2="24.93"
                y2="5.33"
              />
            </g>
            <g id="SPLINE-31" data-name="SPLINE">
              <path
                className="cls-4"
                d="M24.94,4.94a14.21,14.21,0,0,1-2.13-.12.29.29,0,0,1-.23-.15,3,3,0,0,1-.29-.44"
              />
            </g>
            <g id="SPLINE-32" data-name="SPLINE">
              <path className="cls-4" d="M14.35,11.16h3.37" />
            </g>
            <g id="SPLINE-33" data-name="SPLINE">
              <path className="cls-4" d="M14.35,12.11c1,0,2.31,0,3.84,0" />
            </g>
            <g id="SPLINE-34" data-name="SPLINE">
              <ellipse
                className="cls-4"
                cx="12.59"
                cy="9.42"
                rx="0.87"
                ry="0.67"
              />
            </g>
            <g id="SPLINE-35" data-name="SPLINE">
              <path className="cls-4" d="M10.84,12.11c-1,0-2.31,0-3.84,0" />
            </g>
            <g id="SPLINE-36" data-name="SPLINE">
              <path className="cls-4" d="M10.84,11.16H7.47" />
            </g>
            <g id="SPLINE-37" data-name="SPLINE">
              <path
                className="cls-4"
                d="M.25,4.94a14.21,14.21,0,0,0,2.13-.12.29.29,0,0,0,.23-.15,3,3,0,0,0,.29-.44"
              />
            </g>
            <g id="SPLINE-38" data-name="SPLINE">
              <path
                className="cls-4"
                d="M3.15,13.41c0-.3,0-.86,0-1.17s0-.39,0-.48,0-.21.08-.26a.8.8,0,0,1,.39,0l.6.08.78.11c.2,0,.27.06.3.12s0,.15-.06.39-.17.59-.28.89a1.92,1.92,0,0,1-.32.62.48.48,0,0,1-.38.15H3.38a.3.3,0,0,1-.18,0S3.16,13.72,3.15,13.41Z"
              />
            </g>
            <g id="CIRCLE-2" data-name="CIRCLE">
              <circle className="cls-4" cx="4.02" cy="12.75" r="0.53" />
            </g>
          </g>
        </g>
      </g>
    </PlaceableSVG>
  )
}

export default Car3
