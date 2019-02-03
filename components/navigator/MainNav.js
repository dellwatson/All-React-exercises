import React from 'react';
import Profile from '../dashboard/Profile'
import EditProfile from '../Profile/EditProfile'
import Settings from '../dashboard/Settings'
import Dashboard from '../dashboard/Dashboard';
import AuthScreen from '../auth/AuthScreen'
import { View, Text, StyleSheet, Button } from 'react-native';

import { Icon } from 'native-base';
import {
    createStackNavigator,
    createBottomTabNavigator, 
    createDrawerNavigator 
} from 'react-navigation'


//Dashboard
const DashboardStack = createStackNavigator(
    {
        Dashboard
    }
)
DashboardStack.navigationOptions = {
    
}


//Profile
const ProfileStack = createStackNavigator(
    {
        Profile,
        EditProfile: EditProfile
    },
    {
        defaultNavigationOptions: ({ navigation }) => {
            return {
                headerRight: (
                    <Text>header Rgiht</Text>
                )
            }
        }
    }
);

ProfileStack.navigationOptions = {
    tabBarLabel: 'Profile',
    
}

//Settings
const SettingStack = createStackNavigator(
    {
        Settings
    }
)
SettingStack.navigationOptions = {
    
}

//Tabs
const AppTabs = createBottomTabNavigator(
    {
        Dashboard,
        ProfileStack,
        SettingStack
    }
)


export default AppDrawer = createDrawerNavigator(
    {
        Home: AppTabs,
        SignOut: AuthScreen
    }
)