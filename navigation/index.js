import React from 'react';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { useColorScheme } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import Navigator from './Navigator';
import AuthNavigator from './AuthNavigator';

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

export default function Navigation() {
    const scheme = useColorScheme()
    const userState = useSelector(state => state.user.validated)
    const dispatch = useDispatch()

    /*React.useEffect(() => {
        getItem('@user').then(res => {
            console.log(res)
            if(res !== null && res !== undefined ) {
                dispatch(login(res.usuario, res.password))
            }
        })
        clearItem('@user')
    },[userState])*/

    return (
        <NavigationContainer theme={scheme === 'dark' ? darkTheme : lightTheme}>
            {userState
                ? <Navigator/>
                : <AuthNavigator />
            }
        </NavigationContainer>
    )
}