import React from 'react'
import Stuff from './Stuff'

const Crew = ({data}) => {
  return (
    <div className='crewBgBox flex justify-end'>
      
       <Stuff data={data.crew} />
      
    </div>
  )
}

export default Crew