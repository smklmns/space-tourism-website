import React from 'react'

import TechPart from './TechPart'

const Technology = ({data}) => {
  return (
    <div className='techBgBox flex justify-end ' >
      

      <h5 className='absolute top-[190px] left-[12%]'><span>03</span> SPACE LAUNCH 101</h5>
        
        <TechPart data={data.technology} />
      

       
    </div>
  )
}

export default Technology