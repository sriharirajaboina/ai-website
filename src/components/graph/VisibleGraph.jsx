import React from 'react';
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import { CircleDot, Ellipsis } from 'lucide-react';
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
import Traffic from './Traffic';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
  Filler
);

const data = {
  labels: ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],
  datasets: [
    {
      label: "Visibility",
      data: [38, 28, 57, 36, 43, 37, 45, 30, 46, 32, 39, 45],
      borderWidth: 1,
      tension: 0.1,
      borderColor: "#361764",
      backgroundColor: "#4D376320",
      pointRadius: 2,
      fill: true,
    }
  ]
};

const options = {
  maintainAspectRatio: false,
  scales: {
    y: { min: 0, max: 60, display: false },
    x: { display: false },
  },
  plugins: {
    legend: { display: false },
    tooltip: {
      mode: "index",
      intersect: false,
      backgroundColor: "#000000",
      padding: 10,
      borderColor: "#ffffff30",
      borderWidth: 1,
    }
  },
  hover: {
    mode: "index",
    intersect: false,
  }
};

const VisibleGraph = () => {
  const keywords = [
    "online payment processing",
    "secure transaction",
    "online transaction platform",
    "online shopping payment",
    "e-commerce payment gateway",
    "B2B payment processing",
    "safe online payment"
  ];

  return (
    <div>

      {/* ⭐ FIXED GRID (1.5fr + 1.5fr columns) */}
      <div
        className="p-15 grid gap-3 text-white"
        style={{ gridTemplateColumns: "1.5fr 1.5fr" }}
      >

        {/* ⭐ CARD 1 */}
        <div className="border border-white/20 rounded-xl p-4">
          <div className="flex justify-between">
            <h5 className="text-[#ffffff40]">Visibility</h5>
            <HelpOutlineIcon />
          </div>

          <h2 className="text-5xl font-bold mt-3 mb-10">
            10.15% <span className="text-green-400 text-base"> +5.6%</span>
          </h2>

          <div className="h-[220px]">
            <Line data={data} options={options} />
          </div>
        </div>

        {/* ⭐ CARD 2 */}
        <div className="border border-white/20 rounded-xl p-4">
          <div className="flex justify-between">
            <h5 className="text-[#ffffff40]">Organic Keywords</h5>
            <HelpOutlineIcon />
          </div>

          <h2 className="text-5xl font-bold mt-3 mb-10">
            35.6K <span className="text-pink-900 text-base"> -2.5%</span>
          </h2>

          <div className="flex flex-col gap-3">
            <h5>Top Keywords</h5>

            {keywords.map((item, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex items-center gap-3 text-[#ffffff40]">
                  <CircleDot strokeWidth="4px" />
                  <h5>{item}</h5>
                </div>
                <Ellipsis />
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* TRAFFIC SECTION BELOW */}
      <Traffic />

    </div>
  );
};

export default VisibleGraph;

