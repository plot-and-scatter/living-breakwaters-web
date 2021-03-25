/* eslint-disable @typescript-eslint/no-non-null-assertion */
import mapboxgl from 'mapbox-gl'

import { LngLatCoordinate } from '../../@types/LngLatCoordinate'
import { MapLayer } from '../../@types/MapLayer'
import FixTypeLater from '../../@types/FixTypeLater'

mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_ACCESS_TOKEN

export type MapType = mapboxgl.Map | undefined
export type SetMapType = React.Dispatch<React.SetStateAction<MapType>>
export type MapRefType = React.RefObject<HTMLDivElement>

export const MAP_CENTRE: LngLatCoordinate = [-122.75, 49.25]
export const MAP_STYLE = 'mapbox://styles/mapbox/light-v10'
export const MIN_ZOOM = 8
export const MAX_ZOOM = 20
export const START_ZOOM = 9

export const BASE_LAYER_URL = process.env.REACT_APP_BASE_LAYER_URL

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

// const addNavControl = (map: mapboxgl.Map) => {
//   map.addControl(new mapboxgl.NavigationControl(), 'bottom-left')
// }

const addAttributionControl = (map: mapboxgl.Map) => {
  map.addControl(new mapboxgl.AttributionControl())
}

export const setupBaseMap = (setMap: SetMapType, mapRef: MapRefType): void => {
  const initializeMap = (setMap: SetMapType, mapRef: MapRefType) => {
    const map = new mapboxgl.Map(buildMapOptions(mapRef))
    // addNavControl(map)
    addAttributionControl(map)
    map.on('load', () => {
      setMap(map)
      map.resize()
    })
  }
  initializeMap(setMap, mapRef)
}

export const addInitialLayerToMap = (map: MapType, layer: MapLayer): void => {
  const type = layer.type

  const layersToAdd = layer.layers ? layer.layers : [layer]

  layersToAdd.forEach((layerToAdd) => {
    map.addSource(`${layerToAdd.id}`, {
      type: 'geojson',
      data: `${BASE_LAYER_URL}/${layerToAdd.id}.geojson`
    })
    const paint = {
      [`${type}-color`]: layerToAdd.color,
      [`${type}-opacity`]: layerToAdd.opacity
    }
    if (type === 'line') {
      paint[`line-width`] = layerToAdd[`line-weight`] || 1
      // paint[`line-cap`] = 'round'
      if (layerToAdd[`line-dasharray`]) {
        paint[`line-dasharray`] = layerToAdd[`line-dasharray`] as FixTypeLater
      }
      if (layerToAdd[`line-gap-width`]) {
        paint[`line-gap-width`] = layerToAdd[`line-gap-width`]
      }
    }
    if (type === 'fill') {
      paint[`fill-outline-color`] = layerToAdd.color
      if (layerToAdd[`fill-pattern`]) {
        paint[`fill-pattern`] = layerToAdd[`fill-pattern`]
      }
    }
    map.addLayer({
      id: layerToAdd.id,
      type: type,
      source: `${layerToAdd.id}`,
      layout: { visibility: 'visible' },
      paint
    })
  })
}
