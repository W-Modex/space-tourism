import React, { useState } from 'react'
import logo from '../../assets/assets/shared/logo.svg'
import menu from '../../assets/assets/shared/icon-hamburger.svg'
import closeIcon from '../../assets/assets/shared/icon-close.svg'
import {Link, NavLink} from 'react-router-dom'

function Header() {
    const [isMenuOpened, setIsMenuOpened] = useState(false)

  return (
    <div className='flex justify-center'>
    <div className='fixed z-10 flex justify-between items-center w-full'>
        <div className='ml-6 lg:ml-10 py-5 lg:translate-y-[3px]'>
        <img src={logo} className='lg:w-18 sm:w-14'/>
        </div>
        <div>
        <hr className='absolute top-[-400px] lg:top-[48px] border-gray-500 min-w-[500px] -translate-x-6 xl:-translate-x-28 2xl:-translate-x-40 w-full'/>
        </div>
        <div className=''>
            {!isMenuOpened && (<img src={menu} className='mr-6 py-5 w-10  cursor-pointer sm:hidden' onClick={() => setIsMenuOpened(true)}/>)}

            <nav className='sm:flex gap-8 sm:h-[96px] items-center bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-xl px-8 lg:px-24 bg-opacity-10 absolute top-[-400px] sm:static 2xl:pr-40'>

                <NavLink to='./' end className={({isActive}) => `hover:opacity-75 pb-8 translate-y-4  cursor-pointer ${isActive ? 'border-b-2' : 'hover:border-b-2'}`}>
                <p className='text-white text-xl '><span className='font-bold mr-1 absolute top-[-400px] lg:static'>00</span> HOME</p>
                </NavLink>

                <NavLink to='./destination' className={({isActive}) => `hover:opacity-75 pb-8 translate-y-4  cursor-pointer ${isActive ? 'border-b-2' : 'hover:border-b-2'}`}>
                <p className='text-white text-xl '><span className='font-bold mr-1 absolute top-[-400px] lg:static'>01</span> DESTINATION</p>
                </NavLink>

                <NavLink to='./crew' className={({isActive}) => `hover:opacity-75 pb-8 translate-y-4  cursor-pointer ${isActive ? 'border-b-2' : 'hover:border-b-2'}`}>
                <p className='text-white text-xl '><span className='font-bold mr-1 absolute top-[-400px] lg:static'>02</span> CREW</p>
                </NavLink>

                <NavLink to='./technology' className={({isActive}) => `hover:opacity-75 pb-8 translate-y-4  cursor-pointer ${isActive ? 'border-b-2' : 'hover:border-b-2'}`}>
                <p className='text-white text-xl '><span className='font-bold mr-1 absolute top-[-400px] lg:static'>03</span> TECHNOLOGY</p>
                </NavLink>

            </nav>
            
        </div>

    </div>

        {isMenuOpened && (
            <div className='z-10 fixed w-[70%] bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-10
            right-0 top-0 bottom-0'>
                <img src={closeIcon} onClick={() => setIsMenuOpened(false)} className='w-6 cursor-pointer absolute right-0 -translate-x-6 translate-y-6'/>
            <nav className='flex flex-col gap-10 px-5 mt-40'>
                <Link to='' onClick={() => setIsMenuOpened(false)}>
                <p className='text-white text-2xl'><span className='font-bold mr-3'>00</span> HOME</p>
                </Link>
                <Link to='./destination' onClick={() => setIsMenuOpened(false)}>
                <p className='text-white text-2xl'><span className='font-bold mr-3'>01</span> DESTINATION</p>
                </Link>
                <Link to='./crew' onClick={() => setIsMenuOpened(false)}>
                <p className='text-white text-2xl'><span className='font-bold mr-3'>02</span> CREW</p>
                </Link>
                <Link to='./technology' onClick={() => setIsMenuOpened(false)}>
                <p className='text-white text-2xl'><span className='font-bold mr-3'>03</span> TECHNOLOGY</p>
                </Link>
            </nav>
            </div>
        )}
    </div>
  )
}

export default Header