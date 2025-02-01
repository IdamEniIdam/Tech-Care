import { useState } from "react";
import more from "../../assets/more_vert_FILL0_wght300_GRAD0_opsz24.svg";
import search from "../../assets/search_FILL0_wght300_GRAD0_opsz24.svg";
import Emily from "../../assets/Layer 8@2x.png";
import Ryan from "../../assets/Layer 1@2x.png";
import Brandon from "../../assets/Layer 3@2x.png";
import Jessica from "../../assets/Layer 2@2x.png";
import Samantha from "../../assets/Layer 6@2x.png";

const patients = [
  {
    id: 1,
    name: "Emily Williams",
    gender: "Female",
    age: 18,
    image: Emily,
  },
  {
    id: 2,
    name: "Ryan Johnson",
    gender: "Male",
    age: 45,
    image: Ryan,
  },
  {
    id: 3,
    name: "Brandon Mitchell",
    gender: "Male",
    age: 36,
    image: Brandon,
  },
  {
    id: 4,
    name: "Jessica Taylor",
    gender: "Female",
    age: 28,
    image: Jessica,
  },
  {
    id: 5,
    name: "Samantha Johnson",
    gender: "Female",
    age: 56,
    image: Samantha,
  },
  {
    id: 6,
    name: "Ashley Martinez",
    gender: "Female",
    age: 54,
    image: Emily,
  },
  {
    id: 7,
    name: "Olivia Brown",
    gender: "Female",
    age: 32,
    image: Ryan,
  },
  {
    id: 8,
    name: "Tyler Davis",
    gender: "Male",
    age: 19,
    image: Brandon,
  },
  {
    id: 9,
    name: "Kevin Anderson",
    gender: "Male",
    age: 30,
    image: Jessica,
  },
  {
    id: 10,
    name: "Dylan Thompson",
    gender: "Male",
    age: 36,
    image: Samantha,
  },
  {
    id: 11,
    name: "Nathan Evans",
    gender: "Male",
    age: 58,
    image: Jessica,
  },
  {
    id: 12,
    name: "Mike Nolan",
    gender: "Male",
    age: 31,
    image: Samantha,
  },
  {
    id: 13,
    name: "Tyler Davis",
    gender: "Male",
    age: 19,
    image: Brandon,
  },
  {
    id: 14,
    name: "Kevin Anderson",
    gender: "Male",
    age: 30,
    image: Jessica,
  },
  {
    id: 15,
    name: "Dylan Thompson",
    gender: "Male",
    age: 36,
    image: Samantha,
  },
  {
    id: 16,
    name: "Nathan Evans",
    gender: "Male",
    age: 58,
    image: Jessica,
  },
  {
    id: 17,
    name: "Mike Nolan",
    gender: "Male",
    age: 31,
    image: Samantha,
  },
];

const Sidebar = () => {
  const [selectedPatient, setSelectedPatient] = useState({});

  return (
    <div className="w-full max-w-xs md:max-w-sm bg-white shadow-lg p-4 flex flex-col md:w-80 overflow-auto lg:h-[950px]  md:h-[1175px]">
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
