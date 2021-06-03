import React from 'react'

import { viewBox } from '../PlaceableSVGHelper'
import PlaceableSVG from '../PlaceableSVG'
import PlaceableSVGProps from '../../../../@types/PlaceableSVGProps'

import './CargoContainers.scss'

const CargoContainers = (props: PlaceableSVGProps): JSX.Element => {
  return (
    <PlaceableSVG
      extraClasses={'CargoContainers'}
      viewBoxObj={viewBox(0, 0, 85.39, 37.76)}
      defaultScale={0.08}
      {...props}
    >
      <defs>
        <linearGradient
          id="linear-gradient"
          x1="30.04"
          y1="28.22"
          x2="42.95"
          y2="28.22"
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
          x1="30.19"
          y1="8.95"
          x2="43.1"
          y2="8.95"
          xlinkHref="#linear-gradient"
        />
        <linearGradient
          id="linear-gradient-3"
          x1="0.25"
          y1="28.81"
          x2="13.15"
          y2="28.81"
          xlinkHref="#linear-gradient"
        />
        <linearGradient
          id="linear-gradient-4"
          x1="14.84"
          y1="28.81"
          x2="27.74"
          y2="28.81"
          xlinkHref="#linear-gradient"
        />
        <linearGradient
          id="linear-gradient-5"
          x1="14.84"
          y1="9.54"
          x2="27.74"
          y2="9.54"
          xlinkHref="#linear-gradient"
        />
        <linearGradient
          id="linear-gradient-11"
          x1="72.23"
          y1="9.54"
          x2="85.14"
          y2="9.54"
          xlinkHref="#linear-gradient"
        />
        <linearGradient
          id="linear-gradient-12"
          x1="56.25"
          y1="28.81"
          x2="69.15"
          y2="28.81"
          xlinkHref="#linear-gradient"
        />
        <linearGradient
          id="linear-gradient-13"
          x1="56.25"
          y1="9.54"
          x2="69.15"
          y2="9.54"
          xlinkHref="#linear-gradient"
        />
      </defs>
      <g id="Layer_2" data-name="Layer 2">
        <g id="EXISTING_OBJECTS">
          <g id="cargo_containers" data-name="cargo containers">
            <rect
              className="cls-1"
              x="30.04"
              y="19.52"
              width="12.9"
              height="17.41"
            />
            <rect
              className="cls-2"
              x="30.19"
              y="0.25"
              width="12.9"
              height="17.41"
            />
            <rect
              className="cls-3"
              x="0.25"
              y="20.1"
              width="12.9"
              height="17.41"
            />
            <rect
              className="cls-4"
              x="14.84"
              y="20.1"
              width="12.9"
              height="17.41"
            />
            <rect
              className="cls-5"
              x="14.84"
              y="0.84"
              width="12.9"
              height="17.41"
            />
            <rect
              className="cls-1"
              x="30.04"
              y="19.52"
              width="12.9"
              height="17.41"
            />
            <rect
              className="cls-2"
              x="30.19"
              y="0.25"
              width="12.9"
              height="17.41"
            />
            <rect
              className="cls-3"
              x="0.25"
              y="20.1"
              width="12.9"
              height="17.41"
            />
            <rect
              className="cls-4"
              x="14.84"
              y="20.1"
              width="12.9"
              height="17.41"
            />
            <rect
              className="cls-5"
              x="14.84"
              y="0.84"
              width="12.9"
              height="17.41"
            />
            <rect
              className="cls-6"
              x="72.23"
              y="0.84"
              width="12.9"
              height="17.41"
            />
            <rect
              className="cls-7"
              x="56.25"
              y="20.1"
              width="12.9"
              height="17.41"
            />
            <rect
              className="cls-8"
              x="56.25"
              y="0.84"
              width="12.9"
              height="17.41"
            />
            <rect
              className="cls-6"
              x="72.23"
              y="0.84"
              width="12.9"
              height="17.41"
            />
            <rect
              className="cls-7"
              x="56.25"
              y="20.1"
              width="12.9"
              height="17.41"
            />
            <rect
              className="cls-8"
              x="56.25"
              y="0.84"
              width="12.9"
              height="17.41"
            />
          </g>
        </g>
      </g>
    </PlaceableSVG>
  )
}

export default CargoContainers
