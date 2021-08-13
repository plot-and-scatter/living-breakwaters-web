import React, { useCallback } from 'react'

import { useMapManager } from '../../Data/MapLayerManager'

const ZoomOutButton = (): JSX.Element => {
  const { map } = useMapManager()

  const onZoomOutClick = useCallback(() => {
    map.zoomOut()
  }, [map])

  return (
    <button className="btn btn-sm btn-outline-dark" onClick={onZoomOutClick}>
      <i className="fas fa-minus" />
    </button>
  )
}

export default ZoomOutButton
