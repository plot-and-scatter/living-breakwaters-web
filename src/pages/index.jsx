import PropTypes from "prop-types"
import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout/Layout"
import SEO from "../components/SEO"
import BannerRow from "../components/Rows/BannerRow"
import ContentRow from "../components/Rows/ContentRow"

import image from "../../content/assets/images/annie-spratt-E5PDOC7mTvc-unsplash.jpg"

class Index extends React.Component {
  render() {
    const { data, location } = this.props
    const siteTitle = data.site.siteMetadata.title

    return (
      <Layout location={location} title={siteTitle}>
        <SEO title="Home" />

        <BannerRow bgOpacity={0.2} bgImage={image}>
          <span className="Cutout">Living Breakwaters</span>
        </BannerRow>

        <ContentRow rowClasses="p-5">
          <p className="lead">
            Rising sea levels and increased frequency and severity of extreme
            weather events due to climate change, damage coastal buildings,
            infrastructures, and beaches, impacting municipalities, First
            Nations, and Provincial and Federal governments. In order to
            implement mitigation and adaptation strategies, Natural Resources
            Canada has provided generous support to the Living Breakwaters
            project to develop a layered approach to coastal adaptation that
            incorporates living systems and enhances local and regional
            ecosystems and spatial quality while reducing flood/erosion risks
            and vulnerabilities caused by sea level rise.
          </p>
        </ContentRow>
      </Layout>
    )
  }
}

export default Index

Index.propTypes = {
  data: PropTypes.object,
  location: PropTypes.object,
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
