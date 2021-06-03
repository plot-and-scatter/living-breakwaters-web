import React from 'react'
import FixTypeLater from '../../../@types/FixTypeLater'

interface Props {
  images: string[]
  citationHTML: FixTypeLater
}

const StrategyGallery = ({ images, citationHTML }: Props): JSX.Element => {
  return (
    <div className="col-4 Images">
      <div className="row ImagesTitle">
        <h2>
          <i className="fas fa-book mr-2"></i> Citations
        </h2>
      </div>

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
