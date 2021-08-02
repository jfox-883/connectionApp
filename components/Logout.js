import React from 'react'
import { StyleSheet, View, TouchableOpacity, Image, Text } from 'react-native';
import { useTheme } from '@react-navigation/native';

import FONTS from '../constants/fonts';
import SIZES from '../constants/sizes';
import ICONS from '../constants/icons';

const Logout = ({tintColor, showText}) => {
    const { colors } = useTheme();
    const styles = React.useMemo(() => createStyles(colors, tintColor), [colors, tintColor]);
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => {}}>
                <View style={styles.rowView}>
                    <Image 
                        source={ICONS.logout}
                        resizeMode='contain'
                        style={styles.logoutIcon}
                    />
                    {(showText === true) ? <Text style={styles.touchText}>Logout</Text> : null}
                </View>
            </TouchableOpacity>
        </View>
    )
}

const createStyles = (colors, tintColor) => StyleSheet.create({
    container: {
        alignItems: 'flex-end',
        marginTop: SIZES.padding,
    },
    logoutIcon: {
        width: 25,
        height: 25,
        tintColor: tintColor,
    },
    rowView: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    touchText: {
        paddingHorizontal: SIZES.padding,
        color: tintColor,
        ...FONTS.body4
    }
})

export default Logout