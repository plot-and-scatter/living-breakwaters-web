import React from 'react'

import { viewBox } from '../PlaceableSVGHelper'
import PlaceableSVG from '../PlaceableSVG'
import PlaceableSVGProps from '../../../../@types/PlaceableSVGProps'

import './PowerPlant.scss'

const PowerPlant = (props: PlaceableSVGProps): JSX.Element => {
  return (
    <PlaceableSVG
      viewBoxObj={viewBox(0, 0, 111.52, 124.36)}
      defaultScale={0.3}
      extraClasses="PowerPlant"
      {...props}
    >
      <defs>
        <linearGradient
          id="POWERPLANT_GRADIENT_BLUE"
          x1="74.6"
          y1="78.51"
          x2="75.79"
          y2="78.51"
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
          id="POWERPLANT_GRADIENT_BLUE-2"
          x1="72.11"
          y1="80.45"
          x2="78.28"
          y2="80.45"
          xlinkHref="#POWERPLANT_GRADIENT_BLUE"
        />
        <linearGradient
          id="POWERPLANT_GRADIENT_BLUE-3"
          x1="73.71"
          y1="103.02"
          x2="77.08"
          y2="103.02"
          xlinkHref="#POWERPLANT_GRADIENT_BLUE"
        />
        <linearGradient
          id="POWERPLANT_GRADIENT_BLUE-4"
          x1="60.61"
          y1="108.96"
          x2="111.27"
          y2="108.96"
          xlinkHref="#POWERPLANT_GRADIENT_BLUE"
        />
        <linearGradient
          id="POWERPLANT_GRADIENT_BLUE-5"
          x1="72.11"
          y1="65.38"
          x2="78.28"
          y2="65.38"
          xlinkHref="#POWERPLANT_GRADIENT_BLUE"
        />
        <linearGradient
          id="POWERPLANT_GRADIENT_BLUE-6"
          x1="74.6"
          y1="63.45"
          x2="75.79"
          y2="63.45"
          xlinkHref="#POWERPLANT_GRADIENT_BLUE"
        />
        <linearGradient
          id="POWERPLANT_GRADIENT_BLUE-7"
          x1="74.6"
          y1="56.06"
          x2="91.59"
          y2="56.06"
          xlinkHref="#POWERPLANT_GRADIENT_BLUE"
        />
        <linearGradient
          id="POWERPLANT_GRADIENT_BLUE-8"
          x1="90.41"
          y1="54.79"
          x2="91.59"
          y2="54.79"
          xlinkHref="#POWERPLANT_GRADIENT_BLUE"
        />
        <linearGradient
          id="POWERPLANT_GRADIENT_BLUE-9"
          x1="74.6"
          y1="54.79"
          x2="75.79"
          y2="54.79"
          xlinkHref="#POWERPLANT_GRADIENT_BLUE"
        />
        <linearGradient
          id="POWERPLANT_GRADIENT_BLUE-10"
          x1="90.53"
          y1="63.45"
          x2="91.72"
          y2="63.45"
          xlinkHref="#POWERPLANT_GRADIENT_BLUE"
        />
        <linearGradient
          id="POWERPLANT_GRADIENT_BLUE-11"
          x1="88.04"
          y1="65.38"
          x2="94.21"
          y2="65.38"
          xlinkHref="#POWERPLANT_GRADIENT_BLUE"
        />
        <linearGradient
          id="POWERPLANT_GRADIENT_BLUE-12"
          x1="75.95"
          y1="86.66"
          x2="80.61"
          y2="86.66"
          xlinkHref="#POWERPLANT_GRADIENT_BLUE"
        />
        <linearGradient
          id="POWERPLANT_GRADIENT_BLUE-13"
          x1="69.77"
          y1="86.66"
          x2="74.44"
          y2="86.66"
          xlinkHref="#POWERPLANT_GRADIENT_BLUE"
        />
        <linearGradient
          id="POWERPLANT_GRADIENT_BLUE-14"
          x1="69.77"
          y1="71.59"
          x2="74.44"
          y2="71.59"
          xlinkHref="#POWERPLANT_GRADIENT_BLUE"
        />
        <linearGradient
          id="POWERPLANT_GRADIENT_BLUE-15"
          x1="75.95"
          y1="71.59"
          x2="80.61"
          y2="71.59"
          xlinkHref="#POWERPLANT_GRADIENT_BLUE"
        />
        <linearGradient
          id="POWERPLANT_GRADIENT_BLUE-16"
          x1="91.88"
          y1="71.59"
          x2="96.54"
          y2="71.59"
          xlinkHref="#POWERPLANT_GRADIENT_BLUE"
        />
        <linearGradient
          id="POWERPLANT_GRADIENT_BLUE-17"
          x1="85.71"
          y1="71.59"
          x2="90.37"
          y2="71.59"
          xlinkHref="#POWERPLANT_GRADIENT_BLUE"
        />
        <linearGradient
          id="POWERPLANT_GRADIENT_BLUE-18"
          x1="85.71"
          y1="86.66"
          x2="90.37"
          y2="86.66"
          xlinkHref="#POWERPLANT_GRADIENT_BLUE"
        />
        <linearGradient
          id="POWERPLANT_GRADIENT_BLUE-19"
          x1="91.88"
          y1="86.66"
          x2="96.54"
          y2="86.66"
          xlinkHref="#POWERPLANT_GRADIENT_BLUE"
        />
        <linearGradient
          id="POWERPLANT_GRADIENT_BLUE-20"
          x1="88.04"
          y1="80.45"
          x2="94.21"
          y2="80.45"
          xlinkHref="#POWERPLANT_GRADIENT_BLUE"
        />
        <linearGradient
          id="POWERPLANT_GRADIENT_BLUE-21"
          x1="90.53"
          y1="78.51"
          x2="91.72"
          y2="78.51"
          xlinkHref="#POWERPLANT_GRADIENT_BLUE"
        />
        <linearGradient
          id="POWERPLANT_GRADIENT_BLUE-22"
          x1="89.33"
          y1="61.63"
          x2="92.86"
          y2="61.63"
          xlinkHref="#POWERPLANT_GRADIENT_BLUE"
        />
        <linearGradient
          id="POWERPLANT_GRADIENT_BLUE-23"
          x1="89.4"
          y1="60.45"
          x2="92.93"
          y2="60.45"
          xlinkHref="#POWERPLANT_GRADIENT_BLUE"
        />
        <linearGradient
          id="POWERPLANT_GRADIENT_BLUE-24"
          x1="89.4"
          y1="59.27"
          x2="92.93"
          y2="59.27"
          xlinkHref="#POWERPLANT_GRADIENT_BLUE"
        />
        <linearGradient
          id="POWERPLANT_GRADIENT_BLUE-25"
          x1="89.47"
          y1="58.09"
          x2="93"
          y2="58.09"
          xlinkHref="#POWERPLANT_GRADIENT_BLUE"
        />
        <linearGradient
          id="POWERPLANT_GRADIENT_BLUE-26"
          x1="89.4"
          y1="56.91"
          x2="92.93"
          y2="56.91"
          xlinkHref="#POWERPLANT_GRADIENT_BLUE"
        />
        <linearGradient
          id="POWERPLANT_GRADIENT_BLUE-27"
          x1="73.47"
          y1="56.91"
          x2="77"
          y2="56.91"
          xlinkHref="#POWERPLANT_GRADIENT_BLUE"
        />
        <linearGradient
          id="POWERPLANT_GRADIENT_BLUE-28"
          x1="73.54"
          y1="58.09"
          x2="77.07"
          y2="58.09"
          xlinkHref="#POWERPLANT_GRADIENT_BLUE"
        />
        <linearGradient
          id="POWERPLANT_GRADIENT_BLUE-29"
          x1="73.47"
          y1="59.27"
          x2="77"
          y2="59.27"
          xlinkHref="#POWERPLANT_GRADIENT_BLUE"
        />
        <linearGradient
          id="POWERPLANT_GRADIENT_BLUE-30"
          x1="73.47"
          y1="60.45"
          x2="77"
          y2="60.45"
          xlinkHref="#POWERPLANT_GRADIENT_BLUE"
        />
        <linearGradient
          id="POWERPLANT_GRADIENT_BLUE-31"
          x1="73.4"
          y1="61.63"
          x2="76.93"
          y2="61.63"
          xlinkHref="#POWERPLANT_GRADIENT_BLUE"
        />
        <linearGradient
          id="POWERPLANT_GRADIENT_BLUE-32"
          x1="0.25"
          y1="62.17"
          x2="52.19"
          y2="62.17"
          xlinkHref="#POWERPLANT_GRADIENT_BLUE"
        />
        <linearGradient
          id="POWERPLANT_GRADIENT_BLUE-33"
          x1="22.78"
          y1="74.6"
          x2="30.49"
          y2="74.6"
          xlinkHref="#POWERPLANT_GRADIENT_BLUE"
        />
        <linearGradient
          id="POWERPLANT_GRADIENT_BLUE-34"
          x1="21.23"
          y1="28.56"
          x2="23.39"
          y2="28.56"
          xlinkHref="#POWERPLANT_GRADIENT_BLUE"
        />
        <linearGradient
          id="POWERPLANT_GRADIENT_BLUE-35"
          x1="30.22"
          y1="28.41"
          x2="32.23"
          y2="28.41"
          xlinkHref="#POWERPLANT_GRADIENT_BLUE"
        />
      </defs>
      <g id="Layer_2" data-name="Layer 2">
        <g id="EXISTING_OBJECTS">
          <g id="power_line" data-name="power line">
            <rect
              className="cls-1"
              x="74.6"
              y="77.4"
              width="1.18"
              height="2.22"
            />
            <polyline
              className="cls-2"
              points="72.11 81.28 72.11 79.63 78.28 79.63 78.28 81.28"
            />
            <polygon
              className="cls-3"
              points="74.06 99.1 76.36 99.1 75.5 102.48 77.08 102.48 75 106.93 75.28 104.13 73.71 104.13 74.06 99.1"
            />
            <path
              className="cls-4"
              d="M60.61,93.83v30.26l50.66-4V93.83ZM75.32,108.6c-4.22,0-6-1.75-6-6s1.74-6,6-6,6,1.75,6,6S79.54,108.6,75.32,108.6Z"
            />
            <polyline
              className="cls-5"
              points="72.11 66.21 72.11 64.56 78.28 64.56 78.28 66.21"
            />
            <rect
              className="cls-6"
              x="74.6"
              y="62.33"
              width="1.18"
              height="2.23"
            />
            <rect
              className="cls-7"
              x="74.6"
              y="55.9"
              width="16.99"
              height="0.31"
            />
            <rect
              className="cls-8"
              x="90.41"
              y="53.68"
              width="1.18"
              height="2.22"
            />
            <rect
              className="cls-9"
              x="74.6"
              y="53.68"
              width="1.18"
              height="2.22"
            />
            <rect
              className="cls-10"
              x="90.53"
              y="62.33"
              width="1.18"
              height="2.23"
            />
            <polyline
              className="cls-11"
              points="88.04 66.21 88.04 64.56 94.21 64.56 94.21 66.21"
            />
            <rect
              className="cls-12"
              x="75.95"
              y="81.28"
              width="4.66"
              height="10.76"
            />
            <rect
              className="cls-13"
              x="69.77"
              y="81.28"
              width="4.66"
              height="10.76"
            />
            <rect
              className="cls-14"
              x="69.77"
              y="66.21"
              width="4.66"
              height="10.76"
            />
            <rect
              className="cls-15"
              x="75.95"
              y="66.21"
              width="4.66"
              height="10.76"
            />
            <rect
              className="cls-16"
              x="91.88"
              y="66.21"
              width="4.66"
              height="10.76"
            />
            <rect
              className="cls-17"
              x="85.71"
              y="66.21"
              width="4.66"
              height="10.76"
            />
            <rect
              className="cls-18"
              x="85.71"
              y="81.28"
              width="4.66"
              height="10.76"
            />
            <rect
              className="cls-19"
              x="91.88"
              y="81.28"
              width="4.66"
              height="10.76"
            />
            <polyline
              className="cls-20"
              points="88.04 81.28 88.04 79.63 94.21 79.63 94.21 81.28"
            />
            <rect
              className="cls-21"
              x="90.53"
              y="77.4"
              width="1.18"
              height="2.22"
            />
            <path
              className="cls-22"
              d="M92.86,62.12a.88.88,0,0,0-.68-1h-2c-.67,0-.94.3-.86,1Z"
            />
            <path
              className="cls-23"
              d="M92.93,60.93a.88.88,0,0,0-.68-1h-2c-.67,0-.94.3-.87,1Z"
            />
            <path
              className="cls-24"
              d="M92.93,59.75a.87.87,0,0,0-.68-1h-2c-.67,0-.94.3-.87,1Z"
            />
            <path
              className="cls-25"
              d="M93,58.57a.87.87,0,0,0-.68-1h-2c-.66,0-.93.3-.86,1Z"
            />
            <path
              className="cls-26"
              d="M92.93,57.39a.87.87,0,0,0-.68-1h-2c-.67,0-.94.3-.87,1Z"
            />
            <path
              className="cls-27"
              d="M77,57.39a.87.87,0,0,0-.68-1h-2c-.67,0-.93.3-.86,1Z"
            />
            <path
              className="cls-28"
              d="M77.07,58.57a.87.87,0,0,0-.68-1h-2c-.67,0-.93.3-.86,1Z"
            />
            <path
              className="cls-29"
              d="M77,59.75a.87.87,0,0,0-.68-1h-2c-.67,0-.93.3-.86,1Z"
            />
            <path
              className="cls-30"
              d="M77,60.93a.88.88,0,0,0-.68-1h-2c-.67,0-.93.3-.86,1Z"
            />
            <path
              className="cls-31"
              d="M76.93,62.12a.88.88,0,0,0-.68-1h-2c-.66,0-.93.3-.86,1Z"
            />
            <path
              className="cls-32 DoNotFill"
              d="M45.55,56.43c7.15,9.36,28,3.51,45.57,5.9"
            />
            <path
              className="cls-32 DoNotFill"
              d="M43.56,32.74C60.61,52.64,64,56,91.43,55.9"
            />
            <path
              className="cls-32 DoNotFill"
              d="M11.06,32.74c14.72,30.86,41.56,23,63.8,23.16"
            />
            <path
              className="cls-32 DoNotFill"
              d="M9.07,57.29c15.91,4.15,47.27,6.06,66.12,5"
            />
            <path
              className="cls-33"
              d="M27.2.25a4.88,4.88,0,0,1,.44,1.67,11.05,11.05,0,0,0,2.65,8.8,46.6,46.6,0,0,1,3.22,4.83c.31.49.4,1.12.68,1.63a2.66,2.66,0,0,0,.89,1c4.12,2.37,8.26,4.69,12.4,7a3.12,3.12,0,0,1,.91.57,1.25,1.25,0,0,1,.29.95,1.12,1.12,0,0,1-.78.59,12.39,12.39,0,0,1-1.84,0v1.46c.44,0,.87,0,1.3,0,.72,0,1.29.33,1.16,1-.08.41-.63.81-1.06,1.06a6,6,0,0,1-1.44.44,12.33,12.33,0,0,0,1.41.48c.66.13,1.27.41,1.08,1.13-.1.4-.68.75-1.12,1A4.34,4.34,0,0,1,46,34c0,.7,0,1.37,0,2,.06,1-.3,1.52-1.45,1.52-3.27,0-3.27,0-3.61-3.52a3.67,3.67,0,0,1-1.25-.14c-.41-.2-1-.61-1-.95s.56-.72.88-1.07c.05,0,.16,0,.23-.05L41,31.4a6.81,6.81,0,0,1-1.14-.47,12.73,12.73,0,0,1-1.24-1.09,7.11,7.11,0,0,1,1.14-1c.28-.15.71,0,1.2,0L41,27.43H34.18v3c0,2.5,0,5,0,7.5a1.77,1.77,0,0,0,1.09,1.87c5.09,2.68,10.14,5.45,15.21,8.18a3.69,3.69,0,0,1,.93.55c.24.27.52.71.45,1a1.14,1.14,0,0,1-.85.65c-.95.08-1.92,0-3,0v1.62a3.78,3.78,0,0,1,1.31,0,6.09,6.09,0,0,1,1.17.95,7.21,7.21,0,0,1-1.15,1.13A5.86,5.86,0,0,1,48,54.4a6.85,6.85,0,0,1,1.43.47,7.14,7.14,0,0,1,1.11,1,5,5,0,0,1-1.1,1,4.5,4.5,0,0,1-1.48.13c0,.79,0,1.54,0,2.29s-.37,1.25-1.26,1.2-1.69,0-2.54,0-1.18-.36-1.16-1.16,0-1.51,0-2.32a4.14,4.14,0,0,1-1.41-.16,1.75,1.75,0,0,1-.91-1c0-.28.53-.66.85-1,.07-.07.24,0,.34-.07.38-.16.74-.34,1.11-.51A6.53,6.53,0,0,0,41.82,54c-.73-.09-1.36-.43-1.19-1.17.09-.4.78-.71,1.26-1a2.66,2.66,0,0,1,1,0V50.29h-8.7v1.26c0,2.66.12,5.33,0,8a63.88,63.88,0,0,0,1.81,17c1.68,7.79,3.19,15.61,4.78,23.41a10.19,10.19,0,0,0,.62,1.94c2.51,5.8,5.07,11.58,7.56,17.38.62,1.44,1,3.06,3.27,2.16v2.66h-13v-2.45H42c-.27-.47-.42-.78-.61-1.06-4.06-5.87-8.13-11.72-12.16-17.6a2.12,2.12,0,0,0-1.67-.91c-2.72-.43-4.34.69-5.82,3-3.32,5.14-7,10.07-10.48,15.09-.28.38-.54.78-.92,1.36l2.93.13v2.47H.25v-2.33c.11-.09.15-.14.17-.13,2,.4,2.59-.89,3.24-2.44,2.46-5.86,5.17-11.62,7.53-17.52a58.39,58.39,0,0,0,2.13-8.15q3-12.85,6-25.73a3,3,0,0,0,.14-.71c0-5.56,0-11.12,0-16.78H10.81v1.59a5.35,5.35,0,0,1,1.52.14c.41.16,1,.67,1,.91a2,2,0,0,1-1,1.12,6.64,6.64,0,0,1-1.57.46,7.14,7.14,0,0,1,1.6.52,5.51,5.51,0,0,1,1,1.13,5.48,5.48,0,0,1-1.19.93,4.51,4.51,0,0,1-1.45,0c0,.84,0,1.6,0,2.35.06,1-.38,1.33-1.3,1.26-1.11-.08-2.53.22-3.23-.36s-.36-2-.51-3.2a3.11,3.11,0,0,1-1.17-.09c-.41-.18-1-.58-1-.92s.5-.75.81-1.12c0,0,.15,0,.23,0l1.25-.48a4.78,4.78,0,0,1-1.22-.44A8.61,8.61,0,0,1,3.49,53a7,7,0,0,1,1.17-1,2.83,2.83,0,0,1,1.13-.1v-1.7a23.33,23.33,0,0,1-2.78,0,5,5,0,0,1-1.41-.66c.3-.42.51-1,.92-1.24q7.82-4.35,15.68-8.59a2,2,0,0,0,1.28-2.12c-.08-3.34,0-6.69,0-10.12h-6v1.37a4.69,4.69,0,0,1,1.46,0c.41.15,1.07.64,1,.87A2.19,2.19,0,0,1,15,30.89c-.25.17-.72,0-1.07.08s-.37.28-.55.42c.19.14.37.36.59.41s.8-.07,1.06.1.91.7.9,1.05-.57.77-1,.95a5.49,5.49,0,0,1-1.6.11c0,.78,0,1.53,0,2.28s-.28,1.29-1.19,1.25-1.69,0-2.54,0-1.21-.4-1.19-1.24,0-1.44,0-2.25a3.58,3.58,0,0,1-1.26-.13,6.24,6.24,0,0,1-1.12-1,9,9,0,0,1,1.09-1,6.7,6.7,0,0,1,1.26-.53,4.36,4.36,0,0,1-1.23-.42,7.57,7.57,0,0,1-1.11-1.15,6.83,6.83,0,0,1,1.18-.92,3.2,3.2,0,0,1,1.11-.09V27.36a15.46,15.46,0,0,1-2.26,0,5.22,5.22,0,0,1-1.41-.64c.3-.42.51-1,.92-1.25,4.2-2.46,8.44-4.87,12.67-7.29.65-.36,1.23-.68,1.19-1.6,0-.34.33-.72.55-1.05,1.75-2.66,3.53-5.29,5.24-8a4.16,4.16,0,0,0,.56-1.9c.09-1.24,0-2.5,0-3.74A10.21,10.21,0,0,1,26.23.25ZM47.41,120.68c0-.13.07-.18.06-.2q-3.86-8.91-7.73-17.8c-.11-.25-.43-.56-.66-.56-2.68,0-5.36,0-8.23,0,.34.53.53.86.76,1.18l10.24,14.8c1.95,2.82,1.95,2.82,5.42,2.64A.63.63,0,0,0,47.41,120.68ZM5,120.75a13.1,13.1,0,0,1,1.89,0A2.64,2.64,0,0,0,9.7,119.3c3.67-5.35,7.42-10.64,11.14-16,.24-.34.46-.71.81-1.25-2.68,0-5.17,0-7.65,0a1.28,1.28,0,0,0-1.4,1c-2.37,5.51-4.78,11-7.18,16.48C5.27,119.87,5.15,120.25,5,120.75Zm11.9-30.84c3.06,1.44,5.92,2.81,8.8,4.13a1.34,1.34,0,0,0,1,0c3-1.34,6.06-2.72,9.28-4.17-3.13-1.34-6.08-2.61-9-3.86a1,1,0,0,0-.69,0ZM32,31.81c-1.28-1.46-2.39-2.78-3.57-4a2.89,2.89,0,0,0-3-.09c-1.3,1.36-2.52,2.8-3.86,4.3l5.15,6.59Zm.69-14.19c-1.95-3.2-3.93-6-5.9-9-2,3-4,5.86-5.87,9.05ZM34.27,81.1a36.17,36.17,0,0,1-4.37-2.2,5.25,5.25,0,0,0-6.56,0,40.21,40.21,0,0,1-4.22,2.17c2.55,1.09,4.82,2.08,7.1,3a1.05,1.05,0,0,0,.7,0C29.28,83.2,31.63,82.21,34.27,81.1ZM19.4,41,6.12,48.33H19.4ZM47,48.36l.06-.18L34.24,41.25v7.11ZM33.28,72.08l-.8-3.78c-3.65,0-7.19,0-10.73,0a1,1,0,0,0-.8.47c-.31,1.06-.52,2.15-.77,3.29ZM37.09,91,27.9,95.12,39,100.34ZM21.33,66.49h11l-5.52-7.92ZM32.16,48.43l.16-.34L26.7,40.92c-1.77,2.26-3.43,4.37-5.08,6.5-.54.7-.26,1,.55,1h10Zm-7.7,46.65L15.74,91l-2.07,9Zm10.3,5.1,0-.21c-2.69-1.28-5.38-2.56-8.08-3.81a1.29,1.29,0,0,0-.9-.08C22.89,97.37,20,98.69,17.06,100l.05.18ZM21.27,50.56V64c1.6-2.3,3-4.34,4.42-6.38a.7.7,0,0,0,0-.64C24.32,54.93,22.87,52.87,21.27,50.56Zm-1.88-31L9.07,25.52H19.39Zm14.89.22v5.71H44.4Zm-2,30.93L27.71,57.3l4.56,6.56Zm0-5.09V33.85l-4.61,5.89ZM27,24.4l4.62-5.19H21.56ZM21.26,34V45.52l4.54-5.78Zm-5,54.6,8.4-3.49-6.89-2.94ZM26.84,56l3.94-5.72h-7.9C24.24,52.29,25.49,54.1,26.84,56Zm1.6,29.06,8.17,3.47-1.29-6.33Zm5.2-11.24-5.37,2.68,6.55,3.21Zm-13.92.07-1.37,5.94L25,76.54Zm1.55-53.08v4.61H25.4m6.86-4.36-4.59,4.39h4.59ZM22.82,73.61l0,.21c1.11.55,2.22,1.13,3.34,1.65a1.2,1.2,0,0,0,.89.06c1.17-.54,2.32-1.14,3.48-1.72l-.07-.2ZM4.26,55.79v.44h8.34v-.45C9.82,55.72,7,55.7,4.26,55.79Zm37.16-3.15c1,.79,7.61.71,8.38,0Zm-2.21-23c1.15.73,7.81.69,8.7,0Zm-24,.36v-.32H6.89V30ZM12.6,53.18v-.3H4.26v.3Zm28.82,2.58v.3h8.25v-.3ZM15.21,33.1v-.48c-2.77,0-5.55,0-8.31,0v.46Zm24.29-.36V33h8.24v-.27ZM21.23,29.68l2.16-2.24H21.23Zm11-.31V27.46h-2Z"
            />
            <path
              className="cls-34"
              d="M30.42,73.61l.07.2c-1.16.58-2.31,1.18-3.48,1.72a1.2,1.2,0,0,1-.89-.06c-1.12-.52-2.23-1.1-3.34-1.65l0-.21"
            />
            <path className="cls-35" d="M23.39,27.44l-2.16,2.24V27.44" />
            <path className="cls-36" d="M32.23,29.37l-2-1.91h2Z" />
          </g>
        </g>
      </g>
    </PlaceableSVG>
  )
}

export default PowerPlant
