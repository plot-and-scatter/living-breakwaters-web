import React from 'react'

const Layers = () => {
  return (
    <div className="Layers">
              <div>
                <button
                  className={`btn btn-outline-dark LayerToggle
                  ${this.state.showLayerInteraction ? "Active" : ""}
                  ${visibleLayerKeys.length > 0 ? "HasLayers" : ""}`}
                  type="button"
                  onClick={() =>
                    this.setState(
                      {
                        showLayerInteraction: !this.state.showLayerInteraction,
                      },
                      () => {
                        console.log(
                          "currentShowLayerInteraction",
                          this.state.showLayerInteraction
                        )
                      }
                    )
                  }
                >
                  <i className="fas fa-layer-group mr-1" /> Layers
                </button>
                {Object.keys(this.addedLayers).length > 0 &&
                  !this.state.showLayerInteraction && (
                    <div className="ActiveLayers">
                      {Object.values(LAYERS)
                        .filter(l => {
                          return visibleLayerKeys.includes(l.id)
                        })
                        .map(l => (
                          <LayerLabel key={l.id} layer={l}>
                            {l.name}
                          </LayerLabel>
                        ))}
                    </div>
                  )}
              </div>
              <div
                className="LayerInteraction"
                style={{
                  display: this.state.showLayerInteraction ? "block" : "none",
                }}
              >
                <LayerSelect toggleIdCallback={this.toggleIdCallback} />
              </div>
            </div>
  )
}

export default Layers
