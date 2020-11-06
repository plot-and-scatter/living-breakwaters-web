const scenarioClickCallback = (ids) => {
  console.log('ids', ids)
  // Hide all existing layers
  Object.keys(this.addedLayers).forEach((addedLayerId) => {
    console.log('addedLayerId', addedLayerId)
    this.map.setLayoutProperty(addedLayerId, 'visibility', 'none')
  })
  // Add new ones
  ids.forEach((id) => {
    const layer = LAYERS[id]
    const layerIds = layer.layers ? layer.layers : [layer.id]
    layerIds.forEach((layerId) => {
      if (this.addedLayers && this.addedLayers[layerId]) {
        // The layer is already on the map; toggle its visibility
        const visibility = 'visible'
        // const layer = this.map.getLayer(id)
        this.map.setLayoutProperty(layerId, 'visibility', visibility)
      } else {
        // This can only ever happen when the layer is first added, so we don't
        // need to test for whether the box has been checked or not
        this.addLayer(layer)
        this.addedLayers[layerId] = true
      }
    })
  })
}

const toggleIdCallback = (toggleTuple) => {
  const [id, checked] = toggleTuple

  const layersToToggle = LAYERS[id].layers ? LAYERS[id].layers : [LAYERS[id]]
  layersToToggle.forEach((layer) => {
    const layerId = layer.id
    if (this.addedLayers && this.addedLayers[layerId]) {
      // The layer is already on the map; toggle its visibility
      const visibility = checked ? 'visible' : 'none'
      // const layer = this.map.getLayer(id)
      this.map.setLayoutProperty(layerId, 'visibility', visibility)
    } else {
      // This can only ever happen when the layer is first added, so we don't
      // need to test for whether the box has been checked or not
      this.addLayer(layer)
      this.addedLayers[layerId] = true
    }
  })
}
