import React from "react";

export default function ProgressStepper() {
  return (
    <ul class="progress-stepper relative flex flex-row  max-w-xs mx-auto">
      <li class="shrink basis-0 flex-1 group">
        <div class="min-w-20 min-h-7 w-full inline-flex items-center text-xs align-middle">
          <span class="size-6 flex justify-center items-center shrink-0 bg-gray-100 font-medium text-gray-800 rounded-full ">
            <img
              src="images/completed@2x.png"
              alt="steps"
              className="size-full"
            />
          </span>
          <div class=" w-full h-[2px] flex-1 bg-[#35B37E] group-last:hidden "></div>
        </div>
      </li>

      <li class="shrink basis-0 flex-1 group">
        <div class="min-w-20 min-h-7 w-full inline-flex items-center text-xs align-middle">
          <span class="size-6 flex justify-center items-center shrink-0 bg-gray-100 font-medium text-gray-800 rounded-full ">
            <img
              src="images/completed@2x.png"
              alt="steps"
              className="size-full"
            />
          </span>
          <div class=" w-full h-[2px] flex-1 bg-[#35B37E] group-last:hidden "></div>
        </div>
      </li>

      <li class="shrink basis-0 flex-1 group">
        <div class="min-w-20 min-h-7 w-full inline-flex items-center text-xs align-middle">
          <span class="size-6 flex justify-center items-center shrink-0 bg-gray-100 font-medium text-gray-800 rounded-full ">
            <img
              src="images/current@2x.png"
              alt="steps"
              className="size-full"
            />
          </span>
          <div class=" w-full h-[2px] flex-1 bg-[#35B37E] group-last:hidden "></div>
        </div>
      </li>

      <li class="shrink basis-0 flex-1 group">
        <div class="min-w-1 min-h-7 w-full inline-flex items-center text-xs align-middle">
          <span class="size-6 flex justify-center items-center shrink-0 bg-gray-100 font-medium text-gray-800 rounded-full ">
            <img src="images/coming@2x.png" alt="steps" className="size-full" />
          </span>
          <div class=" w-full h-[2px] flex-1 bg-[#35B37E] group-last:hidden "></div>
        </div>
      </li>
    </ul>
  );
}
