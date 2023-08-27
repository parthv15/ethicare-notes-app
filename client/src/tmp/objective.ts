export type Objective = {
  applicationType: string;
  referral: string;
  lenderName: string;
  loanCategory: string;
  propertyType: string;
  purpose: string;
  productSelection: string;
  repaymentType: string;
  loanTermSelection: string;
  isExistingAccountOfLender: boolean;
  lenderSelection: string[];
  expectOfChange: boolean;
  typeOfChange: string | undefined;
  shortAndLongTermChange: string[] | undefined;
  longTermChange: string | undefined;
  exitStrategy: string[] | undefined;
};
