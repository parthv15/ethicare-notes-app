export type Requirement = {
  applicationType: string;
  referral: string;
  lenderName: string;
  loanCategory: string;
  propertyType: string;
  purpose: string;
  productSelection: string;
  repaymentType: string;
  loanTermSelection: string;
  isExistingAccountOfLender: string;
  lenderSelection: string[];
  expectOfChange: string;
  typeOfChange: string | undefined;
  shortAndLongTermChange: string[] | undefined;
  longTermChange: string | undefined;
  exitStrategy: string[] | undefined;
};
