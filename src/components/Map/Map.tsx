import React, { useCallback, useEffect, useRef, useState } from "react"

// import SCENARIOS from "../static/scenarios.json"

import { Map as MapType } from "mapbox-gl"

import "./Map.scss"
import { setupBaseMap } from "./mapHelper"
import { useMapLayerManager } from "../Data/MapLayerManager"
import Layers from "./Layers/Layers"

interface IProps {}

const Map = (props: IProps): JSX.Element => {
  const mapRef = useRef<HTMLDivElement>(null)
  const {
    setMap,
  } = useMapLayerManager()

  useEffect(() => {
    setupBaseMap(setMap, mapRef)
  }, []) // Intentionally leave empty; only set up once, on instantiation

  return (
    <div className="MapRow row">
      <div className="col-12">
        <Layers />
        <div className="Map" id="Map" ref={mapRef} />
      </div>
    </div>
  )
}

export default Map
