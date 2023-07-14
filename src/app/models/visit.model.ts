import { BloodPressureCategory } from "./bp.enum";
import { Patient } from "./patient.model";

export interface PatientVisit {
  id?: number;
  patient: Patient;
  visitDate: string;
  visitReason: string;
  visitDuration: number;
  vitals: Vital[];
}

export interface Vital {
    id: number;
    patient: Patient;
    visit: PatientVisit;
    bloodPressure: BloodPressureCategory;
    bodyTemperature: number;
    heartRate: number;
    weight: number;
    height: number;
}
