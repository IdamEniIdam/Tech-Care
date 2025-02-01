import { ScrollArea } from "../../components/ui/scroll-area";
import { MoreVertical } from "lucide-react";
import { Card, CardContent } from "../../components/ui/card";
import Ryan from "../../assets/Layer 1.png";
import Brandon from "../../assets/Layer 3@2x.png";
import Jessica from "../../assets/Layer 2@2x.png";
import Emily from "../../assets/Layer 8@2x.png";
import { useState } from "react";

const patients = [
  {
    id: 1,
    name: "Emily Williams",
    age: 18,
    gender: "Female",
    photo: Emily,
    icon: "...",
    DateOfBirth: "August 23, 1996",
    ContactInfo: 415 - 555 - 1234,
    EmergencyContacts: 415 - 555 - 5678,
    InsuranceProvider: "Sunrise Health Assurance",
  },
  {
    id: 2,
    name: "Ryan Johnson",
    age: 45,
    gender: "Male",
    photo: Ryan,
    icon: "...",
    DateOfBirth: "August 23, 1996",
    ContactInfo: 415 - 555 - 1234,
    EmergencyContacts: 415 - 555 - 5678,
    InsuranceProvider: "Sunrise Health Assurance",
  },
  {
    id: 3,
    name: "Brandon Mitchell",
    age: 36,
    gender: "Male",
    photo: Brandon,
    icon: "...",
    DateOfBirth: "August 23, 1996",
    ContactInfo: 415 - 555 - 1234,
    EmergencyContacts: 415 - 555 - 5678,
    InsuranceProvider: "Sunrise Health Assurance",
  },
  {
    id: 4,
    name: "Jessica Taylor",
    age: 28,
    gender: "Female",
    photo: Jessica,
    icon: "...",
    DateOfBirth: "August 23, 1996",
    ContactInfo: 415 - 555 - 1234,
    EmergencyContacts: 415 - 555 - 5678,
    InsuranceProvider: "Sunrise Health Assurance",
  },
];

const PatientList = () => {
      const [selectedPatient, setSelectedPatient] = useState(patients[0]);

  return (
    <div className="w-full max-w-sm  bg-[#F6F7F8] shadow-lg p-4 flex flex-col overflow-hidden ">
      <Card className="col-span-1">
        <CardContent>
          <h2 className="text-lg font-bold mb-4">Patients</h2>
          <ScrollArea className="h-64">
            {patients.map((patient) => (
              <div
                key={patient.id}
                className={`flex justify-between items-center p-2 rounded-md cursor-pointer ${
                  selectedPatient.id === patient.id
                    ? "bg-green-100"
                    : "hover:bg-gray-100"
                }`}
                onClick={() => setSelectedPatient(patient)}
              >
                <div className="flex flex-row items-center">
                  <img
                    className="w-[48px] h-[48px]"
                    src={patient.photo}
                    alt=""
                  />

                  <div className="ml-2">
                    <p className="font-medium">{patient.name}</p>
                    <p className="text-sm text-gray-500">
                      {patient.gender}, {patient.age}
                    </p>
                  </div>
                </div>
                <MoreVertical size={16} />
              </div>
            ))}
          </ScrollArea>
        </CardContent>
      </Card>
    </div>
  );
};

export default PatientList;
