import React from 'react'
import PropTypes from 'prop-types'

import CriticalInfrastructureGround from './CriticalInfrastructureGround'
import CriticalInfrastructureSeaLevel from './CriticalInfrastructureSeaLevel'
import SeaSurge from './SeaSurge'

const BaseLayerStage = ({ stage }) => {
  return (
    <g id={`groundwater-${stage}`}>
      <SeaSurge stage={stage} />
      <CriticalInfrastructureSeaLevel stage={stage} />
      <CriticalInfrastructureGround stage={stage} />
    </g>
  )
}
BaseLayerStage.propTypes = {
  stage: PropTypes.number
}

export default BaseLayerStage
