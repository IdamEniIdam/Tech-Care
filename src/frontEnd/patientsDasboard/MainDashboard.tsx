import { Line } from "react-chartjs-2";
import ArrowUp from "../../assets/ArrowUp.svg";
import ArrowDown from "../../assets/ArrowDown.svg";
import RespiratoryTemperatureHeartRate from "./respiratoryTemperatureHeartRate";
import Diagostic from "./Diagostic";
import { FiTrendingUp, FiTrendingDown } from "react-icons/fi";
import { ChartOptions } from "chart.js";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const diagnosisData = {
  labels: [
    "Oct, 2023",
    "Nov, 2023",
    "Dec, 2023",
    "Jan, 2024",
    "Feb, 2024",
    "Mar, 2024",
  ],
  datasets: [
    {
      label: "Systolic",
      data: [120, 140, 160, 130, 150, 160],
      borderColor: "#d946ef",
      backgroundColor: "#d946ef",
      tension: 0.4,
    },
    {
      label: "Diastolic",
      data: [80, 70, 90, 85, 80, 78],
      borderColor: "#6366f1",
      backgroundColor: "#6366f1",
      tension: 0.4,
    },
  ],
};

const systolicValue = diagnosisData.datasets[0].data.at(-1) ?? 0;
const diastolicValue = diagnosisData.datasets[1].data.at(-1) ?? 0;

// Determine Systolic Status
const systolicStatus =
  systolicValue > 140
    ? { text: "Higher than Average", color: "text-red-500", Icon: FiTrendingUp }
    : { text: "Normal", color: "text-green-500", Icon: null };

// Determine Diastolic Status
const diastolicStatus =
  diastolicValue < 80
    ? {
        text: "Lower than Average",
        color: "text-blue-500",
        Icon: FiTrendingDown,
      }
    : { text: "Normal", color: "text-green-500", Icon: null };

const options: ChartOptions<"line"> = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: "top" as const,
      labels: {
        color: "#072635",
        font: {
          size: 14,
        },
      },
      display: false,
    },
    tooltip: {
      mode: "index",
      intersect: false,
    },
  },
  scales: {
    x: {
      ticks: {
        color: "#6b7280",
      },
    },
    y: {
      ticks: {
        color: "#6b7280",
      },
      grid: {
        color: "#e5e7eb",
      },
    },
  },
};

const MainDashboard = () => {
  return (
    <div className="bg-[#F6F7F8] p-6 m-5 bg-gray-50">
      <div className="bg-white">
        <h2 className="text-[24px] text-[#072635] font-semibold mb-4">
          Diagnosis History
        </h2>
        <div className="p-6 rounded-lg shadow-md bg-[#F4F0FE]">
          <div className="flex flex-wrap justify-between mb-4">
            <h3 className="text-lg font-medium text-start">Blood Pressure</h3>
            <div className="flex justify-end">
              <select
                className="p-2 rounded-md text-sm text-gray-600 bg-[#F4F0FE]"
                aria-label="Select Time Range"
              >
                <option className="bg-[#F4F0FE] border-0">Last 6 months</option>
                <option className="bg-[#F4F0FE] border-0">
                  Last 12 months
                </option>
              </select>
            </div>
          </div>

          {/* Row Container */}
          <div className="flex flex-col lg:flex-row justify-between items-start">
            {/* Chart */}
            <div className="w-full lg:w-2/3 h-auto mb-4">
              <Line data={diagnosisData} options={options} />
            </div>

            {/* Key Metrics (Systolic & Diastolic) */}
            <div className="w-full lg:w-1/3 p-3 flex flex-col justify-start">
              {/* Systolic */}
              <div className="flex flex-col mb-4">
                <span className="flex items-center">
                  <div className="bg-[#E66FD2] w-[10px] h-[10px] rounded-[50px]"></div>
                  <div className="ml-1">Systolic</div>
                </span>
                <strong className="text-[22px]">{systolicValue}</strong>

                <span className={`flex items-center ${systolicStatus.color}`}>
                  <img src={ArrowUp} alt="" />
                  <div className="ml-2 text-[#072635] text-[10px]">
                    {systolicStatus.text}
                  </div>
                </span>
              </div>
              <div className="w-full h-[1px] bg-[#CBC8D4] my-2" />
              {/* Diastolic */}
              <div className="flex flex-col">
                <span className="flex items-center">
                  <div className="bg-[#8C6FE6] w-[10px] h-[10px] rounded-[50px]"></div>
                  <div className="ml-1">Diastolic</div>
                </span>
                <strong className="text-[22px]">{diastolicValue}</strong>

                <span className={`flex items-center ${diastolicStatus.color}`}>
                  <img src={ArrowDown} alt="" />
                  <div className="ml-2 text-[#072635] text-[10px]">
                    {diastolicStatus.text}
                  </div>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* respiratory temperature heart rate */}
      <RespiratoryTemperatureHeartRate />
      {/* Diagostic */}
      <Diagostic />
    </div>
  );
};

export default MainDashboard;
