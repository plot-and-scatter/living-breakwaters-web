import React from "react"
import PropTypes from "prop-types"

const MeanSeaLevel = ({ stage }) => {
  const d =
    stage === 0
      ? "M0 700 H700 V315.5 H-700"
      : stage === 1
      ? "M0 700 H700 V310 H-700"
      : "M0 700 H700 V295 H-700"

  return <path className="mean-sea-level" d={d} />
}

export default MeanSeaLevel

MeanSeaLevel.propTypes = {
  stage: PropTypes.number,
}
