import React from 'react'
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { useTheme } from '@react-navigation/native';

import Field from '../Field';

import GLOBAL_STYLES from '../../constants/globalStyles';
import FONTS from '../../constants/fonts';
import SIZES from '../../constants/sizes';


const LstEmpleadosBancos = ({data}) => {
    const { colors } = useTheme()
    const styles = React.useMemo(() => createStyles(colors), [colors])

    const renderList = ({item}) => {
        return (
            <View style={styles.card}>
                <Text style={styles.cardTitle}>{item.Banco}</Text>
                <Text style={styles.titleView}>{item.TiposCuenta}</Text>
                <View style={styles.rowView}>
                    <Field label='Nº Cuenta' value={item.Banco_Numero}/>
                    <Field label='CBU' value={item.Banco_CBU}/>
                    <Field label='Alias' value={item.Alias1}/>
                </View>
            </View>
        )
    }

    return (
        <View>
            <Text style={styles.headingText}>Bancos</Text>
            <FlatList 
                data={data}
                keyExtractor={item => `${item.IdEmpleadosBancos}`}
                renderItem={renderList}
                horizontal={true}
            />
        </View>
    )
}

const createStyles = (colors) => StyleSheet.create({
    container:{
        flex: 1
    },
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
        color: colors.text,
        ...FONTS.body3
    },
    rowView:{
        flexDirection: 'row',
        justifyContent: 'space-between',
    }
})

export default LstEmpleadosBancos
