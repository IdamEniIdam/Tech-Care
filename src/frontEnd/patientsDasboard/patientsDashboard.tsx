
import Sidebar from "./sideBarPatient";
import MainDashboard from "./MainDashboard";
import PatientProfile from "./PatientProfile";
import LabResults from "./LabResults";

export default function PatientsDashboard() {
  return (
    <div className="bg-[#F6F7F8] flex flex-col md:flex-row justify-between w-full">
      {/* Left Sidebar */}
      <div className="bg-[#F6F7F8] m-4 w-full md:w-1/4 flex justify-center">
        <Sidebar />
      </div>

      {/* Main Dashboard */}
      <div className="w-full  bg-[#F6F7F8]">
        <MainDashboard />
      </div>

      {/* Right Sidebar */}
      {/* <div className="w-full max-w-sm h-auto bg-[#F6F7F8] shadow-lg p-4 flex flex-col overflow-hidden md:w-2/4 mt-4 md:mt-0"> */}
      <div className="bg-[#F6F7F8] m-4 w-full md:flex-col flex justify-center max-w-sm flex-col ">
        <PatientProfile />
        <div className="h-5"></div>
        <LabResults />
      </div>
    </div>
  );
}

