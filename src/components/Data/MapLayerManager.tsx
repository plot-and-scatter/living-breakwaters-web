import React, { useCallback, useState } from 'react'

import { addInitialLayerToMap } from '../Map/mapHelper'
import { copyAndSet, layersToToggle } from './MapLayerHelpers'
import FixTypeLater from '../../@types/FixTypeLater'
import { Map } from 'mapbox-gl'

import LAYERS from '../../static/layers.json'

type MapLayerManagerContextType = {
  loadedLayers: FixTypeLater
  setLoadedLayers: FixTypeLater
  activeLayers: FixTypeLater
  setActiveLayers: FixTypeLater
  map: Map
  setMap: React.Dispatch<React.SetStateAction<Map>>
  flyTo: FixTypeLater
}

const MapLayerManagerContext = React.createContext<
  MapLayerManagerContextType | undefined
>(undefined)

function useMapLayerManager(): FixTypeLater {
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

  const hideAllLayers = useCallback(() => {
    console.log('activeLayers', activeLayers)

    Object.keys(activeLayers).forEach((layerId) =>
      map.setLayoutProperty(layerId, 'visibility', 'none')
    )

    // copyAndSet(
    //   activeLayers,
    //   Object.values(activeLayers),
    //   false,
    //   setActiveLayers
    // ) // Update active
  }, [activeLayers, setActiveLayers, map])

  const flyTo = useCallback(
    (flyTo: FixTypeLater): void => {
      console.log('Flying to', flyTo)
      map.flyTo(flyTo)
    },
    [map]
  )

  return {
    activeLayers,
    showLayer,
    hideLayer,
    map,
    setMap,
    flyTo,
    hideAllLayers
  }
}

interface IMapLayerManagerProviderProps {
  children: React.ReactNode
  baseLayers?: FixTypeLater[]
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
