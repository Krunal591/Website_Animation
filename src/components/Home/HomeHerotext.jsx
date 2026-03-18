import React from 'react'
import Video from './Video'

const HomeHerotext = () => {
  return (
    <div className='font-[font-2] pt-5 text-center text-white'>
      <div className='text-[9.5vw] uppercase flex items-center justify-center leading-[8vw]'>
        The spark for
      </div>
      <div className='text-[9.5vw] flex items-center justify-center uppercase leading-[8vw]'>
        all
        <div className='h-[8vw] w-[16vw] rounded-full -mt-3 overflow-hidden'><Video/></div>
        things
      </div>
      <div className='text-[9.5vw] uppercase flex items-center justify-center leading-[8vw]'>
        creative
      </div>
    </div>
  )
}

export default HomeHerotext
