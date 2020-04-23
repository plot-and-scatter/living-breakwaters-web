import PropTypes from "prop-types"
import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout/Layout"
import SEO from "../components/SEO"
import BannerRow from "../components/Rows/BannerRow"

import image from "../../content/assets/images/alistair-mackenzie-EEgtTQPQ81Q-unsplash.jpg"

import "./Map.scss"

import mapboxgl from "mapbox-gl"

mapboxgl.accessToken =
  "pk.eyJ1IjoiaGFuZ2xlciIsImEiOiI4VXhDYlFnIn0.DoacKWeoUZwE-UPhf9sCMQ"

class Map extends React.Component {
  constructor(props) {
    super(props)

    this.mapRef = React.createRef()
  }

  componentDidMount() {
    console.log(this.mapRef.current)

    this.map = new mapboxgl.Map({
      container: "Map",
      style: "mapbox://styles/mapbox/streets-v11",
    })
  }

  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="Map" />
        {/* <BannerRow
          bgColorRGB={"rgb(255, 255, 255)"}
          bgOpacity={0.0}
          bgImage={image}
          textDark
        >
          Map
        </BannerRow> */}
        <div className="Map mt-3" id="Map" ref={this.mapRef}></div>
      </Layout>
    )
  }
}

export default Map

Map.propTypes = {
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
