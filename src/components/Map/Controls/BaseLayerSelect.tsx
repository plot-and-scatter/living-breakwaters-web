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

const BaseLayerSelect = (): JSX.Element => {
  const { map } = useMapManager()

  const [baseLayerIndex, setBaseLayerIndex] = useState<number>(0)

  // useEffect(() => {
  //   if (baseLayerIndex >= BASE_LAYER_STYLES.length) {
  //     setBaseLayerIndex(0)
  //   } else {
  //     if (map) {
  //       // TODO: THIS OBLITERATES ALL OTHER LAYERS!
  //       // MAKE IT NOT DO THAT
  //       // map.setStyle(BASE_LAYER_STYLES[baseLayerIndex])
  //     }
  //   }
  // }, [baseLayerIndex, map])

  const onBaseLayerChangeClick = useCallback(() => {
    setBaseLayerIndex(baseLayerIndex + 1)
  }, [map, baseLayerIndex])

  return (
    <div className="btn-group w-100">
      <button
        className="btn btn-sm btn-outline-dark"
        onClick={onBaseLayerChangeClick}
      >
        <i className="fas fa-layer-group mr-1" /> Base
      </button>
    </div>
  )
}

export default BaseLayerSelect
