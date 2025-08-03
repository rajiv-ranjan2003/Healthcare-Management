// src/types/common.ts
export interface LoadingState {
  isLoading: boolean;
  error: string | null;
}
 
export interface FormField {
  name: string;
  label: string;
  type: 'text' | 'email' | 'password' | 'phone' | 'date' | 'select';
  required?: boolean;
  options?: {label: string; value: string}[];
}
 
export interface ModalProps {
  visible: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
}

export interface BaseComponentProps {
  testID?: string;
  style?: any;
  children?: React.ReactNode;
}
 
export interface ButtonProps extends BaseComponentProps {
  title: string;
  onPress: () => void;
  variant?: 'primary' | 'secondary' | 'outline' | 'text';
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
  loading?: boolean;
  icon?: string;
  fullWidth?: boolean;
}
 
export interface TextProps extends BaseComponentProps {
  variant?: 'h1' | 'h2' | 'h3' | 'body' | 'caption';
  color?: 'primary' | 'secondary' | 'error' | 'success';
  align?: 'left' | 'center' | 'right';
  weight?: 'normal' | 'bold' | '600';
}
 
export interface InputProps extends BaseComponentProps {
  label?: string;
  placeholder?: string;
  value?: string;
  onChangeText?: (text: string) => void;
  error?: string;
  secureTextEntry?: boolean;
  keyboardType?: 'default' | 'email-address' | 'numeric' | 'phone-pad';
  multiline?: boolean;
  numberOfLines?: number;
  icon?: string;
  disabled?: boolean;
  helperText?: string;
}
 
export interface CardProps extends BaseComponentProps {
  title?: string;
  subtitle?: string;
  avatar?: string;
  onPress?: () => void;
  actions?: React.ReactNode;
  elevation?: number;
}