import React from "react"
import Reeds from "./Reeds"
import { useNarrative } from "./NarrativeContext"
import Farmhouse from "./Farmhouse"

const Tableau = () => {
  const { narrativeStage } = useNarrative()

  const reeds = []

  for (let i = 0; i <= narrativeStage; i++) {
    reeds.push(<Reeds key={i} narrativeStage={narrativeStage} />)
  }

  return (
    <div className="Tableau d-flex align-items-end">
      <Farmhouse />
      {reeds}
    </div>
  )
}

export default Tableau
