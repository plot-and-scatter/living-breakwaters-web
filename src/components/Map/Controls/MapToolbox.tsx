import React from 'react'

import BaseLayerSelect from './BaseLayerSelect'
import PolygonDrawingTool from './PolygonDrawingTool'
import ResetButton from './ResetButton'
import ZoomInButton from './ZoomInButton'
import ZoomOutButton from './ZoomOutButton'

import './MapToolbox.scss'

const MapToolbox = (): JSX.Element => {
  return (
    <div className="MapToolbox">
      {/* <div className="btn-group w-100">
        <ZoomInButton />
        <ZoomOutButton />
        <ResetButton />
      </div> */}
      <BaseLayerSelect />
      {/* <PolygonDrawingTool /> */}
    </div>
  )
}

export default MapToolbox
