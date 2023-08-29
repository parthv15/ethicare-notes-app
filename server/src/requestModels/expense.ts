import { frequency } from "./income";

export type SavingAndLivingExpense = {
  savingPattern: string;
  additionalExpense: string;
  allExpense: ExpenseOptions[];
};

export type ExpenseOptions = {
  expenseType: string;
  payment: number;
  frequency: string;
};

export const expenseType = [
  "privateHealth",
  "personalHealth",
  "privateSchool",
  "investment",
  "rental",
  "boarding",
];

export const savingPattern = ["genuine", "redraw", "nonGenuine", "rental"];

export const ExpenseValues = {
  savingPattern,
  expenseType,
  frequency,
};
