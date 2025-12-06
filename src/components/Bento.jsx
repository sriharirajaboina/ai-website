import React from 'react'
import seo from "../assets/seo.png"
import cone from "../assets/cone.png"
import bento1 from "../assets/bento1.png"
import bento2 from "../assets/bento2.png"

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
                        className="w-60 h-50 object-contain flex items-center"
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
                    <div className=" p-2 bg-[linear-gradient(to_bottom,#030106,#361764)] border border-[#ffffff40] rounded-xl">
                         <img src={bento1} alt="bento1"
                        className="w-280 h-90"/>
                    </div>  
                </div>
            </div>
            <div className="my-8 flex gap-3">
                <div className=" p-2 bg-[linear-gradient(to_bottom,#030106,#361764)] border border-[#ffffff40] rounded-xl">
                    <img src={bento2} alt="bento2"
                    className="w-280 h-110"/>
                </div>
                <div className="flex flex-col items-center 
                    border border-[#ffffff30] rounded-xl
                    hover:bg-[#ffffff10] transition-all duration-300">
                    <img src={cone} alt="cone"
                    className="w-80 h-90"/>
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