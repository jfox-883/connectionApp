import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';
import { useTheme } from '@react-navigation/native';

import FONTS from '../constants/fonts';
import SIZES from '../constants/sizes';
import ICONS from '../constants/icons';
import Field from './Field';

const RenderSalaryList = ({data}) => {
    const { colors } = useTheme();
    const styles = React.useMemo(() => createStyles(colors, data), [colors, data]);

    return (
        <TouchableOpacity style={styles.container}>
            <View style={styles.mainView}>
                <Text style={styles.recibosTitle}>{data.item.Fecha}</Text>
                <View style={styles.rowView}>
                    <Field label='Hab. con Aporte' value={data.item.HaberesconAporte}/>
                    <Field label='Hab. sin Aporte' value={data.item.HaberessinAporte}/>
                    <Field label='Descuentos' value={data.item.Descuentos}/>
                    <Field label='Neto a Pagar' value={data.item.NetoPagar}/>
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
    mainView: {
        marginHorizontal: SIZES.padding,
        marginTop: SIZES.padding * 2,
        marginBottom: SIZES.padding
    },  
    recibosTitle: {
        color: colors.primary,
        ...FONTS.body2
    },
    rowView:{
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
})

export default RenderSalaryList