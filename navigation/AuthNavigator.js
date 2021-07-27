import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';


import Login from '../screens/Login';

const Stack = createStackNavigator();

const AuthNavigator = () => {
    return (
        <Stack.Navigator 
            screenOptions={{
                headerShown: false
            }}
            initialRouteName={'Login'}
        >
            <Stack.Screen name='Login' component={Login} />
        </Stack.Navigator>
    )
}

export default AuthNavigator