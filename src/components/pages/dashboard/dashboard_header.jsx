import React from "react";
import SearchBox from "../../ui/searchBox/searchBox";
import FilterBox from "../../ui/filterBox/filterBox";

function DashboardHeader() {
  return (
    <div className="dashboard-header flex justify-between px-4 ">
      <h2 className="textStyle text-[26px] font-[600] textStyle uppercase text-[#000048]">
        Dashboard
      </h2>
      <div className="flex items-center gap-4">
        <SearchBox />
        <FilterBox />
        <div className="w-[44px] cursor-pointer rounded-md flex items-center justify-center   shadow-sm h-[40px]  border border-[#91BAE5]">
          <img
            src="images/reload@2x.png"
            alt=""
            className="w-[24px] h-[20px]"
          />
        </div>
      </div>
    </div>
  );
}

export default DashboardHeader;
