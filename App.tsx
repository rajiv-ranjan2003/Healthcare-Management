/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { NewAppScreen } from '@react-native/new-app-screen';
import { StatusBar, StyleSheet, useColorScheme, View,Text } from 'react-native';
import AppButton from './src/components/common/Button/AppButton';
import AppText from './src/components/common/AppText';
import AppTextInput from './src/components/common/AppTextInput';
import React from 'react';

function App() {
  const isDarkMode = useColorScheme() === 'dark';
const [username, setUsername] = React.useState(''); 
const [password, setPassword] = React.useState('');
const[usernameError, setUsernameError] = React.useState('');
const[passwordError, setPasswordError] = React.useState('');
  return (
    <View style={styles.container}>
     {/* <Text>Rajiv is a good boy</Text> */}
     <AppText color='secondary'>Hello world</AppText>
     <AppButton title='Contained' variant='primary' size='small' onPress={()=>{}} testID='contained-button' />
      <AppButton title='Outlined' variant='outline' onPress={()=>{}} testID='outlined-button' />
        <AppButton title='Text' variant='text' onPress={()=>{}} testID='text-button' />
          <AppButton title='secondary' variant='secondary'  onPress={()=>{}} testID='secondary-button' />
{/* <AppTextInput 
        label='Email'
        placeholder='Enter your email'
        value=''
        onChangeText={(text) => console.log(text)}
        error='This field is required'
        keyboardType='email-address'
        style={{ marginBottom: 20 }}
        testID='email-input'
      /> */}
      {/* {username input}  */}
      <AppTextInput 
        label='Username'
        placeholder='Enter your username'
        value={username}
        onChangeText={setUsername}
        error=""
        //helperText=''
        helperText='Username must be at least 3 characters'
        keyboardType='numeric'
        //style={{ marginBottom: 20 }}
        icon='account'
        testID='username-input'
      />
      <AppTextInput 
        label='Password'
        placeholder='Enter your password'
        value={password}
        onChangeText={setPassword}
        secureTextEntry={true}
        error={passwordError}
        helperText='Password must be at least 6 characters'
        //style={{ marginBottom: 20 }}
        icon='lock'
        testID='password-input'
      />
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
