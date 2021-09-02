import React, { useCallback, useState } from 'react'

import ThemeCard from './ThemeCard'
import ThemeInfo from './ThemeInfo'

import THEMES from '../../../static/themes.json'
import './Themes.scss'
import image1 from '../../../../content/assets/images/jared-murray-NSuufgf-BME-unsplash-clipped.jpg'
import image2 from '../../../../content/assets/images/bre-smith-A_-piDJKVsY-unsplash-clipped.jpg'
import image3 from '../../../../content/assets/images/camilo-jimenez-vGu08RYjO-s-unsplash-clipped.jpg'
import image4 from '../../../../content/assets/images/dan-meyers-IQVFVH0ajag-unsplash-clipped.jpg'

interface Props {
  defaultThemeKey?: string
  lockTheme?: boolean
}

const Themes = ({ defaultThemeKey, lockTheme }: Props): JSX.Element => {
  const [theme, setTheme] = useState<string>(defaultThemeKey || '')
  const [showThemes, setShowThemes] = useState<boolean>(false)

  const toggleShowThemesCallback = useCallback(() => {
    setShowThemes(!showThemes)
  }, [showThemes, setShowThemes])

  const classes = `btn btn-outline-dark ThemeToggle ${
    showThemes ? 'Active' : ''
  }`

  const setThemeCallback = useCallback(
    (id: string) => {
      setTheme(id)
      setShowThemes(false)
    },
    [theme]
  )

  return (
    <div className="Themes">
      <button className={classes} onClick={toggleShowThemesCallback}>
        <i className="fas fa-list mr-1" /> Themes
      </button>
      <div
        className="ThemeInteraction"
        style={{
          display: showThemes ? 'flex' : 'none'
        }}
      >
        {Object.values(THEMES)
          .sort((a, b) => a.index - b.index)
          .map((s, i) => {
            const image =
              i === 0 ? image1 : i === 1 ? image2 : i === 2 ? image3 : image4
            return (
              <div key={s.id} className="ThemeCardWrapper">
                <ThemeCard
                  theme={s}
                  image={image}
                  setThemeCallback={setThemeCallback}
                />
              </div>
            )
          })}
      </div>
      {!lockTheme && (
        <ThemeInfo themeKey={theme} setThemeCallback={setThemeCallback} />
      )}
    </div>
  )
}

export default Themes
