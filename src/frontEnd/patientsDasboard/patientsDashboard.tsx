import Sidebar from "./sideBarPpatient";
import MainDashboard from "./MainDashboard";
import PatientList from "./PatientList";
import LabResults from "./LabResults";

export default function PatientsDashboard() {
  return (
    <div className="bg-[#F6F7F8] flex justify-evenly">
      {/* Left Sidebar */}
      <div className="bg-[#F6F7F8] m-4 ">
        <Sidebar />
      </div>

      {/* Main Dashboard */}
      <div className="w-full  md:w-3/6 bg-[#F6F7F8] ">
        <MainDashboard />
      </div>

      {/* Right Sidebar */}
      <div className="w-full max-w-sm h-screen bg-white shadow-lg p-4 flex flex-col overflow-hidden md:w-80">
        <PatientList />
        <LabResults />
      </div>
    </div>
  );
}
