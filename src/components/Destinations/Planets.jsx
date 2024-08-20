import React, { useEffect } from 'react'
import { useState, useRef } from 'react'

const Planets = ({data}) => {
  const [planet, setPlanet] = useState(0)
  const previousPlanet = useRef(planet)

  useEffect(() => {
    previousPlanet.current = planet
  }, [planet])

  return (
    <div className='pickYourDestinationBox'>

      <div key={planet} className='destinationPictureBox relative' >
        <img src={previousPlanet.current !== planet ? data[previousPlanet.current].images.png : ''} style={previousPlanet.current === planet ? {display:'none'} : {display:'initial'}}/>
        <img src={data[planet].images.png} alt="planet" />
      </div>

    <div className='choosePlanetBox'>
      <ul className='flex'>
       
          <li onClick={() => setPlanet(0)} style={planet === 0 ? {borderBottom: '3px solid white'} : {borderBottom: '3px solid transparent'}} ><button>MOON</button></li>
       
        <hr />
        <li onClick={() => setPlanet(1)}  style={planet === 1 ? {borderBottom: '3px solid white'} : {borderBottom: '3px solid transparent'}} ><button>MARS</button></li>
        <hr />
        <li onClick={() => setPlanet(2)} style={planet === 2 ? {borderBottom: '3px solid white'} : {borderBottom: '3px solid transparent'}} ><button>EUROPA</button></li>
        <hr />
        <li onClick={() => setPlanet(3)}  style={planet === 3 ? {borderBottom: '3px solid white'} : {borderBottom: '3px solid transparent'}} ><button>TITAN</button></li>
      </ul>

      <div key={planet + 1} className='planetNameBox relative'>
        <h2 className='uppercase'>{previousPlanet.current !== planet ? data[previousPlanet.current].name : ''}</h2>
        <h2 className='uppercase'>{data[planet].name}</h2>
      </div>

      <div key={planet + 2} className='descriptionBox relative block'>
        <p style={{borderBottom: '1px solid rgba(255, 255, 255, 0.247', paddingBottom: '40px'}}>{previousPlanet.current !== planet ? data[previousPlanet.current].description : ''}</p>
        <p style={{borderBottom: '1px solid rgba(255, 255, 255, 0.247', paddingBottom: '40px'}}>{data[planet].description}</p>
     </div>

      <div key={planet + 10} className='avgDistanceBox relative' >
        <p className='distanceHeading'>AVG. DISTANCE</p>
        <p className='distance'>{previousPlanet.current !== planet ? data[previousPlanet.current].distance : ''}</p>
        <p className='distance'>{data[planet].distance}</p>
      </div>

      <div  key={planet + 20} className='travelTimeBox relative' >
        <p className='travelHeading'>EST. TRAVEL TIME</p>
        <p className='travelTime'>{previousPlanet.current !== planet ? data[previousPlanet.current].travel : ''}</p>
        <p className='travelTime'>{data[planet].travel}</p>
      </div>
    </div>

    </div>
  )
}

export default Planets