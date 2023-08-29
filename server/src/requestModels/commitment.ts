export type Commitment = {
  ongoingCommitment: string;
  allCommitment: CommitmentOptions[];
};

export type CommitmentOptions = {
  typeOfCommitment: string;
  lender: string;
  limit: number;
  outstandingBalance: number;
  monthlyRepayment: number;
};

export const typeOfCommitment = [
  "mortgage",
  "credit",
  "store",
  "car",
  "personal",
  "afterPay",
  "overdraft",
];
