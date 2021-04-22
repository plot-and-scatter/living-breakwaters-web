import { graphql } from 'gatsby'
import React, { useState } from 'react'

import { NarrativeType } from '../@types/NarrativeType'
import FixTypeLater from '../@types/FixTypeLater'
import Layout from '../components/Layout/Layout'
import NarrativeFrame from '../components/Narratives/Frames/NarrativeFrame'
import NarrativeSelection from '../components/Narratives/Selection/NarrativeSelection'
import MapComponent from '../components/Map/Map'
import SEO from '../components/SEO'

import image from '../../content/assets/images/ben-den-engelsen-8aVLLbr1HxI-unsplash.jpg'

import './Story.scss'
import BannerRow from '../components/Rows/BannerRow'
import { MapLayerManagerProvider } from '../components/Data/MapLayerManager'
import Tableau from '../components/Narratives/Tableau'

const Story = (props: FixTypeLater): JSX.Element => {
  const { data } = props
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={props.location} title={siteTitle}>
      <div className="Story">
        <SEO title="Story" />
        <div className="row">
          <div
            style={{
              color: 'white',

              position: 'fixed',
              top: '4.5rem'

              // width: '200px'
            }}
            className="offset-11 col-1"
          >
            <div
              style={{
                // marginRight: '1rem',
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
        <BannerRow bgOpacity={0.3} bgImage={image} short>
          <div className="col-8 offset-2">
            <p className="Cutout mb-5">Food Security</p>
          </div>
          <div
            className="lead col-6 offset-2"
            style={{ textShadow: '0px 1px #000' }}
          >
            Maecenas ornare, dui eget elementum ultrices, lectus augue tempor
            tellus, a auctor velit ex a lectus. Phasellus lectus lectus, congue
            ut dolor a, tincidunt maximus nulla. Integer risus sem, varius sit
            amet sollicitudin a, condimentum vitae justo. Aliquam viverra nisi
            magna, vestibulum pharetra quam pulvinar nec. Maecenas non augue
            pharetra, congue purus vitae, maximus sapien. Lorem ipsum dolor sit
            amet, consectetur adipiscing elit. Maecenas id turpis id neque
            ullamcorper vehicula laoreet non dolor. Duis aliquam in orci at
            egestas.
          </div>
        </BannerRow>
        <div className="row mt-5">
          <div className="col-6 offset-2">
            Maecenas ornare, dui eget elementum ultrices, lectus augue tempor
            tellus, a auctor velit ex a lectus. Phasellus lectus lectus, congue
            ut dolor a, tincidunt maximus nulla. Integer risus sem, varius sit
            amet sollicitudin a, condimentum vitae justo. Aliquam viverra nisi
            magna, vestibulum pharetra quam pulvinar nec. Maecenas non augue
            pharetra, congue purus vitae, maximus sapien. Lorem ipsum dolor sit
            amet, consectetur adipiscing elit. Maecenas id turpis id neque
            ullamcorper vehicula laoreet non dolor. Duis aliquam in orci at
            egestas.
          </div>
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
              <MapComponent colWidth={12} scenarioKey={'foodSecurity'} />
            </MapLayerManagerProvider>
          </div>
        </div>
        <div className="row my-5">
          <div className="col-8 offset-2">
            <h1>Narrative</h1>
          </div>
          <div className="col-10 offset-1">
            <Tableau activeNarrative={NarrativeType.FoodSecurity} />
          </div>
        </div>
        <div className="row my-5">
          <div className="col-8 offset-2">
            <h1>Strategies</h1>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Story

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
