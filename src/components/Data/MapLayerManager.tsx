import React, { useCallback, useState } from 'react'

import { addInitialLayerToMap } from '../Map/mapHelper'
import { copyAndSet, layersToToggle } from './MapLayerHelpers'
import { FixTypeLater } from '../Types/FixTypeLater'
import { Map } from 'mapbox-gl'

import LAYERS from '../../static/layers.json'

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
    setMap
  } = context

  const showLayer = useCallback(
    (id?: string | string[]) => {
      const layers = layersToToggle(id)

      layers.forEach((l) => {
        // If the layer is loaded, set to visible; otherwise add to map
        loadedLayers[l.id]
          ? map.setLayoutProperty(l.id, 'visibility', 'visible')
          : addInitialLayerToMap(map, l)
      })

      copyAndSet(loadedLayers, layers, true, setLoadedLayers) // Update loaded
      copyAndSet(activeLayers, layers, true, setActiveLayers) // Update active
    },
    [activeLayers, setActiveLayers, loadedLayers, setLoadedLayers, map]
  )

  const hideLayer = useCallback(
    (id?: string) => {
      const layers = layersToToggle(id)

      // Set visibility to "none"
      layers.forEach((l) => map.setLayoutProperty(l.id, 'visibility', 'none'))

      copyAndSet(activeLayers, layers, false, setActiveLayers) // Update active
    },
    [activeLayers, setActiveLayers, map]
  )

  return {
    activeLayers,
    showLayer,
    hideLayer,
    map,
    setMap
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
      setMap
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
