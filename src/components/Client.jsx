import React from 'react'
import client from "../assets/client.png"
const Client = () => {
  return (
    <div className="text-[#ffffff]">
        <div className="relative p-5 ">
            <div className="text-center">
                <h1 className="text-5xl mb-8">Our Clients</h1>
                <p className="text-lg leading-0.25rem">Here firsthand how our solution have
                <br/>
                boosted online success for users like you
            </p>
            </div>
            
                
            <div className="mt-25 mx-auto w-fit flex items-center justify-center gap-8 ">
                     <div className="absolute bg-[#8C45FF50]  shadow-[0_0_80px_40px_#8C45FF66] w-60 h-35  rounded-full -ml-80"></div>
                    <img src={client} alt="client"
                    className="w-50 h-50 border-"/>
                    
                <div className="">
                    <p className="text-xl mb-5">"This product has completely 
                        <br/> &nbsp;transformed how I manage my 
                        <br/>&nbsp;projects and deadlines"
                    </p>
                    <h5 className="mb-2">Talia Taylor</h5>
                    <h6>Digital Marketing Director @ Quantum</h6>
                </div>
            </div>

            
        </div>
    </div>
  )
}

export default Client