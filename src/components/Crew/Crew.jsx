import React, {useState, useEffect} from 'react'
import fourthCrewMem from '../../assets/assets/crew/image-anousheh-ansari.png'
import firstCrewMem from '../../assets/assets/crew/image-douglas-hurley.png'
import secondCrewMem from '../../assets/assets/crew/image-mark-shuttleworth.png'
import thirdCrewMem from '../../assets/assets/crew/image-victor-glover.png'
import data from '../../assets/data.json'

function Crew() {
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

    const images = [firstCrewMem, secondCrewMem, thirdCrewMem, fourthCrewMem];
    const [activeCrew, setActiveCrew] = useState(0)
    const crewData = data.crew[activeCrew]
  return (
    <div className=''>
        {windowWidth < 640 ? 
        <div>
        <div className=' w-full h-[400px] mt-10 flex justify-center'>
            <img src={images[activeCrew]} className=''/>
        </div>
        <hr className='border-gray-500 mx-[10%]'/>
        <div className='flex mt-6 gap-5 w-full justify-center'>

            <div className={`w-[20px] cursor-pointer h-[20px] hover:bg-white rounded-[50%] ${activeCrew === 0 ? 'bg-white' : 'bg-gray-500'}`} onClick={() => setActiveCrew(0)}></div>

            <div className={`w-[20px] hover:bg-white cursor-pointer  h-[20px] rounded-[50%] ${activeCrew === 1 ? 'bg-white' : 'bg-gray-500'}`} onClick={() => setActiveCrew(1)}></div>

            <div className={`w-[20px] hover:bg-white cursor-pointer  h-[20px] rounded-[50%] ${activeCrew === 2 ? 'bg-white' : 'bg-gray-500'}`} onClick={() => setActiveCrew(2)}></div>

            <div className={`w-[20px] hover:bg-white cursor-pointer  h-[20px] rounded-[50%] ${activeCrew === 3 ? 'bg-white' : 'bg-gray-500'}`} onClick={() => setActiveCrew(3)}></div>
        </div>
        </div> : null}
        <div className='lg:flex lg:items-center lg:justify-between'>
        <div className='lg:translate-y-10'>
        <div className='mt-4 flex flex-col gap-3 sm:gap-4 px-10 sm:px-[15%] lg:gap-8'>
            <div className='flex flex-col gap-2 sm:gap-3 lg:gap-6'>
            <h3 className='text-gray-500 text-2xl sm:text-3xl text-center xl:text-4xl 2xl:text-5xl'>{crewData.role}</h3>
            <h1 className='text-3xl sm:text-4xl text-white xl:text-5xl 2xl:text-6xl tracking-wider text-center'>{crewData.name}</h1>
            </div>
            <p className='text-white opacity-75 sm:text-lg xl:text-xl text-center'>{crewData.bio}</p>
        </div>

        {windowWidth > 640 && windowWidth < 1024 ? 
        <div>
        <div className='flex mt-6 gap-5 w-full justify-center'>

        <div className={`w-[25px] cursor-pointer h-[25px] hover:bg-white rounded-[50%] ${activeCrew === 0 ? 'bg-white' : 'bg-gray-500'}`} onClick={() => setActiveCrew(0)}></div>

        <div className={`w-[25px] hover:bg-white cursor-pointer  h-[25px] rounded-[50%] ${activeCrew === 1 ? 'bg-white' : 'bg-gray-500'}`} onClick={() => setActiveCrew(1)}></div>

        <div className={`w-[25px] hover:bg-white cursor-pointer  h-[25px] rounded-[50%] ${activeCrew === 2 ? 'bg-white' : 'bg-gray-500'}`} onClick={() => setActiveCrew(2)}></div>

        <div className={`w-[25px] hover:bg-white cursor-pointer  h-[25px] rounded-[50%] ${activeCrew === 3 ? 'bg-white' : 'bg-gray-500'}`} onClick={() => setActiveCrew(3)}></div>
        </div>
        <div className='w-full absolute bottom-0 h-[400px] mt-10 flex justify-center'>
            <img src={images[activeCrew]} className=''/>
        </div>
        </div>
        : null}

        {windowWidth > 1024 ? 
        <div className=''>
            <div className='flex mt-6 gap-5 w-full justify-center'>

                <div className={`w-[25px] cursor-pointer h-[25px] hover:bg-white rounded-[50%] ${activeCrew === 0 ? 'bg-white' : 'bg-gray-500'}`} onClick={() => setActiveCrew(0)}></div>

                <div className={`w-[25px] hover:bg-white cursor-pointer  h-[25px] rounded-[50%] ${activeCrew === 1 ? 'bg-white' : 'bg-gray-500'}`} onClick={() => setActiveCrew(1)}></div>

                <div className={`w-[25px] hover:bg-white cursor-pointer  h-[25px] rounded-[50%] ${activeCrew === 2 ? 'bg-white' : 'bg-gray-500'}`} onClick={() => setActiveCrew(2)}></div>

                <div className={`w-[25px] hover:bg-white cursor-pointer  h-[25px] rounded-[50%] ${activeCrew === 3 ? 'bg-white' : 'bg-gray-500'}`} onClick={() => setActiveCrew(3)}></div>
                </div>
        </div> 
        : null}
        </div>
        {windowWidth > 1024 ? <div className='w-full h-[550px] mt-10 flex justify-center'>
            <img src={images[activeCrew]} className=''/>
        </div> : null}
        </div>
        
    </div>
  )
}

export default Crew