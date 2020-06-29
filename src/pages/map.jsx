import PropTypes from "prop-types"
import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout/Layout"
import SEO from "../components/SEO"
// import BannerRow from "../components/Rows/BannerRow"

// import image from "../../content/assets/images/alistair-mackenzie-EEgtTQPQ81Q-unsplash.jpg"

import "./Map.scss"

import LAYERS from "../static/layers.json"
import SCENARIOS from "../static/scenarios.json"

import mapboxgl from "mapbox-gl"
import LayerSelect from "../components/Map/Options/LayerSelect"
import ScenarioCard from "../components/Map/Scenarios/ScenarioCard"

const BASE_URL =
  "https://plotandscatter.s3-us-west-2.amazonaws.com/living-breakwaters/wgs84"

mapboxgl.accessToken =
  "pk.eyJ1IjoiaGFuZ2xlciIsImEiOiJjazc2cHF1c2gwMGMwM2RteGcxenlnczYwIn0.XpPcoTossLBlfGYEfk8sng"

import image1 from "../../content/assets/images/jared-murray-NSuufgf-BME-unsplash-clipped.jpg"
import image2 from "../../content/assets/images/bre-smith-A_-piDJKVsY-unsplash-clipped.jpg"
import image3 from "../../content/assets/images/maria-cantu-9biF7RhGVjo-unsplash-clipped.jpg"

class Map extends React.Component {
  constructor(props) {
    super(props)

    this.mapRef = React.createRef()
    this.addLayer = this.addLayer.bind(this)
    this.toggleIdCallback = this.toggleIdCallback.bind(this)
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

    const layerIdsToToggle = LAYERS[id].layers
      ? LAYERS[id].layers
      : [LAYERS[id]]
    layerIdsToToggle.forEach(layer => {
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
    // this.map = new mapboxgl.Map({
    //   container: "Map",
    //   style: "mapbox://styles/mapbox/light-v10",
    //   center: [-123.1, 49.2], // Vancouver,
    //   bounds: [
    //     [-123.5, 48.9],
    //     [-122.25, 49.4],
    //   ],
    //   zoom: 9,
    //   minZoom: 2,
    //   maxZoom: 15,
    // })
    // this.map.addControl(new mapboxgl.NavigationControl())

    this.addedLayers = {}

    // this.map.on("load", () => {})
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
        <div className="row mt-3">
          <div className="col-1">
            <button
              className="btn btn-outline-primary LayerToggle"
              type="button"
              data-toggle="modal"
              data-target="#LayerSelect"
            >
              <i className="fas fa-layer-group mr-1" /> Layers
            </button>
          </div>
          <div className="modal left fade" id="LayerSelect">
            <div className="modal-dialog modal-lg" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLabel">
                    Layer select
                  </h5>
                  <button
                    type="button"
                    className="btn btn-primary"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div className="modal-body">
                  <LayerSelect toggleIdCallback={this.toggleIdCallback} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="Map" id="Map" ref={this.mapRef} />
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-12">
            <h2>Scenarios</h2>
          </div>
          <div
            className="col-12"
            style={{ overflowX: "scroll", whiteSpace: "nowrap" }}
          >
            {Object.values(SCENARIOS)
              .sort((a, b) => a.index - b.index)
              .map((s, i) => {
                const image = i === 0 ? image1 : i === 1 ? image2 : image3
                return <ScenarioCard key={s.id} scenario={s} image={image} />
              })}
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
