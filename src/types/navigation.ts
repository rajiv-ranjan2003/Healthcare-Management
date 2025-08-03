import {NavigatorScreenParams} from '@react-navigation/native';
import {StackScreenProps} from '@react-navigation/stack';
import {DrawerScreenProps as DSProps} from '@react-navigation/drawer';
import {BottomTabScreenProps} from '@react-navigation/bottom-tabs';
 
export type RootStackParamList = {
  Splash: undefined;
  Auth: NavigatorScreenParams<AuthStackParamList>;
  Main: NavigatorScreenParams<DrawerParamList>;
};
 
export type AuthStackParamList = {
  Login: undefined;
  Register: undefined;
  ForgotPassword: undefined;
};
 
export type DrawerParamList = {
  Home: NavigatorScreenParams<TabParamList>;
  Profile: undefined;
  Settings: undefined;
  Patients: NavigatorScreenParams<PatientStackParamList>;
  Reports: undefined;
  Logout: undefined;
};
 
export type TabParamList = {
  Dashboard: undefined;
  Analytics: undefined;
  Notifications: undefined;
  Calendar: undefined;
};
 
export type PatientStackParamList = {
  PatientList: undefined;
  PatientDetail: {patientId: string};
  PatientForm: {patientId?: string};
};
 
// Navigation prop types
export type RootStackScreenProps<T extends keyof RootStackParamList> =
  StackScreenProps<RootStackParamList, T>;
 
export type AuthStackScreenProps<T extends keyof AuthStackParamList> =
  StackScreenProps<AuthStackParamList, T>;
 
export type DrawerScreenProps<T extends keyof DrawerParamList> =
 DSProps<DrawerParamList, T>;
 
export type TabScreenProps<T extends keyof TabParamList> = BottomTabScreenProps<
  TabParamList,
  T
>;
 
export type PatientStackScreenProps<T extends keyof PatientStackParamList> =
  StackScreenProps<PatientStackParamList, T>;