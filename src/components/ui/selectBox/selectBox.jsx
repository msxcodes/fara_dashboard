import React from "react";

export default function SelectBox() {
  return (
    <div className="space-y-8">
      {/* Insurer Select Box  */}
      <div>
        <label
          for="hs-select-label"
          class="block text-sm text-[#000048] text-[14px] font-[600] mb-2 "
        >
          Insurer
        </label>
        <select
          id="hs-select-label"
          class=" bg-white p-2 px-3 block w-full border text-[#96989A] border-[#E7E7E5] rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none outline:none"
        >
          <option selected="">Select a Insurer</option>
          <option>Travelers</option>
          <option>Chubb</option>
        </select>
      </div>

      {/* Quarter Select box  */}

      <div>
        <label
          for="hs-select-label"
          class="block text-sm text-[#000048] text-[14px] font-[600] mb-2 "
        >
          Quarter
        </label>
        <select
          id="hs-select-label"
          class=" bg-white p-2 px-3 block w-full border text-[#96989A] border-[#E7E7E5] rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none outline:none"
        >
          <option selected="">Select a Quarter</option>
          <option>3Q 23</option>
          <option>4Q 23</option>
        </select>
      </div>
    </div>
  );
}
