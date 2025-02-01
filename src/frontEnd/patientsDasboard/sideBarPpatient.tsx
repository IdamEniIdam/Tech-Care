import  { useState } from "react";
import { FiSearch, FiMoreVertical } from "react-icons/fi";

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
  {
    id: 6,
    name: "Ashley Martinez",
    gender: "Female",
    age: 54,
    image: "https://i.pravatar.cc/50?img=6",
  },
  {
    id: 7,
    name: "Olivia Brown",
    gender: "Female",
    age: 32,
    image: "https://i.pravatar.cc/50?img=7",
  },
  {
    id: 8,
    name: "Tyler Davis",
    gender: "Male",
    age: 19,
    image: "https://i.pravatar.cc/50?img=8",
  },
  {
    id: 9,
    name: "Kevin Anderson",
    gender: "Male",
    age: 30,
    image: "https://i.pravatar.cc/50?img=9",
  },
  {
    id: 10,
    name: "Dylan Thompson",
    gender: "Male",
    age: 36,
    image: "https://i.pravatar.cc/50?img=10",
  },
  {
    id: 11,
    name: "Nathan Evans",
    gender: "Male",
    age: 58,
    image: "https://i.pravatar.cc/50?img=11",
  },
  {
    id: 12,
    name: "Mike Nolan",
    gender: "Male",
    age: 31,
    image: "https://i.pravatar.cc/50?img=12",
  },
];

const Sidebar = () => {
  const [selectedPatient, setSelectedPatient] = useState({});

  return (
    <div className="w-full max-w-sm h-screen bg-white shadow-lg p-4 flex flex-col overflow-hidden md:w-80">
      <div className="flex items-center justify-between pb-4 border-b">
        <h2 className="text-xl font-semibold">Patients</h2>
        <FiSearch className="text-gray-500 cursor-pointer text-lg" />
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
            <FiMoreVertical className="text-gray-500 cursor-pointer" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
