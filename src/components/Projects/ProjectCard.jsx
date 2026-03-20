import React from 'react'

const ProjectCard = (props) => {
    return (
        <>
            <div className='w-1/2 transition relative rounded-none overflow-hidden hover:rounded-[50px] h-full group'>
                <img className='h-full w-full object-cover' src={props.image1} alt='' />
                <div className='absolute top-0 flex items-center justify-center left-0 h-full w-full bg-black/10 opacity-0 group-hover:opacity-100 transition'>
                    <h2 className='uppercase text-6xl font-[font1] border-4 pt-4 px-8 text-white border-white rounded-full'>View Project</h2>
                </div>
            </div>
            <div className='w-1/2 transition relative rounded-none overflow-hidden hover:rounded-[50px] h-full group'>
                <img className='h-full w-full object-cover' src={props.image2} alt='' />
                <div className='absolute top-0 flex items-center justify-center left-0 h-full w-full bg-black/10 opacity-0 group-hover:opacity-100 transition'>
                    <h2 className='uppercase text-6xl font-[font1] border-4 pt-4 px-8 text-white border-white rounded-full'>View Project</h2>
                </div>
            </div>
        </>
    )
}

export default ProjectCard
