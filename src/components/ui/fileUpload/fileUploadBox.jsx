import React from "react";

export default function FileUploadBox() {
  return (
    <div>
      <div
        class="cursor-pointer p-4 flex justify-center bg-[#F0F0FF] border border-dashed border-[#849FF9] rounded-xl "
        data-hs-file-upload-trigger=""
      >
        <div class=" flex flex-col items-center justify-center">
          <div class="size-[60px] ">
            <img src="images/upload-1@2x.png" className="size-full" alt="" />
          </div>

          <div class="mt-1 flex flex-wrap justify-center text-[13px] textStyle-regular leading-6 text-[#53565A]">
            <span class="pe-1 ">Drag and Drop your files here or</span>
            <span class=" text-blue-600 hover:text-blue-700 rounded-lg decoration-2 hover:underline focus-within:outline-none focus-within:ring-2 focus-within:ring-blue-600 focus-within:ring-offset-2 ">
              Browse {"  "}
            </span>
            <span class="pe-1 ">to upload files</span>
          </div>
        </div>
      </div>

      <div
        class="mt-4 space-y-2 empty:mt-0"
        data-hs-file-upload-previews=""
      ></div>
      <p className="text-[#53565A] text-[10px] m-0.5">
        *Only Doc, XLS, PDF formats with maximum file size of 16MB
      </p>
    </div>
  );
}
