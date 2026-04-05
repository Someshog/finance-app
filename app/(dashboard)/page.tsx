"use client";

import { motion } from "framer-motion";
import { DataCharts } from "@/components/data-charts";
import { DataGrid } from "@/components/data-grid";
import { InsightsPanel } from "@/components/insights-panel";

const DashboardPage = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mx-auto -mt-6 w-full max-w-screen-2xl pb-10"
    >
      <DataGrid />

      <DataCharts />

      <div className="mt-8">
        <h3 className="mb-4 text-lg font-semibold text-slate-800 dark:text-white">
          Financial Insights
        </h3>
        <InsightsPanel />
      </div>
    </motion.div>
  );
};

export default DashboardPage;
