import React from 'react'
import { StyleSheet, View, Text, TextInput, TouchableOpacity, Image } from 'react-native'
import { useTheme } from '@react-navigation/native'

import FONTS from '../../constants/fonts'
import ICONS from '../../constants/icons'
import SIZES from '../../constants/sizes'


const TypeOfRequestSelector = props => {
    const { colors } = useTheme();
    const styles = React.useMemo(() => createStyles(colors), [colors]);

    return (
        <View style={styles.container}>
            <Text style={styles.label}>{props.label}</Text>
            <View>
                <TouchableOpacity 
                    style={styles.dropdownList}
                    onPress={props.handleDropdownButton}
                >
                    <TextInput 
                        style={styles.input}
                        {...props}
                    />
                    <Image 
                        source={ICONS.down}
                        resizeMode='contain'
                        style={styles.icon}
                    />
                </TouchableOpacity>
            </View>
        </View>
    )
}

const createStyles = (colors) => StyleSheet.create({
    container: {
        paddingTop: SIZES.padding * 2,
        paddingBottom: SIZES.padding
    },
    label: {
        color: colors.text,
        ...FONTS.h4
    },
    dropdownList: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottomWidth: 1,
        borderBottomColor: colors.card
    },
    input: {
        height: 35,
        color: colors.text,
        paddingLeft: SIZES.padding * 0.2,
        ...FONTS.body3,
    },
    icon: {
        width: 20,
        height: 20,
        tintColor: colors.text
    }
})

export default TypeOfRequestSelector