import React from 'react';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useColorScheme } from 'react-native';

import Login from '../screens/Login';
import Requests from '../screens/Requests';
import Profile from '../screens/Profile';
import MainTabs from './MainTabs';

import COLORS from '../constants/colors';

const darkTheme = {
    ...DarkTheme,
    colors: {
        ...DarkTheme.colors,
        ...COLORS.dark
    } 
}

const lightTheme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        ...COLORS.light
    }
}

const Stack = createStackNavigator();

const Navigator = () => {
    const scheme = useColorScheme()
    return (
        <NavigationContainer theme={scheme === 'dark' ? darkTheme : lightTheme}>
            <Stack.Navigator 
                screenOptions={{
                    headerShown: false
                }}
                initialRouteName={'Login'}
            >
                <Stack.Screen name='Login' component={Login} />
                <Stack.Screen name='MainTabs' component={MainTabs} />
                <Stack.Screen name='Requests' component={Requests} />
                <Stack.Screen name='Profile' component={Profile} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigator