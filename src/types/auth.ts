export interface User {
  id: string;
  email: string;
  name: string;
  role: UserRole;
  avatar?: string;
  createdAt: string;
  updatedAt: string;
}
 
export enum UserRole {
  ADMIN = 'admin',
  USER = 'user',
  PATIENT = 'patient',
}
 // to hold the user details in the redux store
export interface AuthState {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  error: string | null;
}
 
export interface LoginCredentials {
  email: string;
  password: string;
}
 //user registration data
 //user role details as well
export interface RegisterData {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  role: UserRole;
}