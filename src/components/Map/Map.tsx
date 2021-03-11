import React, { useEffect, useRef } from 'react'

import { setupBaseMap } from './mapHelper'
import { useMapLayerManager } from '../Data/MapLayerManager'
import Layers from './Layers/Layers'
import Scenarios from './Scenarios/Scenarios'

import './Map.scss'
import MapControls from './MapControls'

const Map = (): JSX.Element => {
  const mapRef = useRef<HTMLDivElement>(null)
  const { setMap } = useMapLayerManager()

  useEffect((): void => {
    setupBaseMap(setMap, mapRef)
  }, []) // Intentionally leave empty; only set up once, on instantiation

  return (
    <div className="MapRow row">
      <div className="col-12" style={{ position: 'relative' }}>
        <Layers />
        <Scenarios />
        <MapControls />
        <div className="Map" id="Map" ref={mapRef} />
      </div>
    </div>
  )
}

export default Map
