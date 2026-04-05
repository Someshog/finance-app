"use client";

import { useSearchParams } from "next/navigation";
import { PiggyBank, TrendingDown, TrendingUp } from "lucide-react";

import { useGetSummary } from "@/features/summary/api/use-get-summary";
import { formatDateRange } from "@/lib/utils";

import { DataCard, DataCardLoading } from "./data-card";

export const DataGrid = () => {
  const { data, isLoading } = useGetSummary();
  const searchParams = useSearchParams();
  const to = searchParams.get("to") || undefined;
  const from = searchParams.get("from") || undefined;

  const dateRangeLabel = formatDateRange({ to, from });

  if (isLoading)
    return (
      <div className="mb-8 grid grid-cols-1 gap-8 pb-2 lg:grid-cols-3">
        <DataCardLoading />
        <DataCardLoading />
        <DataCardLoading />
      </div>
    );

  return (
    <div className="mb-8 grid grid-cols-1 gap-8 pb-2 lg:grid-cols-3">
      <DataCard
        title="Remaining"
        value={data?.remainingAmount}
        percentageChange={data?.remainingChange}
        icon={PiggyBank}
        variant="default"
        dateRange={dateRangeLabel}
      />

      <DataCard
        title="Income"
        value={data?.incomeAmount}
        percentageChange={data?.incomeChange}
        icon={TrendingUp}
        variant="success"
        dateRange={dateRangeLabel}
      />

      <DataCard
        title="Expenses"
        value={data?.expensesAmount}
        percentageChange={data?.expensesChange}
        icon={TrendingDown}
        variant="danger"
        dateRange={dateRangeLabel}
      />
    </div>
  );
};
