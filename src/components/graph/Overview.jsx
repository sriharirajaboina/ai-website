import React,{useState} from 'react'
import VisibilityIcon from '@mui/icons-material/Visibility';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import RadarIcon from '@mui/icons-material/Radar';
import ChecklistIcon from '@mui/icons-material/Checklist';
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';
import { Link } from 'lucide-react';
import { ChartLine } from 'lucide-react';
import { ArrowUpRight } from 'lucide-react';
import { Calendar1 } from 'lucide-react';
import { ArrowRight } from 'lucide-react';
import { Settings } from 'lucide-react';
import icon from "../../assets/logo.png"
import VisibleGraph from './VisibleGraph';
const Overview = () => {
    const [selected, setSelected] = useState(null);

  const menuItems = [
    { id: 1, icon: <VisibilityIcon />, label: "Site Overview" },
    { id: 2, icon: <ChartLine />, label: "Analytics"
    },
    { id: 3, icon: <AutoAwesomeIcon />, label: "Smart Keyword Generator" },
    { id: 4, icon: <RadarIcon />, label: "Goals" },
    { id: 5, icon: <ChecklistIcon />, label: "Content evaluation" },
    { id: 6, icon: <Link />, label: "Backlink Audit" },
    { id: 7, icon: <AutoFixHighIcon />, label: "Link Optimization Wizard" },
  ];
  return (
    <div className="p-3 text-[#ffffff]">
        <div className="grid grid-cols-4 border border-[#ffffff40] rounded-xl">
            <div className="col-span-1 border-r border-[#ffffff40] rounded-lg">
                <div className="p-3 flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-400"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                    <div className="w-3 h-3 rounded-full bg-green-400"></div>
                </div>
                <div className="mt-10 p-3 flex flex-col gap-3">
                    {menuItems.map((item) => (
                    <div
                        key={item.id}
                        onClick={() => setSelected(item.id)}
                        className={`
                            flex items-center gap-3 p-3 rounded-xl cursor-pointer transition
                            border
                            ${selected === item.id ? "bg-[#ffffff10] border-white/40" : "border-transparent"}
                            hover:border-white/40
                        `}
                        >
                        {item.icon}
                        <h4>{item.label}</h4>
                    </div>
                    ))}
                </div>
            </div>
            <div className="w-full col-span-3">
                <div className="px-3 py-6 flex items-center justify-between">
                    <div>
                        <h5>
                             Site Overview
                        </h5>
                        <h6 className="flex text-[#ffffff40] gap-2">www.website.com <span>
                            <ArrowUpRight /></span></h6>
                     </div>
                    <div className="flex items-center gap-3">
                        <input type="text"
                        placeholder="Search"
                        className="p-2 border border-[#ffffff40] rounded-lg"/>
                        <div>
                            <img src={icon} alt="icon"
                                className="w-10 h-10"/>
                        </div>
                    </div>
                </div>
                <div className="mx-3 border-b border-[#ffffff40]"></div>
                <div className="px-3 py-6 flex items-center justify-between">
                    <div className="p-3 flex items-center gap-3 border border-[#ffffff40] rounded-lg bg-[#ffffff10]">
                        <Calendar1 />
                        <h5>Jun 24</h5>
                        <ArrowRight />
                        <h5>Today</h5>
                    </div>
                    <div className="p-3 border border-[#ffffff40] rounded-lg">
                        <Settings />
                    </div>   
                </div>  
                <VisibleGraph/>     
            </div>
        </div>
    </div>
  )
}

export default Overview