export interface Patient {
  id: string;
  name: string;
  email: string;
  phone: string;
  dateOfBirth: string;
  gender: 'male' | 'female' | 'other';
  address: Address;
  medicalHistory: MedicalRecord[];
  emergencyContact: EmergencyContact;
  createdAt: string;
  updatedAt: string;
}
 
export interface Address {
  street: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
}
 
export interface MedicalRecord {
  id: string;
  date: string;
  diagnosis: string;
  treatment: string;
  doctor: string;
  notes?: string;
}
 
export interface EmergencyContact {
  name: string;
  relationship: string;
  phone: string;
  email?: string;
}
 
export interface PatientState {
  patients: Patient[];
  selectedPatient: Patient | null;
  isLoading: boolean;
  error: string | null;
}
