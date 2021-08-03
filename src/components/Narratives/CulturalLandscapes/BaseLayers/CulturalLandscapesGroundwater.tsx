import React, { useEffect } from 'react'

import { useNarrative } from '../../NarrativeContext'
import { viewBox } from '../../PlaceableSVGs/PlaceableSVGHelper'
import NarrativeStageProps from '../../../../@types/NarrativeStageProps'
import PlaceableSVG from '../../PlaceableSVGs/PlaceableSVG'
import PlaceableSVGProps from '../../../../@types/PlaceableSVGProps'

import './CulturalLandscapesGroundwater.scss'

interface Props extends PlaceableSVGProps, NarrativeStageProps {}

export const toggleGroundwaterRise = (narrativeStage: number): void => {
  const from = '#CulturalLandscapesGroundwater'
  gsap.to(from, {
    y: narrativeStage < 2 ? 0 : -10,
    x: narrativeStage < 2 ? 0 : 140,
    ease: Power2.easeInOut,
    // delay: 3, // TODO: Could delay further
    duration: 1
  })

  // tl.to(from, { rotate: -1 })
}

const CulturalLandscapesGroundwater = (props: Props): JSX.Element => {
  const { narrativeStage } = useNarrative()

  useEffect(() => {
    toggleGroundwaterRise(narrativeStage)
  }, [narrativeStage])

  return (
    <PlaceableSVG
      viewBoxObj={viewBox(20, 0, 944.89, 0.01)}
      {...props}
      extraClasses={'CulturalLandscapesGroundwater'}
      defaultScale={1.0}
    >
      {/* <defs>
        <pattern
          id="pattern-squares"
          x="0"
          y="0"
          width="10"
          height="10"
          patternUnits="userSpaceOnUse"
          patternContentUnits="userSpaceOnUse"
          xlinkHref="#pattern-squares"
        >
          <rect
            id="pattern-square"
            fill="#112233"
            x="0"
            y="0"
            width="5"
            height="5"
          />
          <rect
            id="pattern-square"
            fill="#112233"
            x="5"
            y="5"
            width="5"
            height="5"
          />
        </pattern>
      </defs> */}
      {/* <g id="Layer_2" data-name="Layer 2"> */}
      {/* <g id="FUTURE_SECTION_CLICK" data-name="FUTURE SECTION CLICK"> */}
      {/* <g id="section_copy_2" data-name="section copy 2"> */}
      {/* <polygon
              id="CulturalLandscapesGroundwater"
              className="cls-1"
              fill="#112233"
              fillOpacity={0.2}
              points="0 136.5 736.04 136.5 944.89 136.5 893.73 77.17 853.83 52.09 805.08 16.61 739.66 3.02 655.29 0 610.33 1.4 546.02 1.74 334.24 17.77 286.72 21.48 231.38 28.93 173.47 44.07 96.3 68.57 13.53 97.85 1.91 113.75 0 136.5"
            /> */}
      <line
        id="CulturalLandscapesGroundwater"
        x1={90}
        x2={1375}
        y1={-25}
        y2={-25}
      />
      {/* </g> */}
      {/* </g> */}
      {/* </g> */}
    </PlaceableSVG>
  )
}

export default CulturalLandscapesGroundwater
