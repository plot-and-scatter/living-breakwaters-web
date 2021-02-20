import { gsap } from 'gsap'
import React, { useEffect } from 'react'

import NarrativeStageProps from '../../../../@types/NarrativeStageProps'
import PlaceableSVGProps from '../../../../@types/PlaceableSVGProps'
import { useNarrative } from '../../NarrativeContext'
import PlaceableSVG from '../../PlaceableSVGs/PlaceableSVG'
import { viewBox } from '../../PlaceableSVGs/PlaceableSVGHelper'

export const toggleSeaSurge = (className: string, toggleVar: boolean): void => {
  const elements = document.getElementsByClassName(className)
  // console.log('elements', elements)
  const elementArray = Array.from(elements)
  for (const el of elementArray) {
    if (el) {
      if (toggleVar) {
        gsap.to(el, { y: -32, duration: 1 })
      } else {
        gsap.to(el, { y: 0, duration: 1 })
      }
    }
  }
}

interface Props extends PlaceableSVGProps, NarrativeStageProps {}

const SeaSurge = (props: Props): JSX.Element => {
  const { showSurge } = useNarrative()

  useEffect(() => {
    toggleSeaSurge('sea-surge', showSurge)
  }, [showSurge])

  const d =
    props.stage === 0
      ? 'M0 315.5 h760 l50 50 h1400 v80 h-2410 v-130'
      : props.stage === 1
      ? 'M0 310 h760 l50 50 h1400 v80 h-2410 v-130'
      : 'M0 295 h795 l50 30 h1400 v80 h-2410 v-110'

  return (
    <PlaceableSVG
      viewBoxObj={viewBox(0, 0, 1960, 520)}
      {...props}
      extraClasses={'SeaSurge'}
    >
      <path className="sea-surge" d={d} />
    </PlaceableSVG>
  )
}

export default SeaSurge
