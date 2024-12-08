import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { Provider, useSelector } from 'react-redux';
import OnboardComponent from './onboard/OnboardComponent';
import Colors from './utils/ColorUtils';
import LoginComponent from './login/LoginComponent';
import ForgotPasswordComponent from './login/ForgotPasswordComponent';

const AppScreen = () => {

    const {theme, systemTheme} = useSelector((state) => state.theme);
    const currentTheme = theme === 'system' ? systemTheme : theme;

    const primaryBackgroundColor = currentTheme === 'light' ? Colors["primary_light"] : Colors["primary_dark"]

    return (
    <View style={[styles.appContainer, {backgroundColor: primaryBackgroundColor}]}>
        <ForgotPasswordComponent></ForgotPasswordComponent>
    </View>
    );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: Colors["primary_light"],
  }
});

export default AppScreen;
