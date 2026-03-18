import React, { useState } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { useRef } from 'react'
import { useLocation } from 'react-router-dom'

const Stairs = (props) => {
    const currentPath = useLocation().pathname

    const stairParentRef = useRef(null)
    const pageRef = useState(null)

    useGSAP(function () {
        const tl = gsap.timeline()
        tl.to(stairParentRef.current, {
            display: 'block'
        })
        tl.from('.stair', {
            height: 0,
            stagger: {
                amount: -0.25
            }
        })
        tl.to('.stair', {
            y: '100%',
            stagger: {
                amount: -0.25
            }
        })
        tl.to(stairParentRef.current, {
            display: 'none'
        })
        tl.to('.stair', {
            y: '100%',
        })

        gsap.from(pageRef.current,{
            opacity:0,
            delay:1.3,
            scale:1.2
        })
    }, [currentPath])

    return (
        <div>
            <div ref={stairParentRef} className='h-screen flex w-full fixed z-20 top-0'>
                <div className='h-full flex w-full fixed'>
                    <div className='stair w-1/5 h-full bg-black'></div>
                    <div className='stair w-1/5 h-full bg-black'></div>
                    <div className='stair w-1/5 h-full bg-black'></div>
                    <div className='stair w-1/5 h-full bg-black'></div>
                    <div className='stair w-1/5 h-full bg-black'></div>
                </div>
            </div>
            <div>
                {props.children}
            </div>
        </div>
    )
}

export default Stairs
