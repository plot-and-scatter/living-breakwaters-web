import React, { useEffect, useRef, useState } from 'react'

import { setupBaseMap } from './mapHelper'
import { useMapManager } from '../Data/MapLayerManager'
import Layers from './Layers/Layers'
import Themes from './Themes/Themes'

import THEMES from '../../static/themes.json'

import './Map.scss'
import MapControls from './MapControls'
import FixTypeLater from '../../@types/FixTypeLater'

interface Props {
  colWidth?: number
  themeKey?: FixTypeLater
  lockTheme?: boolean
  mapHeightOverride?: number
}

const Map = ({
  colWidth = 12,
  themeKey,
  lockTheme,
  mapHeightOverride
}: Props): JSX.Element => {
  const mapRef = useRef<HTMLDivElement>(null)

  const { hideAllLayers, showLayer, flyTo, setMap, map } = useMapManager()

  const [time, setTime] = useState<number>(0)

  // useEffect(() => {
  //   if (themeKey) {
  //     hideAllLayers()
  //     // showLayer(theme.layerIds)
  //     // flyTo(theme.flyTo)
  //     // TODO: Bunching up all these calls at once means the first call (to
  //     // hideAllLayers) gets clobbered by the later one (showLayer). Need to
  //     // investigate this.
  //     setTime(Date.now())
  //   }
  // }, [hideAllLayers, showLayer, flyTo, themeKey])

  useEffect(() => {
    console.log('map', map)
    if (map && themeKey) {
      const theme = THEMES[themeKey]
      console.log('theme -->', theme)
      showLayer(theme.layerIds)
      flyTo(theme.flyTo)
    }
  }, [themeKey, map, flyTo])

  useEffect((): void => {
    setupBaseMap(setMap, mapRef)
  }, []) // Intentionally leave empty; only set up once, on instantiation

  const style: React.CSSProperties = {}

  if (mapHeightOverride) style.height = `${mapHeightOverride}px`
  if (lockTheme) style.pointerEvents = `none`

  return (
    <div className="MapRow row">
      <div className={`col-${colWidth}`} style={{ position: 'relative' }}>
        {!lockTheme && <Layers />}
        {!lockTheme && <Themes defaultThemeKey={themeKey} />}
        <MapControls />
        <div className="Map" id="Map" ref={mapRef} style={style} />
      </div>
    </div>
  )
}

export default Map
