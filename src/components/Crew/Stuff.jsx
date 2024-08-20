import React from 'react'
import { useState, useEffect, useRef } from 'react'

const Stuff = ({data}) => {
 const [person, setPerson] = useState(0)
 const previousPerson = useRef(person)

 useEffect(() => {
   previousPerson.current = person
 }, [person])
  return (

  <div className="crewInfoBox" > 
      
      <h5><span >02</span> MEET YOUR CREW</h5>

      <div key={person + 10} className='crewTextBox relative'>
        <h4 className='uppercase text-gray-400' >{previousPerson.current !== person ? data[previousPerson.current].role : ''}</h4>
        <h4 className='uppercase text-gray-400' >{data[person].role}</h4>
        <h3 className='uppercase'>{previousPerson.current !== person ? data[previousPerson.current].name : ''}</h3>
        <h3 className='uppercase'>{data[person].name}</h3>
        <p>{previousPerson.current !== person ? data[previousPerson.current].bio : ''}</p>
        <p>{data[person].bio}</p>
      </div>

      <ul className='crewLinks flex'>
         
         
      <li onClick={() => setPerson(0)} style={person === 0 ? {backgroundColor: 'white'} : {backgroundColor: 'rgba(255, 255, 255, 0.284)'}}><button></button></li>
            
          <hr />
        
          
        <li onClick={() => setPerson(1)} style={person === 1  ? {backgroundColor: 'white'} : {backgroundColor: 'rgba(255, 255, 255, 0.284)'}}><button></button></li>
      
        <hr />
    
  
      
        <li onClick={() => setPerson(2)} style={person === 2  ? {backgroundColor: 'white'} : {backgroundColor: 'rgba(255, 255, 255, 0.284)'}}><button></button></li>
      
        <hr />
    
  
  
        <li onClick={() => setPerson(3)} style={person === 3 ? {backgroundColor: 'white'} : {backgroundColor: 'rgba(255, 255, 255, 0.284)'}}><button></button></li>
          
          
      </ul>

      <div key={person + 20} className="personPicture relative flex">
        <img src={previousPerson.current !== person ? data[previousPerson.current].images.png : ''} alt="person" style={person === 3  ? {marginBottom: '60px'} : {marginBottom:  '0'}}/>
        <img src={data[person].images.png} alt="person" style={person === 3  ? {marginBottom: '60px'} : {marginBottom: '0'}}/>
        
      </div>
    </div>
  )
}

export default Stuff