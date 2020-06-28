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
        className="ScenarioCard card mr-3 mb-3"
        style={{
          width: "400px",
          display: "inline-block",
          whiteSpace: "normal",
          verticalAlign: "top",
        }}
      >
        <img src={this.props.image} className="card-img-top" alt="" />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text Intro">{intro.substr(0, 500)}...</p>
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
