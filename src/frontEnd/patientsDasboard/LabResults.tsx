import { Card } from "../../components/ui/card";

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
            <span>{test}</span>
            <button className="p-1 text-gray-500 hover:text-gray-700">
              📥
            </button>
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default LabResults