export interface ApplicantDetails {
  applicationId: string;
  accountNumber: string;
  fullName: string;
  email: string;
  phone: string;
  address: string;
  age: string;
  nationalId: string;
  dateCreated: string;
  dateRequested: string;
  gender: 'male' | 'female';
}

export interface CompanyDetails {
  companyName: string;
  rccm: string;
  idNat: string;
  nImpot: string;
  companyCreationDate: string;
  companyAccountNumber: string;
}

export interface FinancialDetails {
  annualRevenue: string;
  existingLoans: string;
  monthlyExpenses: string;
  collateralValue: string;
  bankStatements: string[];
  creditScore: string;
}

export interface FarmDetails {
  farmSize: string;
  cropTypes: string[];
  landOwnership: string;
  irrigationSystem: string;
  farmingExperience: string;
  seasonalWorkers: string;
  equipmentOwned: string[];
  certifications: string[];
  latitude: string;
  longitude: string;
  farmAddress: string;
}

export interface LoanDetails {
  loanAmount: string;
  loanPurpose: string;
  loanTerm: string;
  repaymentSource: string;
  sustainabilityPractices: string[];
}

export interface FormData {
  applicant: ApplicantDetails;
  company: CompanyDetails;
  financial: FinancialDetails;
  farm: FarmDetails;
  loan: LoanDetails;
}

export interface CriteriaScore {
  category: string;
  score: number;
  maxScore: number;
  details: string[];
}