import { ChevronLeft, ChevronRight, SkipBack, SkipForward } from "lucide-react";
import React from "react";

function Pagination() {
  return (
    <nav
      className="pagination-style mb-6 w-full mt-[8px] justify-end px-4 flex items-center gap-x-1"
      aria-label="Pagination"
    >
      <button
        type="button"
        className="min-h-[38px] min-w-[38px] py-2 px-2.5 inline-flex justify-center items-center gap-x-2 text-sm rounded-lg text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none "
        aria-label="Previous"
      >
        <SkipBack color="#91BAE5" className="size-[15px]" />
        <span className="sr-only">Previous</span>
      </button>
      <button
        type="button"
        className="min-h-[38px] min-w-[38px] py-2 px-2.5 inline-flex justify-center items-center gap-x-2 text-sm rounded-lg text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none "
        aria-label="Previous"
      >
        <ChevronLeft color="#91BAE5" className="size-[15px]" />
        <span className="sr-only">Previous</span>
      </button>
      <div className="flex items-center gap-x-1">
        <button
          type="button"
          className="min-h-[38px] min-w-[38px] flex justify-center items-center bg-[#d0e1f3] text-[#2E308D] py-2 px-3 text-sm rounded-lg focus:outline-none focus:bg-gray-300 disabled:opacity-50 disabled:pointer-events-none"
          aria-current="page"
        >
          1
        </button>
        <button
          type="button"
          className="min-h-[38px] min-w-[38px] flex justify-center items-center text-gray-800 hover:bg-gray-100 py-2 px-3 text-sm rounded-lg focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none "
        >
          2
        </button>
        <button
          type="button"
          className="min-h-[38px] min-w-[38px] flex justify-center items-center text-gray-800 hover:bg-gray-100 py-2 px-3 text-sm rounded-lg focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none"
        >
          3
        </button>
        <div className="hs-tooltip inline-block">
          <button
            type="button"
            className="hs-tooltip-toggle group min-h-[38px] min-w-[38px] flex justify-center items-center text-gray-400 hover:text-blue-600 p-2 text-sm rounded-lg focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none "
          >
            <span className="group-hover:hidden text-xs">•••</span>
            <svg
              className="group-hover:block hidden shrink-0 size-5"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m6 17 5-5-5-5"></path>
              <path d="m13 17 5-5-5-5"></path>
            </svg>
            <span
              className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity inline-block absolute invisible z-10 py-1 px-2 bg-gray-900 text-xs font-medium text-white rounded shadow-sm "
              role="tooltip"
            >
              Next 4 pages
            </span>
          </button>
        </div>
        <button
          type="button"
          className="min-h-[38px] min-w-[38px] flex justify-center items-center text-gray-800 hover:bg-gray-100 py-2 px-3 text-sm rounded-lg focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none "
        >
          5
        </button>
      </div>

      <button
        type="button"
        className="min-h-[38px] min-w-[38px] py-2 px-2.5 inline-flex justify-center items-center gap-x-2 text-sm rounded-lg text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none"
        aria-label="Next"
      >
        <ChevronRight className="size-[15px] text-[#2E308D]" />
      </button>
      <button
        type="button"
        className="min-h-[38px] min-w-[38px] py-2 px-2.5 inline-flex justify-center items-center gap-x-2 text-sm rounded-lg text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none"
        aria-label="Next"
      >
        <SkipForward className="size-[15px] text-[#2E308D]" />
      </button>
    </nav>
  );
}

export default Pagination;
