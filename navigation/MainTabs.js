import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useTheme } from '@react-navigation/native';
import { View, Text, Image, StyleSheet } from 'react-native';

import Home from '../screens/Home';
import Notifications from '../screens/Notifications';
import SalaryRecords from '../screens/SalaryRecords';
import Profile from '../screens/Profile';

import ICONS from '../constants/icons';
import SIZES from '../constants/sizes';
import FONTS from '../constants/fonts';

const Tab = createBottomTabNavigator();

const MainTabs = () => {
    const { colors } = useTheme();
    const styles = React.useMemo(() => createStyles(colors), [colors]);
    return (
        <Tab.Navigator 
            tabBarOptions={{
                showLabel: false,
                style: {...styles.tabBar}
            }}
        >
            <Tab.Screen 
                name='Home'
                component={Home}
                options={{
                    tabBarIcon: ({focused}) => (
                        <View style={styles.item}>
                            <Image 
                                source={ICONS.mailbulk}
                                resizeMode='contain'
                                style={{
                                    width: 25,
                                    height: 25,
                                    tintColor: focused ? colors.primary : colors.dimmedText
                                }}
                            />
                            <Text style={styles.label}>Mensajes</Text>
                        </View>
                    )
                }}
            />
            <Tab.Screen 
                name='Notifications'
                component={Notifications}
                options={{
                    tabBarIcon: ({focused}) => (
                        <View style={styles.item}>
                            <Image 
                                source={ICONS.bellsolid}
                                resizeMode='contain'
                                style={{
                                    width: 25,
                                    height: 25,
                                    tintColor: focused ? colors.primary : colors.dimmedText
                                }}
                            />
                            <Text style={styles.label}>Novedades</Text>
                        </View>
                    )
                }}
            />
            <Tab.Screen 
                name='SalaryRecords'
                component={SalaryRecords}
                options={{
                    tabBarIcon: ({focused}) => (
                        <View style={styles.item}>
                            <Image 
                                source={ICONS.walletsolid}
                                resizeMode='contain'
                                style={{
                                    width: 25,
                                    height: 25,
                                    tintColor: focused ? colors.primary : colors.dimmedText
                                }}
                            />
                            <Text style={styles.label}>Recibos</Text>
                        </View>
                    )
                }}
            />
            <Tab.Screen 
                name='Profile'
                component={Profile}
                options={{
                    tabBarIcon: ({focused}) => (
                        <View style={styles.item}>
                            <Image 
                                source={ICONS.user}
                                resizeMode='contain'
                                style={{
                                    width: 25,
                                    height: 25,
                                    tintColor: focused ? colors.primary : colors.dimmedText
                                }}
                            />
                            <Text style={styles.label}>Perfil</Text>
                        </View>
                    )
                }}
            />
        </Tab.Navigator>
    )
}

const createStyles = (colors) => StyleSheet.create({
    tabBar:{
        position: 'absolute',
        height: 70,
        bottom: 20,
        left: 20,
        right: 20,
        borderRadius: SIZES.radius,
        shadowColor: colors.shadow,
        shadowOffset: { width: 0, height: 10},
        shadowOpacity: 0.25,
        shadowRadius: 3.5,
        elevation: 5
    },
    item: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    label:{
        color: colors.dimmedText,
        ...FONTS.body5
    }
})

export default MainTabs