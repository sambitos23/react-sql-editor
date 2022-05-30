import React from "react";
import CustomersView from "./customersView";

function DataDraw() {
  // const customer = [
  //   {
  //     column: "Customer ID",
  //     type: "varchar(40)",
  //   },
  //   {
  //     column: "Company Name",
  //     type: "varchar(40)",
  //   },
  //   {
  //     column: "Contact Name",
  //     type: "varchar(40)",
  //   },
  //   {
  //     column: "Contact Title",
  //     type: "varchar(40)",
  //   },
  //   {
  //     column: "Address",
  //     type: "varchar(40)",
  //   },
  //   {
  //     column: "City",
  //     type: "varchar(40)",
  //   },
  //   {
  //     column: "Region",
  //     type: "varchar(40)",
  //   },
  //   {
  //     column: "Postal Code",
  //     type: "varchar(40)",
  //   },
  //   {
  //     column: "Country",
  //     type: "varchar(40)",
  //   },
  //   {
  //     column: "Phone Number",
  //     type: "varchar(40)",
  //   },
  //   {
  //     column: "Fax",
  //     type: "varchar(40)",
  //   },
  // ];

  let customers = require("../DataStore/customers.json");
  let suppliers = require("../DataStore/suppliers.json");
  let products = require("../DataStore/products.json");
  return (
    <div>
      <div>
        <CustomersView tableHead={customers[0]} tableName="customers" />
      </div>
    </div>
  );
}

export default DataDraw;
