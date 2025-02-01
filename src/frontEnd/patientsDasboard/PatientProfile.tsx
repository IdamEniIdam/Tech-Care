import { CardContent } from "../../components/ui/card";
import { Button } from "../../components/ui/Button";
import DateOfBirthicon from "../../assets/BirthIcon.svg";
import GenderIcon from "../../assets/FemaleIcon.svg";
import ContactInfoIcon from "../../assets/PhoneIcon.svg";
import EmergencyContactsIcon from "../../assets/PhoneIcon.svg";
import InsuranceProviderIcon from "../../assets/InsuranceIcon.svg";
import Emily from "../../assets/Layer 8@2x.png";

import { useState } from "react";

const patients = [
  {
    id: 1,
    name: "Emily Williams",
    age: 18,
    gender: "Female",
    photo: Emily,
    DateOfBirthicon: DateOfBirthicon,
    GenderIcon: GenderIcon,
    ContactInfoIcon: ContactInfoIcon,
    EmergencyContactsIcon: EmergencyContactsIcon,
    InsuranceProviderIcon: InsuranceProviderIcon,
    DateOfBirth: "August 23, 1996",
    ContactInfo: "415 - 555 - 1234",
    EmergencyContacts: "415 - 555 - 5678",
    InsuranceProvider: "Sunrise Health Assurance",
  },
];

const PatientProfile = () => {
  const [selectedPatient, setSelectedPatient] = useState(patients[0]);

  return (
    <div className="w-full max-w-sm bg-white shadow-lg p-4 flex flex-col overflow-hidden ">
      {patients.map((patient) => (
        <div key={patient.id} className="flex flex-col items-center">
          <CardContent>
            <div
              className={`flex items-center p-2 rounded-md cursor-pointer ${
                selectedPatient.id === patient.id
                  ? "bg-white"
                  : "hover:bg-gray-100"
              }`}
              onClick={() => setSelectedPatient(patient)}
            >
              <div>
                <div className="flex flex-col items-center">
                  <img
                    className="w-[150px] h-[100px] w-[100px] lg:[200px] lg:w-[200px] sm:w-[200px] sm:h-[200px] md:w-[200px] md:h-[200px]" // Adjusted for responsiveness
                    src={patient.photo}
                    alt=""
                  />
                  <div className="h-4"></div>
                  <p className="font-bold text-[16px] text-center sm:text-[24px]">
                    {patient.name}
                  </p>{" "}
                  {/* Adjusted font size for smaller screens */}
                </div>
              </div>
            </div>
          </CardContent>
          <div className="w-full">
            {/* Date of Birth */}
            <div className="flex flex-row items-center m-2">
              <img
                className="w-[42px] h-[42px]"
                src={patient.DateOfBirthicon}
                alt=""
              />
              <div className="items-start flex flex-col ml-4">
                <p className="text-[#072635] text-[12px] leading-5 opacity-100">
                  Date Of Birth
                </p>
                <p className="text-[14px] text-[#072635] leading-5">
                  {patient.DateOfBirth}
                </p>
              </div>
            </div>

            {/* Gender */}
            <div className="flex flex-row items-center m-2">
              <img
                className="w-[42px] h-[42px]"
                src={patient.GenderIcon}
                alt=""
              />
              <div className="items-start flex flex-col ml-4">
                <p className="text-[#072635] text-[12px] leading-5">Gender</p>
                <p className="text-[14px] text-[#072635] leading-5">
                  {patient.gender}
                </p>
              </div>
            </div>

            {/* Contact Info */}
            <div className="flex flex-row items-center m-2">
              <img
                className="w-[42px] h-[42px]"
                src={patient.ContactInfoIcon}
                alt=""
              />
              <div className="items-start flex flex-col ml-4">
                <p className="text-[#072635] text-[12px] leading-5">
                  Contact Info.
                </p>
                <p className="text-[14px] text-[#072635] leading-5">
                  {patient.ContactInfo}
                </p>
              </div>
            </div>

            {/* Emergency Contacts */}
            <div className="flex flex-row items-center m-2">
              <img
                className="w-[42px] h-[42px]"
                src={patient.EmergencyContactsIcon}
                alt=""
              />
              <div className="items-start flex flex-col ml-4">
                <p className="text-[#072635] text-[12px] leading-5">
                  Emergency Contacts
                </p>
                <p className="text-[14px] text-[#072635] leading-5">
                  {patient.EmergencyContacts}
                </p>
              </div>
            </div>

            {/* Insurance Provider */}
            <div className="flex flex-row items-center m-2">
              <img
                className="w-[42px] h-[42px]"
                src={patient.InsuranceProviderIcon}
                alt=""
              />
              <div className="items-start flex flex-col ml-4">
                <p className="text-[#072635] text-[12px] leading-5">
                  Insurance Provider
                </p>
                <p className="text-[14px] text-[#072635] leading-5">
                  {patient.InsuranceProvider}
                </p>
              </div>
            </div>
          </div>
          <div className="justify-center flex flex-col items-center p-4">
            <Button className="text-[14px] sm:text-[16px]">
              Show All Information
            </Button>{" "}
            {/* Adjusted button text size */}
          </div>
        </div>
      ))}
    </div>
  );
};

export default PatientProfile;
