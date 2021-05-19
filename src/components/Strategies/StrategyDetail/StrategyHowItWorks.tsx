/* globals $ */

import React, { useLayoutEffect } from 'react'
import FixTypeLater from '../../../@types/FixTypeLater'

import './StrategyHowItWorks.scss'

interface Props {
  images: FixTypeLater[]
}

const HowItWorks = ({ images }: Props): JSX.Element => {
  useLayoutEffect(() => {
    ;($('#carouselExampleFade') as FixTypeLater).carousel()
  }, [])

  return (
    <div className="Illustration HowItWorks col-8">
      <h2>How it works</h2>

      <div
        id="carouselExampleFade"
        className="carousel slide carousel-fade"
        // data-ride="carousel"
        data-interval={2000}
      >
        <ol className="carousel-indicators">
          {images.map((_, index) => {
            return (
              <li
                key={index}
                data-target="#carouselExampleFade"
                data-slide-to={index}
              ></li>
            )
          })}
        </ol>
        <div className="carousel-inner">
          {images.map((node, index) => {
            return (
              <div
                key={index}
                className={`carousel-item ${index === 0 ? ' active' : ''}`}
              >
                <img
                  className="d-block w-100"
                  src={node.childImageSharp.fluid.src}
                />
              </div>
            )
          })}
        </div>
        <a
          className="carousel-control-prev"
          href="#carouselExampleFade"
          role="button"
          data-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselExampleFade"
          role="button"
          data-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    </div>
  )
}

export default HowItWorks
