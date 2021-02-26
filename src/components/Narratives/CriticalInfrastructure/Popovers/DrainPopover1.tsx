import React from 'react'
import PlaceableSVG from '../../PlaceableSVGs/PlaceableSVG'
import { viewBox } from '../../PlaceableSVGs/PlaceableSVGHelper'

import './DrainPopover1.scss'

interface Props {}

const DrainPopover1 = (props: Props): JSX.Element => {
  return (
    <PlaceableSVG
      viewBoxObj={viewBox(0, 0, 730.18, 246.66)}
      defaultScale={0.25}
      {...props}
    >
      <defs></defs>
      <g id="Layer_2" data-name="Layer 2">
        <g id="zooms">
          <rect
            x=".71"
            y=".5"
            width="728.97"
            height="245.34"
            rx="12"
            strokeMiterlimit="10"
            stroke="#231f20"
            fill="#fff"
          />
          <g opacity=".05">
            <path
              className="cls-3"
              d="M677.19 83.61c1.16-.93 1.93-.82 1.76-1.76s-1.26-1-1.76-.82c-1.12.37-1.7.16-1.48 1.37s.29 2.14 1.48 1.21z"
            />
            <path
              d="M444.47 112.87h17.89l75.45-6v-18.5l120 3.26c1.65-5 3.19-7.45 5.42-9.86 1.86-2 2.95-5.81 5.8-6 2.4-.12.19 2.29-1.16 3.33-4.56 3.5 2 4.44 3.5 2.92s2.43-7.3 4.24-8.83 8.77-7.85 8.77-4.35c0 1.65-1 1.6-2.5 1.82s-1.6 1-1.17 1.62c.92 1.41 5.22 1.88 6.89.63s3.79-4 4.9-1.75-.43 4.84-3.79 3.38c-1.74-.75-4.31.07-7.65 1.46s-4.75 3.17-1.83 3.68 2.83-.21 7.78-.7c3-.29 5.63.4 4.1 1.93s-4.4 0-8.12.35c-5.05.51-2.51.78-4.32 3.11s-1 2.7.9 2.25c2.58-.61-1.93 2.4-7 4.42s7.16 1 7.16 1v-10.3c3-.11 8.5.17 10.47-.07.81-.1 4.93 1.62 6.64 1.74 4.46.31 14-1.81 16.2-1.33s14.57-2.26 15.86-1.21c0 0 0 8 .06 8l.8-78.5c0-5.87-5.12-9.78-10.4-9.78H9.6C0 1.51 0 9.64 0 12.82v155.09h.6s2.38-7 13.34-16.44c13.45-11.58 49.46-12.69 45.5-11.7s-10.15 9.45-10 17.77 20.45 14.61 36.56 4.73c5.82-3.58 21.32-15.51 31.45-19.67s36.14-3.18 36.14-3.18-11.76 7.48-5.61 21.65a3.13 3.13 0 001.76 1.76c1.71.67 2.22-4.87 5.43-6.43 1.2-.58 4.41-.46 5.78-1.28s3.61 3.65 5.08 2.65c1.1-.75 2.47-1.05 3.63-1.89.76-.55-3.16-7.08-2.38-7.66 1.44-1.07 1.56-3.66 3.05-4.81 3.51-2.72 13.34-7 18-9.47 1.57-.84 5.65 9.15 6.82 8.21.29-.23 1.72-.57 1.84-1.55.2-1.52-.93-3.86-.5-4.21.8-.63-1.64-5.29-.86-5.9 1-.75 3.56-3.38 6.26-2.73 3 .73 3.57 2.79 6.1 3.21 1.74.28 4.34 5.86 4.69 5.12 1.33-2.8 2-3 2.88-4.72 1.43-2.77-.65-6.34-.65-8l5.83-2.34h15.47l1.24 6.6h1.09v-10.45h108l-.06-7.82s37.82 1.9 38 .19-2-2.14-3.9-2.79-2.43-2.15-2-3 1.93.57 3.32 1.34 3 5 6.36 5.79 6.06-1.75 6.8-3a22.32 22.32 0 002-3.25c.88-1.89 1.84-.26 1.91.39s-2.41 1.63-3.38 2.8-.67 2.58-.84 3.43 2-1.14 2.31-2 1.65-.65 2 0-.66 1.17-1.37 1.7 4.37.32 5.08.06a8.16 8.16 0 014.23.11c.94.48 36.29 1.87 37.47 1.74zm-72.81-13.82c0-.29.84.16 1.46.56a11 11 0 011.73 2.48c.36.54.46 1.06.06.89a26.56 26.56 0 01-2.28-2.17c-.93-.81-1.02-1.44-.97-1.76zm-6.46 6.27c-.07-.42.33-.74.65-.92s1 1 1.28 1.24.46.82.28 1-.83-.18-1.38-.23-.75-.64-.83-1.09zm11.26 4.23c-1.24-1-1.11-.57-2.88-1.75s-.89-1.64 0-1.64c0 0 1.26.83 3.78 2.23 2.01 1.12-.9 1.16-.9 1.16zm20.25-7.55c-2 1.76-1.92.17-1.14-1.55 0 0 2.53-2 3.1-1.6s-.01 1.41-1.96 3.15zm9-1.9c.11 1.15-.11 1.14-3.57 2.46s3.49-3.56 3.6-2.43zm-1.9 6.71a26.57 26.57 0 01-2.34 2.35c-.43.19-.35-.37 0-1s1.08-2.26 1.73-2.69 1.48-.93 1.54-.61.05 1.05-.9 1.98zm1.75 4.39c-1.43 0 2.15-1.67 2.15-1s-.71 1.08-2.12 1.03zm254.3-30.74c-.47-.17.92-10.19 2.73-9.92 2.41.37-2.26 10.08-2.73 9.92zm13-9.41c-.75-.09.73-5.63.73-5.63 3.21-1.27.05 5.72-.69 5.63zm10.39-8.83a24.45 24.45 0 01-2.25 2.36c-.42.19-.34-.38 0-1s1.08-2.25 1.73-2.69 1.48-.93 1.54-.61-.02 1.02-.98 1.94zm4.47 5.91c-2.91-.41 6.45-8 7.29-6.56s1.79 3.3.15 4.2-5.29 2.65-7.4 2.36zm8.79 14.58c-2.59.52-1.74-.83-.19-1.92 0 0 3.2-.44 3.48.21s-.67 1.19-3.25 1.71z"
              fill="#010101"
            />
            <path
              className="cls-3"
              d="M667.53 84.6c-1.07-.78-3.3.88-3.63 1.1s-1.15 1-.33 1.54a2.31 2.31 0 002.58 0c.66-.44 2.2-2.04 1.38-2.64zM679.45 74.38c.76-.11 1.48-.6 1.12-1s-1.12-.22-1.12-.22c-.28.62-.77 1.33 0 1.22zM672.69 95.4c-1.1-.26-2.38-.26-5.44 0l-.68.08z"
            />
          </g>
          <path
            className="cls-5"
            d="M641.12 202.15v-18.43s1.34 4 3.66 3.86 4.39-2 6.72-2.49a9.29 9.29 0 015 .67s-2.46 2.72 1.66 2.54 5.19-2.46 8.8-3.3 5 0 5 0-2.34 1.89.85 2.62c2.7.61 3.69 1.16 6.36-.69s1-2.14 1-2.14a17.88 17.88 0 018.41 1.78c1.14.57.5 15.58.5 15.58z"
          />
          <path
            className="cls-6"
            d="M404.65 68.57a17 17 0 01-.52-2.69 22.08 22.08 0 00-1-6.41 33.43 33.43 0 00-1.65-3.61c-1-2-1.93-3.92-2.92-5.86a3.68 3.68 0 00-2.69-2.12 6 6 0 01-1.37-.51c-.13 0-.34-.26-.31-.32.2-.53-.24-1.22.4-1.63.06-.05.06-.19.09-.29.24-1-.49-1.82-.47-2.78a.15.15 0 00-.08-.1c-.48-.35-.5-1.26-1.37-1.18 0 0-.06 0-.09-.08-.46-.62-1.1-.44-1.71-.37a7.73 7.73 0 00-1.26-.15c-1.39.07-3.08 1.11-3 2.81a.49.49 0 01-.14.25 1.6 1.6 0 00-.17 1.77v.24a7.86 7.86 0 01.2 1.35c0 .66-.66.52-1.05.64a6.9 6.9 0 00-4.39 3.39c-.67 1.31-1.29 2.64-1.92 4-.71 1.49-1.4 3-2.1 4.48a1.4 1.4 0 00-.1.35c-.16.92-.35 1.84-.44 2.77-.13 1.34-.16 2.69-.25 4-.05.68-.11 1.37-.22 2s-.31 1.42-.44 2.13.1.79.66.82c.16 0 .4 0 .44.11.31.72 1 .52 1.52.65s1.11.21 1.67.31a2 2 0 010 .23c-.33.11-.66.23-1 .32-.54.15-.59.24-.47.64a15.87 15.87 0 011.61-.52.85.85 0 01.67.28 1.12 1.12 0 001.23.46 23.21 23.21 0 00-.23 3.42c.13 1.94.44 3.86.68 5.79a6.3 6.3 0 01-.73 4.37 1.47 1.47 0 00-.21.68c-.05.68 0 1.35-.1 2-.18 1.74 0 3.34 1.59 4.41.28.15.55.43.83.44.85 0 1.25-.68 1.72-1.32a7.72 7.72 0 01.14 1.26 20.1 20.1 0 00.34 2.91 3 3 0 01.15 1.42 1.42 1.42 0 000 .36c.07 1 .14 2 .22 2.94a2.31 2.31 0 00.16.41 2.77 2.77 0 01.33.83c.14 2 .23 4 .37 6 0 .23.25.62.41.64a12.71 12.71 0 001.73 0c0 .22.11.58.16.94s.34.45.63.4c.55-.1 1.2.29 1.63-.33a.7.7 0 00.07-.36c.06-.67.14-1.34.19-2 .1-1.44.18-2.89.27-4.33.13.17.14.38.25.53a.46.46 0 00.39.13c.48-.51 1-.2 1.44 0 .93.42 1.46.2 1.62-.84.86 0 1-.43 1.05-1.25a18.32 18.32 0 00-.11-2.4.86.86 0 00-.18-.44 3.93 3.93 0 01-.92-3c.12-2.34.31-4.66.43-7 .05-.8 0-1.62 0-2.43 0-.06.11-.13.12-.19.15-2-.47-3.81-.68-5.72l-2.77 2.5 2.63-2.61a7.91 7.91 0 000-.84 8.6 8.6 0 01.26-3.77 16.1 16.1 0 00.53-2.5c.09-.54.11-1.09.16-1.63h.3c.58.53 1.32.38 2 .47s1.17.17 1.53-.47c0-.08.16-.19.23-.17.67.11 1.34.25 2.05.39l.08-.33c.74 0 1-.27 1.19-1 .11-.44.18-.9.82-.86.09 0 .31-.34.28-.49-.06-.81-.25-1.57-.41-2.34zm-18.18 5.1a9.5 9.5 0 01.55-1.22c0-.07.16-.17.21-.15a.4.4 0 01.24.22c.1.55.17 1.09.79 1.4.15.08.08.59.13 1-.69-.26-1.27-.44-1.81-.7-.11 0-.17-.37-.11-.55zm-.47 1.65c-.09-.75 0-.83.74-.58h.12c1.45.46 1.45.46 1.48 2 0 .73.06 1.47.09 2l-1 .49c-.08 0-.24 0-.24.06a6.48 6.48 0 00-.05 1.16 20.43 20.43 0 01-1 7.76 26.66 26.66 0 01-.83 2.68v-1.75a16.67 16.67 0 00-.26-4.83 4.59 4.59 0 01.1-2.54 24.34 24.34 0 00.7-3 4.31 4.31 0 00-.05-1.07c.06-.65.13-1.31.18-2a3.18 3.18 0 00.02-.38zm-4.57-7.06a16.4 16.4 0 00.08 2.51c-.3-.25-.93 0-1.09-.78-.06-.26-.51-.48-.82-.63-1.06-.51-1.12-.5-.94-1.66a27.38 27.38 0 01.69-3.11c.32-1.11.72-2.2 1.08-3.3a.92.92 0 01.16-.33c.55-.76 1.11-1.51 1.67-2.26h.17v2.36a8.83 8.83 0 000 2 5.43 5.43 0 01-.38 2.63 24.27 24.27 0 00-.6 2.57zm5.39 25.54a3.45 3.45 0 01-.32.84l-.16-.08-.44-2.71.81-2.66h.11c0 .52.08 1 .13 1.56-.02 1.02-.04 2.04-.11 3.05zm6.32 4.35v6.35H393a3.48 3.48 0 01-.1-.44c-.11-1.75-.23-3.5-.3-5.25 0-.25.28-.51.43-.77zm3.5-25.49c-.06-.29-.1-.48-.16-.73l1-.08.12.23zm5-3.71a4.44 4.44 0 00-1.21.82 2.49 2.49 0 01-2.21 1 9.89 9.89 0 00-1.77.32c0-.61 0-1.14-.1-1.66a32.09 32.09 0 01-.43-3.21 40.33 40.33 0 01.15-4.11 14.41 14.41 0 01.38-1.54c.25-1.24.48-2.48.75-3.9.21.34.4.61.56.89.7 1.18 1.4 2.38 2.11 3.57a3 3 0 01.32.5c.37 1.1.74 2.2 1.08 3.31s.58 1.92.81 2.89a1 1 0 01-.38 1.17z"
          />
          <path
            className="cls-5"
            d="M641.12 202.15v-18.43s1.34 4 3.66 3.86 4.39-2 6.72-2.49a9.29 9.29 0 015 .67s-2.46 2.72 1.66 2.54 5.19-2.46 8.8-3.3 5 0 5 0-2.34 1.89.85 2.62c2.7.61 3.69 1.16 6.36-.69s1-2.14 1-2.14a17.88 17.88 0 018.41 1.78c1.14.57.5 15.58.5 15.58z"
          />
          <path
            className="cls-7"
            d="M346.38 157.05l103.21-4.71M457.32 151.99v-25.33M457.32 151.99l80.49-3.67M451.42 155.53l-105.04 4.79M537.81 151.59l-82.32 3.76M455.49 155.35v-28.69M451.42 126.66v28.87M537.81 128.89l99.91-5.58v-3.91h28.01v-10.86H644.3v-17.2h3.49v13.71h21.43v18h-27.85v3.55l-103.56 5.79"
          />
          <path
            className="cls-8"
            d="M346.38 57.94v81.39l8.51 2.96-19.2 1.14 10.69 2.95v98.94M537.81 58.09v82.98l8.51 2.96-19.2 1.15 10.69 2.95v97.34"
          />
          <path
            className="cls-7"
            d="M537.81 139.83l103.56-5.79v67.85h47.99v-78.84h-8.57v-18h9.42V90.69h3.49v17.85h-9.42v10.86H693v86.13h-55.28v-67.79l-94.31 5.28M642.36 123.05l-.99.05M647.7 94.87l42.51 1.19"
          />
          <path
            className="cls-7"
            d="M685.51 94h-2c-1.35 0-3-.82-3-2.38v-5.8c0-1.56 1.63-2.38 3-2.38h2c1.35 0 3 .82 3 2.38v5.75c-.02 1.56-1.65 2.43-3 2.43zM346.38 167.89l191.43-8.72M537.81 162.44l-191.43 8.73M346.46 187.11l-213.28 9.72-.15-3.27 213.43-9.72M346.46 197.95l-214.59 9.79-.15-3.27 214.74-9.79M462.28 112.83v2.59h-2.16l-1.44 11.24h-10.61l-1.44-11.24h-2.16v-2.59h2.49v.09h1.86l1.45 11.25h6.21l1.45-11.25h1.86v-.09h2.49zM449.59 126.66v25.68"
          />
          <path
            className="cls-9"
            d="M729.51 80.34A2.16 2.16 0 01729 82M727.74 79.21v2.91M725.16 79.86v1.93M721.61 80.18v1.29M723.06 80.83V81M691.1 79.82c.3 1.05.6 2.1.89 3.15 0 .08.09.18.17.16s0-.19 0-.11M692.54 81.47a4.53 4.53 0 00.61 2.3M694.67 80.34v3.39M697.41 79.05V82M698.77 80.83a4 4 0 00.32 2M701 82.92l.23-1.87c0-.31.33-.73.55-.51.29 1.28 1.47 1.95 2.16 3.06a.33.33 0 00.27-.5M706.62 78.58a13 13 0 00-1.79 5.3l.48-.15M707.4 81.67a2.4 2.4 0 00.55 2.16M710.12 80.83l.34 2.26M712.13 79.18a21 21 0 00-.51 5.23 2.44 2.44 0 00.15-1M713.64 80.05a5.31 5.31 0 01.36 2.55M716 80.68a3.63 3.63 0 00.13 2.3M717.66 78.74l-.52 5.91.43-.6M720 80.83c-.09.54-.69 1.73-.52 2.25a.65.65 0 01-.62.33l-.24-2.91"
          />
          <path
            opacity=".15"
            fill="#5f9c98"
            d="M.56 192.8l.03 27.16 107.29-.27 2.37-2.37 25.94-9.78-4.47.44v-3.51l214.29-10.21-140.62.42h-5.87l-66.49 2.45-.17-3.65 4.35-.11L.56 192.8z"
          />
          <rect
            className="cls-9"
            x=".6"
            y=".83"
            width="728.97"
            height="245.34"
            rx="12"
          />
          <path
            d="M95.42 226.87l-11.75 19.29H10.2a10.43 10.43 0 01-6.93-3 8 8 0 01-2.67-6.6V220l107.28-.26-1.65 2.9-10.81 4.27"
            opacity=".4"
            fill="#5f9c98"
          />
          <path
            className="cls-12"
            d="M.57 211.28l124.92.63M.56 167.19l150.99.63M.55 123.1l214.29.61"
          />
          <g className="cls-13">
            <path className="cls-14" d="M340.03 190.33l-218.95 10.6" />
            <path
              className="cls-15"
              d="M132.58 194.01l.77 1.84-12.08 5.08 12.51 3.88-.59 1.9-17.76-5.5 17.15-7.2z"
            />
          </g>
          <g className="cls-13">
            <path className="cls-14" d="M537.63 155.07l-182 9.25" />
            <path
              className="cls-15"
              d="M367.12 157.36l.77 1.85-12.06 5.1 12.52 3.85-.59 1.91-17.77-5.47 17.13-7.24z"
            />
          </g>
          <g className="cls-13">
            <path
              className="cls-14"
              d="M351.53 102.3s86 2 90.57 3.52 9.36 2.73 10.32 4.44 1 10 1 10v25.65"
            />
            <path
              className="cls-15"
              d="M447.01 134.12l1.88-.68 4.49 12.31 4.48-12.31 1.87.68-6.35 17.47-6.37-17.47z"
            />
          </g>
          <path
            d="M453.15 114.26c1.91-6.91 3-8.25 7.28-9.32s48.06-5.91 74.64-7.25"
            strokeWidth="2"
            opacity=".7"
            strokeDasharray="5 5"
            stroke="#5f9c98"
            fill="none"
            strokeMiterlimit="10"
          />
          <g className="cls-13">
            <path
              className="cls-14"
              d="M568.21 84.65c35 1.32 83.44.85 87.7 2.23s2.29 8.46 5.23 10.81 9.82 2.3 11.78 4.61c1.64 1.94 2.14 57.63 2.26 75.77"
            />
            <path
              className="cls-15"
              d="M668.67 166.31l1.88-.7 4.6 12.26 4.36-12.35 1.88.66-6.18 17.54-6.54-17.41z"
            />
          </g>
          <g className="cls-13">
            <path
              className="cls-14"
              d="M658.44 181.12c5.22-11.94 6.7-36.05-3.16-46.94-7.34-8.09-82.15-1.14-103.43 1"
            />
            <path
              className="cls-15"
              d="M562.98 127.72l.87 1.8-11.8 5.68 12.69 3.24-.49 1.94-18.02-4.6 16.75-8.06z"
            />
          </g>
          <path
            className="cls-17"
            d="M537.81 88.31l109.98 3.03M137.09 192.99l-2.88-10.45 2.77-4.41 7.33-4.48 3.87.01 3.73-6.47-2.11-3.95 5.07-7 6.01-1.14 5.1 2.67 3.63-1.89-.89-2.7-1.54-5.07 3.08-4.63 18.1-9.6 6.72 8.27 1.38-1.59.02-3.87-1.17-6.19 6.48-2.96 6.45 3.55 4.56 5.21 2.69-4.93-.65-7.66 5.82-2.53 15.48-.1 1.24 6.7 109 .33M83.63 246.16l11.79-19.29 10.81-4.27 4.02-5.28 15.58-5.53 10.81-4.02"
          />
          <path
            className="cls-17"
            d="M238.47 117.31h107.91v9.9H238.47zM346.38 109.31l98.09 3.5 17.89.05 75.45-5.19M690.21 90.69v-9.08h-10.47l-.14 10.53-31.81-.8"
          />
          <path
            className="cls-6"
            d="M254.57 77a27.06 27.06 0 01-1.33 14.26c-1.09 3-1.28 6.32-1.87 9.5 0 .14.06.3 0 .44-.39 2.7-1.83 5.33-.41 8.12-1.91 1.92-.34 3.48.79 5.2l-3.86 1.14c-1.53-2-1.38-4.08-1.42-6.37a171.1 171.1 0 00-1.4-17.2c-.2-1.77-1.12-2.9-3.64-2.51-4.35.68-5.69-1.18-4.59-5.41a4 4 0 01.32-.83c.71-1.44 1.92-2.84 2-4.32s-1.22-2.72-1.51-4.16a8.42 8.42 0 01.38-3.42c.34-1.43 1-2.79 1.3-4.21.56-2.48.86-4.77 4.26-5.26 2.23-.33 2.45-1.69 1.66-4.31-1.26-4.12 1.13-7.26 4.89-6.43a4.08 4.08 0 013.16 5.7 19 19 0 01-1.24 2.36c-.88 1.7-.35 3.06 1.45 3.36 2 .33 2.62 1.4 2.95 3.22a22.87 22.87 0 001.67 4.55c1.49 3.59 1.17 4.42-2.46 6.08-.33.19-.67.35-1.1.5zM306.62 76.94v8l-1.81 1.35c-.51 2.78-.84 5.62-1.59 8.34-.83 3-.36 5.85.32 8.74a9.3 9.3 0 01.42 1.83 30.19 30.19 0 01-.22 3c.33.67 1.72 1.69.46 3.35-1.64.61-3.38 1.66-5.63.69l.42-2.72-1.92 2.73c.34.52.57 1.22 1 1.48a13.66 13.66 0 002.59.79c-.57 1.89-1.83 2.2-3.3 2-1.76-.23-3.52-.52-5.26-.86a6.88 6.88 0 01-1.51-.76c1.1-4.77 1.89-9.53 4.24-13.82a5 5 0 00.41-4.19 31.36 31.36 0 01-1.54-10.29 15 15 0 00-.09-1.73l-3.78-.8c-1.4-3.83-1.22-7.41-1.2-11a25.5 25.5 0 012.06-10.46c1-2.19 2.13-4.29 4.92-5 1-.25 1.79-1.65 2.6-2.45v-4.58l2-2.19a5.08 5.08 0 015.31 1.61c.11 1.39.2 2.61.3 3.84l-3.24 5.28c3.75 2.88 3.73 2.88 5.28 7.32 1.72 5 3.51 9.9 5.27 14.82 1.41-.12 2.7-.52 3.82-.25.91.22 1.64 1.25 2.47 1.94-.44 2.06-.86 4-1.33 6.18l1.73 2.06a1.19 1.19 0 01.15.44c.15 3.86 3.2 7.14 2.39 11.15-2.05 1.29-1.65-1.58-3.34-1.43-.09.08-.48.38-.6.46.14 2.6.28 4.89.4 7.07l-3.31 3.68c0 .76.08 1.68.13 2.7l2.43 1c0 .39-.07.78-.11 1.2l-4.38 1-3.34-4c.72-.82 1.33-1.52 1.78-2 .31-2 .65-3.73.83-5.5a4.5 4.5 0 00-.35-2.14c-1.25-3-1-6.08-.63-9.09a8.72 8.72 0 00-.22-4.29 13.81 13.81 0 01-.5-7.33L306.54 77c-.06-.39-.1-.79-.15-1.18L306 76c.23.28.43.61.62.94z"
          />
          <path
            className="cls-18"
            d="M557.8 81.53a17.72 17.72 0 004.05.13 10.29 10.29 0 001.57-.13 6.41 6.41 0 002.65-1.66 2.33 2.33 0 011.69-.54l59 1.91a2.51 2.51 0 012.09 1 4.4 4.4 0 003.15 1.64 26.89 26.89 0 003.91.2c.67 0 .78.5.75 1l-.09 2.79a2.13 2.13 0 002.11 2.24l10.71.35a2.19 2.19 0 002.33-2.19c.07-1.68.13-3.36.15-5 0-.56.14-1 .66-1.19a2.22 2.22 0 001.41-2.4c0-3.28.15-6.56.09-9.84 0-2.24.13-4.48 0-6.7-.1-2.51.16-5 .08-7.49s0-4.76.09-7.14a3.33 3.33 0 00-1.58-3.08c-.87-.54-1.33-1-1.08-2.16.46-2-.56-3.55-1.56-5.08a64.69 64.69 0 00-4.73-6.54c-1.1-1.32-1.43-3-2-4.58-1.4-3.61-2.62-7.28-4.08-10.86a67.82 67.82 0 00-4.06-8.68 7.4 7.4 0 00-4.8-3.53 61.3 61.3 0 00-6.15-1.21c-.77-.14-1.56-.2-2.34-.29-2.55-.25-5.09-.54-7.65-.76-1.38-.11-2.78-.12-4.17-.22-6-.41-12-.45-18-.67-2.15-.08-4.31 0-6.45 0-1.92 0-3.84 0-5.76.13A80.75 80.75 0 00569 2.07a7.81 7.81 0 00-5.25 3.78 100.81 100.81 0 00-6.23 12.26C556.15 21 555 24 553.58 26.94c-.83 1.79-2.32 3.13-3.61 4.6A38.73 38.73 0 00546 37a4.59 4.59 0 00-.45 3.21 8.3 8.3 0 01.05.87"
          />
          <path
            className="cls-18"
            d="M546.18 41.13c-1.51 0-3.67 1.8-3.69 3.49a52.86 52.86 0 01-.25 6.18c-.34 2.41-.12 4.82-.36 7.22-.38 3.76-.46 7.54-.73 11.3-.17 2.29-.24 4.58-.41 6.87a2.12 2.12 0 001.11 2.26 1.3 1.3 0 01.73 1.46c-.08 1.57-.11 3.13-.16 4.7a2.21 2.21 0 002.35 2.52l10.36.33a2.18 2.18 0 002.44-2.27 11.7 11.7 0 01.27-3.39M550.64 39.14c.06.59.42.84 1 1a17.34 17.34 0 014.1 2.23c2.51 1.56 4.94 3.24 7.44 4.83a3.71 3.71 0 011.58 2.07c.45 1.31.65 2.69 1 4 .11.42-.32.87 0 1.31"
          />
          <path
            className="cls-18"
            d="M551 40a4.38 4.38 0 00-1 2.49 26.38 26.38 0 00-1 5.28c-.13 2.33.17 2 1.82 2.66a69.69 69.69 0 007.84 2.44 59.34 59.34 0 005.88 1.45c.36 0 .67-.1 1 0"
          />
          <path
            className="cls-19"
            d="M580 64.57a.76.76 0 00-.72.85l-.1 3a.77.77 0 00.84.9h.52l34.12 1.11c1.35 0 1.39 0 1.44-1.35 0-.81 0-1.63.08-2.44a.76.76 0 00-.85-.9h-.52l-34.72-1.13M644.54 65a1.62 1.62 0 01.4 1.24 26.36 26.36 0 01-.89 6 2.83 2.83 0 01-1.73 2 26.25 26.25 0 01-5.8 1.83 2.62 2.62 0 01-2.86-1c-.72-1-.61-3.35.32-4.17a38.22 38.22 0 018.27-5.31 3.47 3.47 0 012-.64c.28 0 .37-.21.49-.41M646.4 42.33c-.07.57-.45.75-1 .85a12 12 0 00-3.35 1.46c-2.9 1.57-5.74 3.25-8.62 4.83a3.48 3.48 0 00-1.7 1.89c-.48 1.33-.86 2.69-1.27 4-.13.43.34.9-.09 1.31M646.12 43.11a8.2 8.2 0 011 3.52 21.76 21.76 0 01.43 4.7c-.08 1.35-.26 1.63-1.55 2.05a102.33 102.33 0 01-13.17 3 4.44 4.44 0 01-2.17.1M550.8 61.1c0 .59.19.87.88.93a5.85 5.85 0 012.23 1.08 50 50 0 016.91 5 3.58 3.58 0 01-.27 5.34 2.48 2.48 0 01-2 .15 23.52 23.52 0 01-6.45-2.6 1.85 1.85 0 01-.85-1.24 16.77 16.77 0 01-.59-3.85c0-.85-.11-1.68-.07-2.53a1.93 1.93 0 01.39-1.3"
          />
          <path
            d="M639.63 31a2.74 2.74 0 01-1.32.23c-3.36-.12-6.73-.16-10.09-.35-3.1-.19-6.21-.22-9.31-.37-11.51-.56-23-.8-34.54-1.2-4.56-.16-9.12-.31-13.67-.34-3.69 0-7.37-.25-11.05-.27-.61 0-1.12-.54-1.74-.21"
            strokeWidth=".05"
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="#010101"
            fill="#fff"
          />
          <path
            d="M639.88 31.18h-.08c-.24-2.76-1.37-5.27-2.3-7.82a107.09 107.09 0 00-5.16-12c-.21-.4-.47-.76-.66-1.16a1.45 1.45 0 00-1.8-.72 5.91 5.91 0 01-1.32.09c-3.19-.06-6.39-.07-9.58-.1-8.33-.06-16.65-.43-25-.66-2.61-.08-5.22-.15-7.83-.26-4.12-.17-8.24-.28-12.35-.62a27.54 27.54 0 01-4.52-.42 1.63 1.63 0 00-1.95.77 69.86 69.86 0 00-3.6 6.43c-1.47 2.84-2.74 5.77-4.09 8.67a36 36 0 00-1.43 3.79 4.33 4.33 0 00-.05 1.25"
            fill="#cadcd8"
            strokeWidth=".05"
            opacity=".2"
            strokeMiterlimit="10"
            stroke="#231f20"
          />
          <path
            d="M639.64 31.17h-.08c-.24-2.76-1.37-5.27-2.29-7.82a109 109 0 00-5.17-12c-.2-.39-.47-.76-.65-1.16a1.46 1.46 0 00-1.81-.72 5.92 5.92 0 01-1.32.1c-3.19-.06-6.39-.08-9.57-.1-8.33-.07-16.66-.44-25-.67-2.61-.08-5.22-.15-7.83-.26-4.11-.17-8.24-.28-12.35-.62a26.49 26.49 0 01-4.52-.42 1.62 1.62 0 00-1.95.78 68.4 68.4 0 00-3.6 6.42c-1.46 2.85-2.74 5.78-4.09 8.68A35.81 35.81 0 00558 27.1a4.38 4.38 0 000 1.26"
            strokeWidth=".05"
            fill="none"
            strokeMiterlimit="10"
            stroke="#231f20"
          />
          <path
            className="cls-19"
            d="M593.06 51.23c-.22.67-.79.34-1.14.28a40.46 40.46 0 00-5-.3q-4-.16-8-.26h-5.49a1.05 1.05 0 00-1.21 1.05 9 9 0 001.25 4.91 5.83 5.83 0 004.53 2.72c2.56.42 5.14.69 7.72 1 6.48.73 13 .71 19.49.92 2.9.09 5.81-.09 8.71-.23a45.93 45.93 0 005-.53c2.66-.41 4-2.27 4.76-4.63a6.79 6.79 0 00.44-2.33c0-.79-.33-1.2-1.09-1.25-5.1-.36-10.2-.59-15.31-.66-4.12 0-8.25-.06-12.36-.27a6.84 6.84 0 01-2.26-.13"
          />
          <text className="cls-23" transform="translate(2.7 196.83)">
            K
            <tspan className="cls-24" x="3.18" y="0">
              ing
            </tspan>
            <tspan className="cls-25" x="10.95" y="0">
              {' '}
            </tspan>
            <tspan className="cls-26" x="11.93" y="0">
              T
            </tspan>
            <tspan className="cls-24" x="14.73" y="0">
              ide
            </tspan>
          </text>
          <text className="cls-23" transform="translate(2.7 224.96)">
            H
            <tspan className="cls-24" x="3.81" y="0">
              igh
            </tspan>
            <tspan className="cls-25" x="11.58" y="0">
              {' '}
            </tspan>
            <tspan className="cls-26" x="12.57" y="0">
              T
            </tspan>
            <tspan className="cls-24" x="15.36" y="0">
              ide
            </tspan>
          </text>
        </g>
      </g>
    </PlaceableSVG>
  )
}

export default DrainPopover1
