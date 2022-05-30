import React from "react";

function PredefinedQuery({ setDefaults, setValue }) {
  return (
    <div>
      {/* div containing preset query buttons */}
      <div className=" p-4 text-indigo-500">
        <div className="flex justify-center items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="23"
            viewBox="0 0 36 27"
            className="fill-current mr-3"
          >
            <path
              id="Icon_open-code"
              data-name="Icon open-code"
              d="M22.5,0,9,27h4.5L27,0ZM4.5,4.5,0,13.5l4.5,9H9l-4.5-9L9,4.5ZM27,4.5l4.5,9-4.5,9h4.5l4.5-9-4.5-9Z"
            />
          </svg>
          <p className="font-bold text-lg ">Available Queries</p>
        </div>

        <p
          className="cursor-pointer bg-gray-300 hover:bg-gray-400 font-mono hover:text-white p-2 text-center rounded-sm my-4"
          onClick={() => {
            setDefaults(1);
            setValue("select * from customers;");
          }}
        >
          select * from customers;
        </p>
        <p
          className="cursor-pointer bg-gray-300 hover:bg-gray-400 font-mono hover:text-white p-2 text-center rounded-sm mb-4"
          onClick={() => {
            setDefaults(2);
            setValue("select * from suppliers;");
          }}
        >
          select * from suppliers;
        </p>
        <p
          className="cursor-pointer bg-gray-300 hover:bg-gray-400 font-mono hover:text-white p-2 text-center rounded-sm"
          onClick={() => {
            setDefaults(3);
            setValue("select * from products;");
          }}
        >
          select * from products;
        </p>
      </div>
    </div>
  );
}

export default PredefinedQuery;
