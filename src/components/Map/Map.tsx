import React, { useCallback, useEffect, useRef, useState } from "react"

// import SCENARIOS from "../static/scenarios.json"

import { Map as MapType } from "mapbox-gl"

import "./Map.scss"
import { setupBaseMap } from "./mapHelper"
import { useMapLayerManager } from "../Data/MapLayerManager"

interface IProps {}

const Map = (props: IProps): JSX.Element => {
  const mapRef = useRef<HTMLDivElement>(null)
  const { showLayer, activeLayers, map, setMap } = useMapLayerManager()

  useEffect(() => {
    setupBaseMap(setMap, mapRef)
  }, []) // Intentionally leave empty; only set up once, on instantiation

  useEffect(() => {
    console.log("MAP UPDATED", map)
  }, [map])

  useEffect(() => {
    console.log("activeLayers -->", activeLayers)
  }, [activeLayers])

  const addLayerCallback = useCallback(() => {
    console.log("Clicked!")
    showLayer('roadways')
  }, [showLayer])

  return (
    <div className="MapRow row">
      <div className="col-12">
        <button onClick={addLayerCallback}>Layers</button>
        <div className="Map" id="Map" ref={mapRef} />
      </div>
    </div>
  )
}

export default Map
