import React from 'react'

import NarrativeStageProps from '../../../../@types/NarrativeStageProps'

const FreshWater = ({ stage }: NarrativeStageProps): JSX.Element => {
  const d =
    stage === 0
      ? 'M928.3 519H1963V330.2l-911.7.8-166.4.4-85.8-2.5-108.7-6.1-59.1-6.8 39.5 52.9 26 26.9 35.5 28.1 25.9 15.8 24.2 11.2L928.3 519z'
      : stage === 1
      ? 'M1394.1 519H1963V330.2l-911.7.8-166.4.4-85.8-2.5-108.7-6.1-26.4-3.1 175.6 71.6L954 417.5l63.2 27.7 36.9 16.6 80.7 22 259.3 35.2z'
      : 'M1915 519h48V342.1h-909.8L881 339.2l-88.3-2.2-33.2-.5-57.4-1.2L995.9 388l179.1 25.3 151.2 20.8 157 28.4 209 28.6L1915 519z'

  return <path className="fresh-water" d={d} />
}

export default FreshWater
