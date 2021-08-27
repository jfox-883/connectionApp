import React from 'react'
import { StyleSheet, View, Text, Image } from 'react-native'
import { useTheme } from '@react-navigation/native';

import FONTS from '../constants/fonts';
import SIZES from '../constants/sizes';
import ICONS from '../constants/icons';

const RenderNotificationsList = ({data}) => {
    const { colors } = useTheme();
    const styles = React.useMemo(() => createStyles(colors), [colors]);

    return (
        <View style={styles.item}>
            <Text style={styles.titleText}>{data.item.title}</Text>
            <Text style={styles.messageText}>{data.item.message}</Text>
            {data.item.image
                ? <Image source={data.item.image} style={styles.image}/>
                : null
            }
        </View>
    )
}

const createStyles = (colors) => StyleSheet.create({
    item:{
        backgroundColor: colors.card,
        marginHorizontal: SIZES.padding,
        marginTop: SIZES.padding2 * 1.2,
        padding: SIZES.padding,
        borderRadius: SIZES.radius * 0.3
    },
    titleText: {
        color: colors.primary,
        paddingBottom: SIZES.padding * 0.5,
        ...FONTS.h4
    },
    messageText: {
        color: colors.dimmedText,
        paddingBottom: SIZES.padding,
        ...FONTS.body4
    },
    image:{
        width: SIZES.width - 40,
        height: 250,
        borderRadius: SIZES.radius * 0.2
    }
})

export default RenderNotificationsList
