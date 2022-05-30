import React from "react";

function CustomersView({ tableName, tableHead }) {
  tableHead = Object.values(tableHead);
  return (
    <div>
      <div className="flex items-center">
        <svg
          width="28"
          height="28"
          viewBox="0 0 24 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="fill-current text-gray-500"
        >
          <path
            className="svg-view"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M3 0C1.34315 0 0 1.34315 0 3V7V15C0 16.6569 1.34314 18 3 18H21C22.6569 18 24 16.6569 24 15V7V3C24 1.34315 22.6569 0 21 0H3ZM22 6V3C22 2.44771 21.5523 2 21 2H3C2.44772 2 2 2.44772 2 3V6H22ZM2 8H7L7 16H3C2.44772 16 2 15.5523 2 15V8ZM9 16V8H15V16H9ZM17 16H21C21.5523 16 22 15.5523 22 15V8H17V16Z"
            fillOpacity="0.67"
          ></path>
        </svg>
        <p>{tableName}</p>
      </div>
      {tableHead.map((row, index) => (
        <div className="flex items-end relative ml-3" key={index}>
          <div className="w-8 h-8 border-l-2 border-b-2"></div>
          <p className="absolute top-5 left-10 text-gray-500 text-sm font-semibold">
            {row} [varchar(40)]
          </p>
        </div>
      ))}
    </div>
  );
}

export default CustomersView;
