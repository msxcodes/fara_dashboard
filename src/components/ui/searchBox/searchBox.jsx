import React from "react";
import "./searchBox.css";

function SearchBox() {
  return (
    <div className="search-box mx-auto max-w-xs">
      <div className="w-[200px] rounded-md flex items-center  px-4 shadow-sm h-[40px]  border border-[#91BAE5]">
        <input
          type="text"
          id="example5"
          className="
            w-[150px]
            focus:outline-none
            focus:ring-opacity-50 disabled:cursor-not-allowed placeholder:text-[#53565A] textStyle-regular disabled:bg-gray-50 disabled:text-gray-500"
          placeholder="Search"
        />
        <div>
          <img
            src="images/search@2x.png"
            alt=""
            className="search-icon w-[20px]"
          />
        </div>
      </div>
    </div>
  );
}

export default SearchBox;
