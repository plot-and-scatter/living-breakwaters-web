import PropTypes from "prop-types"
import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout/Layout"
import SEO from "../components/SEO"
// import BannerRow from "../components/Rows/BannerRow"

// import image from "../../content/assets/images/alistair-mackenzie-EEgtTQPQ81Q-unsplash.jpg"

import "./Map.scss"

import LAYERS from "../static/layers.json"

import mapboxgl from "mapbox-gl"

const BASE_URL =
  "https://plotandscatter.s3-us-west-2.amazonaws.com/living-breakwaters/wgs84"

mapboxgl.accessToken =
  "pk.eyJ1IjoiaGFuZ2xlciIsImEiOiJjazc2cHF1c2gwMGMwM2RteGcxenlnczYwIn0.XpPcoTossLBlfGYEfk8sng"

class Map extends React.Component {
  constructor(props) {
    super(props)

    this.mapRef = React.createRef()
    this.addLayer = this.addLayer.bind(this)
    this.onCheckboxChange = this.onCheckboxChange.bind(this)
  }

  addLayer(layer) {
    console.log("layer", layer)
    const type = layer.type
    this.map.addSource(`${layer.id}`, {
      type: "geojson",
      data: `${BASE_URL}/${layer.id}.geojson`,
    })
    this.map.addLayer({
      id: layer.id,
      type: type,
      source: `${layer.id}`,
      layout: { visibility: "visible" },
      paint: {
        [`${type}-color`]: layer.color,
        [`${type}-opacity`]: layer.opacity,
      },
    })
    console.log(this.map.getLayer(layer.id))
  }

  onCheckboxChange(event) {
    console.log("event.target.value", event.target.value, event.target.checked)
    const id = event.target.value
    if (this.addedLayers && this.addedLayers[id]) {
      // The layer is already on the map; toggle its visibility
    } else {
      // This can only ever happen when the layer is first added, so we don't
      // need to test for whether the box has been checked or not
      this.addLayer(LAYERS[event.target.value])
      this.addedLayers[id] = true
    }
  }

  componentDidMount() {
    console.log(this.mapRef.current)

    // mapbox://styles/mapbox/...
    // Styles: streets-v11, light-v10, outdoors-v11, satellite-v9
    // Custom outdoors: mapbox://styles/hangler/ck9d26xev0g6l1ipb2qhrwy3y
    this.map = new mapboxgl.Map({
      container: "Map",
      style: "mapbox://styles/mapbox/light-v10",
      center: [-123.1, 49.2], // Vancouver,
      bounds: [
        [-123.5, 48.9],
        [-122.25, 49.4],
      ],
      zoom: 9,
      minZoom: 2,
      maxZoom: 15,
    })
    this.map.addControl(new mapboxgl.NavigationControl())

    // console.log(LAYERS)

    this.addedLayers = {}

    this.layers = this.map.on("load", () => {})
  }

  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title

    console.log(LAYERS)

    const checkboxes = Object.values(LAYERS).map(layer => {
      return (
        <div key={layer.id} className="form-check">
          <input
            type="checkbox"
            id={layer.id}
            name={layer.id}
            value={layer.id}
            className="form-check-input"
            onChange={this.onCheckboxChange}
          />
          <label htmlFor={layer.id} className="form-check-label">
            {layer.name}
          </label>
        </div>
      )
    })

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
        <div className="row mt-3">
          <div className="col-3">
            <form>{checkboxes}</form>
          </div>
          <div className="col-9">
            <div className="Map" id="Map" ref={this.mapRef} />
          </div>
        </div>
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
