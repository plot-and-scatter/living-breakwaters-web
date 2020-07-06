import React from "react"
import Reeds from "./Reeds"
import { useNarrative } from "./NarrativeContext"

const Tableau = () => {
  const { narrativeStage } = useNarrative()

  const reeds = []

  for (let i = 0; i <= narrativeStage; i++) {
    reeds.push(<Reeds key={i} narrativeStage={narrativeStage} />)
  }

  return <div className="Tableau">{reeds}</div>
}

export default Tableau
