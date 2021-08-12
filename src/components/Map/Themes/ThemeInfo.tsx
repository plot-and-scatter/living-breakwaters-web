import React from 'react'

import THEMES from '../../../static/themes.json'
import { useMapManager } from '../../Data/MapLayerManager'

interface Props {
  themeKey: string
  setThemeCallback: FixTypeLater
  hide?: boolean
}

import './ThemeInfo.scss'

const ThemeInfo = ({ themeKey, setThemeCallback }: Props): JSX.Element => {
  const { flyTo } = useMapManager()

  if (!themeKey) return <></>

  const theme = THEMES[themeKey]
  return (
    <div className="ThemeInfo">
      <div
        className="d-flex align-items-center"
        style={{ justifyContent: 'space-between' }}
      >
        <h4 className="mb-0">
          {theme.title}{' '}
          <button
            className="btn btn-sm btn-outline-secondary ml-2"
            onClick={() => flyTo(theme.flyTo)}
          >
            <i className="fas fa-bullseye mr-2" />
            Refocus
          </button>
        </h4>
        <div>
          <button
            className="btn btn-sm btn-outline-secondary"
            onClick={() => setThemeCallback(undefined)}
          >
            <i className="fas fa-times" />
          </button>
        </div>
      </div>
      <hr className="my-2" />
      <p className="mb-0" style={{ lineHeight: 1.3 }}>
        <small>{theme.intro}</small>
      </p>
      <button className="btn btn-sm btn-primary mt-2">
        See narrative <i className="fas ml-1 fa-arrow-right" />
      </button>
    </div>
  )
}

export default ThemeInfo
