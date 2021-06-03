import React from 'react'

import { viewBox } from '../PlaceableSVGHelper'
import PlaceableSVG from '../PlaceableSVG'
import PlaceableSVGProps from '../../../../@types/PlaceableSVGProps'

import './Train.scss'

const Train = (props: PlaceableSVGProps): JSX.Element => {
  return (
    <PlaceableSVG
      extraClasses={'Train'}
      viewBoxObj={viewBox(0, 0, 22.55, 29.06)}
      defaultScale={0.02}
      {...props}
    >
      <defs>
        <linearGradient
          id="linear-gradient"
          x1="2"
          y1="3.52"
          x2="20.39"
          y2="3.52"
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
          id="linear-gradient-2"
          x1="6.14"
          y1="14.82"
          x2="16.51"
          y2="14.82"
          xlinkHref="#linear-gradient"
        />
        <linearGradient
          id="linear-gradient-3"
          x1="6.92"
          y1="17.62"
          x2="15.48"
          y2="17.62"
          xlinkHref="#linear-gradient"
        />
        <linearGradient
          id="linear-gradient-4"
          x1="6.5"
          y1="16.28"
          x2="16.15"
          y2="16.28"
          xlinkHref="#linear-gradient"
        />
        <linearGradient
          id="linear-gradient-5"
          x1="7.34"
          y1="19.04"
          x2="15.07"
          y2="19.04"
          xlinkHref="#linear-gradient"
        />
        <linearGradient
          id="linear-gradient-6"
          x1="0.45"
          y1="25.39"
          x2="21.97"
          y2="25.39"
          xlinkHref="#linear-gradient"
        />
        <linearGradient
          id="linear-gradient-7"
          x1="1.76"
          y1="13.61"
          x2="20.87"
          y2="13.61"
          xlinkHref="#linear-gradient"
        />
      </defs>
      <g id="Layer_2" data-name="Layer 2">
        <g id="EXISTING_OBJECTS">
          <g id="train">
            <path
              className="cls-1"
              d="M20.29,6.68A34.83,34.83,0,0,0,2,6.79c.35-1.93.53-3.5,1-5,.12-.44.89-.89,1.41-1a44.42,44.42,0,0,1,14,0c.33,0,.82.26.91.52C19.87,3,20.69,4.61,20.29,6.68ZM19.76,6c-.22-1.12-.33-2-.59-2.89a1.23,1.23,0,0,0-.8-.79c-2.22-.32-4.45-.56-6.74-.84v3.3Zm-9-4.49c-2.18.26-4.22.48-6.26.75-.34,0-.83.23-.94.48-.4,1-.68,2-1.09,3.3l8.29-1.25Z"
            />
            <path className="cls-2" d="M6.14,14.72H16.5v.21H6.16Z" />
            <path className="cls-3" d="M6.92,17.52h8.56v.2H6.92Z" />
            <ellipse
              className="cls-4"
              cx="11.32"
              cy="16.28"
              rx="6.82"
              ry="0.11"
            />
            <path className="cls-5" d="M7.38,19h7.69v.17H7.34Z" />
            <path
              className="cls-6"
              d="M21.25,27.21a6.79,6.79,0,0,1-.36-1.95c-.06-1.08,0-2.17,0-3.3H1.78a19.37,19.37,0,0,1-.05,3.51A9.83,9.83,0,0,1,.45,28.74L22,28.81A5,5,0,0,1,21.25,27.21Zm-17.9-1c.35-.93.67-1.87,1.09-2.77.1-.22.56-.37.86-.37,4,0,8,0,12.09,0,.27,1.14.52,2.15.76,3.17A25.55,25.55,0,0,1,3.35,26.2Z"
            />
            <path
              className="cls-7"
              d="M20.83,8.62c0-.34-.53-.83-.9-1a21.22,21.22,0,0,0-3.05-.75c-2.53-.46-5-1.49-7.67-.84-2.07.51-4.15,1-6.23,1.45A1.35,1.35,0,0,0,1.76,9.1c0,3.45,0,6.9,0,10.36v1.9H20.87C20.87,17,20.89,12.82,20.83,8.62ZM11.2,6.72A1.37,1.37,0,1,1,9.83,8.09,1.36,1.36,0,0,1,11.2,6.72Zm1,6.06a.9.9,0,1,1-.9-.9A.89.89,0,0,1,12.22,12.78Zm-7.8,8A.84.84,0,1,1,5.26,20,.84.84,0,0,1,4.42,20.79Zm2.92-1.67,0-.17h7.69v.17Zm8.14-1.4H6.92v-.2h8.56Zm.67-1.36H6.5v-.15h9.65Zm-10-1.43,0-.21H16.5v.21Zm12.33,5.79a.84.84,0,1,1,.84-.84A.85.85,0,0,1,18.49,20.72Z"
            />
          </g>
        </g>
      </g>
    </PlaceableSVG>
  )
}

export default Train
