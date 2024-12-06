import React from "react";
import SearchBox from "../../ui/searchBox/searchBox";
import FilterBox from "../../ui/filterBox/filterBox";
import ProgressStepper from "../../ui/progressStepper/progressStepper";

export default function ReportHeader() {
  return (
    <div className="dashboard-header flex justify-between px-4 ">
      <h2 className="textStyle text-[26px] font-[600] textStyle uppercase text-[#000048]">
        Details
      </h2>
      <div className="flex items-center gap-4">
        <span className="text-[#000048] text-[16px] textStyle-regular font-[600]">
          Progress
        </span>
        <ProgressStepper />
      </div>
    </div>
  );
}
