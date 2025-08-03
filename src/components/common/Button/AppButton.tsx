import React from 'react';
import { Button as PaperButton } from 'react-native-paper';
import { StyleSheet, ViewStyle } from 'react-native';
import { ButtonProps } from '../../../types/common';
 import { theme } from '../../../constants/theme';
const AppButton = ({
  title,
  onPress,
  variant='primary',
  size = 'medium',
  disabled = false,
  loading = false,
  icon,
  fullWidth = false,
  style,
  testID,
}:ButtonProps) => {
  const getButtonMode = (): 'contained' | 'outlined' | 'text'  => {
    //contained is used for primary actions, outlined for secondary actions, and text for minimal emphasis
    
    switch (variant) {
      case 'primary':
        return 'contained';
      case 'outline':
        return 'outlined';
      case 'text':
        return 'text';
        // case 'secondary':
        //     return 'contained';
      default:
        return 'contained';
    }
  };
 
  const getButtonStyle = (): ViewStyle => {
    const baseStyle: ViewStyle = {
      borderRadius: theme.borderRadius.md,
    };
 
    if (fullWidth) {
      baseStyle.width = '100%';
    }
 
    switch (size) {
      case 'small':
        baseStyle.paddingVertical = theme.spacing.xs;
        break;
      case 'large':
        baseStyle.paddingVertical = theme.spacing.md;
        break;
      default:
        baseStyle.paddingVertical = theme.spacing.sm;
    }
 
    return baseStyle;
  };
 
  return (
<PaperButton
      mode={getButtonMode()}
      onPress={onPress}
      disabled={disabled || loading}
      icon={icon}
      style={[getButtonStyle(), style]}
      contentStyle={styles.buttonContent}
      testID={testID}
      loading={loading}
      buttonColor= {variant === 'primary' ? theme.colors.primary : variant === 'secondary' ? theme.colors.secondary : theme.colors.surface} // This can be customized based on the variant
>
      {title}
</PaperButton>
  );
};
 
const styles = StyleSheet.create({
  buttonContent: {
    height: 48,
  },
});
 
export default AppButton;