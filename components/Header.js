import React from 'react';
import { StyleSheet, View, Text, Platform } from 'react-native';
import Constants from 'expo-constants';
import { useTheme } from '@react-navigation/native';

import SIZES from '../constants/sizes';

const Header = (props) => {
    const { colors } = useTheme();
    const styles = React.useMemo(() => createStyles(colors), [colors]);

    return (
        <View style={styles.container}>
            {props.children}
        </View>
    )
}

const createStyles = (colors) => StyleSheet.create({
    container: {
        paddingTop: Platform.OS === 'android' ? Constants.statusBarHeight : 0,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: SIZES.padding * 2,
        backgroundColor: colors.card,
        borderColor: colors.border,
        borderBottomWidth: 0.8,
    },
})

export default Header
