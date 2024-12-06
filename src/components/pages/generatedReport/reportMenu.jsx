import { CircleArrowLeft } from "lucide-react";
import React from "react";
import { useNavigate } from "react-router-dom";

export default function ReportMenu() {
  const navigate = useNavigate();

  return (
    <div className="report-menu justify-between bg-[#F5F7FB] flex items-center px-4 rounded-md w-full h-[69px] ">
      <div className="flex left-menu items-center gap-4">
        <CircleArrowLeft
          className="text-[#2E308D] cursor-pointer size-8"
          onClick={() => navigate("/")}
        />
        <div className="size-10 bg-white rounded-md flex items-center justify-center">
          <img src="images/travelers@2x.png" alt="logo" className="size-8" />
        </div>
        <span className="text-[#2E308D] font-[600] textStyle text-[18px]">
          Travelers
        </span>
      </div>

      {/* Right Side Actions Button  */}
      <div className="right-menu flex items-center gap-6">
        <div className="flex gap-8 items-center">
          <div className="flex flex-col">
            <span className="text-[#53565A] text-[10px]">Report No.</span>
            <span className="text-[#53565A] text-[12px]">ABC1234</span>
          </div>
          <div className="flex flex-col">
            <span className="text-[#53565A] text-[10px]">
              Reporting Quarter
            </span>
            <span className="text-[#000048] text-[14px]">1Q23</span>
          </div>
          <div className="flex flex-col">
            <span className="text-[#53565A] text-[10px]">Status</span>
            <span className="text-[#000048] text-[14px] flex items-center gap-2">
              <div className="size-3 rounded-full bg-[#FFAB00]"></div>
              In-Progress
            </span>
          </div>
        </div>

        {/* Actions Button  */}
        <div className="flex items-center gap-2">
          <a
            href=""
            className="bg-[#2E308D] flex items-center px-3 gap-2 py-1.5 rounded-[4px] font-[500] text-white"
          >
            <img src="images/log@2x.png" alt="log" className="size-3" />
            <span className="text-[14px]">View Logs</span>
          </a>
          <a
            href=""
            className="bg-[#2E308D] flex items-center px-3 gap-2 py-1.5 rounded-[4px] font-[500] text-white"
          >
            <img
              src="images/report-download@2x.png"
              alt="log"
              className="size-3"
            />
            <span className="text-[14px]">Download Report</span>
          </a>
        </div>
      </div>
    </div>
  );
}
