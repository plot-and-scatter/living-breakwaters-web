import React from 'react'

import { MapLayerManagerProvider } from '../Data/MapLayerManager'
import { NarrativeType } from '../../@types/NarrativeType'
import BannerRow from '../Rows/BannerRow'
import MapComponent from '../Map/Map'
import SEO from '../SEO'
import Tableau from '../Narratives/Tableau'

interface Props {
  activeNarrative: NarrativeType
  imageSrc: string
  intro: React.ReactNode
  lead: React.ReactNode
  scenarioKey: string
  title: string
}

const Story = ({
  activeNarrative,
  imageSrc,
  intro,
  lead,
  scenarioKey,
  title
}: Props): JSX.Element => {
  return (
    <div className="Story">
      <SEO title="Story" />
      <div className="row">
        <div
          style={{
            color: 'white',
            position: 'fixed',
            top: '4.5rem'
          }}
          className="offset-11 col-1"
        >
          <div
            style={{
              backgroundColor: 'rgba(0, 0, 0, 0.6)',
              border: 'solid 1px black',
              padding: '0.5rem',
              borderRadius: '0.5rem'
            }}
          >
            <p
              style={{
                textTransform: 'uppercase',
                letterSpacing: '1px',
                color: '#aaa',
                fontSize: '0.8rem'
              }}
            >
              Jump to...
            </p>
            <h6>Intro</h6>
            <h6>Map</h6>
            <h6>Narrative</h6>
            <h6>Strategies</h6>
          </div>
        </div>
      </div>
      <BannerRow bgOpacity={0.3} bgImage={imageSrc} short>
        <div className="col-8 offset-2">
          <p className="Cutout mb-5">{title}</p>
        </div>
        <div
          className="lead col-6 offset-2"
          style={{ textShadow: '0px 1px #000' }}
        >
          {lead}
        </div>
      </BannerRow>
      <div className="row mt-5">
        <div className="col-6 offset-2">{intro}</div>
      </div>
      <div className="row my-5">
        <div className="col-8 offset-2">
          <h1>Map</h1>
        </div>
        <div
          className="col-10 offset-1"
          style={{
            borderRadius: '0.5rem',
            border: 'solid 1px #333',
            height: '602px'
          }}
        >
          <MapLayerManagerProvider>
            <MapComponent colWidth={12} scenarioKey={scenarioKey} />
          </MapLayerManagerProvider>
        </div>
      </div>
      <div className="row my-5">
        <div className="col-8 offset-2">
          <h1>Narrative</h1>
        </div>
        <div className="col-10 offset-1">
          <Tableau activeNarrative={activeNarrative} />
        </div>
      </div>
      <div className="row my-5">
        <div className="col-8 offset-2">
          <h1>Strategies</h1>
        </div>
      </div>
    </div>
  )
}

export default Story
