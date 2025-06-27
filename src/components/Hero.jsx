import React from 'react'
import Search from './Search'

function Hero() {
  return (
    <div>
    
        <div className='flex flex-col items-center p-10 py-20 gap-6 h-[650px] w-full bg-blue-50'>
        <h2 className='text-lg'>Welcome to CarCentral - Your Ultimate Car Marketplace</h2>
        <h2 className='text-[60px] font-bold'>Find your dream car</h2>
        <Search />
        <img src='/file.png' className='mt-10 w-[900px] h-auto'/>
        </div>
    
    </div>
  )
}

export default Hero