import React from 'react';
import Profile from '../dashboard/Profile'
import Search from '../dashboard/Search'
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

//Search
const SearchStack = createStackNavigator(
    {
        Search 
    },
    {
        navigationOptions: {
            tabBarIcon: ({ focused }) => (
                <Ionicons 
                    size={26}
                    name='md-search' />
            )
        }
    }
)

//Tabs
const AppTabs = createBottomTabNavigator(
    {
        DashboardStack,
        SearchStack,
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