import FixTypeLater from '../../@types/FixTypeLater'

import LAYERS from '../../static/layers.json'

export const layersToToggle = (idToToggle: string | string[]): FixTypeLater => {
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
  layerObject: FixTypeLater,
  layersToToggle: FixTypeLater[],
  toggleTo: boolean,
  setLayers: FixTypeLater
): void => {
  const newLayers = Object.assign({}, layerObject)
  layersToToggle.forEach((l) => (newLayers[l.id] = toggleTo))
  setLayers(newLayers)
}
