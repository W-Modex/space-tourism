import React, {useState, useEffect} from 'react'
import bgMobile from '../../assets/assets/technology/background-technology-mobile.jpg'
import bgTablet from '../../assets/assets/technology/background-technology-tablet.jpg'
import bgDesktop from '../../assets/assets/technology/background-technology-desktop.jpg'
import TechnologyForm from '../../components/Technology/Technology'

function Technology() {
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
    <div className='bg-dark bg-cover bg-no-repeat w-full h-full min-w-[100vw] min-h-[100vh]' style={{ backgroundImage: backgroundImage }}>
       <h3 className='text-white pt-[25%] lg:pt-[15%] xl:pt-[10%] 2xl:pt-[6%] xl:text-2xl font-bold text-xl text-center sm:text-start sm:ml-[8%] sm:mb-[4%]'><span className='text-gray-500 mr-4'>03</span>SPACE LAUNCH 101</h3>
      <TechnologyForm />
    </div>
  )
}

export default Technology