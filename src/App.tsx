import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useLocation,
} from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "./assets/TestLogo.svg";
import Overview from "./assets/home_FILL0_wght300_GRAD0_opsz24.svg";
import Patients from "./assets/group_FILL0_wght300_GRAD0_opsz24.svg";
import Schedule from "./assets/calendar_today_FILL0_wght300_GRAD0_opsz24.svg";
import Message from "./assets/chat_bubble_FILL0_wght300_GRAD0_opsz24.svg";
import Transactions from "./assets/credit_card_FILL0_wght300_GRAD0_opsz24.svg";
import profilePic from "./assets/senior-woman-doctor-and-portrait-smile-for-health-2023-11-27-05-18-16-utc@2x.png";
import settings from "./assets/settings_FILL0_wght300_GRAD0_opsz24.svg";
import more from "./assets/more_vert_FILL0_wght300_GRAD0_opsz24.svg";
import PatientsDashboard from "./frontEnd/patientsDasboard/patientsDashboard";

const navItems = [
  {
    name: "Overview",
    path: "/",
    icon: <img src={Overview} alt="" />,
    component: () => <div className="p-6">Overview Content</div>,
  },
  {
    name: "Patients",
    path: "/patients",
    icon: <img src={Patients} alt="" />,
    component: () => (
      <div className="bg-[#F6F7F8]">
        <PatientsDashboard />
      </div>
    ),
  },
  {
    name: "Schedule",
    path: "/schedule",
    icon: <img src={Schedule} alt="" />,
    component: () => <div className="p-6">Schedule Content</div>,
  },
  {
    name: "Message",
    path: "/message",
    icon: <img src={Message} alt="" />,
    component: () => <div className="p-6">Message Content</div>,
  },
  {
    name: "Transactions",
    path: "/transactions",
    icon: <img src={Transactions} alt="" />,
    component: () => <div className="p-6">Transactions Content</div>,
  },
];

function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="bg-white shadow-md p-4 m-4 flex items-center justify-between rounded-full">
      <div className="flex items-center gap-4">
        <img src={logo} alt="TechCare Logo" className="w-32" />
      </div>

      <div className="hidden md:flex gap-6">
        {navItems.map(({ name, path, icon }) => (
          <Link key={name} to={path}>
            <span
              className={`flex items-center gap-2 px-4 py-2 rounded-full transition-colors cursor-pointer ${
                location.pathname === path
                  ? "bg-[#01F0D0] text-black"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              <span className="text-lg">{icon}</span>
              {name}
            </span>
          </Link>
        ))}
      </div>

      {/* <div className="hidden md:flex items-center gap-2"> */}
      <div className="hidden sm:flex lg:flex items-center gap-2">
        <img
          src={profilePic}
          alt="Dr. Jose Simmons"
          className="w-10 h-10 rounded-full"
        />
        <div className="text-sm">
          <p className="font-semibold">Dr. Jose Simmons</p>
          <p className="text-gray-500">General Practitioner</p>
        </div>
        <img src={settings} alt="" />
        <img src={more} alt="" />
      </div>

      <button className="md:hidden" onClick={() => setMobileOpen(!mobileOpen)}>
        {mobileOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {mobileOpen && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-md p-4 flex flex-col items-center md:hidden">
          {navItems.map(({ name, path }) => (
            <Link key={name} to={path}>
              <span
                className={`flex items-center gap-2 px-4 py-2 rounded-full transition-colors cursor-pointer w-full text-center ${
                  location.pathname === path
                    ? "bg-[#01F0D0] text-black"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                {name}
              </span>
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        {navItems.map(({ path, component: Component }) => (
          <Route key={path} path={path} element={<Component />} />
        ))}
      </Routes>
    </Router>
  );
}
