import React from 'react'
import FixTypeLater from '../../../@types/FixTypeLater'

import './StrategyCitations.scss'

interface Props {
  images: string[]
  citationHTML: FixTypeLater
}

const StrategyGallery = ({ images, citationHTML }: Props): JSX.Element => {
  return (
    <div className="col Images">
      <h2>
        <i className="fas fa-book mr-2 py-5"></i> Citations
      </h2>

      {/* {images &&
        images.map((imageHtml, index) => {
          return (
            <div className="col-12" key={index}>
              <div
                className="Image"
                dangerouslySetInnerHTML={{ __html: imageHtml }}
              />
            </div>
          )
        })} */}
      <div dangerouslySetInnerHTML={{ __html: citationHTML }} />
    </div>
  )
}

export default StrategyGallery
