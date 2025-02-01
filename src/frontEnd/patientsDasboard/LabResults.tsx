import { Card } from "../../components/ui/card";
import downloadIcon from "../../assets/download_FILL0_wght300_GRAD0_opsz24 (1).svg";
const LabResults = () => {
  return (
    <Card className="h-64 overflow-auto">
      <h2 className="text-lg font-semibold mb-2">Lab Results</h2>
      <ul className="space-y-2">
        {[
          "Blood Tests",
          "CT Scans",
          "Radiology Reports",
          "X-Rays",
          "Urine Test",
        ].map((test, index) => (
          <li
            key={index}
            className="flex items-center justify-between p-2 rounded-md hover:bg-gray-100"
          >
            <span className="text-[#072635] text-[13px]">{test}</span>
              <img
                src={downloadIcon}
                alt=""
                className="p-1 text-gray-500 hover:text-gray-700"
              />
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default LabResults