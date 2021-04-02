import React, { useEffect, useRef } from 'react'

import { setupBaseMap } from './mapHelper'
import { useMapManager } from '../Data/MapLayerManager'
import Layers from './Layers/Layers'
import Scenarios from './Scenarios/Scenarios'

import './Map.scss'
import MapControls from './MapControls'

interface Props {
  colWidth?: number
}

const Map = ({ colWidth = 12 }: Props): JSX.Element => {
  const mapRef = useRef<HTMLDivElement>(null)
  const { setMap } = useMapManager()

  useEffect((): void => {
    setupBaseMap(setMap, mapRef)
  }, []) // Intentionally leave empty; only set up once, on instantiation

  return (
    <div className="MapRow row">
      <div className={`col-${colWidth}`} style={{ position: 'relative' }}>
        <Layers />
        <Scenarios />
        <MapControls />
        <div className="Map" id="Map" ref={mapRef} />
      </div>
    </div>
  )
}

export default Map
