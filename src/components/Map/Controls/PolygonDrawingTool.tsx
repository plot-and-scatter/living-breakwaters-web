/* globals turf */

import React, { useCallback, useEffect, useState } from 'react'

import { useMapManager } from '../../Data/MapLayerManager'

import './PolygonDrawingTool.scss'

const PolygonDrawingTool = (): JSX.Element => {
  const { map } = useMapManager()

  const [measureMode, setMeasureMode] = useState<boolean>(false)

  const onMeasureModeClick = useCallback(() => {
    setMeasureMode(!measureMode)
  }, [map, measureMode])

  return (
    <div className="PolygonDrawingTool">
      <div className="btn-group w-100">
        <button
          className="btn btn-sm btn-outline-dark"
          onClick={onMeasureModeClick}
        >
          <i className="fas fa-draw-polygon mr-1" />
          <span id="AreaMeasurement">0</span> km<sup>2</sup>
        </button>
      </div>
    </div>
  )
}

export default PolygonDrawingTool
