import React from 'react'
import corp from "../assets/corp.png"
import valley from "../assets/valley.png"
import quantum from "../assets/quantum.png"
import pulse from "../assets/pulse.png"
import outside from "../assets/outside.png"
import apex from "../assets/apex.png"
import celestrial from "../assets/celestrial.png"
import twice from "../assets/twice.png"

const Comapnies = () => {
  return (
    <div className="px-25 py-10 text-[#ffffff]">
        <div className="flex flex-col gap-10 text-center">
          <h2 className="text-[#ffffff40]">Trusted by the world’s most innovative teams</h2>
          <div className="flex flex-col gap-5">
            <div className="flex items-center gap-2.5">
              <div className="px-10 py-8 border border-[#ffffff40] rounded-xl">
                <img src={corp} alt="corp"
                className="w-60 h-15"/>
              </div>
              <div className="px-10 py-8 border border-[#ffffff40] rounded-xl">
                <img src={valley} alt="valley"
                className="w-60 h-15"/>
              </div>
              <div className="px-10 py-8 border border-[#ffffff40] rounded-xl">
                <img src={quantum} alt="quantum"
                className="w-60 h-15"/>
              </div>
              <div className="px-10 py-8 border border-[#ffffff40] rounded-xl">
                <img src={pulse} alt="pulse"
                className="w-60 h-15"/>
              </div>
            </div>
            <div className="flex items-center gap-2.5">
              <div className="px-10 py-8 border border-[#ffffff40] rounded-xl">
                <img src={outside} alt="outside"
                className="w-60 h-15"/>
              </div>
              <div className="px-10 py-8 border border-[#ffffff40] rounded-xl">
                <img src={apex} alt="apex"
                className="w-60 h-15"/>
              </div>
              <div className="px-10 py-8 border border-[#ffffff40] rounded-xl">
                <img src={celestrial} alt="celestrial"
                className="w-60 h-15"/>
              </div>
              <div className="px-10 py-8 border border-[#ffffff40] rounded-xl">
                <img src={twice} alt="twice"
                className="w-60 h-15"/>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Comapnies