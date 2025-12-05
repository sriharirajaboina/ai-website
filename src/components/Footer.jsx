import React from 'react'
import logo from "../assets/logo.png"
import { Box } from "@mui/material";
import XIcon from '@mui/icons-material/X';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';



const Footer = () => {
  return (
    <div className="p-10 text-[#ffffff]">
        <div className="flex justify-between">
            <div>
                <div className="flex items-center gap-5 mb-70">
                    <img src={logo} alt="footer"
                    className="w-8 h-8"/>
                    <h2 className="text-xl font-semibold">
                        AI Startup Kit
                    </h2>
                </div>
                <div className="flex gap-8">
                    
                        <XIcon fontSize="medium" className="text-[#ffffff30]" />
                        <InstagramIcon fontSize="medium" className="text-[#ffffff30]" />
                        <YouTubeIcon fontSize="medium" className="text-[#ffffff30]" />
                   
                </div>
            </div>
            <div className="px-15">
                <div className="flex justify-between gap-15">
                    <div className="flex justify-between gap-15 ">
                        <ul className="flex flex-col gap-6 text-sm">
                            <li>Product</li>
                            <li className="text-[#ffffff30]">Features</li>
                            <li className="text-[#ffffff30]">integration</li>
                            <li className="text-[#ffffff30]">updates</li>
                            <li className="text-[#ffffff30]">FAQ</li>
                            <li className="text-[#ffffff30]">Pricing</li>
                        </ul>
                        <ul className="flex flex-col gap-6 text-sm">
                            <li >Comapny</li>
                            <li className="text-[#ffffff30]">About</li>
                            <li className="text-[#ffffff30]">Blog</li>
                            <li className="text-[#ffffff30]">Careers</li>
                            <li className="text-[#ffffff30]">manifesto</li>
                            <li className="text-[#ffffff30]">Press</li>
                            <li className="text-[#ffffff30]">Contract</li>
                        </ul>
                    </div>
                    <div className="flex justify-between gap-15">
                        <ul className="flex flex-col gap-6 text-sm">
                            <li >Resources</li>
                            <li className="text-[#ffffff30]">Examples</li>
                            <li className="text-[#ffffff30]">Community</li>
                            <li className="text-[#ffffff30]">Guides</li>
                            <li className="text-[#ffffff30]">Docs</li>
                            <li className="text-[#ffffff30]">Press</li>
                        </ul>
                        <ul className="flex flex-col gap-6 text-sm">
                            <li>Legal</li>
                            <li className="text-[#ffffff30]">Privacy</li>
                            <li className="text-[#ffffff30]">Teams</li>
                            <li className="text-[#ffffff30]">Security</li>
                        </ul>
                    </div>
                </div>
            </div>  
        </div>
    </div>
  )
}

export default Footer