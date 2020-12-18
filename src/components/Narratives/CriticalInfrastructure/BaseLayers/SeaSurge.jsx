import React from 'react'
import PropTypes from 'prop-types'
import { gsap } from 'gsap'

export const toggleSeaSurge = (className, toggleVar) => {
  const elements = document.getElementsByClassName(className)
  console.log('elements', elements)
  const elementArray = Array.from(elements)
  for (let el of elementArray) {
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

const SeaSurge = ({ stage }) => {
  const d =
    stage === 0
      ? `M0 ${BASE_SURGE_LEVEL} h2410 v130 h-2410 v-130`
      : stage === 1
      ? `M0 ${BASE_SURGE_LEVEL - 5.5} h2410 v130 h-2410 v-130`
      : `M0 ${BASE_SURGE_LEVEL - 20.5} h2410 v130 h-2410 v-130`

  return <path className="sea-surge" d={d} />
}

export default SeaSurge

SeaSurge.propTypes = {
  stage: PropTypes.number
}
