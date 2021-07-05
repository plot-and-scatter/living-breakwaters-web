import React from 'react'

import { viewBox } from '../../PlaceableSVGs/PlaceableSVGHelper'
import NarrativeStageProps from '../../../../@types/NarrativeStageProps'
import PlaceableSVG from '../../PlaceableSVGs/PlaceableSVG'
import PlaceableSVGProps from '../../../../@types/PlaceableSVGProps'
import { useNarrative } from '../../NarrativeContext'
import { useEffect } from 'react'

interface Props extends PlaceableSVGProps, NarrativeStageProps {}

export const toggleContamination = (narrativeStage: number): void => {
  const from = '#CulturalLandscapesContamination'
  gsap.to(from, {
    autoAlpha: narrativeStage < 1 ? 0 : 1,
    ease: Power2.easeInOut,
    // delay: 3, // TODO: Could delay further
    duration: 1,
    delay: 2
  })

  // tl.to(from, { rotate: -1 })
}

const CulturalLandscapesContamination = (props: Props): JSX.Element => {
  const { narrativeStage } = useNarrative()

  useEffect(() => {
    toggleContamination(narrativeStage)
  }, [narrativeStage])

  return (
    <PlaceableSVG
      viewBoxObj={viewBox(0, 0, 714.45, 65.92)}
      {...props}
      extraClasses={'CulturalLandscapesContamination'}
      defaultScale={0.609}
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
          <animateTransform
            attributeName="patternTransform"
            attributeType="XML"
            type="translate"
            from="21 7"
            to="0 14"
            dur="1s"
            repeatCount="indefinite"
          />
          <circle id="pattern-circle" fill="red" cx="1" cy="1" r="1" />
          <circle id="pattern-circle" fill="red" cx="4.5" cy="4.5" r="1" />
        </pattern>
      </defs>
      <g id="Layer_2" data-name="Layer 2">
        <g id="FUTURE_SECTION" data-name="FUTURE SECTION">
          <g id="section_copy" data-name="section copy">
            <path
              id="CulturalLandscapesContamination"
              className="cls-1 FillPatternCircles"
              d="M104.73,53.19C163.5,49.37,221.22,39.06,272.09,29s218.85-12,241.43-13.7c55.75-4.11,156.3-.5,182.55-4.93C717.06,6.84,714.34,0,714.34,0H656.42L612.5.39,553.6,2.16,350.77,7.08,302.7,10.92l-50,3.92L208.24,17,0,20.53V65.92"
            />
          </g>
        </g>
      </g>
    </PlaceableSVG>
  )
}

export default CulturalLandscapesContamination
