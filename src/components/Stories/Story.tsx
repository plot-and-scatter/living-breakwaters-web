/* eslint-disable @typescript-eslint/no-non-null-assertion */
import React, { useRef } from 'react'

// import JumpTo from './JumpTo'
import SEO from '../SEO'
import StoryHeader, { StoryHeaderProps } from './StoryHeader'
import StoryMap, { StoryMapProps } from './StoryMap'
import StoryNarrative, { StoryNarrativeProps } from './StoryNarrative'
import StoryResources from './StoryResources'

import './Story.scss'

interface Props extends StoryHeaderProps, StoryMapProps, StoryNarrativeProps {
  path: string
}

const Story = (props: Props): JSX.Element => {
  const storyRef = useRef<HTMLDivElement>(null)

  return (
    <div className="Story" ref={storyRef}>
      <SEO title="Story" />
      {/* <JumpTo path={path} /> */}
      <StoryHeader {...props} />
      <StoryMap storyRef={storyRef} {...props} />
      <StoryNarrative storyRef={storyRef} {...props} />
      <StoryResources />
    </div>
  )
}

export default Story
