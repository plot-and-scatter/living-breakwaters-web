import React from 'react'

import HeavyRain from '../PlaceableSVGs/HeavyRain'
import Land from './SVGGroups/Land'
import House4 from '../PlaceableSVGs/Buildings/House4'
import House1 from '../PlaceableSVGs/Buildings/House1'
import Car from '../PlaceableSVGs/Vehicles/Car'
import PowerGenerator from '../PlaceableSVGs/Objects/PowerGenerator'
import Hospital from '../PlaceableSVGs/Buildings/Hospital'
import Store from '../PlaceableSVGs/Buildings/Store'
import TrafficLight from '../PlaceableSVGs/Objects/TrafficLight'
import TrafficLight2 from '../PlaceableSVGs/Objects/TrafficLight2'
import TransmissionTower from '../PlaceableSVGs/Objects/TransmissionTower'
import Factory from '../PlaceableSVGs/Buildings/Factory'
import Roots from '../PlaceableSVGs/Trees/Roots'
import Grass from '../PlaceableSVGs/Plants/Grass'
import PowerCable from '../PlaceableSVGs/Objects/PowerCable'
import LongPowerCable from '../PlaceableSVGs/Objects/LongPowerCable'

import SVGFrame from '../Frames/SVGFrame'

import '../PlaceableSVGs/Elements.scss'
import './UtilitySystemsTableau.scss'

const UtilitySystemsTableau = (): JSX.Element => {
  return (
    <div className="UtilitySystemsTableau">
      <SVGFrame id="UtilitySystemsTableau">
        <HeavyRain xOffset={0} yOffset={0.35} />
        <Land />
        <g id="Buildings">
          <House4 xOffset={0.98} yOffset={0.47} scale={0.02} />
          <House1 xOffset={0.942} yOffset={0.47} scale={0.025} />
          <Hospital xOffset={0.762} yOffset={0.656} scale={0.05} />
          <Store xOffset={0.745} yOffset={0.827} scale={0.015} />
          <House1 xOffset={0.672} yOffset={0.696} scale={0.025} />
          <House4 xOffset={0.65} yOffset={0.697} scale={0.02} />
          <Factory xOffset={0.422} yOffset={0.681} scale={0.08} />
        </g>
        <g id="Vehicles">
          <Car xOffset={0.97} yOffset={0.489} scale={0.008} />
          <Car xOffset={0.724} yOffset={0.716} scale={0.008} />
          <Car xOffset={0.707} yOffset={0.717} scale={0.008} />
        </g>
        <g id="Objects">
          <PowerGenerator xOffset={0.812} yOffset={0.685} scale={0.01} />
          <TrafficLight xOffset={0.738} yOffset={0.7} scale={0.0035} />
          <TrafficLight2 xOffset={0.702} yOffset={0.695} scale={0.01} />
          <TransmissionTower xOffset={0.53} yOffset={0.685} scale={0.06} />
          <PowerCable xOffset={0.5855} yOffset={0.75} scale={0.4017} />
          <LongPowerCable xOffset={0.585} yOffset={0.82} scale={0.0037} />
          <LongPowerCable xOffset={0.659} yOffset={0.795} scale={0.0049} />
          <LongPowerCable xOffset={0.68} yOffset={0.794} scale={0.0046} />
          <LongPowerCable xOffset={0.7} yOffset={0.794} scale={0.0046} />
          <LongPowerCable xOffset={0.737} yOffset={0.792} scale={0.005} />
          <LongPowerCable xOffset={0.754} yOffset={0.785} scale={0.0051} />
          <LongPowerCable xOffset={0.8} yOffset={0.775} scale={0.0043} />
          <LongPowerCable xOffset={0.95} yOffset={0.564} scale={0.0043} />
          <LongPowerCable xOffset={0.985} yOffset={0.563} scale={0.0043} />
        </g>
        <g id="Trees">
          <Roots xOffset={0.4} yOffset={0.795} scale={0.007} />
          <Roots xOffset={0.395} yOffset={0.799} scale={0.006} />
          <Roots xOffset={0.388} yOffset={0.809} scale={0.008} />
          <Roots xOffset={0.385} yOffset={0.805} scale={0.005} />
          <Roots xOffset={0.382} yOffset={0.805} scale={0.005} />
          <Roots xOffset={0.377} yOffset={0.807} scale={0.005} />
          <Roots xOffset={0.365} yOffset={0.807} scale={0.005} />
          <Roots xOffset={0.358} yOffset={0.814} scale={0.008} />
          <Roots xOffset={0.355} yOffset={0.809} scale={0.006} />
          <Roots xOffset={0.351} yOffset={0.809} scale={0.006} />
          <Roots xOffset={0.347} yOffset={0.807} scale={0.005} />
          <Roots xOffset={0.342} yOffset={0.807} scale={0.004} />
          <Roots xOffset={0.338} yOffset={0.807} scale={0.004} />
          <Roots xOffset={0.334} yOffset={0.807} scale={0.004} />
          <Roots xOffset={0.33} yOffset={0.807} scale={0.005} />
          <Roots xOffset={0.326} yOffset={0.807} scale={0.004} />
          <Roots xOffset={0.322} yOffset={0.807} scale={0.005} />
          <Roots xOffset={0.318} yOffset={0.807} scale={0.005} />
          <Roots xOffset={0.314} yOffset={0.807} scale={0.005} />
          <Roots xOffset={0.308} yOffset={0.808} scale={0.006} />
          <Roots xOffset={0.304} yOffset={0.805} scale={0.004} />
          <Roots xOffset={0.3} yOffset={0.805} scale={0.004} />
          <Roots xOffset={0.295} yOffset={0.805} scale={0.005} />
          <Roots xOffset={0.29} yOffset={0.805} scale={0.005} />
          <Roots xOffset={0.285} yOffset={0.809} scale={0.007} />
          <Roots xOffset={0.28} yOffset={0.809} scale={0.007} />
          <Roots xOffset={0.275} yOffset={0.81} scale={0.007} />
          <Roots xOffset={0.27} yOffset={0.812} scale={0.007} />
          <Roots xOffset={0.265} yOffset={0.812} scale={0.007} />
          <Roots xOffset={0.261} yOffset={0.81} scale={0.005} />
          <Roots xOffset={0.256} yOffset={0.81} scale={0.005} />
          <Roots xOffset={0.251} yOffset={0.81} scale={0.005} />
          <Roots xOffset={0.246} yOffset={0.812} scale={0.005} />
          <Roots xOffset={0.24} yOffset={0.812} scale={0.005} />
          <Roots xOffset={0.235} yOffset={0.813} scale={0.005} />
          <Roots xOffset={0.23} yOffset={0.816} scale={0.006} />
          <Roots xOffset={0.225} yOffset={0.817} scale={0.006} />
          <Roots xOffset={0.221} yOffset={0.817} scale={0.004} />
          <Roots xOffset={0.217} yOffset={0.817} scale={0.004} />
          <Roots xOffset={0.213} yOffset={0.817} scale={0.004} />
        </g>
        <g id="Plants">
          <Grass xOffset={0.338} yOffset={0.787} scale={0.003} />
          <Grass xOffset={0.333} yOffset={0.783} scale={0.005} />
          <Grass xOffset={0.33} yOffset={0.783} scale={0.005} />
          <Grass xOffset={0.327} yOffset={0.789} scale={0.003} />
          <Grass xOffset={0.324} yOffset={0.789} scale={0.003} />
          <Grass xOffset={0.321} yOffset={0.789} scale={0.003} />
          <Grass xOffset={0.318} yOffset={0.789} scale={0.003} />
          <Grass xOffset={0.314} yOffset={0.785} scale={0.004} />
          <Grass xOffset={0.309} yOffset={0.782} scale={0.005} />
          <Grass xOffset={0.303} yOffset={0.779} scale={0.006} />
          <Grass xOffset={0.3} yOffset={0.779} scale={0.005} />
          <Grass xOffset={0.296} yOffset={0.783} scale={0.004} />
          <Grass xOffset={0.293} yOffset={0.785} scale={0.003} />
          <Grass xOffset={0.291} yOffset={0.785} scale={0.003} />
          <Grass xOffset={0.288} yOffset={0.785} scale={0.003} />
          <Grass xOffset={0.285} yOffset={0.785} scale={0.003} />
          <Grass xOffset={0.282} yOffset={0.785} scale={0.003} />
          <Grass xOffset={0.279} yOffset={0.785} scale={0.003} />
          <Grass xOffset={0.276} yOffset={0.785} scale={0.003} />
          <Grass xOffset={0.273} yOffset={0.786} scale={0.003} />
          <Grass xOffset={0.27} yOffset={0.786} scale={0.003} />
          <Grass xOffset={0.266} yOffset={0.786} scale={0.004} />
          <Grass xOffset={0.261} yOffset={0.785} scale={0.005} />
          <Grass xOffset={0.256} yOffset={0.783} scale={0.006} />
          <Grass xOffset={0.251} yOffset={0.784} scale={0.005} />
          <Grass xOffset={0.248} yOffset={0.791} scale={0.003} />
          <Grass xOffset={0.245} yOffset={0.791} scale={0.003} />
          <Grass xOffset={0.241} yOffset={0.791} scale={0.004} />
          <Grass xOffset={0.235} yOffset={0.787} scale={0.006} />
          <Grass xOffset={0.231} yOffset={0.793} scale={0.004} />
          <Grass xOffset={0.227} yOffset={0.793} scale={0.004} />
          <Grass xOffset={0.223} yOffset={0.793} scale={0.004} />
          <Grass xOffset={0.22} yOffset={0.797} scale={0.003} />
          <Grass xOffset={0.217} yOffset={0.797} scale={0.003} />
          <Grass xOffset={0.215} yOffset={0.8} scale={0.002} />
        </g>
      </SVGFrame>
    </div>
  )
}

export default UtilitySystemsTableau
