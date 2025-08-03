import React from 'react';
import { TextInput, HelperText } from 'react-native-paper';
import { View, StyleSheet } from 'react-native';
import { InputProps } from '../../types/common';
import { theme } from '../../constants/theme';

 
const AppTextInput = ({
  label,
  placeholder,
  value,
  onChangeText,
  error,
  secureTextEntry = false,
  keyboardType = 'default',
  multiline = false,
  numberOfLines = 1,
  icon,
  disabled = false,
  helperText,
  style,
  testID,
}: InputProps) => {
  return (
<View style={[styles.container,style ]}>
<TextInput
        label={label}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        error={!!error}
        secureTextEntry={secureTextEntry}
        keyboardType={keyboardType}
        multiline={multiline}
        numberOfLines={numberOfLines}
        left={icon ? <TextInput.Icon icon={icon} /> : undefined}
        disabled={disabled}
        mode="outlined"
        style={styles.input}
        testID={testID}
        theme={{
          colors: {
            primary: theme.colors.primary,
            error: theme.colors.error,
          },
        }}
      />
      {(error || helperText) && (
<HelperText type={error ? 'error' : 'info'} visible={!!(error || helperText)}>
          {error || helperText}
</HelperText>
      )}
</View>
  );
};
 
const styles = StyleSheet.create({
  container: {
    marginBottom: theme.spacing.sm,
  },
  input: {
    backgroundColor: theme.colors.surface,
  },
});
 
export default AppTextInput;