import React from "react";

export default function ContentWrapper({ children }) {
  return (
    <div className="w-full  overflow-hidden bg-[#FFFFFF] rounded-3xl px-[30px] pt-[15px] pb-[8px]">
      {children}
    </div>
  );
}
