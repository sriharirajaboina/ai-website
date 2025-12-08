import React, { useRef } from "react";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import { Line } from "react-chartjs-2";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
  Filler
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
  Filler
);

const Traffic = () => {
  const chartRef = useRef(null);

  const data = {
    labels: ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug"],
    datasets: [
      {
        label: "",
        data: [38, 28, 57, 36, 43, 37, 45, 30],
        borderWidth: 2,
        tension: 0.1,
        borderColor: "#361764",
        backgroundColor: "#4D376310",
        pointRadius: 2,
        fill: true,
      }
    ]
  };

  const options = {
    maintainAspectRatio: false,
    scales: {
      y: {
        min: 23,
        max: 60,
        ticks: {
          color: "#ffffff80",
          callback: (value) => {
            if (value === 20) return "20k";
            if (value === 40) return "40k";
            if (value === 60) return "60k";
            return "";
          }
        },
        grid: {
          drawBorder: false,
          color: (context) =>
            [20, 40, 60].includes(context.tick.value)
              ? "#ffffff30"
              : "transparent",
        },
      },
      x: {
        display: false, 
      },
    },
    plugins: { legend: { display: false } },
  };

  return (
    <div className="p-15 text-white">
      <div className="border-t border-l border-r border-white/20 rounded-xl p-4">
        <div className="flex justify-between">
          <h5 className="text-[#ffffff40]">Traffic</h5>
          <HelpOutlineIcon />
        </div>

        <h2 className="text-5xl font-bold mt-3 mb-10">
          59.8K <span className="text-green-400 text-base">+10.7%</span>
        </h2>

        <div style={{ height: "220px" }}>
          <Line 
            ref={chartRef} 
            data={data} 
            options={options} 
           
          />
        </div>
      </div>
    </div>
  );
};

export default Traffic;


