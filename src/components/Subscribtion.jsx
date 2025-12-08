import React from 'react'

const Subscribtion = () => {
  return (
    <div className="m-10 text-[#ffffff] overflow-hidden">
        <div className="py-30 text-center border border-[#D9D9D910] rounded-xl">
            <h1 className="text-7xl mb-6">
                AI-driven SEO
                <br/>
            for Everyone.
            </h1>
            <div className="mb-8 inline-flex items-center gap-3 py-1 px-2 border 
            border-[#ffffff30] rounded-lg bg-transparent">
                <input 
                placeholder='Your Email'/>
                <button className="text-[#000000] px-3 py-2 bg-[#ffffff] rounded-lg ">
                    Join Waitlist
                </button>
            </div>
            <p>no credit card Required . 7-days free trail</p>
        </div>
        {/* <div className="left-1/6 top-1/2 absolute bg-[#8C45FF50]  shadow-[0_0_80px_66px_#8C45FF66] w-200 h-200  rounded-full ml-40 mt-5 z-6"></div> */}
        <div className="relative">
        <div
            className="
            relative before:content-[''] before:absolute
            before:w-270 before:h-130
            before:-top-200 before:left-1/2 before:-translate-x-1/2
            before:bg-[#8C45FF66] z-1
            before:blur-[80px] before:rounded-full before:pointer-events-none
            "
        ></div>
</div>
    </div>
  )
}

export default Subscribtion