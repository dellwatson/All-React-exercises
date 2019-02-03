import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import AuthStack from './AuthStack'
import AppDrawer from './MainNav'
import AuthScreen from '../auth/AuthScreen'
import LoginScreen from '../auth/LoginScreen'
import SignUpScreen from '../auth/SignUpScreen'

const OpeningScreen = createSwitchNavigator(
    {
        AuthLoading: AuthScreen,
        Login: LoginScreen,
        SignUp: SignUpScreen,
        // Auth: AuthStack,
        App: AppDrawer
    },
    {
        initialRouteName: 'AuthLoading',
        
    }
);

export default createAppContainer(OpeningScreen);

