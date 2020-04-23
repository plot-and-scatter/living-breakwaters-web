import PropTypes from "prop-types"
import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout/Layout"
import SEO from "../components/SEO"
// import BannerRow from "../components/Rows/BannerRow"

// import image from "../../content/assets/images/alistair-mackenzie-EEgtTQPQ81Q-unsplash.jpg"

import "./Map.scss"

import mapboxgl from "mapbox-gl"

mapboxgl.accessToken =
  "pk.eyJ1IjoiaGFuZ2xlciIsImEiOiJjazc2cHF1c2gwMGMwM2RteGcxenlnczYwIn0.XpPcoTossLBlfGYEfk8sng"

class Map extends React.Component {
  constructor(props) {
    super(props)

    this.mapRef = React.createRef()
  }

  componentDidMount() {
    console.log(this.mapRef.current)

    // Styles: streets-v11, light-v10, outdoors-v11, satellite-v9
    this.map = new mapboxgl.Map({
      container: "Map",
      style: "mapbox://styles/hangler/ck9d26xev0g6l1ipb2qhrwy3y",
      center: [-123.1, 49.2], // Vancouver
      zoom: 9,
    })
    this.map.addControl(new mapboxgl.NavigationControl())
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
