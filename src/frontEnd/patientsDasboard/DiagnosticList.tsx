import { Card } from "../../components/ui/card";

const DiagnosticList = () => {
  return (
    <Card className="h-64 overflow-auto">
      <h2 className="text-lg font-semibold mb-2">Diagnostic List</h2>
      <div className="overflow-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-100">
              <th className="p-2 text-left">Problem/Diagnosis</th>
              <th className="p-2 text-left">Description</th>
              <th className="p-2 text-left">Status</th>
            </tr>
          </thead>
          <tbody>
            {[
              {
                problem: "Hypertension",
                desc: "Chronic high pressure",
                status: "Under Observation",
              },
              {
                problem: "Type 2 Diabetes",
                desc: "Insulin resistance",
                status: "Active",
              },
              {
                problem: "Asthma",
                desc: "Bronchial constriction",
                status: "Inactive",
              },
            ].map((item, index) => (
              <tr key={index} className="border-t">
                <td className="p-2">{item.problem}</td>
                <td className="p-2">{item.desc}</td>
                <td className="p-2 text-green-600">{item.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Card>
  );
};
export default DiagnosticList