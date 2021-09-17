import React from 'react'

import { useNarrative } from '../../NarrativeContext'
import PlaceableSVGProps from '../../../../@types/PlaceableSVGProps'
import Textbox from '../../PlaceableSVGs/Textbox'
import Factory from '../../PlaceableSVGs/Buildings/Factory'
import FixTypeLater from '../../../../@types/FixTypeLater'
import { useEffect } from 'react'
import ALink from '../../../Layout/ALink'

const STAGE_2_CONTENT = (
  <p>
    Treatment plants take are designed to take advantage of gravity and as such
    located in low-lying areas adjacent to waterbodies. Flooding due to sea
    level rise can damage these plants, causing them to leak raw sewage and
    suspended solids the nearby environment.
  </p>
)

const STAGE_3_CONTENT = (
  <p>
    Without redesign, treatment plants will become increasingly vulnerable to
    flooding during high tides and storm events.{' '}
    <ALink
      external
      href="https://dailyhive.com/vancouver/iona-island-wastewater-treatment-plant-design-cost-escalation"
    >
      Please follow this link
    </ALink>{' '}
    to learn more about how Metro Vancouver is addressing these challenges in
    the redesign of the Iona Waste Water Treatment Plant.
  </p>
)

export const contentMap = {
  2: STAGE_2_CONTENT,
  3: STAGE_3_CONTENT
}

export const toggleContamination = (narrativeStage: number): void => {
  if (narrativeStage === 2) {
    const from = '#SmallContamination'
    const to = '#BigContamination'

    const tl = new TimelineLite()
    tl.to(from, {
      autoAlpha: 1,
      duration: 3,
      delay: 4
    })
    tl.to(
      from,
      {
        morphSVG: {
          shape: to,
          shapeIndex: 0
        } as FixTypeLater,
        // ease: Power2.easeIn,
        // ease: 'linear',
        // delay: 1, // TODO: Could delay further
        duration: 6
      },
      '>-2'
    )
  } else {
    const from = '#SmallContamination'
    const to = '#SmallContamination'
    const tl = new TimelineLite()
    tl.to(from, {
      autoAlpha: 0,
      morphSVG: {
        shape: to,
        shapeIndex: 0
      } as FixTypeLater,
      ease: 'none',
      // delay: 3, // TODO: Could delay further
      duration: 1
    })
  }

  // tl.to(from, { rotate: -1 })
}

const TreatmentPlantPop = (props: PlaceableSVGProps): JSX.Element => {
  const { narrativeStage } = useNarrative()

  const extraClasses = narrativeStage > 0 ? 'Red' : ''

  useEffect(() => {
    toggleContamination(narrativeStage)
  }, [narrativeStage])

  return (
    <svg className={`Popover ${extraClasses}`} onClick={props.onClick}>
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
      <Factory xOffset={0.3} yOffset={0.6565} scale={0.15} />
      <path
        className="NoDisplay"
        d={'M221 244 a 30,30 0 0 0 150,0'}
        id="BigContamination"
      />
      <path
        // style={{ display: 'none' }}
        fill="url(#pattern-circles"
        d={'M263 244 a 5,5 0 0 0 30,0'}
        id="SmallContamination"
      />

      <Textbox xOffset={0.37} yOffset={0.93} textboxWidth={130}>
        Treatment Plant
      </Textbox>
    </svg>
  )
}

export default TreatmentPlantPop
