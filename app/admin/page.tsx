import React, { ReactNode } from "react";
import StatisticsCards from "./components/StatisticsCards";
import SurveyTable from "./components/SurveyTable";
import { Metadata } from "next";


export const metadata: Metadata = {
  title: "أستبيان - لوحة تحكم مدير النظام",
};

const AdminHome = () => {
  return (
    <div>
      <StatisticsCards />
      <SurveyTable />
    </div>
  );
};

export default AdminHome;
