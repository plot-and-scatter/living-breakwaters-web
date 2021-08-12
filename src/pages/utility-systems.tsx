import { graphql } from 'gatsby'
import React from 'react'

import { NarrativeType } from '../@types/NarrativeType'
import FixTypeLater from '../@types/FixTypeLater'
import Layout from '../components/Layout/Layout'
import Story from '../components/Stories/Story'

import './Story.scss'
import image from '../../content/assets/images/aditya-chinchure-2YRocbpCVeY-unsplash.jpg'

const UtilitySystems = (props: FixTypeLater): JSX.Element => {
  const { data } = props
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout title={siteTitle}>
      <Story
        title={'Utility Systems'}
        imageSrc={image}
        lead={
          <>
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
          </>
        }
        intro={
          <>
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
          </>
        }
        narrativeText={
          <>
            <p>
              Critical infrastructure face high levels of exposure to
              meteorological hazards such as storm surges. These hazards are
              expected to increase in intensity and frequency due to climate
              change negative impacts on electricity networks.1 Disruption to
              electricity networks causes blackouts at power plants which in
              turn disrupt the operations of key industries, such as
              manufacturing and agriculture, and support services such as
              wastewater management systems.2
            </p>
            <p>
              Wastewater treatment plants are critical conveyance systems of
              grey and black water that protect human health and environmental
              safety. In coastal communities, treatment plants may be
              constructed at low elevations near the coastline to facilitate the
              movement of wastewater using gravity flow. This minimizes the need
              for wastewater pumping stations (Hummel et al., 2018).3 Location
              of wastewater pumping stations near the coast also facilitates the
              discharge of wastewater into the ocean. However, locating
              wastewater plants near the coast poses several risks.{' '}
            </p>
            <p>
              Firstly, wastewater plants may be susceptible to flooding and
              silting as a result of storm surges that may disrupt mechanical
              and electoral components. Secondly, storm surge events usually
              trigger power failure hence wastewater treatment plants may be
              rendered inoperable during a coastal disaster. A plausible
              solution to this problem could be the construction of wastewater
              treatment plants above the predicted storm surge level.3 This
              will, however, add to the cost of wastewater conveyance.4
            </p>
          </>
        }
        themeKey={'utilitySystems'}
        activeNarrative={NarrativeType.FoodSecurity}
        path={'utility-systems'}
      />
    </Layout>
  )
}

export default UtilitySystems

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
