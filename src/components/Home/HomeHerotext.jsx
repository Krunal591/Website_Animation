import React from 'react'
import Video from './Video'

const HomeHerotext = () => {
  return (
    <div className='font-[font-2] mt-72 lg:mt-0 pt-5 text-center text-white'>
      <div className='lg:text-[9.5vw] text-[12vw] uppercase flex items-center justify-center lg:leading-[8vw] leading-[10vw]'>
        The spark for
      </div>
      <div className='lg:text-[9.5vw] text-[12vw] flex items-center justify-center uppercase lg:leading-[8vw] leading-[10vw]'>
        all
        <div className='h-[8vw] w-[16vw] rounded-full -mt-3 overflow-hidden'><Video/></div>
        things
      </div>
      <div className='lg:text-[9.5vw] text-[12vw] uppercase flex items-center justify-center lg:leading-[8vw] leading-[10vw]'>
        creative
      </div>
    </div>
  )
}

export default HomeHerotext
