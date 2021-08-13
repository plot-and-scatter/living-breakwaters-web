import React, { useCallback } from 'react'

import { MAP_CENTRE, START_ZOOM } from '../mapHelper'
import { useMapManager } from '../../Data/MapLayerManager'

const ResetButton = (): JSX.Element => {
  const { map } = useMapManager()

  const onResetClick = useCallback(() => {
    map.flyTo({
      bearing: 0,
      center: MAP_CENTRE,
      pitch: 0,
      zoom: START_ZOOM
    })
  }, [map])

  return (
    <button className="btn btn-sm btn-outline-dark" onClick={onResetClick}>
      <i className="far fa-compass mr-1" />
      Reset
    </button>
  )
}

export default ResetButton
