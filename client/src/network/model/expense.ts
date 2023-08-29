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
