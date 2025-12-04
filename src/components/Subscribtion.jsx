import React from 'react'

const Subscribtion = () => {
  return (
    <div className="m-10 text-[#ffffff]">
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
    </div>
  )
}

export default Subscribtion