import React, { useCallback } from 'react'

import { useMapManager } from '../../Data/MapLayerManager'

const ZoomInButton = (): JSX.Element => {
  const { map } = useMapManager()

  const onZoomInClick = useCallback(() => {
    map.zoomIn()
  }, [map])

  return (
    <button className="btn btn-sm btn-outline-dark" onClick={onZoomInClick}>
      <i className="fas fa-plus" />
    </button>
  )
}

export default ZoomInButton
