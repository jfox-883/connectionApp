import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import { useTheme } from '@react-navigation/native';


import FONTS from '../constants/fonts';
import SIZES from '../constants/sizes';

const Field = (props) => {
    const { colors } = useTheme()
    const styles = React.useMemo(() => createStyles(colors), [colors])

    return (
        <View style={styles.container}>
            <Text style={styles.label}>{props.label}</Text>
            <Text style={styles.fieldValue}>{props.value}</Text>
        </View>
    )
}

const createStyles = (colors) => StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        paddingVertical: SIZES.padding * 0.5,
        paddingHorizontal: SIZES.padding * 0.5
    },
    label: {
        color: colors.primary,
        textAlign: 'center',
        ...FONTS.body5
    },
    fieldValue: {
        color: colors.text,
        ...FONTS.body4
    }
})

export default Field
