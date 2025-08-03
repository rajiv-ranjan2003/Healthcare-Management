import React from 'react';
import { Text as PaperText } from 'react-native-paper';
import { StyleSheet, TextStyle } from 'react-native';
import { TextProps } from '../../types/common';
import { theme } from '../../constants/theme';
 
 
const AppText = ({
  children,
  variant = 'body',
  color = 'primary',
  align = 'left',
  weight = 'normal',
  style,
  testID,
}: TextProps) => {
  const getTextStyle = (): TextStyle => {
    const baseStyle: TextStyle = {
      textAlign: align,
      fontWeight: weight,
    };
 
    // Variant styles
    switch (variant) {
      case 'h1':
        Object.assign(baseStyle, theme.typography.h1);
        break;
      case 'h2':
        Object.assign(baseStyle, theme.typography.h2);
        break;
      case 'h3':
        Object.assign(baseStyle, theme.typography.h3);
        break;
      case 'caption':
        Object.assign(baseStyle, theme.typography.caption);
        break;
      default:
        Object.assign(baseStyle, theme.typography.body);
    }
 
    // Color styles
    switch (color) {
      case 'secondary':
        baseStyle.color = theme.colors.text.secondary;
        break;
      case 'error':
        baseStyle.color = theme.colors.error;
        break;
      case 'success':
        baseStyle.color = theme.colors.success;
        break;
      default:
        baseStyle.color = theme.colors.text.primary;
    }
 
    return baseStyle;
  };
 
  return (
<PaperText style={[getTextStyle(), style]} testID={testID}>
      {children}
</PaperText>
  );
};
 
export default AppText;