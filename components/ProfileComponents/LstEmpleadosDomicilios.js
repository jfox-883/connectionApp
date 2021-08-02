import React from 'react'
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { useTheme } from '@react-navigation/native';

import Field from '../Field';

import GLOBAL_STYLES from '../../constants/globalStyles';
import FONTS from '../../constants/fonts';
import SIZES from '../../constants/sizes';


const LstEmpleadosDomicilios = ({data}) => {
    const { colors } = useTheme()
    const styles = React.useMemo(() => createStyles(colors), [colors])

    const renderList = ({item}) => {
        return (
            <View style={styles.card}>
                <Text style={styles.cardTitle}>{item.Calle}</Text>
                <Text style={styles.titleView}>{item.Numero}, {item.Otros}</Text>
                <View style={styles.rowView}>
                    <Field label='Código Postal' value={item.CP}/>
                    <Field label='Barrio' value={item.Barrio}/>
                    <Field label='Localidad' value={item.Localidad}/>
                    <Field label='Provincia' value={item.Provincia}/>
                </View>
            </View>
        )
    }

    return (
        <View>
            <Text style={styles.headingText}>Domicilios</Text>
            <FlatList 
                data={data}
                keyExtractor={item => `${item.IdEmpleadosDomicilios}`}
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
        ...FONTS.body3
    },
    rowView:{
        flexDirection: 'row',
        justifyContent: 'space-between',
    }
})

export default LstEmpleadosDomicilios
