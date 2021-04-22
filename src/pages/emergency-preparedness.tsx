import { graphql } from 'gatsby'
import React, { useState } from 'react'

import { NarrativeType } from '../@types/NarrativeType'
import FixTypeLater from '../@types/FixTypeLater'
import Layout from '../components/Layout/Layout'
import NarrativeFrame from '../components/Narratives/Frames/NarrativeFrame'
import NarrativeSelection from '../components/Narratives/Selection/NarrativeSelection'
import MapComponent from '../components/Map/Map'
import SEO from '../components/SEO'

import image from '../../content/assets/images/aditya-chinchure-2YRocbpCVeY-unsplash.jpg'

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
        <BannerRow bgOpacity={0.6} bgImage={image} short>
          <div className="col-8 offset-2">
            <p className="Cutout mb-5">Emergency Preparedness</p>
          </div>
          <div
            className="lead col-6 offset-2"
            style={{ textShadow: '0px 1px #000' }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean arcu
            lectus, venenatis vel felis at, auctor dignissim neque. Nam ut
            turpis quis lorem faucibus placerat. Integer sed feugiat tellus, a
            tristique mi. Morbi mauris ligula, consectetur et felis quis,
            vehicula cursus nibh. In eget tellus nulla. Suspendisse nec ante
            orci. Nulla interdum nisi nec sem fermentum commodo. Curabitur
            accumsan ligula a leo facilisis volutpat. Sed vehicula gravida
            iaculis. Nulla fermentum placerat eros, non volutpat magna
            condimentum vel. Fusce fermentum imperdiet risus, id suscipit ante
            hendrerit in. Praesent dapibus volutpat dictum. Donec lobortis est
            et condimentum pellentesque. Suspendisse non placerat leo, quis
            pulvinar lorem.
          </div>
        </BannerRow>
        <div className="row mt-5">
          <div className="col-6 offset-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean arcu
            lectus, venenatis vel felis at, auctor dignissim neque. Nam ut
            turpis quis lorem faucibus placerat. Integer sed feugiat tellus, a
            tristique mi. Morbi mauris ligula, consectetur et felis quis,
            vehicula cursus nibh. In eget tellus nulla. Suspendisse nec ante
            orci. Nulla interdum nisi nec sem fermentum commodo. Curabitur
            accumsan ligula a leo facilisis volutpat. Sed vehicula gravida
            iaculis. Nulla fermentum placerat eros, non volutpat magna
            condimentum vel. Fusce fermentum imperdiet risus, id suscipit ante
            hendrerit in. Praesent dapibus volutpat dictum. Donec lobortis est
            et condimentum pellentesque. Suspendisse non placerat leo, quis
            pulvinar lorem.
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
              <MapComponent
                colWidth={12}
                scenarioKey={'emergencyPreparedness'}
              />
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
