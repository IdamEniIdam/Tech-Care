const Diagostic = () => {
  const diagnosisList = [
    {
      problem: "Hypertension",
      description: "Chronic high blood pressure",
      status: "Under Observation",
    },
    {
      problem: "Type 2 Diabetes",
      description: "Insulin resistance and elevated blood sugar",
      status: "Cured",
    },
    {
      problem: "Asthma",
      description: "Recurrent episodes of bronchial constriction",
      status: "Inactive",
    },
    {
      problem: "Hypertension",
      description: "Chronic high blood pressure",
      status: "Under Observation",
    },
    {
      problem: "Type 2 Diabetes",
      description: "Insulin resistance and elevated blood sugar",
      status: "Cured",
    },
    {
      problem: "Asthma",
      description: "Recurrent episodes of bronchial constriction",
      status: "Inactive",
    },
  ];

  return (
    <div className="bg-white ">
      <h2 className="text-2xl font-semibold mt-8 mb-4 ml-5">Diagnostic List</h2>
      <div className="p-4 rounded-lg shadow-md overflow-x-auto h-[200px]">
        <table className="w-full border-collapse ">
          <thead>
            <tr className="bg-[#F6F7F8] text-left rounded-xl">
              <th className="p-2 text-[#072635] text-[14px] ">
                Problem/Diagnosis
              </th>
              <th className="p-2 text-[#072635] text-[14px]">Description</th>
              <th className="p-2 text-[#072635] text-[14px]">Status</th>
            </tr>
          </thead>
          <tbody>
            {diagnosisList.map((item, index) => (
              <tr key={index} className="border-b hover:bg-gray-50">
                <td className="p-2  text-[#072635] text-[14px]">
                  {item.problem}
                </td>
                <td className="p-2 text-[#072635] text-[14px]">
                  {item.description}
                </td>
                <td className="p-2 text-[#072635] text-[14px]">
                  {item.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Diagostic;
