import React, {useState, useEffect} from 'react'
import data from '../../assets/data.json'
import vehicleImg from '../../assets/assets/technology/image-launch-vehicle-landscape.jpg'
import capsuleImg from '../../assets/assets/technology/image-space-capsule-landscape.jpg'
import spaceportImg from '../../assets/assets/technology/image-spaceport-portrait.jpg'

function Technology() {
    const images = [vehicleImg, spaceportImg, capsuleImg]
    const [activeTechnology, setActiveTechnology] = useState(0)
    const technologyData = data.technology[activeTechnology]

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

  return (
    <div className='flex justify-center'>
    <div className='mt-10 max-w-[1440px] lg:flex lg:gap-[3%] items-center lg:pl-[5%]'>
        <div className='w-full lg:hidden'>
            <img src={images[activeTechnology]} className='w-full h-[300px]'/>
        </div>
        <div className='flex gap-4 lg:flex-col justify-center mt-6'>
            <div className={`border rounded-[50%] grid place-items-center text-white border-gray-500 w-[45px] h-[45px] lg:text-xl lg:w-[60px] lg:h-[60px] hover:bg-white hover:text-black cursor-pointer ${activeTechnology === 0 ? 'bg-white text-black' : null}`} onClick={() => setActiveTechnology(0)}>1</div>
            <div className={`border lg:text-xl rounded-[50%] grid place-items-center text-white border-gray-500 w-[45px] h-[45px] lg:w-[60px] lg:h-[60px] hover:bg-white hover:text-black cursor-pointer ${activeTechnology === 1 ? 'bg-white text-black' : null}`} onClick={() => setActiveTechnology(1)}>2</div>
            <div className={`border lg:text-xl rounded-[50%] grid place-items-center text-white border-gray-500 w-[45px] h-[45px] lg:w-[60px] lg:h-[60px] hover:bg-white hover:text-black cursor-pointer ${activeTechnology === 2 ? 'bg-white text-black' : null}`} onClick={() => setActiveTechnology(2)}>3</div>
        </div>
        <div className='mt-6 text-center lg:text-start px-[5%] md:px-[10%] lg:px-0 flex flex-col gap-4'>
            <p className='text-gray-500 text-lg font-semibold lg:text-2xl'>THE TERMINOLOGY...</p>
            <p className='text-4xl lg:text-6xl opacity-75 tracking-wider text-white'>{technologyData.name.toUpperCase()} </p>
            <p className='text-white lg:text-xl opacity-60 '>{technologyData.description} </p>
        </div>
        {windowWidth >= 1024 ? 
        <div className='w-full'>
        <img src={images[activeTechnology]} className='w-full h-[350px] xl:h-[450px]'/>
        </div>
     : null}
    </div>
    </div>
  )
}

export default Technology