import React from "react";
import SelectBox from "../../ui/selectBox/selectBox";
import FileUploadBox from "../../ui/fileUpload/fileUploadBox";
import TableBox from "../../ui/tabelBox/tabelBox";

export default function UploadDetails() {
  return (
    <div className="w-full border-b-2 border-[#2F78C3] pb-4 px-4 flex gap-6 my-6">
      <div className="w-[30%]">
        <SelectBox />
      </div>
      <div className="w-[70%]">
        <span className="text-[#000048] text-[14px] font-[600] mb-2">
          Upload Files
        </span>
        <div className="w-full rounded-md h-[380px] p-2 border border-[#E7E7E5]">
          <FileUploadBox />
          <TableBox />
        </div>
      </div>
    </div>
  );
}
