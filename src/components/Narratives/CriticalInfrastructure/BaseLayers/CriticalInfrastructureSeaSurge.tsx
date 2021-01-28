import { gsap } from 'gsap'
import React from 'react'

export const toggleSeaSurge = (className: string, toggleVar: boolean): void => {
  const elements = document.getElementsByClassName(className)
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

const BASE_SURGE_LEVEL = 415.5

interface Props {
  stage: number
}

const CriticalInfrastructureSeaSurge = ({ stage }: Props): JSX.Element => {
  const d =
    stage === 0
      ? `M0 ${BASE_SURGE_LEVEL} h2410 v130 h-2410 v-130`
      : stage === 1
      ? `M0 ${BASE_SURGE_LEVEL - 5.5} h2410 v130 h-2410 v-130`
      : `M0 ${BASE_SURGE_LEVEL - 20.5} h2410 v130 h-2410 v-130`

  return <path className="sea-surge" d={d} />
}

export default CriticalInfrastructureSeaSurge
