import React from "react";
import toast from "react-hot-toast";
import getTableInfo from "./GetTableInfo";

function Buttons({
  setCSVData,
  setQuery,
  setValue,
  setHeaders,
  setRows,
  setDefaults,
  defaults,
  value,
}) {
  const runQuery = () => {
    setQuery(value);
    const { tableHeaders, tableRows } = getTableInfo(defaults);
    setHeaders(tableHeaders);
    setRows(tableRows);
    const temp = [];
    if (tableHeaders.length > 0 && tableRows.length > 0) {
      temp.push(tableHeaders);
      tableRows.forEach((row) => {
        temp.push(row);
      });
      setCSVData(temp);
      if (temp.length > 0) {
        toast.success("Query run");
      } else {
        toast.error("This didn't work.");
      }
    }
  };

  const reset = () => {
    // function to reset the editor
    setQuery("");
    setValue("select * from customers;");
    setDefaults(1);
    setHeaders([]);
    setRows([]);
    setCSVData([]);
  };
  return (
    <div className="flex">
      <div className="p-2">
        <button
          onClick={reset}
          className="flex mx-auto text-white bg-indigo-500 border-0 py-2 h-11 px-4 focus:outline-none hover:bg-indigo-600 rounded text-lg justify-center items-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="30"
            viewBox="0 0 30 37.243"
          >
            <g
              id="Icon_feather-repeat"
              data-name="Icon feather-repeat"
              transform="translate(-3 0.621)"
            >
              <path
                id="Path_22"
                data-name="Path 22"
                d="M25.5,1.5l6,6-6,6"
                fill="none"
                stroke="#ffffff"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="3"
              />
              <path
                id="Path_23"
                data-name="Path 23"
                d="M4.5,16.5v-3a6,6,0,0,1,6-6h21"
                fill="none"
                stroke="#ffffff"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="3"
              />
              <path
                id="Path_24"
                data-name="Path 24"
                d="M10.5,34.5l-6-6,6-6"
                fill="none"
                stroke="#ffffff"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="3"
              />
              <path
                id="Path_25"
                data-name="Path 25"
                d="M31.5,19.5v3a6,6,0,0,1-6,6H4.5"
                fill="none"
                stroke="#ffffff"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="3"
              />
            </g>
          </svg>
        </button>
      </div>
      <div className="p-2">
        <button
          onClick={runQuery}
          className="flex mx-auto text-white bg-indigo-500 border-0 py-2 h-11 px-4 focus:outline-none hover:bg-indigo-600 rounded text-lg justify-center items-center"
        >
          <div className="pr-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="21"
              viewBox="0 0 31.499 36.001"
              className="fill-current"
            >
              <path
                id="Icon_awesome-play"
                data-name="Icon awesome-play"
                d="M29.841,15.1,5.091.464A3.356,3.356,0,0,0,0,3.368V32.625a3.372,3.372,0,0,0,5.091,2.9L29.841,20.9a3.372,3.372,0,0,0,0-5.808Z"
                transform="translate(0 -0.002)"
              />
            </svg>
          </div>
          <div className="font-bold font-mono">Run Query</div>
        </button>
      </div>
    </div>
  );
}

export default Buttons;
