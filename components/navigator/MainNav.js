import React from 'react';
import Profile from '../dashboard/Profile'
import EditProfile from '../Profile/EditProfile'
import Settings from '../dashboard/Settings'
import Dashboard from '../dashboard/Dashboard';
import AuthScreen from '../auth/AuthScreen'
import { Ionicons } from '@expo/vector-icons';
import {
    createStackNavigator,
    createBottomTabNavigator, 
    createDrawerNavigator 
} from 'react-navigation'

//Dashboard
const DashboardStack = createStackNavigator(
    {
        Dashboard
    },
    {
        navigationOptions: {
            tabBarIcon: ({ focused }) => (
                <Ionicons 
                    size={26}
                    name='md-home' />
            ),
        }
    }

)

//Profile
const ProfileStack = createStackNavigator(
    {
        Profile,
        EditProfile: EditProfile
    },
    {
        navigationOptions : {
            tabBarIcon: ({ focused }) => (
                <Ionicons 
                    size={26}
                    name='md-person' />
            )
        }
    }
);


//Settings
const SettingStack = createStackNavigator(
    {
        Settings 
    },
    {
        navigationOptions: {
            tabBarIcon: ({ focused }) => (
                <Ionicons 
                    size={26}
                    name='md-settings' />
            )
        }
    }
)

//Tabs
const AppTabs = createBottomTabNavigator(
    {
        DashboardStack,
        ProfileStack,
        SettingStack
    },
    {
        tabBarOptions: {
            showLabel: false
        }
    }
)


export default AppDrawer = createDrawerNavigator(
    {
        Home: AppTabs,
        SignOut: AuthScreen
    }
)