"use client";

import { DataCharts } from "@/components/data-charts";
import { DataGrid } from "@/components/data-grid";
import { InsightsPanel } from "@/components/insights-panel";
const DashboardPage = () => {
  return (
    <div 
      className="mx-auto -mt-6 w-full max-w-screen-2xl animate-in fade-in slide-in-from-bottom-5 pb-10 duration-700 ease-in-out"
    >
      <DataGrid />

      <DataCharts />

      <div className="mt-8">
        <h3 className="mb-4 text-lg font-semibold text-slate-800 dark:text-white">
          Financial Insights
        </h3>
        <InsightsPanel />
      </div>
    </div>
  );
};

export default DashboardPage;
