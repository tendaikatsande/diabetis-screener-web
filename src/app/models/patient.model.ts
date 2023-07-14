export interface Patient {
  id?: number;
  name: string;
  age: number;
  gender: string;
  contactInformation: string;
  insuranceDetails: string;
  medicalHistory: string;
  visits: [];
  vitals: [];
}
