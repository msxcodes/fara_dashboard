import React from "react";

export default function TableBox() {
  return (
    <div class="flex flex-col max-h-[220px] overflow-hidden">
      <div class="-m-1.5 overflow-x-auto">
        <div class="p-1.5 min-w-full inline-block align-middle">
          <div class="overflow-hidden">
            <table class="min-w-full divide-y-2 divide-[#D0D8E4]">
              <thead>
                <tr>
                  {tableHead.map((data) => {
                    return (
                      <th
                        key={data.key}
                        scope="col"
                        class="px-6 py-2 text-start text-[12px] font-[600] text-[#000048] uppercase"
                      >
                        {data.label}
                      </th>
                    );
                  })}
                </tr>
              </thead>
              <tbody>
                {tableData.map((data) => {
                  return (
                    <tr
                      key={data.id}
                      class="odd:bg-white even:bg-gray-100 border-b border-[##F5F7FB]"
                    >
                      <td class="px-6 py-3 whitespace-nowrap text-[12px]  text-[#000048]">
                        {data.id}
                      </td>
                      <td class="px-6 py-3 whitespace-nowrap text-[12px] text-[#000048]">
                        {data.name}
                      </td>
                      <td class="px-6 py-3 whitespace-nowrap text-[12px] text-[#000048]">
                        <select class="py-1 text-[#96989A] px-3 pe-9 block w-full border bg-white border-[#D7E3F4] rounded-md text-[12px] focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none ">
                          <option selected="">Select File Category</option>
                          <option>Quarterly Earnings Report</option>

                          <option>Investment Analyst Report</option>
                          <option>‘Financial Analysis’ spreadsheet</option>
                          <option>IFS</option>
                        </select>
                      </td>
                      <td
                        class={`${
                          data.status == "Failed"
                            ? "text-[#B71F2D]"
                            : "text-[#2DB71F]"
                        } px-6 py-3 whitespace-nowrap text-[12px] text-[#000048]`}
                      >
                        {data.status}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

const tableHead = [
  {
    label: "#",
    key: "id",
  },
  {
    label: "File Name",
    key: "name",
  },
  {
    label: "File Category",
    key: "address",
  },
  {
    label: "Status",
    key: "status",
  },
];

const tableData = [
  {
    id: "01",
    name: "Document Name #1",
    address: "New York No. 1 Lake Park",
    status: (
      <div
        class="flex w-full h-[14px] bg-gray-200 rounded-full overflow-hidden "
        role="progressbar"
        aria-valuenow="50"
        aria-valuemin="0"
        aria-valuemax="100"
      >
        <div
          class="flex flex-col justify-center rounded-full overflow-hidden bg-[#35B37E] text-xs text-white text-center whitespace-nowrap transition duration-500 "
          style={{ width: "25%" }}
        ></div>
      </div>
    ),
  },
  {
    id: "02",
    name: "Document Name #2",
    address: "London No. 1 Lake Park",
    status: "Failed",
  },
  {
    id: "03",
    name: "Document Name #3",
    address: "Sidney No. 1 Lake Park",
    status: "Success",
  },
  {
    id: "04",
    name: "Document Name #4",
    address: "LA No. 1 Lake Park",
    status: (
      <div
        class="flex w-full h-[14px] bg-gray-200 rounded-full overflow-hidden"
        role="progressbar"
        aria-valuenow="50"
        aria-valuemin="0"
        aria-valuemax="100"
      >
        <div
          class="flex flex-col justify-center rounded-full overflow-hidden bg-[#35B37E] text-xs text-white text-center whitespace-nowrap transition duration-500 "
          style={{ width: "25%" }}
        ></div>
      </div>
    ),
  },
];
