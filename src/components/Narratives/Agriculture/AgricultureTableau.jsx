import React from "react"
import Reeds from "./Reeds"
import { useNarrative } from "../NarrativeContext"
import Farmhouse from "./Farmhouse"
import Water from "./Water"
import Ground from "../Elements/Ground/Ground"
// import Land from "./Land"

const AgricultureTableau = () => {
  const { narrativeStage } = useNarrative()

  const reeds = []

  for (let i = 0; i <= narrativeStage; i++) {
    reeds.push(<Reeds key={i} narrativeStage={narrativeStage} />)
  }

  return (
    <div className="AgricultureTableau Tableau">
      {/* <div className="Background"> */}
      {/* <Water narrativeStage={narrativeStage} /> */}
      {/* </div> */}
      <div className="Background">
        {/* <Land narrativeStage={narrativeStage} /> */}
        <Ground />
      </div>
      <div className="Foreground">
        <div
          style={{
            marginLeft: "200px",
            transform: "scale(0.8)",
          }}
          className="d-flex align-items-end"
        >
          {/* <Farmhouse /> */}
          {/* <div className="ReedsHolder">{reeds}</div> */}
        </div>
      </div>
    </div>
  )
}

export default AgricultureTableau
