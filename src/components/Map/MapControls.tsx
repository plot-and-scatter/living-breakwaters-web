import React, { useCallback } from 'react'

import { useMapLayerManager } from '../Data/MapLayerManager'

import './MapControls.scss'
import { MAP_CENTRE, START_ZOOM } from './mapHelper'

const MapControls = (): JSX.Element => {
  const { map } = useMapLayerManager()

  const onZoomInClick = useCallback(() => {
    map.zoomIn()
  }, [map])

  const onZoomOutClick = useCallback(() => {
    map.zoomOut()
  }, [map])

  const onResetClick = useCallback(() => {
    map.flyTo({
      center: MAP_CENTRE,
      zoom: START_ZOOM,
      bearing: 0,
      pitch: 0
    })
  }, [map])

  return (
    <div className="MapControls btn-group">
      <button className="btn btn-outline-dark" onClick={onZoomInClick}>
        <i className="fas fa-plus" />
      </button>
      <button className="btn btn-outline-dark" onClick={onZoomOutClick}>
        <i className="fas fa-minus" />
      </button>
      <button className="btn btn-outline-dark" onClick={onResetClick}>
        <i className="fas fa-compass mr-2" />
        Reset
      </button>
    </div>
  )
}

export default MapControls
