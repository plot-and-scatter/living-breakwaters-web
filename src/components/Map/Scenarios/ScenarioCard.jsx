import React from "react"
import PropTypes from "prop-types"

import "./ScenarioCard.scss"

class ScenarioCard extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const scenario = this.props.scenario
    const title = scenario.title
    const intro = scenario.intro

    return (
      <div
        className="ScenarioCard card"
        style={{
          whiteSpace: "normal",
          verticalAlign: "top",
        }}
      >
        <img src={this.props.image} className="card-img-top" alt="" />
        <div className="card-header">
          <h4 className="card-title">{title}</h4>
        </div>
        <div className="card-body">
          <p className="card-text Intro">{intro}</p>
        </div>
      </div>
    )
  }
}

ScenarioCard.propTypes = {
  scenario: PropTypes.object,
  image: PropTypes.string,
}

export default ScenarioCard
