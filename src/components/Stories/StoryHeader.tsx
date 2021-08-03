import React from 'react'
import BannerRow from '../Rows/BannerRow'

export interface StoryHeaderProps {
  imageSrc: string
  intro: React.ReactNode
  lead: React.ReactNode
  title: string
}

const StoryHeader = ({
  imageSrc,
  title,
  lead,
  intro
}: StoryHeaderProps): JSX.Element => {
  return (
    <div className="StoryHeader">
      <BannerRow bgOpacity={0.3} bgImage={imageSrc} short>
        <a id="intro" />
        <div className="col-12 col-md-10 offset-md-1 col-lg-8 offset-lg-2">
          <p className="Cutout mb-5">{title}</p>
        </div>
        <div className="w-100" />
        <div
          className="lead col-12 col-md-8 offset-md-1 col-lg-6 offset-lg-2"
          style={{ textShadow: '0px 1px #000' }}
        >
          {lead}
        </div>
      </BannerRow>
      <div className="Intro row mt-5">
        <div className="col-12 col-md-9 col-lg-6 offset-md-1 offset-lg-2">
          <p>{intro}</p>
        </div>
      </div>
    </div>
  )
}

export default StoryHeader
