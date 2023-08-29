import { Commitment } from "./commitment";
import { SavingAndLivingExpense } from "./expense";
import { Fees } from "./fees";
import { Income } from "./income";
import { Requirement } from "./requirement";

export interface FormStructure {
  Requirement: Requirement;
  Income: Income;
  Fees: Fees;
  SavingAndLivingExpense: SavingAndLivingExpense;
  Commitment: Commitment;
}
