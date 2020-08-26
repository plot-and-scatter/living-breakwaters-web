import React from "react"
import PropTypes from "prop-types"
import { gsap } from "gsap"

export const toggleSeaSurge = (className, toggleVar) => {
  const elements = document.getElementsByClassName(className)
  const elementArray = Array.from(elements)
  for (let el of elementArray) {
    if (el) {
      if (toggleVar) {
        gsap.to(el, { y: -30, duration: 3 })
      } else {
        gsap.to(el, { y: 0, duration: 3 })
      }
    }
  }
}

const SeaSurge = ({ stage }) => {
  const d = stage === 2 ? "M0 315.5 H700 v40 H-700" : "M0 315.5 H700 v70 H-700"

  return <path className="sea-surge" d={d} />
}

export default SeaSurge

SeaSurge.propTypes = {
  stage: PropTypes.number,
}
