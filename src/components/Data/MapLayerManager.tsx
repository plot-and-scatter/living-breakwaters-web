import React, { useCallback, useEffect, useState } from 'react'

import { addInitialLayerToMap } from '../Map/mapHelper'
import { copyAndSet, layersToToggle } from './MapLayerHelpers'
import FixTypeLater from '../../@types/FixTypeLater'
import { Map } from 'mapbox-gl'

import { Dictionary } from '../../@types/Dictionary'
import RAW_LAYERS from '../../static/layers.json'
import { MapLayer } from '../../@types/MapLayer'

// const LAYERS: Dictionary<MapLayer> = (RAW_LAYERS as unknown) as Dictionary<
//   MapLayer
// >

// console.log(LAYERS)

type MapLayerManagerContextType = {
  activeLayers: Dictionary<boolean>
  setActiveLayers: React.Dispatch<React.SetStateAction<Dictionary<boolean>>>
  loadedLayers: Dictionary<boolean>
  setLoadedLayers: React.Dispatch<React.SetStateAction<Dictionary<boolean>>>
  map: Map
  setMap: React.Dispatch<React.SetStateAction<Map>>
}

type MapLayerManagerType = {
  activeLayers: Dictionary<boolean>
  flyTo: (flyTo: FixTypeLater) => void
  hideAllLayers: () => void
  hideLayer: (id: string) => void
  map: Map
  setMap: React.Dispatch<React.SetStateAction<Map>>
  showLayer: (id?: string | string[]) => void
}

const MapLayerManagerContext = React.createContext<
  MapLayerManagerContextType | undefined
>(undefined)

function useMapLayerManager(): MapLayerManagerType {
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
      layers.forEach((l) => {
        map.setLayoutProperty(l.id, 'visibility', 'none')
      })

      copyAndSet(activeLayers, layers, false, setActiveLayers) // Update active
    },
    [activeLayers, setActiveLayers, map]
  )

  const hideAllLayers = useCallback(() => {
    const layers = layersToToggle(
      Object.keys(activeLayers).filter((k) => activeLayers[k] === true)
    )

    layers.forEach((l) => {
      if (l) {
        map.setLayoutProperty(l.id, 'visibility', 'none')
      }
    })

    copyAndSet(activeLayers, layers, false, setActiveLayers) // Update active
  }, [activeLayers, setActiveLayers, map])

  const flyTo = useCallback(
    (flyTo: FixTypeLater): void => {
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

function MapLayerManagerProvider({
  children
}: IMapLayerManagerProviderProps): JSX.Element {
  const [loadedLayers, setLoadedLayers] = useState<Dictionary<boolean>>({})
  const [activeLayers, setActiveLayers] = useState<Dictionary<boolean>>({})
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
    [activeLayers, setActiveLayers, loadedLayers, setLoadedLayers, map, setMap]
  )

  return (
    <MapLayerManagerContext.Provider value={value}>
      {children}
    </MapLayerManagerContext.Provider>
  )
}

export { MapLayerManagerProvider, useMapLayerManager }
