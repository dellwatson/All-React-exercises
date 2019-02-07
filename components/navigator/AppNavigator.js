import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import AppDrawer from './MainNav'
import AuthScreen from '../auth/AuthScreen'
import LoginScreen from '../auth/LoginScreen'
import SignUpScreen from '../auth/SignUpScreen'

const OpeningScreen = createSwitchNavigator(
    {
        AuthLoading: AuthScreen,
        Login: LoginScreen,
        SignUp: SignUpScreen,
        App: AppDrawer
    },
    {
        initialRouteName: 'App',

    }
);

export default createAppContainer(OpeningScreen);
