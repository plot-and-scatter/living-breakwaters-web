import React from "react"

import "./Ground.scss"

const BASE_HEIGHT = 400
const BASE_WIDTH = 1250

const Ground = ({ narrativeStage }) => {
  return (
    <svg
      className="Ground"
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      // style={{ width: "100%" }}
      height={BASE_HEIGHT}
      width={BASE_WIDTH}
      viewBox={`0 0 ${BASE_WIDTH} ${BASE_HEIGHT}`}
      preserveAspectRatio="none"
    >
      <path
        d={`M 0 ${BASE_HEIGHT / 2}
            Q ${BASE_WIDTH / 2} 5, ${BASE_WIDTH} ${BASE_HEIGHT / 2}
            `}
      />
    </svg>
  )
}

export default Ground
