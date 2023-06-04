export interface ExpensesByCategory {
  salaries: number;
  supplies: number;
  services: number;
}

export interface Month {
  _id: string;
  id: string;
  month: string;
  revenue: number;
  expenses: number;
  operationalExpenses: number;
  nonOperationalExpenses: number;
}

export interface Day {
  _id: string;
  id: string;
  date: string;
  expenses: number;
  revenue: number;
}
export interface KpiResponse {
  _id: string;
  id: string;
  __v: number;
  dailyData: Array<Day>;
  monthlyData: Array<Month>;
  totalExpenses: number;
  totalProfit: number;
  totalRevenue: number;
  expensesByCategory: ExpensesByCategory;
}
