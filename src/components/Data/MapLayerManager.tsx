import React, { useCallback, useState } from "react"
import { FixTypeLater } from "../Types/FixTypeLater"

import LAYERS from "../../static/layers.json"
import { Map } from "mapbox-gl"
import { addInitialLayerToMap } from "../Map/mapHelper"

type MapLayerManagerContextType = {
  loadedLayers: FixTypeLater
  setLoadedLayers: FixTypeLater
  activeLayers: FixTypeLater
  setActiveLayers: FixTypeLater
  map: Map
  setMap: React.Dispatch<React.SetStateAction<Map>>
}

const MapLayerManagerContext = React.createContext<
  MapLayerManagerContextType | undefined
>(undefined)

function useMapLayerManager() {
  const context = React.useContext(MapLayerManagerContext)
  if (!context) {
    throw new Error(
      `useMapLayerManager must be used within a MapLayerManagerProvider`
    )
  }

  const {
    loadedLayers,
    setLoadedLayers,
    activeLayers,
    setActiveLayers,
    map,
    setMap,
  } = context

  const showLayer = useCallback(
    (id?: string) => {
      const layersToToggle = LAYERS[id].layers
        ? LAYERS[id].layers
        : [LAYERS[id]]

      console.log("-----------")
      console.log("layersToToggle", layersToToggle)
      console.log("loadedLayers", loadedLayers)

      layersToToggle.forEach(layer => {
        const layerId = layer.id

        if (loadedLayers[layerId]) {
          // The layer has already been loaded; toggle its visibility
          map.setLayoutProperty(layerId, "visibility", "visible")
        } else {
          // The layer has not been loaded; add it
          addInitialLayerToMap(map, layer)
        }
      })

      // Update loaded layers
      const newLoadedLayers = Object.assign({}, loadedLayers)
      layersToToggle.forEach(l => (newLoadedLayers[l.id] = true))
      setLoadedLayers(newLoadedLayers)

      // Update the active layers
      const newActiveLayers = Object.assign({}, activeLayers)
      layersToToggle.forEach(l => (newActiveLayers[l.id] = true))
      setActiveLayers(newActiveLayers)
    },
    [activeLayers, setActiveLayers, loadedLayers, setLoadedLayers, map]
  )

  return {
    activeLayers,
    showLayer,
    map,
    setMap,
  }
}

interface IMapLayerManagerProviderProps {
  children: React.ReactNode
  baseLayers: FixTypeLater[]
}

function MapLayerManagerProvider({ children }: IMapLayerManagerProviderProps) {
  const [loadedLayers, setLoadedLayers] = useState<FixTypeLater>({})
  const [activeLayers, setActiveLayers] = useState<string[]>([])
  const [map, setMap] = useState<Map>()

  const value = React.useMemo(
    () => ({
      loadedLayers,
      setLoadedLayers,
      activeLayers,
      setActiveLayers,
      map,
      setMap,
    }),
    [activeLayers, setActiveLayers, map, setMap]
  )

  return (
    <MapLayerManagerContext.Provider value={value}>
      {children}
    </MapLayerManagerContext.Provider>
  )
}

export { MapLayerManagerProvider, useMapLayerManager }
