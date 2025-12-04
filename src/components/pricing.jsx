import React from 'react'
import CheckIcon from "@mui/icons-material/Check";
const pricing = () => {
  return (
    <div className="px-33 py-4 text-[#ffffff]">
        <div >
            <div className="text-center">
                <h1 className="text-5xl mb-6">Pricing</h1>
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
            <div className="mt-10 flex justify-between">
                <div className="p-4 border-2 border-[#ffffff30] rounded-lg">
                    <div>
                        <h5>Pricing</h5>
                        <h6>$29/mo</h6>
                    </div>
                    <div>
                        <div className="flex items-center gap-3 mb-4">
                           <CheckIcon />
                           <h5>Keyword optimization</h5> 
                        </div>
                        <div className="flex items-center gap-3 mb-4">
                            <CheckIcon />
                            <h5>Automated meta tags</h5>
                        </div>
                        <div className="flex items-center gap-3 mb-4">
                             <CheckIcon />
                             <h5>SEo monitoring</h5>
                        </div>
                        <div className="flex items-center gap-3 mb-4">
                             <CheckIcon />
                             <h5>Monthly reports</h5>
                        </div>
                    </div>
                </div>
                <div className="p-4 border-2 border-[#ffffff30] rounded-lg">
                    <div>
                        <h5>Pro</h5>
                        <h6>$79/mo</h6>
                    </div>
                    <div>
                        <div className="flex items-center gap-3 mb-4">
                           <CheckIcon />
                           <h5>Keyword optimization</h5> 
                        </div>
                        <div className="flex items-center gap-3 mb-4">
                            <CheckIcon />
                            <h5>Automated meta tags</h5>
                        </div>
                        <div className="flex items-center gap-3 mb-4">
                             <CheckIcon />
                             <h5>SEo monitoring</h5>
                        </div>
                        <div className="flex items-center gap-3 mb-4">
                             <CheckIcon />
                             <h5>Monthly reports</h5>
                        </div>
                        <div className="flex items-center gap-3 mb-4">
                            <CheckIcon />
                            <h5>Content Suggestions</h5>
                        </div>
                        <div className="flex items-center gap-3 mb-4">
                             <CheckIcon />
                             <h5>link optimization</h5>
                        </div>
                    </div>
                </div>
                <div className="p-4 border-2 border-[#ffffff30] rounded-lg">
                    <div>
                        <h5>Bussiness</h5>
                        <h6>@149/mo</h6>
                    </div>
                    <div className="flex items-center gap-3 mb-4">
                        <CheckIcon />
                        <h5>Keyword optimization</h5> 
                    </div>
                   <div className="flex items-center gap-3 mb-4">
                        <CheckIcon />
                        <h5>Automated meta tags</h5>
                    </div>
                    <div className="flex items-center gap-3 mb-4">
                        <CheckIcon />
                        <h5>SEo monitoring</h5>
                    </div>
                    <div className="flex items-center gap-3 mb-4">
                        <CheckIcon />
                        <h5>Monthly reports</h5>
                    </div>
                    <div className="flex items-center gap-3 mb-4">
                        <CheckIcon />
                        <h5>Content Suggestions</h5>
                    </div>
                    <div className="flex items-center gap-3 mb-4">
                        <CheckIcon />
                        <h5>link optimization</h5>
                    </div>
                    <div className="flex items-center gap-3 mb-4">
                        <CheckIcon />
                        <h5>Multi-user access</h5>
                    </div>
                    <div className="flex items-center gap-3 mb-4">
                        <CheckIcon />
                        <h5>Api integration</h5>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default pricing