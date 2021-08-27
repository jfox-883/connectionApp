import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';
import { useTheme } from '@react-navigation/native';

import FONTS from '../constants/fonts';
import SIZES from '../constants/sizes';
import ICONS from '../constants/icons';

const RenderRequestsList = ({data, ...props}) => {
    const { colors } = useTheme();
    const styles = React.useMemo(() => createStyles(colors, data), [colors, data]);

    return (
        <TouchableOpacity style={styles.container} onPress={() => {props.navigation.navigate('RequestsChat')}}>
            <View style={{padding: SIZES.padding}}>
                <Text style={styles.heading}>{data.item.title}</Text>
                <Text numberOfLines={2} style={styles.msjText}>{data.item.msj}</Text>
            </View>
            <View style={styles.footerView}>
                <Image 
                    source={(data.item.status === 0) ? ICONS.clock : ICONS.check}
                    resizeMode='contain'
                    style={styles.icons}
                />
                <View>
                    <Text style={styles.footerText}>{data.item.date}</Text>
                    <Text style={styles.footerText}>{data.item.time}</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

const createStyles = (colors, data) => StyleSheet.create({
    container:{
        borderColor: colors.border,
        borderBottomWidth: 0.5,
        justifyContent: 'center',
        paddingBottom: SIZES.padding * 0.5
    },
    heading: {
        color: colors.text,
        ...FONTS.h4
    },
    msjText: {
        color: colors.dimmedText,
        ...FONTS.body3
    },
    footerView:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: SIZES.padding

    },
    icons: {
        width: 20,
        height: 20,
        tintColor: (data.item.status == 0) ? colors.alert : colors.success
    },
    footerText: {
        color: colors.dimmedText,
        ...FONTS.body5
    }
})

export default RenderRequestsList
