import { Link } from 'react-router-dom'

const Home = ({setNavLink}) => {
  return (

    <div className='homeBgBox flex justify-center'>
      <img className='absolute' src="" alt="" />

     <div className="homeContentBox flex items-center justify-between ">

      <div className='homeSpaceBox'>
        
        <h5 className='soYouWantToTravelTo capitilize'>SO, YOU WANT TO TRAVEL TO</h5>
        <h1>SPACE</h1>
       
        <p>
          Let’s face it; if you want to go to space, you might as well genuinely go to 
          outer space and not hover kind of on the edge of it. Well sit back, and relax 
          because we’ll give you a truly out of this world experience!
        </p>
        
      </div>

      <div className='exploreBox flex items-center justify-center'>
        <Link to='/destinations/*' 
        className='text-black h-64 w-64 bg-white  text-3xl flex items-center justify-center' 
        onClick={() => {
        setNavLink('2')
        window.scroll(0, 0)
        }} 
        onKeyUp={(e) => {
          if(e.key === 'Enter') {
            setNavLink('2')
            window.scroll(0, 0)
          }
        
        }} >
          
          EXPLORE
        
        </Link>
      </div>

      </div>

    </div>
  
  )
}

export default Home