import React from "react"
import { gsap, TimelineMax, Power2, Elastic } from "gsap"

import "./Ground.scss"
import { useCallback } from "react"
import { useEffect } from "react"
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin"
import { useRef } from "react"

if (gsap) gsap.registerPlugin(MorphSVGPlugin)

const H = 400
const W = 1250

const Ground = ({ narrativeStage }) => {
  useEffect(() => {
    console.log("here")
  }, [])

  const groundBaseRef = useRef(null)
  const groundAltRef = useRef(null)

  const timeline = useRef()

  useEffect(() => {
    timeline.current = new TimelineMax({ paused: true })
      .to("#GroundBase", 1, {
        morphSVG: { shape: "#GroundAlt" },
        ease: Power2.easeInOut,
      })
      .to(
        document.body,
        {
          duration: 1,
          backgroundColor: "#1d1d1d",
          ease: Power2.easeInOut,
        },
        "-=1"
      )
  }, [])

  const btnClick = useCallback(() => {
    console.log("Click!")
    // console.log("timelineRef", timelineRef.current, timelineRef.current.time())
    if (timeline.current.time() > 0) {
      console.log("out there")
      timeline.current.reverse()
    } else {
      console.log("in here")
      timeline.current.play(0)
    }
  }, [])

  return (
    <>
      <svg
        className="Ground"
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        // style={{ width: "100%" }}
        height={H}
        width={W}
        viewBox={`0 0 ${W} ${H}`}
        preserveAspectRatio="none"
      >
        {/* <path
          id="GroundBase"
          ref={groundBaseRef}
          fill="none"
          stroke="#333333"
          strokeWidth="10"
          d={`M 0 ${H / 2}
            Q ${(W * 1) / 4} 5, ${(W * 1) / 4} ${H / 2}
            Q ${(W * 2) / 4} 5, ${(W * 2) / 4} ${H / 2}
            Q ${(W * 3) / 4} 5, ${(W * 3) / 4} ${H / 2}
            Q ${(W * 4) / 4} 5, ${(W * 4) / 4} ${H / 2}
            `}
        />
        <path
          fill="none"
          stroke="none"
          id="GroundAlt"
          ref={groundAltRef}
          d={`M 0 ${H / 2}
            Q ${(W * 1) / 4} ${H - 5}, ${(W * 1) / 4} ${H / 2}
            Q ${(W * 2) / 4} ${H - 5}, ${(W * 2) / 4} ${H / 2}
            Q ${(W * 3) / 4} ${H - 5}, ${(W * 3) / 4} ${H / 2}
            Q ${(W * 4) / 4} ${H - 5}, ${(W * 4) / 4} ${H / 2}
            `}
        /> */}
        <path
          id="GroundBase"
          ref={groundBaseRef}
          fill="none"
          stroke="#333333"
          strokeWidth="2"
          d={`M 0 ${H - 50}
            l 200 -10
            l 100 -50 
            h 100
            l 100 60
            h 750
            `}
        />
        <path
          fill="none"
          stroke="none"
          id="GroundAlt"
          ref={groundAltRef}
          d={`M 0 ${H - 50}
            l 200 -10
            l 100 -50 
            h 100
            l 100 60
            h 760
            `}
        />
      </svg>
      <button onClick={btnClick} className="btn btn-primary">
        Click me
      </button>
    </>
  )
}

export default Ground
