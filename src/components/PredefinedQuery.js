import React from "react";

function PredefinedQuery({ setDefaults, setValue }) {
  const qurtyValue = [
    {
      query: "select * from customers;",
      default: 1,
    },
    {
      query:
        "select contact_name, address,city,postal_code, country from customers limit 18;",
      default: 4,
    },
    {
      query: "select * from products;",
      default: 2,
    },
    {
      query: "select * from suppliers;",
      default: 3,
    },
  ];
  return (
    <div>
      <div className="mx-auto flex items-center font-bold justify-center mt-2 py-2 h-11 px-4 rounded text-white bg-indigo-500 font-mono w-56 text-lg md:text-xl">
        React SQL Editor
      </div>
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
          <p className="font-bold text-lg">Available Queries</p>
        </div>

        <div className="h-52 lg:h-48 overflow-auto scrollbar-hide mb-6 lg:mb-0">
          {qurtyValue.map((item, index) => (
            <p
              key={index}
              className="cursor-pointer bg-gray-300 hover:bg-gray-400 font-mono hover:text-white p-2 text-center text-sm rounded-sm my-4"
              onClick={() => {
                setDefaults(`${item.default}`);
                setValue(`${item.query}`);
              }}
            >
              {item.query}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PredefinedQuery;
