import React from 'react'
import PropTypes from 'prop-types'

const WIDTH = 1500
const BASE_HEIGHT = 375

const CriticalInfrastructureSeaLevel = ({ stage }) => {
  const d =
    stage === 0
      ? `M0 ${WIDTH} H${WIDTH} V${BASE_HEIGHT + 20.5} H-${WIDTH}`
      : stage === 1
      ? `M0 ${WIDTH} H${WIDTH} V${BASE_HEIGHT + 15} H-${WIDTH}`
      : `M0 ${WIDTH} H${WIDTH} V${BASE_HEIGHT} H-${WIDTH}`

  return <path className="mean-sea-level" d={d} />
}

export default CriticalInfrastructureSeaLevel

CriticalInfrastructureSeaLevel.propTypes = {
  stage: PropTypes.number
}
