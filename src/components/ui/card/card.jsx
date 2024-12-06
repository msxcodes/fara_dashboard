import React from "react";
import "./card.css";

function DashboardCard({
  handleClick,
  insurerName,
  logo,
  quarter,
  status,
  reportNo,
}) {
  return (
    <div
      onClick={handleClick}
      className={`h-[170px] border-2 ${
        status ? "border-[#35B37E]" : "border-[#FFAB00]"
      } rounded-md p-4 cursor-pointer hover:-translate-y-2 transition-all duration-300 shadow-md`}
    >
      <div className="h-full flex">
        <div className="flex flex-col w-[25%] justify-between items-start text-[#53565A] text-[13px] textStyle-regular leading-[15px]">
          {/* Logo  */}
          <div className="size-[50px] flex justify-center items-center bg-[#F5F7FB] rounded-md">
            <img
              src={logo}
              alt="logo"
              className="size-[80%] object-contain object-center"
            />
          </div>
          <span>Reporting Quarter</span>
          <span>Status</span>
        </div>
        <div className="w-[75%] p-1 flex flex-col justify-between items-start">
          <div>
            <h4 className="card-insurerName ml-3 text-[#2E308D] text-[18px] textStyle-regular uppercase font-[600]">
              {insurerName}
            </h4>
            <div className="flex gap-2 items-center text-[#53565A]">
              <span className="ml-[12px] w-[60px] text-[12px]">Report No.</span>
              <span className="ml-[-5px] text-[14px]">{reportNo}</span>
            </div>
          </div>

          <div className="ml-[15px] text-[#000048] text-[16px] textStyle-regular">
            {quarter}
          </div>

          <div className="flex gap-2 ml-3 items-center">
            <div
              className={`status-color size-[14px] rounded-full ${
                status ? "bg-[#35B37E]" : "bg-[#FFAB00]"
              }`}
            ></div>
            <div className="status-text">
              {status ? "Complete" : "In-Progress"}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashboardCard;
