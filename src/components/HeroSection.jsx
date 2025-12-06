import React from 'react'
import hero from "../assets/hero.png"

const HeroSection = () => {
  return (
    <div className="text-[#ffffff]">
        <div className="px-10 text-center">
            <div className="px-4 py-2 inline-flex items-center justify-center gap-5 bg-[#000000] border
            border-[#ffffff40] rounded-full">
                <button className="px-1.5 bg-[#9855FF] rounded-full text-sm text-black font-semibold">New</button>
                <h5 className="text-[#9855FF]">Latest integration just arrived</h5>
            </div>
            <h1 className="mt-3 bg-gradient-to-b from-[#FFFFFF] to-[#B372CF] 
       bg-clip-text text-transparent text-[82px] font-regular leading-20 ">
            Boost your
                <br/>ranking with AI.
            </h1>
            <p className="mt-3 text-lg">Elevate your site’s visibility effortlessly with AI, where 
                <br/>smart technology meets user-friendly SEO tools.
            </p>
            <div>
                <div className="mt-5 p-1 inline-flex items-center justify-center border border-[#ffffff50] rounded-lg">
                    <button className="p-1 bg-[#ffffff] text-[#000000] rounded-lg">
                        Start for free
                    </button>
                </div> 
            </div>
            <div className="mt-5 p-2 bg-[linear-gradient(to_right,#0D0718_0%,#0F081B_48%,#0B0614_100%)]">
                <img src={hero} alt="hero"
                className="w-full h-auto"/>
            </div>
        </div>
    </div>
  )
}

export default HeroSection