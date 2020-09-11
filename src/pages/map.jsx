import PropTypes from "prop-types"
import React from "react"
import { graphql } from "gatsby"
import mapboxgl from "mapbox-gl"

import Layout from "../components/Layout/Layout"
import SEO from "../components/SEO"
// import BannerRow from "../components/Rows/BannerRow"

// import image from "../../content/assets/images/alistair-mackenzie-EEgtTQPQ81Q-unsplash.jpg"

import "./Map.scss"
import "../components/Map/Layers/Layers.scss"
import "../components/Map/Scenarios/Scenarios.scss"


import SCENARIOS from "../static/scenarios.json"

import ScenarioCard from "../components/Map/Scenarios/ScenarioCard"

const BASE_URL =
  "https://plotandscatter.s3-us-west-2.amazonaws.com/living-breakwaters/wgs84"

mapboxgl.accessToken =
  "pk.eyJ1IjoiaGFuZ2xlciIsImEiOiJjazc2cHF1c2gwMGMwM2RteGcxenlnczYwIn0.XpPcoTossLBlfGYEfk8sng"

import LayerModal from "../components/Map/Modals/LayerModal"
import LayerSelect from "../components/Map/Layers/LayerSelect"
import LayerCheckbox from "../components/Map/Layers/LayerCheckbox"
import LayerLabel from "../components/Map/Layers/LayerLabel"

const Map = () => {

    this.state = {
      showLayerInteraction: false,
      showScenarioInteraction: false,
    }

    this.mapRef = React.createRef()
    this.addLayer = this.addLayer.bind(this)
    this.toggleIdCallback = this.toggleIdCallback.bind(this)
    this.scenarioClickCallback = this.scenarioClickCallback.bind(this)

    this.addedLayers = {}
  }

  addLayer(layer) {
    // console.log("layer", layer)
    const type = layer.type

    if (layer.id === "wetlands") {
      this.map.loadImage("/icons/WetlandsTiny.png", (err, image) => {
        // Throw an error if something went wrong
        if (err) throw err

        console.log("in here too", this)
        // Declare the image
        this.map.addImage("pattern", image)

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
            "fill-color": "green",
            "fill-pattern": "pattern",
          },
        })
      })
    } else {
      const layersToAdd = layer.layers ? layer.layers : [layer]

      layersToAdd.forEach(layerToAdd => {
        this.map.addSource(`${layerToAdd.id}`, {
          type: "geojson",
          data: `${BASE_URL}/${layerToAdd.id}.geojson`,
        })
        const paint = {
          [`${type}-color`]: layerToAdd.color,
          [`${type}-opacity`]: layerToAdd.opacity,
        }
        if (type === "line") {
          paint[`line-width`] = layerToAdd[`line-weight`] || 1
          if (layerToAdd[`line-dasharray`]) {
            paint[`line-dasharray`] = layerToAdd[`line-dasharray`]
          }
          if (layerToAdd[`line-gap-width`]) {
            paint[`line-gap-width`] = layerToAdd[`line-gap-width`]
          }
        }
        this.map.addLayer({
          id: layerToAdd.id,
          type: type,
          source: `${layerToAdd.id}`,
          layout: { visibility: "visible" },
          paint,
        })
      })
    }
  }

  toggleIdCallback(toggleTuple) {
    const [id, checked] = toggleTuple

    const layersToToggle = LAYERS[id].layers ? LAYERS[id].layers : [LAYERS[id]]
    layersToToggle.forEach(layer => {
      const layerId = layer.id
      if (this.addedLayers && this.addedLayers[layerId]) {
        // The layer is already on the map; toggle its visibility
        const visibility = checked ? "visible" : "none"
        // const layer = this.map.getLayer(id)
        this.map.setLayoutProperty(layerId, "visibility", visibility)
      } else {
        // This can only ever happen when the layer is first added, so we don't
        // need to test for whether the box has been checked or not
        this.addLayer(layer)
        this.addedLayers[layerId] = true
      }
    })
  }

  componentDidMount() {
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

    this.map.on("load", () => {})
  }

  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title



    console.log("visibleLayerKeys", visibleLayerKeys)

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="Map" />
        <div className="MapRow row">
          <div className="col-12">
            <Map />
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
