import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Requests from '../screens/Requests';
import Profile from '../screens/Profile';
import MainTabs from './MainTabs';

const Stack = createStackNavigator();

const Navigator = () => {
    return (
        <Stack.Navigator 
            screenOptions={{
                headerShown: false
            }}
            initialRouteName={'MainTabs'}
        >
            <Stack.Screen name='MainTabs' component={MainTabs} />
            <Stack.Screen name='Requests' component={Requests} />
            <Stack.Screen name='Profile' component={Profile} />
        </Stack.Navigator>
    )
}

export default Navigator