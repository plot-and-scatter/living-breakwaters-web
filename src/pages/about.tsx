import { graphql } from 'gatsby'
import React from 'react'

import Layout from '../components/Layout/Layout'
import SEO from '../components/SEO'
import BannerRow from '../components/Rows/BannerRow'

import image from '../../content/assets/images/james-wheeler-nP0ILzCrmAc-unsplash.jpg'
import FixTypeLater from '../components/Types/FixTypeLater'
import Subhead from '../components/Layout/Subhead'

const About = (props: FixTypeLater): JSX.Element => {
  const { data } = props
  const siteTitle = data.site.siteMetadata.title
  return (
    <Layout location={props.location} title={siteTitle}>
      <SEO title="Contact" />
      <BannerRow bgOpacity={0.3} bgImage={image} short>
        <a id="intro" />
        <div className="col-12 col-md-10 offset-md-1 col-lg-8 offset-lg-2">
          <p className="Cutout mb-5">About Changing Coastlines</p>
        </div>
        <div className="w-100" />
        <div
          className="lead col-12 col-md-8 offset-md-1 col-lg-6 offset-lg-2 Highlight"
          style={{ textShadow: '0px 1px #000' }}
        >
          <p>
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
          </p>
        </div>
      </BannerRow>
      <div className="row mt-5 Highlight">
        <div className="col-12 col-md-9 col-lg-6 offset-md-1 offset-lg-2">
          <Subhead>Lorem ipsum</Subhead>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean arcu
            lectus, venenatis vel felis at, auctor dignissim neque. Nam ut
            turpis quis lorem faucibus placerat.
          </p>
        </div>
      </div>
    </Layout>
  )
}

export default About

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
