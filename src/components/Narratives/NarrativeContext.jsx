import React, { useCallback } from 'react'

const NarrativeContext = React.createContext()

function useNarrative() {
  const context = React.useContext(NarrativeContext)
  if (!context) {
    throw new Error(`useNarrative must be used within a NarrativeProvider`)
  }

  const [
    narrativeStage,
    setNarrativeStage,
    showRain,
    setShowRain,
    showSurge,
    setShowSurge
  ] = context

  const toggleRain = useCallback(() => {
    setShowRain(!showRain)
  }, [showRain])

  const toggleSurge = useCallback(() => {
    setShowSurge(!showSurge)
  }, [showSurge])

  return {
    narrativeStage,
    setNarrativeStage,
    showRain,
    setShowRain,
    toggleRain,
    showSurge,
    setShowSurge,
    toggleSurge
  }
}

function NarrativeProvider(props) {
  const [narrativeStage, setNarrativeStage] = React.useState(0)
  const [showRain, setShowRain] = React.useState(false)
  const [showSurge, setShowSurge] = React.useState(false)
  const value = React.useMemo(
    () => [
      narrativeStage,
      setNarrativeStage,
      showRain,
      setShowRain,
      showSurge,
      setShowSurge
    ],
    [narrativeStage, showRain, showSurge]
  )

  return <NarrativeContext.Provider value={value} {...props} />
}
export { NarrativeProvider, useNarrative }
