/* globals turf */

import React, { useCallback } from 'react'

import { MAP_CENTRE, MAP_STYLE, START_ZOOM } from './mapHelper'
import { useMapManager } from '../Data/MapLayerManager'

import './MapControls.scss'
import { useState } from 'react'
import { useEffect } from 'react'

const baseLayerStyles = [
  MAP_STYLE,
  'mapbox://styles/mapbox/satellite-v9',
  'mapbox://styles/mapbox/light-v10',
  'mapbox://styles/mapbox/dark-v10',
  'mapbox://styles/mapbox/streets-v11',
  'mapbox://styles/mapbox/outdoors-v11'
]

const MapControls = (): JSX.Element => {
  const { map } = useMapManager()

  const [baseLayerIndex, setBaseLayerIndex] = useState<number>(0)

  const [measureMode, setMeasureMode] = useState<boolean>(false)

  useEffect(() => {
    if (measureMode) {
      console.log('Hi')
    }
  }, [measureMode])

  useEffect(() => {
    console.log('=========> IN HERE')
    if (baseLayerIndex >= baseLayerStyles.length) {
      setBaseLayerIndex(0)
    } else {
      if (map) {
        // TODO: THIS OBLITERATES ALL OTHER LAYERS!
        // MAKE IT NOT DO THAT
        map.setStyle(baseLayerStyles[baseLayerIndex])
      }
    }
  }, [baseLayerIndex, map])

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

  const onBaseLayerChangeClick = useCallback(() => {
    setBaseLayerIndex(baseLayerIndex + 1)
  }, [map, baseLayerIndex])

  const onMeasureModeClick = useCallback(() => {
    setMeasureMode(!measureMode)
  }, [map, measureMode])

  return (
    <div className="MapControls d-flex justify-content-around">
      <div className="btn-group">
        <button className="btn btn-sm btn-outline-dark" onClick={onZoomInClick}>
          <i className="fas fa-plus" />
        </button>
        <button
          className="btn btn-sm btn-outline-dark"
          onClick={onZoomOutClick}
        >
          <i className="fas fa-minus" />
        </button>
        <button className="btn btn-sm btn-outline-dark" onClick={onResetClick}>
          <i className="far fa-compass mr-1" />
          Reset
        </button>
      </div>
      <div className="btn-group">
        <button
          className="btn btn-sm btn-outline-dark"
          onClick={onBaseLayerChangeClick}
        >
          <i className="fas fa-layer-group mr-1" /> Base
        </button>
        <button
          className="btn btn-sm btn-outline-dark"
          onClick={onMeasureModeClick}
        >
          <i className="fas fa-ruler mr-1" />
          <div id="distance">0 dist</div>
        </button>
      </div>
    </div>
  )
}

export default MapControls
