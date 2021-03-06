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

const SeaSurge = ({ stage }) => {
  const d =
    stage === 0
      ? 'M0 315.5 h760 l50 50 h1400 v80 h-2410 v-130'
      : stage === 1
      ? 'M0 310 h760 l50 50 h1400 v80 h-2410 v-130'
      : 'M0 295 h795 l50 30 h1400 v80 h-2410 v-110'

  return <path className="sea-surge" d={d} />
}

export default SeaSurge

SeaSurge.propTypes = {
  stage: PropTypes.number
}
