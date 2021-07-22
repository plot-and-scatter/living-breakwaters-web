/* eslint-disable @typescript-eslint/no-non-null-assertion */
import mapboxgl from '!mapbox-gl'

import { LngLatCoordinate } from '../../@types/LngLatCoordinate'
import { MapLayer } from '../../@types/MapLayer'
import FixTypeLater from '../../@types/FixTypeLater'

mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_ACCESS_TOKEN

export type MapType = mapboxgl.Map | undefined
export type SetMapType = React.Dispatch<React.SetStateAction<MapType>>
export type MapRefType = React.RefObject<HTMLDivElement>

export const MAP_CENTRE: LngLatCoordinate = [-122.75, 49.25]
// export const MAP_STYLE = 'mapbox://styles/mapbox/light-v10'
export const MAP_STYLE = 'mapbox://styles/hangler/ckn0j0dkb15tn17p1hycbrlq3'
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

    map.on('styleimagemissing', function (e) {
      console.log('==> e', e)
      const id = e.id // id of the missing image

      // Check if this missing icon is
      // one this function can generate.
      const prefix = 'square-rgb-'
      if (id.indexOf(prefix) !== 0) return

      // Get the color from the id.
      const rgb = id.replace(prefix, '').split(',').map(Number)

      const width = 64 // The image will be 64 pixels square.
      const bytesPerPixel = 4 // Each pixel is represented by 4 bytes: red, green, blue, and alpha.
      const data = new Uint8Array(width * width * bytesPerPixel)

      for (let x = 0; x < width; x++) {
        for (let y = 0; y < width; y += 2) {
          const offset = (y * width + x) * bytesPerPixel
          data[offset + 0] = rgb[0] // red
          data[offset + 1] = rgb[1] // green
          data[offset + 2] = rgb[2] // blue
          data[offset + 3] = 255 // alpha
        }
      }

      map.addImage(id, { width: width, height: width, data: data })
    })

    // addNavControl(map)
    addAttributionControl(map)
    map.on('load', () => {
      // map.addSource('mapbox-dem', {
      //   type: 'raster-dem',
      //   url: 'mapbox://mapbox.mapbox-terrain-dem-v1',
      //   tileSize: 512,
      //   maxzoom: 14
      // })
      // map.setTerrain({ source: 'mapbox-dem', exaggeration: 1.5 })
      // // add a sky layer that will show when the map is highly pitched
      map.addLayer({
        id: 'sky',
        type: 'sky',
        paint: {
          'sky-type': 'atmosphere',
          'sky-atmosphere-sun': [0.0, 0.0],
          'sky-atmosphere-sun-intensity': 15
        }
      })
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
    const layout = { visibility: 'visible' }
    if (type === 'line') {
      paint[`line-width`] = layerToAdd[`line-weight`] || 1
      layout[`line-cap`] = 'round'
      layout[`line-join`] = 'round'
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
        console.log('inHere', layerToAdd)
        paint[`fill-pattern`] = layerToAdd[`fill-pattern`]
      }
    }
    map.addLayer({
      id: layerToAdd.id,
      type: type,
      source: `${layerToAdd.id}`,
      layout,
      paint
    })
  })
}
