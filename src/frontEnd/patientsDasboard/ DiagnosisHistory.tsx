import { useState } from "react";
import { Card, CardContent } from "../../components/ui/card";
import { Line } from "react-chartjs-2";
import Ryan from "../../assets/Layer 1.png";
import Brandon from "../../assets/Layer 3@2x.png";
import Jessica from "../../assets/Layer 2@2x.png";
import Emily from "../../assets/Layer 8@2x.png";
import { Button } from "../../components/ui/Button";
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
} from "chart.js";

ChartJS.register(LineElement, PointElement, CategoryScale, LinearScale);



const diagnosisData = {
  labels: ["Nov 2023", "Dec 2023", "Jan 2024", "Feb 2024", "Mar 2024"],
  datasets: [
    {
      label: "Systolic",
      data: [120, 130, 140, 150, 160],
      borderColor: "#ff6384",
      backgroundColor: "#ff6384",
    },
    {
      label: "Diastolic",
      data: [80, 85, 78, 76, 78],
      borderColor: "#36a2eb",
      backgroundColor: "#36a2eb",
    },
  ],
};


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

const DiagnosisHistory = () => {
    const [selectedPatient, setSelectedPatient] = useState(patients[0]);

  return (
    <div>
      <Card className="col-span-2">
        <CardContent>
          <h2 className="text-lg font-bold mb-4">Diagnosis History</h2>
          <Line data={diagnosisData} />
        </CardContent>
      </Card>
      ;
      <Card className="col-span-1">
        <CardContent>
          <div className="justify-center flex flex-col items-center">
            <img src={selectedPatient.photo} alt="" />
            <h2 className="text-[24px] font-bold mb-4 text-[#072635]">
              {selectedPatient.name}
            </h2>
          </div>

          <div>
            <div className="flex flex-row items-center m-2">
              <img
                className="w-[42px] h-[42px]"
                src={selectedPatient.photo}
                alt=""
              />
              <div className="ml-2">
                <p className="font-medium text-[14px] text-[#072635]">
                  Date of birth
                </p>
                <p className="text-[14px] text-[#072635]">
                  {selectedPatient.gender}, {selectedPatient.age}
                </p>
              </div>
            </div>
          </div>

          <div className="justify-center flex flex-col items-center">
            <Button className="mt-4">Show All Information</Button>
          </div>
        </CardContent>
      </Card>
      ;
    </div>
  );
};

export default DiagnosisHistory;