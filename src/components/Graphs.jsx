import React from 'react'
import Overview from "../components/graph/Overview"

const Graphs = () => {
  return (
    <div className="px-10 text-[#ffffff]">
         <div className="relative h-275 mt-5 p-2 border border-[#ffffff40]  shadow-[0_0_80px_66px_#8C45FF26] rounded-lg overflow-hidden">
                <Overview/>  
            </div>
    </div>
  )
}

export default Graphs