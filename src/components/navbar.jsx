import React from 'react'
import { useState } from 'react'
import { assets } from '../assets/assets'

const Navbar = () => {
    const [showMobileMenu , SetShowMobileMenu] = useState(false)
  return (
    <div className='absolute top-0 left-0 w-full z-10'>
         <div className='container mx-auto flex items-center justify-between py-4 px-6 md:px-20 lg:px-32 bg-transparent'>
            <img src={assets.logo} alt="" className="w-32 md:w-80 h-auto" />
            <ul className='hidden md:flex gap-4 lg:gap-7 text-white'>
                <a href="#header" className='cursor-pointer hover:text-gray-400'>Home</a>
                <a href="#About" className='cursor-pointer hover:text-gray-400'>About</a>
                <a href="#Projects" className='cursor-pointer hover:text-gray-400'>Projects</a>
                <a href="#Testimonials" className='cursor-pointer hover:text-gray-400'>Testimonials</a>
            </ul>
            <button className='hidden md:block bg-white px-6 lg:px-8 py-2 rounded-full text-sm lg:text-base'>Sign Up</button>
            <img onClick={() => SetShowMobileMenu(true)} src={assets.menu_icon} className='md:hidden w-9 cursor-pointer' alt="" />
        </div>
        {/*-------- mobile-menue--------------*/}
        <div className={`md:hidden ${showMobileMenu ? 'fixed w-full': 'h-0 w-0' } right-0 top-0 bottom-0 overflow-hidden bg-white transition-all`}>
            <div className='flex justify-end p-6 cursor-pointer'>
                <img onClick={() => SetShowMobileMenu(false)} src={ assets.cross_icon }className='w-6' alt="" />
            </div>
            <ul className='flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium'>
                <a onClick={() => SetShowMobileMenu(false)} href="#header" className='px-4 py-2 rounded-full inline-block '>Home</a>
                <a onClick={() => SetShowMobileMenu(false)} href="#About" className='px-4 py-2 rounded-full inline-block '>About</a>
                <a onClick={() => SetShowMobileMenu(false)} href="#Projects" className='px-4 py-2 rounded-full inline-block '>Projects</a>
                <a onClick={() => SetShowMobileMenu(false)} href="#Testimonials" className='px-4 py-2 rounded-full inline-block '>Testimonials</a>
            </ul>
        </div>
    </div>
  )
}

export default Navbar