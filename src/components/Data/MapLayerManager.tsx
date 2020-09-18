import React, { useState } from "react"
import { FixTypeLater } from "../Types/FixTypeLater"

type MapLayerManagerContextType = {
  allLayers: FixTypeLater
  activeLayers: FixTypeLater
  setActiveLayers: FixTypeLater
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

  const { allLayers, activeLayers } = context

  return {
    allLayers,
    activeLayers,
  }
}

interface IMapLayerManagerProviderProps {
  children: React.ReactNode
  baseLayers: FixTypeLater[]
}

function MapLayerManagerProvider({
  children,
  baseLayers,
}: IMapLayerManagerProviderProps) {
  const [layers] = useState<FixTypeLater>(baseLayers)
  const [activeLayers, setActiveLayers] = useState<FixTypeLater>([])

  const value = React.useMemo(
    () => ({ allLayers: layers, activeLayers, setActiveLayers }),
    [layers]
  )

  return (
    <MapLayerManagerContext.Provider value={value}>
      {children}
    </MapLayerManagerContext.Provider>
  )
}

export { MapLayerManagerProvider, useMapLayerManager }
