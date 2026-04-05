"use client";

import { 
  TrendingUp, 
  TrendingDown, 
  PieChart, 
  Target 
} from "lucide-react";

import { useGetSummary } from "@/features/summary/api/use-get-summary";
import { 
  Card, 
  CardContent, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { formatCurrency, formatPercentage } from "@/lib/utils";
import { Skeleton } from "@/components/ui/skeleton";

export const InsightsPanel = () => {
  const { data, isLoading } = useGetSummary();

  if (isLoading) {
    return (
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
        <Skeleton className="h-[150px] w-full" />
        <Skeleton className="h-[150px] w-full" />
        <Skeleton className="h-[150px] w-full" />
      </div>
    );
  }

  if (!data) return null;

  // 1. Highest spending category
  const highestSpendingCategory = data.categories.length > 0 
    ? data.categories.reduce((prev, current) => (prev.value > current.value) ? prev : current)
    : null;

  // 2. Savings rate: (income - expenses) / income * 100
  const savingsRate = data.incomeAmount > 0 
    ? ((data.incomeAmount - data.expensesAmount) / data.incomeAmount) * 100 
    : 0;

  // 3. MoM expense change (using the existing expensesChange from summary data)
  const expenseChange = data.expensesChange || 0;

  return (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
      {/* Highest Spending Category */}
      <Card className="border-none drop-shadow-sm">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">
            Top Expense Category
          </CardTitle>
          <PieChart className="size-4 text-blue-500" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">
            {highestSpendingCategory ? highestSpendingCategory.name : "N/A"}
          </div>
          <p className="text-xs text-muted-foreground">
            {highestSpendingCategory 
              ? `${formatCurrency(highestSpendingCategory.value)} spent` 
              : "No data available"}
          </p>
        </CardContent>
      </Card>

      {/* Savings Rate */}
      <Card className="border-none drop-shadow-sm">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">
            Savings Rate
          </CardTitle>
          <Target className="size-4 text-green-500" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">
            {formatPercentage(savingsRate, { addPrefix: false })}
          </div>
          <p className="text-xs text-muted-foreground">
            Of your total income saved
          </p>
        </CardContent>
      </Card>

      {/* MoM Expense Change */}
      <Card className="border-none drop-shadow-sm">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">
            Expense Trend
          </CardTitle>
          {expenseChange > 0 ? (
            <TrendingUp className="size-4 text-rose-500" />
          ) : (
            <TrendingDown className="size-4 text-emerald-500" />
          )}
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">
            {formatPercentage(expenseChange, { addPrefix: true })}
          </div>
          <p className="text-xs text-muted-foreground">
            {expenseChange > 0 ? "Increase" : "Decrease"} vs last period
          </p>
        </CardContent>
      </Card>
    </div>
  );
};
