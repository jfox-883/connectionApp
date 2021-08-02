import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native';
import { useTheme } from '@react-navigation/native';

import Field from '../Field';

import GLOBAL_STYLES from '../../constants/globalStyles';
import FONTS from '../../constants/fonts';
import SIZES from '../../constants/sizes';
import ICONS from '../../constants/icons';

const GeneralInfo = ({data}) => {
    const { colors } = useTheme()
    const styles = React.useMemo(() => createStyles(colors), [colors])

    return (
        <View>
            <Text style={styles.headingText}>Información General</Text>
            <View style={styles.card}>
                <View style={styles.mainView}>
                    {!data[0].Foto
                        ? <Image source={ICONS.user} style={{width: 50, height: 50, tintColor: colors.dimmedText}}/>
                        : <Image source={{uri: data[0].Foto}} style={{width: 50, height: 50}} />
                    }
                    <View style={styles.titleView}>
                        <Text style={styles.cardTitle}>{data[0].Nombre} {data[0].Apellido}</Text>
                        <Text >{data[0].CUIL}</Text>
                    </View>
                </View>
                <View style={styles.rowView} >
                    <View>
                        <Field label='Documento' value={data[0].Documento_Numero} />
                        <Field label='Legajo' value={data[0].Legajo} />
                    </View>
                    <Field label='Fecha Nacimiento' value={data[0].FechaNacimiento} />
                    <Field label='Contacto Emergencia' value={data[0].Emergencia_Contacto} />
                    <Field label='Teléfono Emergencia' value={data[0].Emergencia_Telefono} />
                </View>

                <View style={styles.rowView}>
                    <Field label='Nacionalidad' value={data[0].Nacionalidad} />
                    <Field label='Género' value={data[0].Generos} />
                    <Field label='Estado Civil' value={data[0].EstadoCivil} />
                </View>
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
        paddingHorizontal: SIZES.padding,
        paddingVertical: SIZES.padding * 2,
    },
    cardTitle: {
        color: colors.primary,
        ...FONTS.body2
    },
    mainView:{
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: SIZES.padding,
        paddingBottom: SIZES.padding * 1.5
    },
    titleView: {
        paddingLeft: SIZES.padding
    },
    rowView:{
        flexDirection: 'row',
        justifyContent: 'space-between',
    }
})

export default GeneralInfo