import React from "react";
import { CSVLink } from "react-csv";

function Table({ query, headers, rows, csvData }) {
  return (
    <div>
      {query ? (
        <section className="text-gray-600 body-font pl-4">
          <div className="flex w-full justify-between">
            <div className="font-bold text-center py-4 w-40 mt-1 bg-gray-500 text-white rounded-tl-md rounded-tr-lg">
              Output
            </div>
            <CSVLink
              data={csvData}
              filename={new Date().getTime().toString() + ".csv"}
              className="p-2"
            >
              <button className="flex mx-auto text-white bg-indigo-500 border-0 py-2 h-11 px-4 focus:outline-none hover:bg-indigo-600 rounded text-lg justify-center items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="20"
                  viewBox="0 0 40.496 36"
                  className="fill-current"
                >
                  <path
                    id="Icon_awesome-file-export"
                    d="M27,8.571a1.682,1.682,0,0,0-.492-1.188L19.624.492A1.686,1.686,0,0,0,18.429,0H18V9h9ZM40.148,21.656,33.42,14.878a1.128,1.128,0,0,0-1.927.795V20.25h-4.5v4.5h4.5v4.584a1.128,1.128,0,0,0,1.927.795l6.729-6.785A1.2,1.2,0,0,0,40.148,21.656ZM13.5,23.625v-2.25a1.128,1.128,0,0,1,1.125-1.125H27v-9H17.438A1.692,1.692,0,0,1,15.75,9.563V0H1.688A1.683,1.683,0,0,0,0,1.688V34.313A1.683,1.683,0,0,0,1.688,36H25.313A1.683,1.683,0,0,0,27,34.313V24.75H14.625A1.128,1.128,0,0,1,13.5,23.625Z"
                  />
                </svg>
                <span className="pl-2 font-semibold">Export CSV</span>
              </button>
            </CSVLink>
          </div>
          <div className="container">
            <div className="w-full h-80 overflow-auto scrollbar-hide">
              <table className="table-auto w-full text-left whitespace-no-wrap">
                <thead>
                  <tr>
                    {headers.map((header, index) => (
                      <th
                        key={index}
                        className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tl rounded-bl"
                      >
                        {header}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {rows.map((row_value, index) => (
                    <tr key={index}>
                      {row_value.map((cell_value, index) => (
                        <td
                          key={index}
                          className="border-t-2 border-gray-200 px-4 py-2 text-sm"
                        >
                          {cell_value}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      ) : (
        <div className="w-full flex h-80 justify-center items-center font-bold font-mono text-gray-400 text-2xl">
          Run Something & Your Output Shall Appear!
        </div>
      )}
    </div>
  );
}

export default Table;
