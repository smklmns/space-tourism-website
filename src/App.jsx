import React from 'react'
import { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Home from './components/Home'
import Destinations from './components/Destinations/Destination'
import Crew from './components/Crew/Crew'
import Technology from './components/Technology/Technology'
import data from '../fMentorFiles/starter-code/data.json'


const App = () => {
  const [navLink, setNavLink] = useState('')
  const [menu, setMenu] = useState(false)
  
  return (
    <main className='App' >
     
      <BrowserRouter>
      
      <nav  className='navBox absolute flex items-center justify-end'>
        <div className='starImgBox'>
          <img src="../fMentorFiles/starter-code/assets/shared/logo.svg" alt="logo" />
        </div>

        <hr className='navLongLine w-2/5 ml-14'/>
        
        <ul className={menu ? 'navUl ': 'navUlClosed' } >
       
          <hr className='firstNavHr' />

          <li >
            <Link to="/"
              onClick={() => {
                setNavLink('1')
                window.scroll(0, 0)
                setMenu(false)
                }} 
                onKeyUp={(e) => {
                  if(e.key === 'Enter') {
                    setNavLink('1')
                    window.scroll(0, 0)
                    setMenu(false)
                  }
                }}
                className={screen.width > 480 ? 'firstNavLink' : (navLink === '1' || window.location.pathname === '/') && screen.width <= 480 ? 'firstNavLinkSmallSelected' : 'firstNavLinkSmallNotSelected'}
              
                style={(window.location.pathname === '/' || navLink === '1') && (screen.width > 480) ? {borderBottom: '3px solid white'} : {borderBottom: '3px solid transparent'}
              }
            ><span>00</span> HOME
            </Link>
          </li>

            <hr />

            <li>
              <Link to="/destinations/*"
              onClick={() => {
                setNavLink('2')
                window.scroll(0, 0)
                setMenu(false)
                }} 
                onKeyUp={(e) => {
                  if(e.key === 'Enter') {
                    setNavLink('2')
                    window.scroll(0, 0)
                    setMenu(false)
                  }
                }}
                className={screen.width > 480 ? 'secondNavLink' : (navLink === '2' || window.location.pathname.match(/destinations.*/)) &&  screen.width <= 480 ? 'secondNavLinkSmallSelected' : 'secondNavLinkSmallNotSelected'}
              
                style={window.location.pathname.match(/destinations.*/) || navLink === '2' ? {borderBottom: '3px solid white'} : {borderBottom: '3px solid transparent'}}
                ><span>01</span> DESTINATIONS
              </Link>
             </li>

            <hr />
          
            <li>
             <Link to="/crew/*"
              onClick={() => {
                setNavLink('3')
                window.scroll(0, 0)
                setMenu(false)
                }}
                onKeyUp={(e) => {
                  if(e.key === 'Enter') {
                    setNavLink('3')
                    window.scroll(0, 0)
                    setMenu(false)
                  }
                }}
                className={screen.width > 480 ? 'thirdNavLink' : (navLink === '3' || window.location.pathname.match(/crew.*/)) && screen.width <= 480 ? 'thirdNavLinkSmallSelected' : 'thirdNavLinkSmallNotSelected'}

                style={window.location.pathname.match(/crew.*/) || navLink === '3' ?   {borderBottom: '3px solid white'} : {borderBottom: '3px solid transparent'}}
                ><span>02</span> CREW
              </Link>
             </li>

            <hr />

            <li>
              <Link to="/technology/*"
              onClick={() => {
                setNavLink('4')
                window.scroll(0, 0)
                setMenu(false)
                }}
                onKeyUp={(e) => {
                  if(e.key === 'Enter') {
                    setNavLink('4')
                    window.scroll(0, 0)
                    setMenu(false)
                  }
                }}

                className={screen.width > 480 ? 'fourthNavLink' : (navLink === '4' || window.location.pathname.match(/technology.*/)) && screen.width <= 480 ? 'fourthNavLinkSmallSelected' : 'fourthNavLinkSmallNotSelected'}

                style={window.location.pathname.match(/technology.*/) || navLink === '4' ?   {borderBottom: '3px solid white'} : {borderBottom: '3px solid transparent'}}
            ><span>03</span> TECHNOLOGY
            </Link>
          </li>
            
          
        </ul>

        <div className='hamburgerBox'>
            <button onClick={() => setMenu(!menu)}><img src={menu === false ? "/fMentorFiles/starter-code/assets/shared/icon-hamburger.svg" : '/fMentorFiles/starter-code/assets/shared/icon-close.svg'} alt="" /></button>
        </div>

      </nav>
   
        <Routes>
          <Route path="/" element={<Home setNavLink={setNavLink}/>} />
          <Route path="/destinations/*" element={<Destinations data={data}/>}/>
          <Route path="/crew/*" element={<Crew data={data}/>}/>
          <Route path="/technology/*" element={<Technology data={data} />} />
        </Routes>

      </BrowserRouter>
    </main>
    
  )
}

export default App