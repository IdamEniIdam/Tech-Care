import { Line } from "react-chartjs-2";
import { FiThermometer, FiHeart, FiActivity } from "react-icons/fi";
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

const diagnosisList = [
  {
    problem: "Hypertension",
    description: "Chronic high blood pressure",
    status: "Under Observation",
  },
  {
    problem: "Type 2 Diabetes",
    description: "Insulin resistance and elevated blood sugar",
    status: "Cured",
  },
  {
    problem: "Asthma",
    description: "Recurrent episodes of bronchial constriction",
    status: "Inactive",
  },
];

const MainDashboard = () => {
  return (
    <div className="p-6 bg-gray-50 m-5">
      <h2 className="text-2xl font-semibold mb-4">Diagnosis History</h2>
      <div className="bg-white p-6 rounded-lg shadow-md h-[450px]">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-medium">Blood Pressure</h3>
          <select className="border p-2 rounded-md text-sm text-gray-600">
            <option>Last 6 months</option>
          </select>
        </div>
       
          <Line data={diagnosisData} />
      </div>

      <div className="grid md:grid-cols-3 gap-4 mt-6 flex-col">
        <div>
          <div className="bg-blue-100 p-4 rounded-lg flex items-start gap-4 flex-col">
            <FiActivity className="text-4xl text-blue-500" />
            <div>
              <p className="text-gray-600">Respiratory Rate</p>
              <p className="text-xl font-semibold">20 bpm</p>
              <p className="text-sm text-gray-500">Normal</p>
            </div>
          </div>
        </div>
        <div className="bg-red-100 p-4 rounded-lg flex items-start flex-col gap-4">
          <FiThermometer className="text-4xl text-red-500" />
          <div>
            <p className="text-gray-600">Temperature</p>
            <p className="text-xl font-semibold">98.6°F</p>
            <p className="text-sm text-gray-500">Normal</p>
          </div>
        </div>
        <div className="bg-pink-100 p-4 rounded-lg flex items-start flex-col gap-4">
          <FiHeart className="text-4xl text-pink-500" />
          <div>
            <p className="text-gray-600">Heart Rate</p>
            <p className="text-xl font-semibold">78 bpm</p>
            <p className="text-sm text-gray-500">Lower than Average</p>
          </div>
        </div>
      </div>

      <h2 className="text-2xl font-semibold mt-8 mb-4">Diagnostic List</h2>
      <div className="bg-white p-4 rounded-lg shadow-md overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-100 text-left">
              <th className="p-2">Problem/Diagnosis</th>
              <th className="p-2">Description</th>
              <th className="p-2">Status</th>
            </tr>
          </thead>
          <tbody>
            {diagnosisList.map((item, index) => (
              <tr key={index} className="border-b hover:bg-gray-50">
                <td className="p-2 font-medium">{item.problem}</td>
                <td className="p-2">{item.description}</td>
                <td className="p-2 text-gray-700">{item.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MainDashboard;
