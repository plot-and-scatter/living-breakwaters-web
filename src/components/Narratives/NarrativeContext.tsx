import React, { useCallback } from 'react'

import FixTypeLater from '../Types/FixTypeLater'

type NarrativeContextInputType = {
  narrativeStage: number
  setNarrativeStage: (stage: number) => void
  showRain: boolean
  setShowRain: (showRain: boolean) => void
  showSurge: boolean
  setShowSurge: (showSurge: boolean) => void
}

type NarrativeContextReturnType = NarrativeContextInputType & {
  toggleRain: () => void
  toggleSurge: () => void
}

const NarrativeContext = React.createContext<
  NarrativeContextInputType | undefined
>(undefined)

function useNarrative(): NarrativeContextReturnType {
  const context = React.useContext(NarrativeContext)
  if (!context) {
    throw new Error(`useNarrative must be used within a NarrativeProvider`)
  }

  const {
    narrativeStage,
    setNarrativeStage,
    showRain,
    setShowRain,
    showSurge,
    setShowSurge
  } = context

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

function NarrativeProvider(props: FixTypeLater): JSX.Element {
  const [narrativeStage, setNarrativeStage] = React.useState(0)
  const [showRain, setShowRain] = React.useState(false)
  const [showSurge, setShowSurge] = React.useState(false)
  const value = React.useMemo(
    () => ({
      narrativeStage,
      setNarrativeStage,
      showRain,
      setShowRain,
      showSurge,
      setShowSurge
    }),
    [narrativeStage, showRain, showSurge]
  )

  return <NarrativeContext.Provider value={value} {...props} />
}
export { NarrativeProvider, useNarrative }
