import React from 'react'
import Overview from './graph/Overview'

const HeroSection = () => {
  return (
    <div className="text-[#ffffff] overflow-hidden">
        <div className="px-10">
             
            <div className="text-center">
                <div className="relative">
            <div
                className="
                relative before:content-[''] before:absolute
                before:w-370 before:h-220       
                before:top-25 before:left-1/2 before:-translate-x-1/2
                before:bg-[#8C45FF46]
                before:blur-[80px] before:rounded-full before:pointer-events-none
                z-0
                "
            ></div>
            </div>
                <div className="px-4 py-2 inline-flex items-center justify-center gap-5 bg-[#000000] border
                border-[#ffffff40] rounded-full">
                    <button className="px-1.5 bg-[#9855FF] rounded-full text-sm text-black font-semibold">New</button>
                    <h5 className="text-[#9855FF]">Latest integration just arrived</h5>
                </div>
                <h1 className="mt-3 bg-linear-to-b from-[#FFFFFF] to-[#B372CF] 
                    bg-clip-text text-transparent text-[82px] font-regular leading-20 ">
                Boost your
                    <br/>ranking with AI.
                </h1>
                <p className="mt-3 text-lg">Elevate your site’s visibility effortlessly with AI, where 
                    <br/>smart technology meets user-friendly SEO tools.
                </p>
                <div>
                    <div className="mt-5 mb-10 p-1 inline-flex items-center justify-center border border-[#ffffff50] rounded-lg">
                        <button className="p-1 bg-[#ffffff] text-[#000000] rounded-lg">
                            Start for free
                        </button>
                    </div> 
                </div>
            </div>
        </div>
    </div>
  )
}

export default HeroSection