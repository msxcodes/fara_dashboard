import React from "react";
import ContentWrapper from "../../common/contentWrapper/contentWrapper";
import UploadDetails from "./upload-details";

export default function UploadPage() {
  return (
    <div className="upload-container w-full h-[90vh] px-[30px] pt-[15px]">
      <ContentWrapper>
        {/* Header  */}
        <div className="dashboard-header flex justify-between px-4 ">
          <h2 className="textStyle text-[22px] font-[600] textStyle uppercase text-[#000048]">
            Upload Files
          </h2>
        </div>
        <UploadDetails />
        <div className="bg-[#2E308D] w-max flex items-center px-3 mb-1 py-1.5 rounded-[4px] font-[500] text-white">
          <span className="text-[14px]">Submit Request To Assistant</span>
        </div>
      </ContentWrapper>
    </div>
  );
}
