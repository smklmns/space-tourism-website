import React from 'react'
import Planets from './Planets'

const Destination = ({data}) => {
  return (
    
    <div className='destinationBgBox flex justify-end'>
      <h5 className='absolute top-[190px] left-[12%]'><span >01</span> PICK YOUR DESTINATION</h5>
        
      <Planets data={data.destinations} />
        
      
     </div>
   
  )
}

export default Destination