import LAYERS from '../../static/layers.json'
import FixTypeLater from '../Types/FixTypeLater'

export const layersToToggle = (idToToggle: string | string[]) => {
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
) => {
  const newLayers = Object.assign({}, layerObject)
  layersToToggle.forEach((l) => (newLayers[l.id] = toggleTo))
  setLayers(newLayers)
}
