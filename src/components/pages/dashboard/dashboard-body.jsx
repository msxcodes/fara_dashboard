import React from "react";
import DashboardCard from "../../ui/card/card";
import cardData from "../../data/card-data";
import DashboardHeader from "./dashboard_header";
import Pagination from "./pagination";
import { useNavigate } from "react-router-dom";
import ContentWrapper from "../../common/contentWrapper/contentWrapper";

function DashboardBody() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/generatedReport");
  };

  return (
    <div className="dashboard-container w-full h-[90vh] px-[30px] pt-[15px]">
      <ContentWrapper>
        <DashboardHeader />
        <div className="my-scrollable-div card-body max-h-[260px] md:max-h-[400px] w-full  overflow-y-scroll grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 py-[20px] gap-6 px-4 ">
          {cardData.map((data) => {
            return (
              <DashboardCard
                handleClick={handleClick}
                logo={data.logo}
                insurerName={data.insurerName}
                quarter={data.quarter}
                reportNo={data.reportNo}
                status={data.status}
                key={data.id}
              />
            );
          })}
        </div>
        <Pagination />
      </ContentWrapper>
    </div>
  );
}

export default DashboardBody;
