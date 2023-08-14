type applicationTypeOptions = "pre-approval" | "formal-approval";
type referralOptions = "existing" | "non-existing" | "new-client";
type loanCategoryOptions =
  | "purchase"
  | "refinance"
  | "top-up"
  | "purchase + refinance";
type propertyTypeOptions =
  | "established"
  | "land-only"
  | "building-only"
  | "land + building"
  | "mixed"
  | "mixed-building";

type applicationPurposeOptions = "owner-occupied" | "investment" | "both";

type productSelectionOptions = "basic" | "standard" | "fixed" | "split";
type repaymentTypeOptions = "interest" | "principal + interest" | "both";
type loanTermOptions =
  | "maximum-available"
  | "increasing"
  | "reducing"
  | "lower"
  | "consistent";

type changeReferralTypeOptions = "short" | "both" | "long";

type lenderSelectionOptions = {
  existingHolder: boolean;
  rateOffer: boolean;
  discountedRate: boolean;
  upfrontBenefit: boolean;
  higherLVR: boolean;
  crossCollateral: boolean;
  creditPolicy: creditPolicyOptions;
  other: string;
};

type creditPolicyOptions = {
  selfEmployment: boolean;
  shortTermEmployment: boolean;
  casualEmployment: boolean;
  specificLending: boolean;
  cashOutReq: boolean;
};

type bothChangesOptions = {
  employmentConditions: boolean;
  leaveType: boolean;
  extendedHoliday: boolean;
  retirementBoth: boolean;
  majorExpense: boolean;
};

type longTermChangeOptions = {
  retirementLong: boolean;
  other: string;
  exitStrategy: exitStrategyOptions;
};

type exitStrategyOptions = {
  downsizing: boolean;
  investmentProperty: boolean;
  superannuation: boolean;
  other: string;
};

export type ObjectiveAndRequirement = {
  applicationType: applicationTypeOptions;
  referral: referralOptions;
  loanCategory: loanCategoryOptions;
  propertyType: propertyTypeOptions;
  applicationPurpose: applicationPurposeOptions;
  productSelection: productSelectionOptions;
  repaymentType: repaymentTypeOptions;
  loanTerm: loanTermOptions;
  lenderName: string;
  isExistingHolderOfLender: "yes" | "no";
  lenderSelection: lenderSelectionOptions;
  typeOfChange: "yes" | "no";
  changeReferralType?: changeReferralTypeOptions;
  bothTermChanges?: bothChangesOptions;
  longTermChanges?: longTermChangeOptions;
};
