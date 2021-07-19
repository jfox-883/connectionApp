import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useTheme } from '@react-navigation/native';
import { Image } from 'react-native';

import Home from '../screens/Home';
import Notifications from '../screens/Notifications';
import SalaryRecords from '../screens/SalaryRecords';

import ICONS from '../constants/icons';

const Tab = createBottomTabNavigator();

const MainTabs = () => {
    const { colors } = useTheme();
    return (
        <Tab.Navigator 
            tabBarOptions={{
                showLabel: false
            }}
        >
            <Tab.Screen 
                name='Home'
                component={Home}
                options={{
                    tabBarIcon: ({focused}) => (
                        <Image 
                            source={ICONS.mailbulk}
                            resizeMode='contain'
                            style={{
                                width: 25,
                                height: 25,
                                tintColor: focused ? colors.primary : colors.text
                            }}
                        />
                    )
                }}
            />
            <Tab.Screen 
                name='Notifications'
                component={Notifications}
                options={{
                    tabBarIcon: ({focused}) => (
                        <Image 
                            source={ICONS.bellsolid}
                            resizeMode='contain'
                            style={{
                                width: 25,
                                height: 25,
                                tintColor: focused ? colors.primary : colors.text
                            }}
                        />
                    )
                }}
            />
            <Tab.Screen 
                name='SalaryRecords'
                component={SalaryRecords}
                options={{
                    tabBarIcon: ({focused}) => (
                        <Image 
                            source={ICONS.walletsolid}
                            resizeMode='contain'
                            style={{
                                width: 25,
                                height: 25,
                                tintColor: focused ? colors.primary : colors.text
                            }}
                        />
                    )
                }}
            />
        </Tab.Navigator>
    )
}

export default MainTabs