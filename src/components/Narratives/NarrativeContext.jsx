import React from "react"

const NarrativeContext = React.createContext()

function useNarrative() {
  const context = React.useContext(NarrativeContext)
  if (!context) {
    throw new Error(`useNarrative must be used within a NarrativeProvider`)
  }

  const [narrativeStage, setNarrativeStage] = context

  return {
    narrativeStage,
    setNarrativeStage,
  }
}

function NarrativeProvider(props) {
  const [narrativeStage, setNarrativeStage] = React.useState(0)
  const value = React.useMemo(() => [narrativeStage, setNarrativeStage], [
    narrativeStage,
  ])

  return <NarrativeContext.Provider value={value} {...props} />
}
export { NarrativeProvider, useNarrative }
