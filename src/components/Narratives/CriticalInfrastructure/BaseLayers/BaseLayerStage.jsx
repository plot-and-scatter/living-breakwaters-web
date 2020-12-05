import React from 'react'
import PropTypes from 'prop-types'

import Ground from './Ground'
import FreshWater from './FreshWater'
import MeanSeaLevel from './MeanSeaLevel'
import SaltwaterWedge from './SaltwaterWedge'
import SeaSurge from './SeaSurge'

const BaseLayerStage = ({ stage }) => {
  return (
    <g id={`groundwater-${stage}`}>
      {/* <SeaSurge stage={stage} />
      <MeanSeaLevel stage={stage} /> */}
      <Ground stage={stage} />
      {/* <SaltwaterWedge stage={stage} /> */}
      {/* <FreshWater stage={stage} /> */}
    </g>
  )
}
BaseLayerStage.propTypes = {
  stage: PropTypes.number
}

export default BaseLayerStage
