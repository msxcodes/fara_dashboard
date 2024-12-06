import React from "react";

export default function ChatBox() {
  return (
    <div className="flex flex-col my-4 gap-3">
      <div className="chat-box flex items-start  gap-3">
        {/* Query Box  */}
        <div className="size-[28px]">
          <img src="images/question@2x.png" className="size-full" alt="ques" />
        </div>
        <div className="border-2 border-[#7373D7] w-[90%] p-2 py-4 rounded-e-lg rounded-b-lg space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-[#2E308D] text-[16px] font-[600]">Query</span>
            <span className="text-[#96989A] text-[12px]">
              20-04-2023, 2.00 PM
            </span>
          </div>
          <p className="text-[12px] text-[#000048]">
            Based on the documents uploaded for Q1 2023 perform a detailed
            analysis of Travelers and generate a report.
          </p>
        </div>
      </div>

      {/* Agent's Response  */}

      <div className="chat-box flex items-start gap-3 w-full">
        <div className="border-2 border-[#35B37E] w-[90%] ml-10 p-2 py-4 rounded-s-lg rounded-b-lg space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-[#2E308D] text-[16px] font-[600]">
              Report of Travelers for Q1 2023
            </span>
            <span className="text-[#96989A] text-[12px]">
              20-04-2023, 2.00 PM
            </span>
          </div>
          <p className="text-[12px] text-[#000048]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. Lorem Ipsum is simply
            dummy text of the printing and typesetting industry. Lorem Ipsum has
            been the industry's standard dummy text ever since the 1500s, when
            an unknown printer took a galley of type and scrambled it to make a
            type specimen book. <br />
            <br /> Lorem Ipsum is simply dummy text of the printing and
            typesetting industry. Lorem Ipsum has been the industry's standard
            dummy text ever since the 1500s, when an unknown printer took a
            galley of type and scrambled it to make a type specimen book.Lorem
            Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry’s standard dummy text ever since
            the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book. Lorem Ipsum is simply
            dummy text of the printing and typesetting industry. Lorem Ipsum has
            been the industry’s standard dummy text ever since the 1500s, when
            an unknown printer took a galley of type and scrambled it to make a
            type specimen book. <br />
            <br /> Lorem Ipsum is simply dummy text of the printing and
            typesetting industry. Lorem Ipsum has been the industry’s standard
            dummy text ever since the 1500s, when an unknown printer took a
            galley of type and scrambled it to make a type specimen book.
          </p>
        </div>

        <div className="size-[28px]">
          <img src="images/completed@2x.png" className="size-full" alt="ques" />
        </div>
      </div>
    </div>
  );
}
