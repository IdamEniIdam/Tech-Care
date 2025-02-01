import RespitoryIcon from "../../assets/respiratory rate.svg";
import TemperaturIcon from "../../assets/temperature.svg";
import HeartBmp from "../../assets/HeartBPM.svg";
const RespiratoryTemperatureHeartRate = () => {
  return (
    <div className="bg-white grid md:grid-cols-3 gap-4 mt-6 flex-col p-4">
      <div>
        <div className="bg-[#E0F3FA] p-4 rounded-lg flex items-start gap-4 flex-col">
          <img src={RespitoryIcon} alt="" />
          <div>
            <p className="text-[#072635] text-[16px]">Respiratory Rate</p>
            <p className="text-[#072635] text-[30px] font-semibold">20 bpm</p>
            <p className="text-[14px] text-[#072635]">Normal</p>
          </div>
        </div>
      </div>
      <div className="bg-[#FFE6E9] p-4 rounded-lg flex items-start flex-col gap-4">
        <img src={TemperaturIcon} alt="" />
        <div>
          <p className="text-[#072635] text-[16px]">Temperature</p>
          <p className="text-[#072635] text-[30px] font-semibold">98.6°F</p>
          <p className="text-[14px] text-[#072635]">Normal</p>
        </div>
      </div>
      <div className="bg-[#FFE6F1] p-4 rounded-lg flex items-start flex-col gap-4">
        <img src={HeartBmp} alt="" />
        <div>
          <p className="text-[#072635] text-[16px]">Heart Rate</p>
          <p className="text-[#072635] text-[30px] font-semibold">78 bpm</p>
          <p className="text-[14px] text-[#072635]">Lower than Average</p>
        </div>
      </div>
    </div>
  );
};

export default RespiratoryTemperatureHeartRate;
