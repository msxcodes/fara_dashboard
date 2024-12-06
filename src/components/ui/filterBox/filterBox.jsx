import { useState, useCallback } from "react";

function FilterBox() {
  const [isOpen, setIsOpen] = useState(false);
  const [checkedItems, setCheckedItems] = useState({
    option1: false,
    option2: false,
    option3: false,
    option4: false,
  });

  const handleToggle = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  const handleCheckboxChange = useCallback((event) => {
    const { name, checked } = event.target;
    setCheckedItems((prev) => ({
      ...prev,
      [name]: checked,
    }));
  }, []);

  const handleClear = useCallback(() => {
    setCheckedItems({
      option1: false,
      option2: false,
      option3: false,
      option4: false,
    });
  }, []);

  return (
    <div className="relative inline-block text-left">
      <div
        onClick={handleToggle}
        className="w-[140px] h-[40px] border border-[#91BAE5] cursor-pointer inline-flex rounded-md shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        <span className="mr-2">
          <img
            src="images/sort@2x.png"
            alt="sort-filter"
            className="w-[20px] h-[14px] flex mt-1"
          />
        </span>
        <span className="flex w-8 h-6 textStyle-regular text-[#53565A]">
          Filter
        </span>
        <span className={`ml-auto transform ${isOpen ? "rotate-180" : ""}`}>
          <img
            src="images/filter-dropdown@2x.png"
            alt="filter-dropdown"
            className="w-[16px] h-[8px] mt-2 flex justify-center items-center"
          />
        </span>
      </div>
      {isOpen && (
        <div
          className="origin-top-right z-50 absolute right-[-2.5px] top-[35px]  mt-2 w-[145px] rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="options-menu"
        >
          <div className="py-1" role="none">
            <div className="px-4 py-2">
              <button
                onClick={handleClear}
                className="w-[35px] h-[16px] textStyle-regular text-sm text-[#2F78C3] rounded-md flex float-end cursor-pointer"
              >
                Clear
              </button>
            </div>
            <div className="px-2 py-2 m-1">
              {["option1", "option2", "option3", "option4"].map((option) => (
                <label
                  key={option}
                  className="flex items-center text-[12px] cursor-pointer"
                >
                  <input
                    type="checkbox"
                    name={option}
                    checked={checkedItems[option]}
                    onChange={handleCheckboxChange}
                    className="mr-2 mt-1 textStyle-regular text-base cursor-pointer"
                  />
                  {option.replace("option", "").replace(/\d/, (match) => {
                    switch (match) {
                      case "1":
                        return "Insurer Name";
                      case "2":
                        return "Report No.";
                      case "3":
                        return "Reporting Quarter";
                      case "4":
                        return "Status";
                      default:
                        return "";
                    }
                  })}
                </label>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default FilterBox;
