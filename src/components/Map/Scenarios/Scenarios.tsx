import React from 'react'



interface IProps {}

// import image1 from "../../content/assets/images/jared-murray-NSuufgf-BME-unsplash-clipped.jpg"
// import image2 from "../../content/assets/images/bre-smith-A_-piDJKVsY-unsplash-clipped.jpg"
// import image3 from "../../content/assets/images/camilo-jimenez-vGu08RYjO-s-unsplash-clipped.jpg"
// import image4 from "../../content/assets/images/dan-meyers-IQVFVH0ajag-unsplash-clipped.jpg"

const Scenarios = (props: IProps): JSX.Element => {
  return (
    <div className="Scenarios">
              <div>
                <button
                  className={`btn btn-outline-dark ScenarioToggle
                  ${this.state.showScenarioInteraction ? "Active" : ""}`}
                  onClick={() =>
                    this.setState(
                      {
                        showScenarioInteraction: !this.state
                          .showScenarioInteraction,
                      },
                      () => {
                        console.log(
                          "currentShowScenarioInteraction",
                          this.state.showScenarioInteraction
                        )
                      }
                    )
                  }
                >
                  <i className="fas fa-layer-group mr-1" /> Scenarios
                </button>
              </div>
              <div
                className="ScenarioInteraction"
                style={{
                  display: this.state.showScenarioInteraction ? "flex" : "none",
                }}
              >
                {Object.values(SCENARIOS)
                  .sort((a, b) => a.index - b.index)
                  .map((s, i) => {
                    const image =
                      i === 0
                        ? image1
                        : i === 1
                        ? image2
                        : i === 2
                        ? image3
                        : image4
                    return (
                      <div key={s.id} className="ScenarioCardWrapper">
                        <ScenarioCard
                          scenario={s}
                          image={image}
                          scenarioClickCallback={this.scenarioClickCallback}
                        />
                      </div>
                    )
                  })}
              </div>
            </div>
  )
}

export default Scenarios
