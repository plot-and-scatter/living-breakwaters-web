import React from "react"
import PropTypes from "prop-types"

const SeaSurge = ({ stage }) => {
  const d = "M0 315.5 H700 v40 H-700"

  return <path className="sea-surge" d={d} />
}

export default SeaSurge

SeaSurge.propTypes = {
  stage: PropTypes.number,
}
