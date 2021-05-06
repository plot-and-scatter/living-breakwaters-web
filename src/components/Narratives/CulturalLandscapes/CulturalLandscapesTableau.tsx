import React from 'react'

import HeavyRain from '../PlaceableSVGs/HeavyRain'
import Land from './SVGGroups/Land'
import SVGFrame from '../Frames/SVGFrame'
import Oak from '../PlaceableSVGs/Trees/Oak'
import Church from '../PlaceableSVGs/Buildings/Church'
import House4 from '../PlaceableSVGs/Buildings/House4'
import House1 from '../PlaceableSVGs/Buildings/House1'
import Person1 from '../PlaceableSVGs/People/Person1'
import TrafficLight from '../PlaceableSVGs/Objects/TrafficLight'
import Car from '../PlaceableSVGs/Vehicles/Car'
import TrafficLight2 from '../PlaceableSVGs/Objects/TrafficLight2'
import Grass from '../PlaceableSVGs/Plants/Grass'
import Cypress from '../PlaceableSVGs/Trees/Cypress'
import Bush1 from '../PlaceableSVGs/Plants/Bush1'
import Bush2 from '../PlaceableSVGs/Plants/Bush2'
import ModernBuilding from '../PlaceableSVGs/Buildings/ModernBuilding'
import PersonWithKid from '../PlaceableSVGs/People/PersonWithKid'
import Person2 from '../PlaceableSVGs/People/Person2'
import RoundBuilding from '../PlaceableSVGs/Buildings/RoundBuilding'
import Truck2 from '../PlaceableSVGs/Vehicles/Truck2'
import Deadwood from '../PlaceableSVGs/Trees/Deadwood'
import Wheat from '../PlaceableSVGs/Plants/Wheat'
import Roots from '../PlaceableSVGs/Trees/Roots'

import '../PlaceableSVGs/Elements.scss'
import './CulturalLandscapesTableau.scss'

const CulturalLandscapesTableau = (): JSX.Element => {
  return (
    <div className="CulturalLandscapesTableau">
      <SVGFrame id="CulturalLandscapesTableau">
        <HeavyRain xOffset={0} yOffset={0.35} />
        <Land />
        <g id="Trees">
          <Oak xOffset={0.977} yOffset={0.625} scale={0.02} />
          <Cypress xOffset={0.761} yOffset={0.592} scale={0.01} />
          <Oak xOffset={0.575} yOffset={0.613} scale={0.04} />
          <Oak xOffset={0.49} yOffset={0.595} scale={0.04} />
          <Oak xOffset={0.258} yOffset={0.64} scale={0.04} />
          <Deadwood xOffset={0.253} yOffset={0.689} scale={0.013} />
          <Deadwood xOffset={0.239} yOffset={0.72} scale={0.005} />
          <Deadwood xOffset={0.225} yOffset={0.72} scale={0.005} />
          <Roots xOffset={0.147} yOffset={0.78} scale={0.003} />
          <Roots xOffset={0.15} yOffset={0.781} scale={0.004} />
          <Roots xOffset={0.158} yOffset={0.765} scale={0.003} />
          <Roots xOffset={0.162} yOffset={0.759} scale={0.005} />
          <Roots xOffset={0.164} yOffset={0.759} scale={0.006} />
          <Roots xOffset={0.167} yOffset={0.758} scale={0.006} />
          <Roots xOffset={0.17} yOffset={0.757} scale={0.006} />
          <Roots xOffset={0.174} yOffset={0.755} scale={0.006} />
          <Roots xOffset={0.177} yOffset={0.754} scale={0.006} />
          <Roots xOffset={0.18} yOffset={0.754} scale={0.0075} />
          <Roots xOffset={0.185} yOffset={0.754} scale={0.0075} />
          <Roots xOffset={0.189} yOffset={0.753} scale={0.0075} />
          <Roots xOffset={0.194} yOffset={0.746} scale={0.005} />
          <Roots xOffset={0.196} yOffset={0.746} scale={0.005} />
          <Roots xOffset={0.198} yOffset={0.746} scale={0.005} />
          <Roots xOffset={0.201} yOffset={0.746} scale={0.005} />
          <Roots xOffset={0.203} yOffset={0.746} scale={0.005} />
          <Roots xOffset={0.205} yOffset={0.75} scale={0.007} />
          <Roots xOffset={0.209} yOffset={0.751} scale={0.007} />
          <Roots xOffset={0.213} yOffset={0.752} scale={0.007} />
          <Roots xOffset={0.217} yOffset={0.75} scale={0.005} />
          <Roots xOffset={0.22} yOffset={0.75} scale={0.005} />
          <Roots xOffset={0.223} yOffset={0.75} scale={0.005} />
          <Roots xOffset={0.223} yOffset={0.753} scale={0.007} />
          <Roots xOffset={0.225} yOffset={0.753} scale={0.007} />
          <Roots xOffset={0.229} yOffset={0.75} scale={0.005} />
          <Roots xOffset={0.231} yOffset={0.75} scale={0.005} />
          <Roots xOffset={0.233} yOffset={0.75} scale={0.005} />
          <Roots xOffset={0.235} yOffset={0.75} scale={0.005} />
          <Roots xOffset={0.236} yOffset={0.755} scale={0.0075} />
          <Roots xOffset={0.24} yOffset={0.75} scale={0.005} />
          <Roots xOffset={0.243} yOffset={0.75} scale={0.005} />
          <Roots xOffset={0.246} yOffset={0.75} scale={0.005} />
          <Roots xOffset={0.249} yOffset={0.75} scale={0.005} />
          <Roots xOffset={0.252} yOffset={0.75} scale={0.005} />
          <Roots xOffset={0.252} yOffset={0.757} scale={0.0085} />
          <Roots xOffset={0.257} yOffset={0.75} scale={0.005} />
          <Roots xOffset={0.26} yOffset={0.75} scale={0.005} />
          <Roots xOffset={0.263} yOffset={0.75} scale={0.005} />
          <Roots xOffset={0.266} yOffset={0.749} scale={0.005} />
          <Roots xOffset={0.269} yOffset={0.749} scale={0.005} />
          <Roots xOffset={0.27} yOffset={0.752} scale={0.0075} />
          <Roots xOffset={0.274} yOffset={0.75} scale={0.005} />
          <Roots xOffset={0.27} yOffset={0.765} scale={0.014} />
          <Roots xOffset={0.278} yOffset={0.745} scale={0.005} />
          <Roots xOffset={0.28} yOffset={0.741} scale={0.005} />
          <Roots xOffset={0.282} yOffset={0.737} scale={0.005} />
          <Roots xOffset={0.284} yOffset={0.735} scale={0.006} />
          <Roots xOffset={0.287} yOffset={0.732} scale={0.006} />
          <Roots xOffset={0.291} yOffset={0.732} scale={0.0075} />
          <Roots xOffset={0.295} yOffset={0.728} scale={0.0055} />
          <Roots xOffset={0.352} yOffset={0.72} scale={0.0055} />
          <Roots xOffset={0.355} yOffset={0.718} scale={0.0055} />
          <Roots xOffset={0.358} yOffset={0.716} scale={0.0055} />
          <Roots xOffset={0.36} yOffset={0.714} scale={0.0055} />
          <Roots xOffset={0.362} yOffset={0.712} scale={0.0055} />
          <Roots xOffset={0.364} yOffset={0.71} scale={0.0055} />
          <Roots xOffset={0.366} yOffset={0.708} scale={0.0055} />
          <Roots xOffset={0.368} yOffset={0.706} scale={0.0065} />
          <Roots xOffset={0.37} yOffset={0.705} scale={0.0065} />
          <Roots xOffset={0.49} yOffset={0.70} scale={0.0065} />
          <Roots xOffset={0.492} yOffset={0.704} scale={0.0095} />
          <Roots xOffset={0.499} yOffset={0.703} scale={0.0065} />
          <Roots xOffset={0.502} yOffset={0.703} scale={0.0065} />
          <Roots xOffset={0.503} yOffset={0.717} scale={0.013} />
          <Roots xOffset={0.511} yOffset={0.705} scale={0.006} />
          <Roots xOffset={0.515} yOffset={0.705} scale={0.006} />
          <Roots xOffset={0.52} yOffset={0.705} scale={0.006} />
          <Roots xOffset={0.549} yOffset={0.709} scale={0.004} />
          <Roots xOffset={0.551} yOffset={0.709} scale={0.004} />
          <Roots xOffset={0.553} yOffset={0.709} scale={0.004} />
          <Roots xOffset={0.555} yOffset={0.712} scale={0.004} />
          <Roots xOffset={0.557} yOffset={0.712} scale={0.004} />
          <Roots xOffset={0.56} yOffset={0.712} scale={0.004} />
          <Roots xOffset={0.562} yOffset={0.715} scale={0.004} />
          <Roots xOffset={0.565} yOffset={0.712} scale={0.004} />
          <Roots xOffset={0.567} yOffset={0.715} scale={0.004} />
          <Roots xOffset={0.57} yOffset={0.715} scale={0.004} />
          <Roots xOffset={0.572} yOffset={0.715} scale={0.004} />
          <Roots xOffset={0.573} yOffset={0.715} scale={0.004} />
          <Roots xOffset={0.574} yOffset={0.728} scale={0.01} />
          <Roots xOffset={0.585} yOffset={0.725} scale={0.0065} />
          <Roots xOffset={0.588} yOffset={0.735} scale={0.012} />
          <Roots xOffset={0.6} yOffset={0.722} scale={0.005} />
          <Roots xOffset={0.602} yOffset={0.722} scale={0.005} />
          <Roots xOffset={0.604} yOffset={0.721} scale={0.005} />
          <Roots xOffset={0.606} yOffset={0.721} scale={0.005} />
          <Roots xOffset={0.608} yOffset={0.723} scale={0.0075} />
          <Roots xOffset={0.728} yOffset={0.718} scale={0.0075} />
          <Roots xOffset={0.744} yOffset={0.715} scale={0.0065} />
          <Roots xOffset={0.756} yOffset={0.71} scale={0.005} />
          <Roots xOffset={0.76} yOffset={0.717} scale={0.0095} />
          <Roots xOffset={0.766} yOffset={0.708} scale={0.005} />
          <Roots xOffset={0.769} yOffset={0.708} scale={0.005} />
          <Roots xOffset={0.772} yOffset={0.707} scale={0.005} />
          <Roots xOffset={0.775} yOffset={0.706} scale={0.005} />
          <Roots xOffset={0.778} yOffset={0.706} scale={0.005} />
          <Roots xOffset={0.78} yOffset={0.706} scale={0.005} />
          <Roots xOffset={0.783} yOffset={0.706} scale={0.005} />
          <Roots xOffset={0.786} yOffset={0.705} scale={0.005} />
          <Roots xOffset={0.982} yOffset={0.691} scale={0.0095} />
        </g>
        <g id="Buildings">
          <Church xOffset={0.937} yOffset={0.568} scale={0.04} />
          <House4 xOffset={0.902} yOffset={0.638} scale={0.03} />
          <House1 xOffset={0.857} yOffset={0.64} scale={0.04} />
          <ModernBuilding xOffset={0.62} yOffset={0.628} scale={0.1} />
          <RoundBuilding xOffset={0.377} yOffset={0.65} scale={0.11} />
        </g>
        <g id="People">
          <Person1 xOffset={0.85} yOffset={0.683} scale={0.003} />
          <Person1 xOffset={0.622} yOffset={0.692} scale={0.003} />
          <PersonWithKid xOffset={0.63} yOffset={0.694} scale={0.004} />
          <PersonWithKid xOffset={0.54} yOffset={0.685} scale={0.0045} />
          <Person2 xOffset={0.535} yOffset={0.682} scale={0.003} />
          <Person1 xOffset={0.415} yOffset={0.673} scale={0.003} />
          <Person2 xOffset={0.411} yOffset={0.674} scale={0.0025} />
          <PersonWithKid xOffset={0.135} yOffset={0.766} scale={0.0045} />
          <Person1 xOffset={0.14} yOffset={0.764} scale={0.0032} />
        </g>
        <g id="Objects">
          <TrafficLight xOffset={0.84} yOffset={0.675} scale={0.0035} />
          <TrafficLight2 xOffset={0.79} yOffset={0.644} scale={0.014} />
          <TrafficLight xOffset={0.348} yOffset={0.686} scale={0.0035} />
          <TrafficLight2 xOffset={0.3} yOffset={0.662} scale={0.014} />
        </g>
        <g id="Vehicles">
          <Car xOffset={0.828} yOffset={0.684} scale={0.01} />
          <Car xOffset={0.336} yOffset={0.695} scale={0.01} />
          <Truck2 xOffset={0.303} yOffset={0.656} scale={0.008} />
        </g>
        <g id="Plants">
          <Grass xOffset={0.787} yOffset={0.685} scale={0.003} />
          <Grass xOffset={0.785} yOffset={0.685} scale={0.003} />
          <Grass xOffset={0.782} yOffset={0.685} scale={0.003} />
          <Grass xOffset={0.78} yOffset={0.685} scale={0.003} />
          <Grass xOffset={0.777} yOffset={0.685} scale={0.003} />
          <Grass xOffset={0.774} yOffset={0.685} scale={0.003} />
          <Grass xOffset={0.771} yOffset={0.685} scale={0.003} />
          <Grass xOffset={0.768} yOffset={0.685} scale={0.003} />
          <Bush1 xOffset={0.753} yOffset={0.678} scale={0.01} />
          <Bush2 xOffset={0.74} yOffset={0.665} scale={0.015} />
          <Bush2 xOffset={0.72} yOffset={0.641} scale={0.025} />
          <Bush2 xOffset={0.6} yOffset={0.649} scale={0.025} />
          <Grass xOffset={0.607} yOffset={0.7} scale={0.003} />
          <Grass xOffset={0.605} yOffset={0.7} scale={0.003} />
          <Grass xOffset={0.602} yOffset={0.7} scale={0.003} />
          <Bush1 xOffset={0.58} yOffset={0.68} scale={0.015} />
          <Bush2 xOffset={0.56} yOffset={0.615} scale={0.04} />
          <Grass xOffset={0.575} yOffset={0.7} scale={0.002} />
          <Grass xOffset={0.573} yOffset={0.7} scale={0.002} />
          <Grass xOffset={0.571} yOffset={0.7} scale={0.002} />
          <Grass xOffset={0.568} yOffset={0.697} scale={0.003} />
          <Grass xOffset={0.565} yOffset={0.696} scale={0.003} />
          <Grass xOffset={0.562} yOffset={0.695} scale={0.003} />
          <Grass xOffset={0.558} yOffset={0.692} scale={0.004} />
          <Grass xOffset={0.555} yOffset={0.69} scale={0.004} />
          <Grass xOffset={0.552} yOffset={0.692} scale={0.003} />
          <Grass xOffset={0.55} yOffset={0.694} scale={0.002} />
          <Bush1 xOffset={0.52} yOffset={0.68} scale={0.006} />
          <Bush1 xOffset={0.515} yOffset={0.68} scale={0.006} />
          <Bush1 xOffset={0.511} yOffset={0.679} scale={0.006} />
          <Bush2 xOffset={0.5} yOffset={0.67} scale={0.009} />
          <Bush2 xOffset={0.498} yOffset={0.67} scale={0.009} />
          <Bush2 xOffset={0.495} yOffset={0.67} scale={0.007} />
          <Bush2 xOffset={0.49} yOffset={0.67} scale={0.007} />
          <Bush2 xOffset={0.48} yOffset={0.615} scale={0.03} />
          <Bush2 xOffset={0.371} yOffset={0.68} scale={0.006} />
          <Bush2 xOffset={0.371} yOffset={0.68} scale={0.006} />
          <Bush2 xOffset={0.367} yOffset={0.68} scale={0.008} />
          <Grass xOffset={0.367} yOffset={0.691} scale={0.002} />
          <Grass xOffset={0.364} yOffset={0.688} scale={0.003} />
          <Grass xOffset={0.362} yOffset={0.695} scale={0.002} />
          <Grass xOffset={0.359} yOffset={0.695} scale={0.003} />
          <Grass xOffset={0.357} yOffset={0.695} scale={0.003} />
          <Grass xOffset={0.354} yOffset={0.698} scale={0.003} />
          <Bush2 xOffset={0.295} yOffset={0.7} scale={0.006} />
          <Bush2 xOffset={0.291} yOffset={0.7} scale={0.008} />
          <Grass xOffset={0.29} yOffset={0.709} scale={0.003} />
          <Grass xOffset={0.289} yOffset={0.712} scale={0.002} />
          <Grass xOffset={0.287} yOffset={0.713} scale={0.002} />
          <Bush1 xOffset={0.282} yOffset={0.72} scale={0.0055} />
          <Bush1 xOffset={0.28} yOffset={0.725} scale={0.0055} />
          <Bush1 xOffset={0.277} yOffset={0.725} scale={0.0055} />
          <Bush1 xOffset={0.274} yOffset={0.727} scale={0.0055} />
          <Bush2 xOffset={0.27} yOffset={0.715} scale={0.009} />
          <Grass xOffset={0.27} yOffset={0.73} scale={0.002} />
          <Grass xOffset={0.268} yOffset={0.73} scale={0.002} />
          <Grass xOffset={0.266} yOffset={0.731} scale={0.002} />
          <Grass xOffset={0.264} yOffset={0.731} scale={0.002} />
          <Wheat xOffset={0.264} yOffset={0.731} scale={0.008} />
          <Wheat xOffset={0.256} yOffset={0.731} scale={0.008} />
          <Wheat xOffset={0.251} yOffset={0.731} scale={0.006} />
          <Grass xOffset={0.25} yOffset={0.731} scale={0.002} />
          <Wheat xOffset={0.245} yOffset={0.732} scale={0.006} />
          <Wheat xOffset={0.24} yOffset={0.732} scale={0.006} />
          <Grass xOffset={0.239} yOffset={0.732} scale={0.0015} />
          <Grass xOffset={0.238} yOffset={0.732} scale={0.0015} />
          <Wheat xOffset={0.231} yOffset={0.731} scale={0.007} />
          <Bush1 xOffset={0.227} yOffset={0.728} scale={0.004} />
          <Wheat xOffset={0.217} yOffset={0.727} scale={0.01} />
          <Bush2 xOffset={0.215} yOffset={0.727} scale={0.004} />
          <Bush2 xOffset={0.211} yOffset={0.726} scale={0.005} />
          <Bush2 xOffset={0.207} yOffset={0.728} scale={0.005} />
          <Wheat xOffset={0.201} yOffset={0.728} scale={0.008} />
          <Wheat xOffset={0.194} yOffset={0.728} scale={0.008} />
          <Bush2 xOffset={0.189} yOffset={0.727} scale={0.0055} />
          <Bush2 xOffset={0.185} yOffset={0.727} scale={0.006} />
          <Wheat xOffset={0.18} yOffset={0.725} scale={0.015} />
          <Bush2 xOffset={0.18} yOffset={0.727} scale={0.006} />
          <Grass xOffset={0.178} yOffset={0.733} scale={0.002} />
          <Grass xOffset={0.176} yOffset={0.733} scale={0.002} />
          <Grass xOffset={0.174} yOffset={0.734} scale={0.002} />
          <Wheat xOffset={0.165} yOffset={0.735} scale={0.01} />
          <Wheat xOffset={0.162} yOffset={0.74} scale={0.006} />
          <Grass xOffset={0.158} yOffset={0.755} scale={0.002} />
          <Grass xOffset={0.15} yOffset={0.763} scale={0.003} />
          <Grass xOffset={0.148} yOffset={0.769} scale={0.002} />
        </g>
      </SVGFrame>
    </div>
  )
}

export default CulturalLandscapesTableau