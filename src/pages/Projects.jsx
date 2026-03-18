import React from 'react'

const Projects = () => {
  return (
    <div className='p-4'>
      <div className='pt-[45vh]'>
        <h2 className='font-[font2] text-[9vw] uppercase'>Projects</h2>
      </div>
      <div className='-mt-13'>
        <div className='w-full h-\[700px\]  mb-4 flex gap-4'>
          <div className='w-1/2 transition relative rounded-none overflow-hidden hover:rounded-[50px] h-full '>
            <img className='h-full w-full object-cover' src='https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290.jpg?w=640&h=290&s=ac50a70feaaa2601b3aacad544c6045b' alt='' />
            <div className='absolute top-0 flex items-center justify-center left-0 h-full w-full bg-black/10'>
              <h2 className='uppercase text-6xl font-[font1] border-4 pt-4 px-8 text-white border-white rounded-full'>View Project</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects
