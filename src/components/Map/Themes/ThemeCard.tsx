import React, { useCallback, useEffect, useState } from 'react'
import { useMapManager } from '../../Data/MapLayerManager'
import FixTypeLater from '../../../@types/FixTypeLater'

import './ThemeCard.scss'

interface IProps {
  theme: FixTypeLater
  image: FixTypeLater
  setThemeCallback: FixTypeLater
}

const ThemeCard = ({ theme, image, setThemeCallback }: IProps): JSX.Element => {
  const { hideAllLayers, showLayer, flyTo } = useMapManager()

  const [time, setTime] = useState<number>(0)

  const title = theme.title
  const intro = theme.intro

  const themeClickCallback = useCallback(() => {
    setThemeCallback(theme.id)
    hideAllLayers()
    // showLayer(theme.layerIds)
    // flyTo(theme.flyTo)
    // TODO: Bunching up all these calls at once means the first call (to
    // hideAllLayers) gets clobbered by the later one (showLayer). Need to
    // investigate this.
    setTime(Date.now())
  }, [hideAllLayers, showLayer, flyTo])

  useEffect(() => {
    if (time) {
      showLayer(theme.layerIds)
      flyTo(theme.flyTo)
    }
  }, [time])

  // return (
  //   <div
  //     className="ThemeCard card"
  //     style={{
  //       whiteSpace: 'normal',
  //       verticalAlign: 'top'
  //     }}
  //     onClick={themeClickCallback}
  //   >
  //     <img src={image} className="card-img-top" alt="" />
  //     <div className="card-header">
  //       <h4 className="card-title">{title}</h4>
  //     </div>
  //     <div className="card-body">
  //       <p className="card-text Intro">{intro}</p>
  //     </div>
  //   </div>
  // )

  return (
    <div
      className="ThemeCard"
      style={{
        whiteSpace: 'normal',
        verticalAlign: 'top'
      }}
      onClick={themeClickCallback}
    >
      {/* <img src={image} className="card-img-top" alt="" /> */}
      {title}
      {/* <div className="card-body"> */}
      {/* <p className="card-text Intro">{intro}</p> */}
      {/* </div> */}
    </div>
  )
}

export default ThemeCard
