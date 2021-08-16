import React from 'react'
import { StyleSheet, View, Text, TextInput } from 'react-native'
import { useTheme } from '@react-navigation/native'

import FONTS from '../../constants/fonts'
import SIZES from '../../constants/sizes'

const MessageInput = props => {
    const { colors } = useTheme();
    const styles = React.useMemo(() => createStyles(colors), [colors]);

    return (
        <View style={styles.container}>
            <Text style={styles.label}>{props.label}</Text>
            <View>
                <TextInput 
                    style={styles.input}
                    numberOfLines={10}
                    multiline={true}
                    {...props}
                />
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
    input: {
        height: 35,
        color: colors.text,
        paddingLeft: SIZES.padding * 0.2,
        textAlignVertical: 'top',
        height: SIZES.height * 0.3,
        ...FONTS.body3,
    },
})

export default MessageInput