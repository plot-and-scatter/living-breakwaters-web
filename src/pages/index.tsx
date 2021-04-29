import PropTypes from 'prop-types'
import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/Layout/Layout'
import SEO from '../components/SEO'
import BannerRow from '../components/Rows/BannerRow'
import ContentRow from '../components/Rows/ContentRow'

import image from '../../content/assets/images/annie-spratt-E5PDOC7mTvc-unsplash.jpg'

class Index extends React.Component {
  render() {
    const { data, location } = this.props
    const siteTitle = data.site.siteMetadata.title

    return (
      <Layout location={location} title={siteTitle}>
        <SEO title="Home" />

        <BannerRow bgOpacity={0.2} bgImage={image}>
          <div className="col-12 text-center">
            <span className="Cutout">Living Breakwaters</span>
          </div>
        </BannerRow>

        <ContentRow rowClasses="p-5">
          <p className="lead">
            Climate change will result in a significant increase in sea level
            rise, SLR. At the same time, changes in seasonal weather patterns
            will increase the frequency and severity of extreme storm events
            which will in turn exacerbate the impact of SLR on coastal
            biophysical, social and economic systems. Canada’s coastline is the
            largest in the world measuring 243,042 km. In western Canada, in
            coastal cities such as Vancouver, municipal and city governments
            have already begun to utilize adaptation strategies to protect and
            enhance coastal ecosystems, and existing coastal infrastructure.
            These strategies include a suite of hard and soft conventional and
            unconventional approaches that are meant to reduce risk related to
            SLR by integrating coastal ecosystem adaptive capacity with
            nature-based ecosystem, and governance solutions.
          </p>
          <p>
            This report documents a wide range of approaches that incorporates
            strategies for coastal environmental design based on the idea of
            rebuilding or designing with nature. One of the objectives of the
            project is to create an online interactive resource library. The
            library will: 1) provide visualizations of each adaptation strategy;
            2) identify specific (technical) requirements for the implementation
            of each strategy; 3) present national and global case studies that
            demonstrate the application and efficacy of each strategy, and; 4)
            highlight the key lessons learned from each case. This report is
            accompanied by an online platform{' '}
            <span className="bg-warning">[LINK TO WEBSITE]</span> which serves
            as a repository of adaptation strategies for SLR to give users the
            opportunity to explore how different approaches could support
            decision-making for building resilience in coastal adaptation
            planning. This research has been funded by National Resources
            Canada.
          </p>
          <p>
            This report provides an overview of the implications of different
            adaptation strategies from both global and national case studies.
            Each case highlights the context, duration, cost, and scale of each
            strategy. Because each case study represents different contexts the
            technical, institutional, and organizational requirements and the
            cost to implement each strategy vary.
          </p>
        </ContentRow>
      </Layout>
    )
  }
}

export default Index

Index.propTypes = {
  data: PropTypes.object,
  location: PropTypes.object
}

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
