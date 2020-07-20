import React from "react"
import Reeds from "./Reeds"
import { useNarrative } from "../NarrativeContext"
import Farmhouse from "./Farmhouse"
import Water from "./Water"
import Land from "./Land"

const AgricultureTableau = () => {
  const { narrativeStage } = useNarrative()

  const reeds = []

  for (let i = 0; i <= narrativeStage; i++) {
    reeds.push(<Reeds key={i} narrativeStage={narrativeStage} />)
  }

  return (
    <div className="AgricultureTableau Tableau">
      <g className="Background">
        <Water narrativeStage={narrativeStage} />
      </g>
      <g className="Background">
        <Land narrativeStage={narrativeStage} />
      </g>
      <g className="Foreground">
        <g
          style={{
            marginLeft: "100px",
            transform: "scale(0.8)",
          }}
          className="d-flex align-items-end"
        >
          <Farmhouse />
          <g className="ReedsHolder">{reeds}</g>
        </g>
      </g>
    </div>
  )
}

export default AgricultureTableau
