import React, { useEffect, useRef, useState } from 'react'

import { setupBaseMap } from './mapHelper'
import { useMapManager } from '../Data/MapLayerManager'
import Layers from './Layers/Layers'
import Scenarios from './Scenarios/Scenarios'

import SCENARIOS from '../../static/scenarios.json'

import './Map.scss'
import MapControls from './MapControls'
import FixTypeLater from '../../@types/FixTypeLater'

interface Props {
  colWidth?: number
  scenarioKey?: FixTypeLater
  lockScenario?: boolean
  mapHeightOverride?: number
}

const Map = ({
  colWidth = 12,
  scenarioKey,
  lockScenario,
  mapHeightOverride
}: Props): JSX.Element => {
  const mapRef = useRef<HTMLDivElement>(null)

  const { hideAllLayers, showLayer, flyTo, setMap, map } = useMapManager()

  const [time, setTime] = useState<number>(0)

  // useEffect(() => {
  //   if (scenarioKey) {
  //     hideAllLayers()
  //     // showLayer(scenario.layerIds)
  //     // flyTo(scenario.flyTo)
  //     // TODO: Bunching up all these calls at once means the first call (to
  //     // hideAllLayers) gets clobbered by the later one (showLayer). Need to
  //     // investigate this.
  //     setTime(Date.now())
  //   }
  // }, [hideAllLayers, showLayer, flyTo, scenarioKey])

  useEffect(() => {
    console.log('map', map)
    if (map && scenarioKey) {
      const scenario = SCENARIOS[scenarioKey]
      console.log('scenario -->', scenario)
      showLayer(scenario.layerIds)
      flyTo(scenario.flyTo)
    }
  }, [scenarioKey, map, flyTo])

  useEffect((): void => {
    setupBaseMap(setMap, mapRef)
  }, []) // Intentionally leave empty; only set up once, on instantiation

  return (
    <div className="MapRow row">
      <div className={`col-${colWidth}`} style={{ position: 'relative' }}>
        {!lockScenario && <Layers />}
        {!lockScenario && <Scenarios defaultScenarioKey={scenarioKey} />}
        <MapControls />
        <div
          className="Map"
          id="Map"
          ref={mapRef}
          style={mapHeightOverride ? { height: `${mapHeightOverride}px` } : {}}
        />
      </div>
    </div>
  )
}

export default Map
