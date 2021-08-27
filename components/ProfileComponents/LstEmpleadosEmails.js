import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native';
import { useTheme } from '@react-navigation/native';

import GLOBAL_STYLES from '../../constants/globalStyles';
import FONTS from '../../constants/fonts';
import ICONS from '../../constants/icons';
import SIZES from '../../constants/sizes';

const LstEmpleadosEmails = ({data}) => {
    const { colors } = useTheme()
    const styles = React.useMemo(() => createStyles(colors), [colors])

    const ListMails = () => {
        return data.map((mail, key) => {
            return (
                <View style={styles.listRow} key={key}>
                    <Text style={styles.itemText}>{mail.Email}</Text>
                    <Image 
                        source={mail.Preferido ? ICONS.check : ICONS.notCircle}
                        resizeMode='contain'
                        style={{width: 20, height: 20, tintColor: mail.Preferido ? colors.success : colors.alert}}
                    />
                    <Image 
                        source={mail.Activo ? ICONS.check : ICONS.notCircle}
                        resizeMode='contain'
                        style={{width: 20, height: 20, tintColor: mail.Activo ? colors.success : colors.alert}}
                    />
                </View>
            )
        })
    }

    return (
        <View>
            <Text style={styles.headingText}>Correos</Text>
            <View style={styles.card}>
                <View style={styles.titleRow}>
                    <Text style={styles.mailTitle}>Correo</Text>
                    <Text style={styles.titleText}>Preferido</Text>
                    <Text style={styles.titleText}>Activo</Text>
                </View>
                {ListMails()}
            </View>
        </View>
    )
}

const createStyles = (colors) => StyleSheet.create({
    headingText: {
        color: colors.text,
        ...GLOBAL_STYLES.heading_2
    },
    card: {
        backgroundColor: colors.card,
        borderRadius: SIZES.radius * 0.5,
        marginHorizontal: SIZES.padding,
        paddingHorizontal: SIZES.padding,
        paddingVertical: SIZES.padding * 2,
    },
    listRow: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingBottom: SIZES.padding
    },
    titleRow: {
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    mailTitle: {
        color: colors.primary,
        width: SIZES.width * 0.40,
        paddingLeft: SIZES.padding,
        paddingBottom: SIZES.padding,
        ...FONTS.body3
    },
    titleText: {
        color: colors.primary,
        textAlign: 'center',
        ...FONTS.body3
    },
    itemText: {
        color: colors.text,
        width: SIZES.width * 0.40,
        ...FONTS.body4
    }
})

export default LstEmpleadosEmails
