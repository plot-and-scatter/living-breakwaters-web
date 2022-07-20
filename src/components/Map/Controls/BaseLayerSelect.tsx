import React, { useCallback, useEffect, useState } from 'react'

import { MAP_STYLE } from '../mapHelper'
import { useMapManager } from '../../Data/MapLayerManager'

const BASE_LAYER_STYLES = [
  MAP_STYLE,
  'mapbox://styles/mapbox/satellite-v9',
  'mapbox://styles/mapbox/light-v10',
  'mapbox://styles/mapbox/dark-v10',
  'mapbox://styles/mapbox/streets-v11',
  'mapbox://styles/mapbox/outdoors-v11'
]

const BASE_LAYER_NAMES = [
  'Default',
  'Satellite',
  'Light',
  'Dark',
  'Streets',
  'Outdoors'
]

const BaseLayerSelect = (): JSX.Element => {
  const { map } = useMapManager()

  const [baseLayerIndex, setBaseLayerIndex] = useState<number>(0)

  const { activeLayers, resetLayers, showLayer } = useMapManager()

  useEffect(() => {
    if (baseLayerIndex >= BASE_LAYER_STYLES.length) {
      setBaseLayerIndex(0)
    } else {
      if (map) {
        // TODO: THIS OBLITERATES ALL OTHER LAYERS!
        // MAKE IT NOT DO THAT
        const _activeLayers = Object.assign({}, activeLayers)
        map.setStyle(BASE_LAYER_STYLES[baseLayerIndex])
        // setActiveLayers(_activeLayers)
        resetLayers()
        Object.keys(_activeLayers).forEach((l) => {
          showLayer(l)
        })
      }
    }
  }, [baseLayerIndex, map])

  const onBaseLayerChangeClick = useCallback(() => {
    setBaseLayerIndex(baseLayerIndex + 1)
  }, [map, baseLayerIndex])

  return (
    <div className="btn-group w-100">
      <button
        className="btn btn btn-outline-dark"
        onClick={onBaseLayerChangeClick}
      >
        <i className="fas fa-globe mr-1" /> {BASE_LAYER_NAMES[baseLayerIndex]}{' '}
        map
      </button>
    </div>
  )
}

export default BaseLayerSelect
