import React from "react";
import ContentWrapper from "../../common/contentWrapper/contentWrapper";
import ReportHeader from "./generatedReport-header";
import ReportMenu from "./reportMenu";
import ChatBox from "./chatBox";

function GeneratedReport() {
  return (
    <div className="dashboard-container w-full h-[90vh] px-[30px] pt-[15px]">
      <ContentWrapper>
        <ReportHeader />
        <ReportMenu />
        <ChatBox />
      </ContentWrapper>
    </div>
  );
}

export default GeneratedReport;
