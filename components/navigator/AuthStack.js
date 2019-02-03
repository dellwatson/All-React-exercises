import LoginScreen from '../auth/LoginScreen'
import SignUpScreen from '../auth/SignUpScreen'
import { createStackNavigator } from 'react-navigation'

export default AuthStack = createStackNavigator(
    {
        Login: {screen:LoginScreen,navigationOptions: {header: null}},
        SignUp: {screen: SignUpScreen}
    },{
        style: {
            backgrounColor: 'red'
        }
    }
) 
