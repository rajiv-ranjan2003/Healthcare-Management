export interface Theme {
  colors: {
    primary: string;
    secondary: string;
    background: string;
    surface: string;
    error: string;
    onPrimary: string;
    onSecondary: string;
    onBackground: string;
    onSurface: string;
    onError: string;
    accent: string;
    disabled: string;
    placeholder: string;
    backdrop: string;
    notification: string;
  };
  fonts: {
    regular: string;
    medium: string;
    light: string;
    thin: string;
  };
  roundness: number;
  animation: {
    scale: number;
  };
}