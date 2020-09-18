
const BASE_URL =
"https://plotandscatter.s3-us-west-2.amazonaws.com/living-breakwaters/simplified"

const addLayer = (map, layer) => {
  // console.log("layer", layer)
  const type = layer.type

  const layersToAdd = layer.layers ? layer.layers : [layer]

  layersToAdd.forEach(layerToAdd => {
    this.map.addSource(`${layerToAdd.id}`, {
      type: "geojson",
      data: `${BASE_URL}/${layerToAdd.id}.geojson`,
    })
    const paint = {
      [`${type}-color`]: layerToAdd.color,
      [`${type}-opacity`]: layerToAdd.opacity,
    }
    if (type === "line") {
      paint[`line-width`] = layerToAdd[`line-weight`] || 1
      if (layerToAdd[`line-dasharray`]) {
        paint[`line-dasharray`] = layerToAdd[`line-dasharray`]
      }
      if (layerToAdd[`line-gap-width`]) {
        paint[`line-gap-width`] = layerToAdd[`line-gap-width`]
      }
    }
    this.map.addLayer({
      id: layerToAdd.id,
      type: type,
      source: `${layerToAdd.id}`,
      layout: { visibility: "visible" },
      paint,
    })
  })
}