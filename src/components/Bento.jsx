import React from 'react'
import seo from "../assets/seo.png"
import cones from "../assets/cones.png"
import Traffic from './graph/Traffic'
import Overview from "./graph/Overview"


const Bento = () => {
  return (
    <div className="py-6 px-20 text-[#ffffff]">
        <div>
            <h2 className="text-center text-5xl leading-12 tracking-wider">
                Harness the power of AI, making 
                <br/>search engine optimization intuitive 
                <br/>and effective for all skill levels.
            </h2>
            <div className="my-8 flex gap-3">
                <div className="flex flex-col gap-3 p-5 
                    border border-[#ffffff30] rounded-xl
                    hover:bg-[#ffffff10] transition-all duration-300">
                    <img 
                        src={seo} 
                        alt="seo" 
                        className="w-90 h-90 object-contain flex items-center"
                    />
                    <h5 className="font-semibold">
                        SEO goal setting
                    </h5>

                    <p className="text-[#ffffff70]">
                        Helps you set & achieve SEO
                        <br/> goals with guided assistance.
                    </p>

                </div>

                <div >
                    <div className="w-250 h-130 p-2 bg-[linear-gradient(to_bottom,#030106,#361764)] border border-[#ffffff40] rounded-xl overflow-hidden">
                        <Overview/>
                    </div>  
                </div>
            </div>
            <div className="my-8 flex gap-3">
                <div className="w-250 bg-[linear-gradient(to_bottom,#030106,#361764)] border-l border-b border-r border-[#ffffff40] rounded-xl">
                    <div className="">
                        <Traffic className=""/>
                        <div className="p-8 -mt-35 tracking-wide leading-6">
                            <h5 className="font-semibold">Visual reports</h5>
                            <p className="text-[#ffffff40]">Visual insights into your
                                <br/>site's performance
                            </p>
                        </div>
                    </div>
                    
                    
                </div>
                <div className="flex flex-col items-center 
                    border border-[#ffffff30] rounded-xl
                    hover:bg-[#ffffff10] transition-all duration-300">
                    <img src={cones} alt="cone"
                    className="w-90 h-90"/>
                    <h5 className="font-semibold">
                        Smart Keyword Generator
                    </h5>
                    <p className="text-[#ffffff70] mt-3">
                        Automatic suggestions and
                        <br/> the best keyword to target
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Bento