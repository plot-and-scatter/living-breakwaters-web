/* eslint-disable @typescript-eslint/no-non-null-assertion */
import mapboxgl from 'mapbox-gl'
import { FixTypeLater } from '../../Types/FixTypeLater'
import { LngLatCoordinate } from '../../Types/LngLatCoordinate'

mapboxgl.accessToken =
  "pk.eyJ1IjoiaGFuZ2xlciIsImEiOiJjazc2cHF1c2gwMGMwM2RteGcxenlnczYwIn0.XpPcoTossLBlfGYEfk8sng"

type MapType = mapboxgl.Map | undefined
type SetMapType = React.Dispatch<React.SetStateAction<MapType>>
type MapRefType = React.RefObject<HTMLDivElement>

export const MAP_CENTRE: LngLatCoordinate = [-122.75, 49.25]
export const MAP_STYLE = 'mapbox://styles/mapbox/light-v10'
export const MIN_ZOOM = 8
export const MAX_ZOOM = 20
export const START_ZOOM = 9

const buildMapOptions = (mapRef: MapRefType) => {
  const options = {
    container: mapRef.current!,
    style: MAP_STYLE,
    center: MAP_CENTRE,
    minZoom: MIN_ZOOM,
    maxZoom: MAX_ZOOM,
    zoom: START_ZOOM,
    attributionControl: false
  }
  return options
}

const addNavControl = (map: mapboxgl.Map) => {
  map.addControl(new mapboxgl.NavigationControl())
}

const addAttributionControl = (map: mapboxgl.Map) => {
  map.addControl(new mapboxgl.AttributionControl())
}

export const setupBaseMap = (
  map: MapType,
  setMap: SetMapType,
  setMapLoaded: FixTypeLater,
  mapRef: MapRefType,
): void => {
  const initializeMap = (setMap: SetMapType, mapRef: MapRefType) => {
    const map = new mapboxgl.Map(buildMapOptions(mapRef))
    addNavControl(map)
    addAttributionControl(map)
    map.on('load', () => {
      setMap(map)
      setMapLoaded(true)
      map.resize()
    })
  }
  if (!map) initializeMap(setMap, mapRef)
}