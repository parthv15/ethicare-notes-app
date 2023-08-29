import { ValuesMapper } from "./requirement";

export type Income = {
  otherIncome: string;
  allIncome: IncomeOptions[];
};

export type IncomeOptions = {
  typeOfIncome: string;
  payment: number;
  frequency: string;
};

export const typeOfIncome = ["existing", "proposed", "family", "childSupport"];
export const frequency = ["week", "fortnight", "month", "year"];

export const IncomeValues: ValuesMapper = {
  typeOfIncome,
  frequency,
};
