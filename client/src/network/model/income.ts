export type Income = {
  otherIncome: string;
  allIncome: IncomeOptions[];
};

export type IncomeOptions = {
  typeOfIncome: string;
  payment: number;
  frequency: string;
};
