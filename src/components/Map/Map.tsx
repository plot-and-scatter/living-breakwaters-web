import React, { useEffect, useRef, useState } from "react"

// import LAYERS from "../static/layers.json"
// import SCENARIOS from "../static/scenarios.json"

import { Map as MapType } from "mapbox-gl"

import "./Map.scss"
import { setupBaseMap } from "./Scenarios/mapHelper"

interface IProps {}

const Map = (props: IProps): JSX.Element => {
  const [map, setMap] = useState<MapType>()
  const [mapLoaded, setMapLoaded] = useState<boolean>(false)
  const mapRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setupBaseMap(map, setMap, setMapLoaded, mapRef)
  }, []) // Intentionally leave empty; only set up once, on instantiation

  return (
    <div className="MapRow row">
      <div className="col-12">
        <div className="Map" id="Map" ref={mapRef} />
      </div>
    </div>
  )
}

export default Map
