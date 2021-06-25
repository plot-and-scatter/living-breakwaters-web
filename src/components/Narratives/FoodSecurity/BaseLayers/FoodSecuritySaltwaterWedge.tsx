/* globals findShapeIndex */

import React from 'react'
import { useEffect } from 'react'
import FixTypeLater from '../../../../@types/FixTypeLater'

import NarrativeStageProps from '../../../../@types/NarrativeStageProps'
import PlaceableSVGProps from '../../../../@types/PlaceableSVGProps'
import { useNarrative } from '../../NarrativeContext'
import PlaceableSVG from '../../PlaceableSVGs/PlaceableSVG'
import { viewBox } from '../../PlaceableSVGs/PlaceableSVGHelper'

import './FoodSecuritySaltwaterWedge.scss'

import findShapeIndex from '../../../../findShapeIndex.js'
import { useRef } from 'react'
;(window as FixTypeLater).findShapeIndex = findShapeIndex

interface Props extends PlaceableSVGProps, NarrativeStageProps {}

export const toggleSaltwaterWedge = (
  narrativeStage: number,
  prevNarrativeStage: number
): void => {
  console.log(
    'narrativeStage',
    narrativeStage,
    'prevNarrativeStage',
    prevNarrativeStage
  )

  if (
    narrativeStage > 0 &&
    narrativeStage !== prevNarrativeStage &&
    !(prevNarrativeStage > 0)
  ) {
    const from = '#SaltwaterWedgeNormal'
    const to = '#SaltwaterWedgeWide'

    const tl = new TimelineLite()
    tl.to(from, {
      y: 0,
      morphSVG: {
        shape: to,
        shapeIndex: 30
      } as FixTypeLater,
      // ease: Power2.easeIn,
      // ease: 'linear',
      // delay: 1, // TODO: Could delay further
      duration: 3
    })
  } else if (narrativeStage === 0 && prevNarrativeStage !== undefined) {
    const from = '#SaltwaterWedgeNormal'
    const to = '#SaltwaterWedgeNormal'
    const tl = new TimelineLite()
    tl.to(from, {
      y: 19,
      morphSVG: {
        shape: to,
        shapeIndex: 3
      } as FixTypeLater,
      ease: 'none',
      // delay: 3, // TODO: Could delay further
      duration: 3
    })
  }

  // tl.to(from, { rotate: -1 })
}

const FoodSecuritySaltwaterWedge = (props: Props): JSX.Element => {
  const { narrativeStage } = useNarrative()

  const prevNarrativeStage = useRef<number>()

  useEffect(() => {
    toggleSaltwaterWedge(narrativeStage, prevNarrativeStage.current)
    prevNarrativeStage.current = narrativeStage
  }, [narrativeStage])

  return (
    <PlaceableSVG
      viewBoxObj={viewBox(11, -142, 1190, 50)}
      {...props}
      extraClasses={'FoodSecuritySaltwaterWedge'}
    >
      <defs>
        <pattern
          id="pattern-circles"
          x="0"
          y="0"
          width="7"
          height="7"
          patternUnits="userSpaceOnUse"
          patternContentUnits="userSpaceOnUse"
          xlinkHref="#pattern-circles"
        >
          <circle id="pattern-circle" fill="red" cx="1" cy="1" r="1" />
          <circle id="pattern-circle" fill="red" cx="4.5" cy="4.5" r="1" />
        </pattern>
      </defs>
      <g id="Layer_2" data-name="Layer 2">
        <g id="EXISTING_SECTION" data-name="EXISTING SECTION">
          <g id="current_saltwater" data-name="current saltwater">
            <path
              className="saltwater-wedge NoDisplay"
              d={`M391.48,2.93a52.41,52.41,0,0,0-41.2,2.86l-.74.38c-6.69,3.4-12.91,6.16-17.22,7.11-.14,0-13.82.72-32.23,1.64l-60.62,3h0l.06,2c-5.42-.35-11.13-.56-17.2-.59s-12.5.1-19.35.42l-20.85,2.09-20.85,2.08-13.67,1.35-13.68,1.34c-.35,0-.7.09-1.05.16a9.6,9.6,0,0,0-1,.27c-2.69.87-10.07,1.86-17,2.64S101.46,31,100.56,31s10.27,1.07-57.91,2.15S31.58,35.36,2.08,35.41c-.51,0-.93.62-1.27,1.75A27.29,27.29,0,0,0,0,42c.36,15,.85,29.65,1.24,41.1S2,102.78,2,105A22.41,22.41,0,0,0,5.5,117.54c2.2,3.22,5.24,5.21,8.59,5.21H761.8q-7.72-.18-15.25-.41t-14.86-.51h258c86.31-.16,141.86-.33,228.18-.5-23.74-8.62-26.11-25-65.23-30a434.26,434.26,0,0,0-68.05-3.24c-64.29,1.64-439-42.53-578.42-56.5C494.77,30.47,458.82,26.49,391.48,2.93Z`}
              id="SaltwaterWedgeWide"
            />
            <path
              transform="translate(0, 19)"
              className="cls-3 saltwater-wedge"
              d={`M203,.43,161.28,4.6,133.93,7.29a9.9,9.9,0,0,0-2.07.43c-5.39,1.73-29.49,4-31.3,4S61.07,16,2.08,16.07c-1,0-1.68,2.49-2.08,6.58.72,30,2,58.58,2,63,0,9.81,5.43,17.76,12.14,17.76H761.8C603.18,99.75,510,81,447.83,61.49c-8.95-2.81-31.56-10.16-64.4-19.44C307.9,20.69,287.74-3.52,203,.43Z`}
              id="SaltwaterWedgeNormal"
            />
          </g>
        </g>
      </g>
    </PlaceableSVG>
  )
}

export default FoodSecuritySaltwaterWedge
