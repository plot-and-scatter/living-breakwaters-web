import React from 'react'

import { viewBox } from '../PlaceableSVGHelper'
import PlaceableSVG from '../PlaceableSVG'
import PlaceableSVGProps from '../../../../@types/PlaceableSVGProps'

// import './PowerGenerator.scss'

const PowerGenerator = (props: PlaceableSVGProps): JSX.Element => {
  return (
    <PlaceableSVG
      viewBoxObj={viewBox(0, 0, 28, 45)}
      defaultScale={0.3}
      extraClasses="PowerGenerator"
      {...props}
    >
     <g clip-path="url(#clip-path)"><g clip-path="url(#clip-path-2)"><path class="cls-4" d="M.5 20.85h27.19v23.49H.5z"/><path stroke="#231f20" stroke-miterlimit="10" fill="none" d="M.5 20.85h27.19v23.49H.5z"/><path class="cls-4" d="M12.77.25h1.57v2.96h-1.57z"/><path class="cls-6" d="M12.77.25h1.57v2.96h-1.57z"/><path class="cls-4" d="M9.45 5.4V3.21h8.21V5.4"/><path class="cls-6" d="M9.45 5.4V3.21h8.21V5.4"/><path class="cls-4" d="M2013.75 395.26c0-5.61-2.33-7.93-7.94-7.93s-7.93 2.32-7.93 7.93 2.32 7.94 7.93 7.94 7.94-2.33 7.94-7.94" transform="translate(-1992.08 -362.24)"/><path class="cls-6" d="M2013.75 395.26c0-5.61-2.33-7.93-7.94-7.93s-7.93 2.32-7.93 7.93 2.32 7.94 7.93 7.94 7.94-2.33 7.94-7.94z" transform="translate(-1992.08 -362.24)"/><path class="cls-4" d="M12.06 28.34h3.05l-1.15 4.48h2.1l-2.76 5.91.38-3.71h-2.1l.48-6.68z"/><path class="cls-6" d="M12.06 28.34h3.05l-1.15 4.48h2.1l-2.76 5.91.38-3.71h-2.1l.48-6.68z"/><path class="cls-4" d="M14.56 5.4h6.2v14.31h-6.2z"/><path class="cls-6" d="M14.56 5.4h6.2v14.31h-6.2z"/><path class="cls-4" d="M6.35 5.4h6.2v14.31h-6.2z"/><path class="cls-6" d="M6.35 5.4h6.2v14.31h-6.2z"/></g></g>
    </PlaceableSVG>
  )
}

export default PowerGenerator
