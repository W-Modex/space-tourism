import React, {useState, useEffect} from 'react'
import bgMobile from '../../assets/assets/home/background-home-mobile.jpg'
import bgTablet from '../../assets/assets/home/background-home-tablet.jpg'
import bgDesktop from '../../assets/assets/home/background-home-desktop.jpg'
import { Link } from 'react-router-dom'




function Home() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const updateWindowWidth = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', updateWindowWidth);

    return () => {
      window.removeEventListener('resize', updateWindowWidth);
    };
  }, []);

  let backgroundImage;
  if (windowWidth > 1024) {
    backgroundImage = `url(${bgDesktop})`;
  } else if (windowWidth > 640) {
    backgroundImage = `url(${bgTablet})`;
  } else {
    backgroundImage = `url(${bgMobile})`;
  }

  return (
    <div className={`bg-dark flex justify-center min-h-screen bg-cover bg-no-repeat min-w-screen overflow-hidden`} style={{ backgroundImage: backgroundImage }}>
      <div className='flex w-full flex-col items-center pt-[25%] lg:justify-between xl:pt-[15%] lg:flex-row max-w-[1440px] lg:items-start lg:px-14 xl:px-20'>
      <div className=' w-full lg:max-w-[500px] text-center text-white'>
        <h3 className='text-xl sm:text-2xl mb-5 tracking-widest opacity-75'>SO, YOU WANT TO TRAVEL TO</h3>
        <h1 className='text-8xl sm:text-9xl mb-8 md:text-[150px] tracking-wider'>SPACE</h1>
        <p className='opacity-75 text-lg sm:text-xl px-6 sm:px-14 md:px-20 md:text-[22px]'>Let’s face it; if you want to go to space, you might as well genuinely go to 
  outer space and not hover kind of on the edge of it. Well sit back, and relax 
  because we’ll give you a truly out of this world experience!</p>
      </div>
      <Link to='/destination' className='rounded-[50%] flex justify-center mt-16 items-center bg-white w-[150px] h-[150px] cursor-pointer sm:w-[200px] md:w-[250px] md:h-[250px] sm:h-[200px] lg:translate-y-4 lg:w-[300px] lg:h-[300px] hover:border-[25px] hover:border-gray-300 hover:backdrop-blur-md hover:scale-110 '>
        <p className='text-xl sm:text-2xl opacity-75'>EXPLORE</p>
      </Link>
      </div>
    </div>
  )
}

export default Home