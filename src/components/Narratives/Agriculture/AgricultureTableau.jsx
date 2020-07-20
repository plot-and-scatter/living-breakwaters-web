import React from "react"
import Reeds from "./Reeds"
import { useNarrative } from "../NarrativeContext"
import Farmhouse from "./Farmhouse"
import Water from "./Water"

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
      <g className="Foreground d-flex align-items-end">
        <Farmhouse />
        <g className="ReedsHolder">{reeds}</g>
      </g>
    </div>
  )
}

export default AgricultureTableau
