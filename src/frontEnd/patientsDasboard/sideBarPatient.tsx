import { useState } from "react";
import { FiSearch, } from "react-icons/fi";
import more from "../../assets/more_vert_FILL0_wght300_GRAD0_opsz24.svg";
import search from "../../assets/search_FILL0_wght300_GRAD0_opsz24.svg";

const patients = [
  {
    id: 1,
    name: "Emily Williams",
    gender: "Female",
    age: 18,
    image: "https://i.pravatar.cc/50?img=1",
  },
  {
    id: 2,
    name: "Ryan Johnson",
    gender: "Male",
    age: 45,
    image: "https://i.pravatar.cc/50?img=2",
  },
  {
    id: 3,
    name: "Brandon Mitchell",
    gender: "Male",
    age: 36,
    image: "https://i.pravatar.cc/50?img=3",
  },
  {
    id: 4,
    name: "Jessica Taylor",
    gender: "Female",
    age: 28,
    image: "https://i.pravatar.cc/50?img=4",
  },
  {
    id: 5,
    name: "Samantha Johnson",
    gender: "Female",
    age: 56,
    image: "https://i.pravatar.cc/50?img=5",
  },
];

const Sidebar = () => {
  const [selectedPatient, setSelectedPatient] = useState({});

  return (
    <div className="w-full max-w-xs md:max-w-sm bg-white shadow-lg p-4 flex flex-col md:w-80">
      <div className="overflow-auto flex flex-col">
        <div className="flex items-center justify-between pb-4 border-b">
          <h2 className="text-xl font-semibold">Patients</h2>
          <img src={search} alt="" />
        </div>
        <div className="overflow-y-auto flex-1 mt-2">
          {patients.map((patient) => (
            <div
              key={patient.id}
              onClick={() => setSelectedPatient(patient.id)}
              className={`flex items-center justify-between p-3 rounded-lg cursor-pointer transition-all ${
                selectedPatient === patient.id
                  ? "bg-teal-100"
                  : "hover:bg-gray-100"
              }`}
            >
              <div className="flex items-center gap-3">
                <img
                  src={patient.image}
                  alt={patient.name}
                  className="w-10 h-10 rounded-full"
                />
                <div>
                  <p className="font-medium">{patient.name}</p>
                  <p className="text-sm text-gray-500">
                    {patient.gender}, {patient.age}
                  </p>
                </div>
              </div>
              <img src={more} alt="" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
