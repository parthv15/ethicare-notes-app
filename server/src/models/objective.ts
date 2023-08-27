const applicationType = ["formal", "pre"];
const referral = ["existing", "new client"];
const loanCategory = ["purchase", "refinance", "topUp", "purchaseAndRefinance"];

const propertyType = [
  "established",
  "landOnly",
  "buildingOnly",
  "landAndBuilding",
  "mixed",
  "mixedBuilding",
];

const purpose = ["ownerOccupied", "investment", "both"];
const productSelection = ["basic", "standard", "fixed", "split"];
const repaymentType = ["interest", "principalAndInterest", "both"];

const loanTermSelection = [
  "maximumAvailable",
  "increasing",
  "reducing",
  "lower",
  "consistent",
];

const lenderSelection = [
  "existing",
  "promotional",
  "discounted",
  "upfront",
  "lvr",
  "crossCollateralization",
  "selfEmployment",
  "shortTerm",
  "casualEmployment",
  "specific",
  "cashOut",
];

const typeOfChange = ["short", "both", "long"];
const shortAndLongTermChange = [
  "parentalLeave",
  "extended",
  "major",
  "retirement",
  "employment",
];

const longTermChange = ["retirement"];
const exitStrategy = ["superannuation", "investment", "downsizing"];
const isExistingAccountOfLender = ["yes", "no"];
const expectOfChange = ["yes", "no"];

type valuesMapper = {
  [key: string]: string[];
};

export const Values: valuesMapper = {
  applicationType,
  referral,
  loanCategory,
  propertyType,
  purpose,
  productSelection,
  repaymentType,
  loanTermSelection,
  lenderSelection,
  typeOfChange,
  shortAndLongTermChange,
  longTermChange,
  exitStrategy,
  isExistingAccountOfLender,
  expectOfChange,
};

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
  isExistingAccountOfLender: string;
  lenderSelection: string[];
  expectOfChange: string;
  typeOfChange: string | undefined;
  shortAndLongTermChange: string[] | undefined;
  longTermChange: string | undefined;
  exitStrategy: string[] | undefined;
};

// {
//   "applicationType": "formal",
//   "referral": "existing",
//   "lenderName": "parth",
//   "loanCategory": "purchase",
//   "propertyType": "mixed",
//   "purpose": "both",
//   "productSelection": "fixed",
//   "repaymentType": "both",
//   "loanTermSelection": "lower",
//   "isExistingAccountOfLender": "yes",
//   "lenderSelection": ["lvr"],
//   "expectOfChange": "no",
//   "shortAndLongTermChange": undefined,
//   "longTermChange": undefined,
//   "exitStrategy": undefined,
// }
