import React, {useState} from 'react'
import data from '../../assets/data.json'
import moonImg from '../../assets/assets/destination/image-moon.png'
import marsImg from '../../assets/assets/destination/image-mars.png'
import europaImg from '../../assets/assets/destination/image-europa.png'
import titanImg from '../../assets/assets/destination/image-titan.png'

function Planet() {
    const images = [moonImg, marsImg, europaImg, titanImg]
    const [activeDestination, setActiveDestionation] = useState(0)
    const planetData = data.destinations[activeDestination]
  return (
    <div className='lg:flex lg:justify-center'>
        <div className='max-w-[1400px] lg:flex xl:justify-between px-10'>
        <div className='flex justify-center my-10'>
        <img src={images[activeDestination]} className=' max-w-[350px] lg:max-w-none lg:max-h-none lg:w-[500px] lg:h-[500px] 2xl:w-[550px] 2xl:h-[550px] max-h-[350px]'/>
        </div>
        <div className='lg:flex lg:flex-col xl:my-10'>
        <div className='flex text-white gap-4 lg:gap-8 font-bold justify-center'>
            <p className={` pb-3 cursor-pointer hover:border-b-2 hover:opacity-75 ${activeDestination === 0 ? 'border-b-2' : null}`} onClick={() => setActiveDestionation(0)}>MOON</p>
            <p className={` pb-3 hover:border-b-2 cursor-pointer hover:opacity-75 ${activeDestination === 1 ? 'border-b-2' : null}`} onClick={() => setActiveDestionation(1)}>MARS</p>
            <p className={`cursor-pointer hover:border-b-2 hover:opacity-75  pb-3 ${activeDestination === 2 ? 'border-b-2' : null}`} onClick={() => setActiveDestionation(2)}>EUROPA</p>
            <p className={` pb-3 hover:border-b-2 cursor-pointer hover:opacity-75 ${activeDestination === 3 ? 'border-b-2' : null}`} onClick={() => setActiveDestionation(3)}>TITAN</p>
        </div>
        <div>
            <h1 className='text-white tracking-wider text-6xl lg:text-8xl my-8 lg:my-14 text-center'>{planetData.name.toUpperCase()}</h1>
            <p className='text-white text-center sm:text-lg lg:text-xl px-[10%]'> {planetData.description} </p>
        </div>
        <hr className='mx-[5%] my-8 lg:my-14 border-gray-500 h-[1px]'/>
        <div className='sm:flex sm:justify-between sm:px-[15%]'>
            <div className='flex mb-8 text-white gap-3 flex-col items-center'>
                <p className='text-xl text-gray-500'>AVG. DISTANCE</p>
                <h2 className='text-3xl'>{planetData.distance.toUpperCase()}</h2>
            </div>
            <div className='flex text-white gap-3 flex-col items-center mb-10'>
                <p className='text-xl text-gray-500'>EST. TRAVEL TIME</p>
                <h2 className='text-3xl'>{planetData.travel}</h2>
            </div>
        </div>
        </div>
        </div>
    </div>
  )
}

export default Planet