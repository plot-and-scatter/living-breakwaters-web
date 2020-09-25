import LAYERS from "../../static/layers.json"
import { FixTypeLater } from "../Types/FixTypeLater"

export const layersToToggle = (id: string) => {
  return LAYERS[id].layers
    ? LAYERS[id].layers
    : [LAYERS[id]]
}

export const copyAndSet = (
  layerObject: FixTypeLater,
  layersToToggle: FixTypeLater[],
  toggleTo: boolean,
  setLayers: FixTypeLater) => {
  const newLayers = Object.assign({}, layerObject)
  layersToToggle.forEach(l => (newLayers[l.id] = toggleTo))
  setLayers(newLayers)
}