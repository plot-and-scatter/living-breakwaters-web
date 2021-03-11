import { Dictionary } from '../../@types/Dictionary'
import { MapLayer } from '../../@types/MapLayer'

import LAYERS from '../../static/layers.json'

export const layersToToggle = (idToToggle: string | string[]): MapLayer[] => {
  if (Array.isArray(idToToggle)) {
    const ids = idToToggle
    return ids.map((id) => LAYERS[id])
  } else {
    return LAYERS[idToToggle].layers
      ? LAYERS[idToToggle].layers
      : [LAYERS[idToToggle]]
  }
}

export const copyAndSet = (
  layerKeyDictionary: Dictionary<boolean>,
  layersToToggle: MapLayer[],
  toggleTo: boolean,
  setLayers: React.Dispatch<React.SetStateAction<Dictionary<boolean>>>
): void => {
  const newLayerKeyDictionary = Object.assign({}, layerKeyDictionary)
  layersToToggle.forEach((l) => {
    console.log('l.id', l.id, toggleTo)
    newLayerKeyDictionary[l.id] = toggleTo
  })
  console.log('newLayerKeyDictionary', newLayerKeyDictionary)
  setLayers(newLayerKeyDictionary)
}
