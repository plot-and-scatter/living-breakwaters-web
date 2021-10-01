import React, { useState } from 'react'
import { MapLayerManagerProvider } from '../Data/MapLayerManager'

import MapComponent from './Map'

import image1 from '../../../content/assets/images/map-preview.png'
import LaunchButton from '../Layout/LaunchButton'

interface Props {}

const MapFrame = (props: Props): JSX.Element => {
  const [activeMap, setActiveMap] = useState<boolean>(false)

  return (
    <MapLayerManagerProvider>
      <div className="MapFrame row">
        {!activeMap && (
          <div className="col-12">
            <div className="row mt-5">
              <div className="col-12 col-sm-10 offset-sm-1 col-md-8 offset-md-2 col-lg-6 offset-lg-3">
                <p className="lead Highlight">
                  Map introduction text. Sed ut perspiciatis unde omnis iste
                  natus error sit voluptatem accusantium doloremque laudantium,
                  totam rem aperiam, eaque ipsa quae ab illo inventore veritatis
                  et quasi architecto beatae vitae dicta sunt explicabo. Nemo
                  enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                  aut fugit, sed quia consequuntur magni dolores eos qui ratione
                  voluptatem sequi nesciunt. Neque porro quisquam est, qui
                  dolorem ipsum quia dolor sit amet, consectetur, adipisci
                  velit, sed quia non numquam eius modi tempora incidunt ut
                  labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad
                  minima veniam, quis nostrum exercitationem ullam corporis
                  suscipit laboriosam, nisi ut aliquid ex ea commodi
                  consequatur? Quis autem vel eum iure reprehenderit qui in ea
                  voluptate velit esse quam nihil molestiae consequatur, vel
                  illum qui dolorem eum fugiat quo voluptas nulla pariatur?
                </p>
              </div>

              <div className="col-6 mt-5 offset-3">
                <div className="row mb-5">
                  <div
                    className="col-12"
                    onClick={() => setActiveMap(true)}
                    style={{ cursor: 'pointer' }}
                  >
                    <img
                      className="shadow-sm border border-dark"
                      src={image1}
                      style={{ maxWidth: '100%' }}
                    />
                    <div className="mt-4 text-center">
                      <LaunchButton text={'Explore interactive map'} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        {activeMap && (
          <div className="TableauWrapper col-12">
            <MapComponent />
          </div>
        )}
      </div>
    </MapLayerManagerProvider>
  )
}

export default MapFrame
