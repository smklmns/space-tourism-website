import React from 'react'
import { useState, useEffect, useRef } from 'react'

const TechPart = ({data}) => {
  const [technology, setTechnology] = useState(0)
  const previousTechnology = useRef(technology)

  useEffect(() => {
    previousTechnology.current = technology
  }, [technology])
  return (
    <div className='technologyBox flex justify-between'>
      
      <div className='leftTechBox flex items-center'>
      
        <div className='techContentBox flex'>
          <ul>

          <li onClick={() => setTechnology(0)} style={technology === 0 ? {backgroundColor: 'white', color: 'black'} : {backgroundColor: 'transparent', color: 'white'}}><button >1</button></li>

           <hr />

           <li onClick={() => setTechnology(1)} style={technology === 1 ? {backgroundColor: 'white', color: 'black'} : {backgroundColor: 'transparent', color: 'white'}}><button>2</button></li>

           <hr />

           <li onClick={() => setTechnology(2)} style={technology === 2 ? {backgroundColor: 'white', color: 'black'} : {backgroundColor: 'transparent', color: 'white'}}><button>3</button></li>

          </ul>

          <div key={technology + 10} className='techTextBox relative'>
            <h4>THE TERMINOLOGY...</h4>
            <h3 className='uppercase'>{technology !== previousTechnology.current ? data[previousTechnology.current].name : ''}</h3>
            <h3 className='uppercase'>{data[technology].name}</h3>
            <p>{technology !== previousTechnology.current ? data[previousTechnology.current].description : ''}</p>
            <p>{data[technology].description}</p>
          </div>

        </div>
      </div>

      <div key={technology + 20} className='rightTechBox relative'>

        <img src={screen.width > 480 && previousTechnology.current !== technology ? data[previousTechnology.current].images.portrait : previousTechnology.current !== technology ? data[previousTechnology.current].images.landscape : ''}  />
        <img src={screen.width > 480 ? data[technology].images.portrait : data[technology].images.landscape} alt="launch-picture" />
      </div>

    </div>
  )
}

export default TechPart