import { useEffect, useState } from 'react'
import { assets } from '../assets/assets'

const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  useEffect(()=>{
    if(showMobileMenu){
      document.body.style.overflow = 'hidden';
    }else{
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    }
  },[showMobileMenu])

  return (
    <div className='absolute top-0 left-0 w-full z-10'>
      <div className='container mx-auto flex justify-between items-center py-4 px-6 md:px-20 lg:px-32 bg-transparent'>
        <img src={assets.logo} alt="hehe" />
        <ul className='hidden md:flex gap-7 text-white'>
          <a href="#Header" className='cursor-pointer hover:text-gray-400'>Home</a>
          <a href="#About" className='cursor-pointer hover:text-gray-400 '>About</a>
          <a href="#Projects" className='cursor-pointer hover:text-gray-400'>Projects</a>
          <a href="#Testimonials" className='cursor-pointer hover:text-gray-400'>Testimonials</a>
        </ul>
        <button className='hidden md:block bg-white px-8 py-2 rounded-full'>Signup</button>

        <img 
          src={assets.menu_icon} 
          onClick={() => setShowMobileMenu(true)} 
          className='md:hidden cursor-pointer' 
          alt="" 
        />
      </div>

      {/* --------------------------------- mobile menu -------------------------------- */}
      <div className={`
        md:hidden fixed top-0 left-0 w-full h-screen bg-white transform transition-transform duration-700
        ${showMobileMenu ? 'translate-x-0' : '-translate-x-full'}
      `}>
        <div className='absolute top-6 right-6 cursor-pointer'> 
          <img 
            src={assets.cross_icon} 
            onClick={() => setShowMobileMenu(false)} 
            className='w-6' 
            alt="" 
          />
        </div>

        <ul className='flex flex-col items-center gap-3 mt-20 px-5 text-lg font-medium'>
          <a onClick={() => setShowMobileMenu(false)} href="#Header" className='px-4 py-2 rounded-full inline-block'>Home</a>
          <a onClick={() => setShowMobileMenu(false)} href="#About" className='px-4 py-2 rounded-full inline-block'>About</a>
          <a onClick={() => setShowMobileMenu(false)} href="#Projects" className='px-4 py-2 rounded-full inline-block'>Projects</a>
          <a onClick={() => setShowMobileMenu(false)} href="#Testimonials" className='px-4 py-2 rounded-full inline-block'>Testimonials</a>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
