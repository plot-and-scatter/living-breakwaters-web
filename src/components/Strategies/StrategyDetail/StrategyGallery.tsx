import React from 'react'
import FixTypeLater from '../../../@types/FixTypeLater'

interface Props {
  images: FixTypeLater[]
}

const StrategyGallery = ({ images }: Props): JSX.Element => {
  return (
    <div className="col Images">
      <div className="row ImagesTitle">
        <h2>
          <i className="fas fa-images mr-2"></i> Gallery
        </h2>
      </div>

      {images &&
        images.map((imageHtml, index) => {
          return (
            <div className="col-12" key={index}>
              <div
                className="Image"
                dangerouslySetInnerHTML={{ __html: imageHtml }}
              />
            </div>
          )
        })}
    </div>
  )
}

export default StrategyGallery
