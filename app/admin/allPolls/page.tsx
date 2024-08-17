
import React from "react";
import { Metadata } from "next";
import AllPollsTable from "./components/AllPollsTable";

export const metadata: Metadata = {
  title: "أستبيان - كل الاستبيانات",
};


const AllPolls = () => {
  
  return (
    <div>
      <AllPollsTable />
    </div>
  );
};

export default AllPolls;
