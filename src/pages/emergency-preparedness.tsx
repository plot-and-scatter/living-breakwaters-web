import { graphql } from 'gatsby'
import React from 'react'

import { NarrativeType } from '../@types/NarrativeType'
import FixTypeLater from '../@types/FixTypeLater'
import Layout from '../components/Layout/Layout'
import Story from '../components/Stories/Story'

import './Story.scss'
import image from '../../content/assets/images/aditya-chinchure-2YRocbpCVeY-unsplash.jpg'

const EmergencyPreparedness = (props: FixTypeLater): JSX.Element => {
  const { data } = props
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={props.location} title={siteTitle}>
      <Story
        title={'Coastal Habitat Squeeze'}
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
        scenarioKey={'emergencyPreparedness'}
        activeNarrative={NarrativeType.FoodSecurity}
      />
    </Layout>
  )
}

export default EmergencyPreparedness

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
