import React from 'react'
import CheckIcon from "@mui/icons-material/Check";
const pricing = () => {
  return (
    <div className="px-33 py-4 text-[#ffffff]">
        <div className="">
            <div className="text-center">
                <h1 className="text-5xl mb-5">Pricing</h1>
                <p className="text-lg">Choose the plan to meet your SEO
                    <br/>
                    needs and start optimizing today. 
                </p>
                <div className="flex items-center justify-center gap-3 mt-5">
                    <div className="p-0.5 rounded-full bg-[#8C45FF] inline-flex">
                    <div className="p-3 rounded-full bg-[#ffffff] ml-5"></div>
                </div>
                <h5>dsad</h5>
                </div>   
            </div>
            <div className="relative">
            <div
                className="
                relative before:content-[''] before:absolute
                before:w-240 before:h-120        /* width > height = ellipse */
                before:top-10 before:left-1/2 before:-translate-x-1/2
                before:bg-[#8C45FF66]
                before:blur-[60px] before:rounded-full before:pointer-events-none
                z-0
                "
            ></div>
            </div>
            
            <div className="mt-10 flex gap-8 justify-between">
                <div className="relative p-5 border-2 border-[#ffffff30] rounded-lg flex flex-col justify-between w-full max-w-base">
                    <div>
                        <div className="border-b border-[#ffffff30] tracking-wide">
                            <h5 className="text-xl font-semibold">Pricing</h5>
                            <h6 className="mt-2 text-base pb-5">$29/mo</h6>
                        </div>

                        <div className="mt-6 text-sm">
                            <div className="flex items-center gap-5 py-2.5">
                                <CheckIcon />
                                <h5>Keyword optimization</h5>
                            </div>
                            <div className="flex items-center gap-5 py-2.5">
                                <CheckIcon />
                                <h5>Automated meta tags</h5>
                            </div>
                            <div className="flex items-center gap-5 py-2.5">
                                <CheckIcon />
                                <h5>SEO monitoring</h5>
                            </div>
                            <div className="flex items-center gap-5 py-2.5">
                                <CheckIcon />
                                <h5>Monthly reports</h5>
                            </div>
                        </div>
                    </div>

                    <div className="px-4 py-1.5 bg-[#3d3d3d40] border-2 border-[#ffffff30] text-center rounded-xl 
                        backdrop-blur-[14px] shadow-[inset_0_0_6px_3px_#ffffff25] mt-8">
                        <button className="text-sm tracking-widest">Join waitlist</button>
                    </div>
                </div>
                <div className="p-5 border-2 border-[#ffffff30] rounded-lg flex flex-col justify-between w-full max-w-base z-8">
                    <div className="overflow-hidden">
                        <div className="border-b border-[#ffffff30] tracking-wide">
                            <h5 className="text-xl font-semibold">Pro</h5>
                            <h6 className="mt-2 text-base pb-5">$79/mo</h6>
                        </div>

                        <div className="relative mt-6 text-sm">
                            <div className="flex items-center gap-5 py-2.5">
                                <CheckIcon />
                                <h5>Keyword optimization</h5>
                            </div>
                            <div className="flex items-center gap-5 py-2.5">
                                <CheckIcon />
                                <h5>Automated meta tags</h5>
                            </div>
                            <div className="flex items-center gap-5 py-2.5">
                                <CheckIcon />
                                <h5>SEO monitoring</h5>
                            </div>
                            <div className="flex items-center gap-5 py-2.5">
                                <CheckIcon />
                                <h5>Monthly reports</h5>
                            </div>
                            <div className="flex items-center gap-5 py-2.5">
                                <CheckIcon />
                                <h5>Content Suggestions</h5>
                            </div>
                            <div className="flex items-center gap-5 py-2.5">
                                <CheckIcon />
                                <h5>Link optimization</h5>
                            </div>
                        </div>
                    </div>

                    <div className="px-4 py-1.5 bg-[#8C45FF40] border-2 border-[#ffffff30] text-center rounded-xl
                        backdrop-blur-[14px] shadow-[inset_0_0_6px_3px_#ffffff25] mt-8">
                        <button className="text-sm tracking-widest">Join waitlist</button>
                        </div>
                    </div>
                    <div className="relative p-5 border-2 border-[#ffffff30] rounded-lg flex flex-col justify-between w-full max-w-base">
                        <div>
                            <div className="border-b border-[#ffffff30] tracking-wide">
                                <h5 className="text-xl font-semibold">Business</h5>
                                <h6 className="mt-2 text-base pb-5">$149/mo</h6>
                            </div>

                            <div className="mt-6 text-sm z-8">
                                <div className="flex items-center gap-5 py-2.5">
                                    <CheckIcon />
                                    <h5>Keyword optimization</h5>
                                </div>
                                <div className="flex items-center gap-5 py-2.5">
                                    <CheckIcon />
                                    <h5>Automated meta tags</h5>
                                </div>
                                <div className="flex items-center gap-5 py-2.5">
                                    <CheckIcon />
                                    <h5>SEO monitoring</h5>
                                </div>
                                <div className="flex items-center gap-5 py-2.5">
                                    <CheckIcon />
                                    <h5>Monthly reports</h5>
                                </div>
                                <div className="flex items-center gap-5 py-2.5">
                                    <CheckIcon />
                                    <h5>Content Suggestions</h5>
                                </div>
                                <div className="flex items-center gap-5 py-2.5">
                                    <CheckIcon />
                                    <h5>Link optimization</h5>
                                </div>
                                <div className="flex items-center gap-5 py-2.5">
                                    <CheckIcon />
                                    <h5>Multi-user access</h5>
                                </div>
                                <div className="flex items-center gap-5 py-2.5">
                                    <CheckIcon />
                                    <h5>API integration</h5>
                                </div>
                            </div>
                        </div>

                        <div className="px-4 py-1.5 bg-[#3d3d3d40] border-2 border-[#ffffff30] text-center rounded-xl 
                            backdrop-blur-[14px] shadow-[inset_0_0_6px_3px_#ffffff25] mt-8">
                            <button className="text-sm tracking-widest">Join waitlist</button>
                    </div>
                </div>     
            </div>
        </div>
    </div>
  )
}

export default pricing