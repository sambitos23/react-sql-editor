import React from "react";

function Table({ query, headers, rows }) {
  return (
    <div>
      {query && (
        <>
          <section className="text-gray-600 body-font">
            <div className="container px-2 mx-auto">
              <div className="lg:w-2/3 w-full h-80 mx-auto overflow-auto">
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
        </>
      )}
    </div>
  );
}

export default Table;
