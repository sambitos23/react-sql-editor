import { useEffect, useState } from "react";
import Buttons from "./components/Buttons";
import PredefinedQuery from "./components/PredefinedQuery";
import SqlEditor from "./components/SqlEditor";
import Table from "./components/Table";
import DataDraw from "./components/TableDrawer/DataDraw";

function App() {
  const [value, setValue] = useState("select * from customers;");
  const [rows, setRows] = useState([]);
  const [headers, setHeaders] = useState([]);
  const [query, setQuery] = useState("");
  const [defaults, setDefaults] = useState(1);
  const [csvData, setCSVData] = useState([]);

  if (value === "") {
    setValue(
      "-- Online SQL Editor to Run SQL Online. \n-- Use the editor to view all tables in SQL operations.\n\n-- Remove the code and Start exploring!\n\n-- Happy Coding!"
    );
  }

  useEffect(() => {
    if (value.toLowerCase() === "select * from customers;") {
      setDefaults(1);
    } else if (value.toLowerCase() === "select * from suppliers;") {
      setDefaults(2);
    } else if (value.toLowerCase() === "select * from products;") {
      setDefaults(3);
    } else {
      setDefaults(0);
    }
  }, [value]);

  return (
    <div>
      {/* react-hot-toast for notifications*/}
      {/* <Toaster
        position="top-center"
        gutter={8}
        containerClassName=""
        containerStyle={{}}
        toastOptions={{
          className: "",
          duration: 5000,
          style: {
            background: "#000000",
            color: "#3A4374",
          },
          success: {
            duration: 3000,
            iconTheme: {
              primary: "#809eda",
              secondary: "#000000",
            },
          },
          error: {
            iconTheme: {
              primary: "#D73737",
              secondary: "#000000",
            },
          },
        }}
      /> */}

      <div>
        <div className="flex justify-center items-start w-full">
          <div className="w-3/12">
            <PredefinedQuery setValue={setValue} setDefaults={setDefaults} />
          </div>
          <div className="w-6/12">
            <div className="flex w-full justify-between">
              <div className="font-bold text-center py-4 w-28 bg-gray-200">
                Input
              </div>
              <Buttons
                setQuery={setQuery}
                setHeaders={setHeaders}
                setRows={setRows}
                setCSVData={setCSVData}
                value={value}
                setValue={setValue}
                setDefaults={setDefaults}
                defaults={defaults}
              />
            </div>
            <SqlEditor value={value} setValue={setValue} />
          </div>
          <div className="w-3/12">
            <DataDraw />
          </div>
        </div>
      </div>

      <Table query={query} headers={headers} rows={rows} />
    </div>
  );
}

export default App;
