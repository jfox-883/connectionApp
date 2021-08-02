import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { useTheme } from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux';

import Header from '../components/Header';
import RenderSalaryList from '../components/RenderSalaryList';

import {getRecibos} from '../store/actions/recibos.action'

import GLOBAL_STYLES from '../constants/globalStyles';
import FONTS from '../constants/fonts';
import SIZES from '../constants/sizes';

const SalaryRecords = () => {
    const { colors } = useTheme()
    const styles = React.useMemo(() => createStyles(colors), [colors])

    const dispatch = useDispatch()
    const recibos = useSelector(state => state.recibos.list)

    React.useEffect(() => {
        dispatch(getRecibos())
    },[])

    return (
        <View style={GLOBAL_STYLES.container}>
            <Header>
                <Text style={styles.headerTitle}>Recibos de Sueldo</Text>
            </Header>
            <FlatList 
                data={recibos}
                keyExtractor={item => `${item.IdRecibos_Encabezado}`}
                renderItem={data => <RenderSalaryList data={data}/>}
                contentContainerStyle={{paddingBottom: SIZES.padding * 10}}
            />
        </View>
    )
}

const createStyles = (colors) => StyleSheet.create({
    headerTitle: {
        color: colors.primary,
        ...GLOBAL_STYLES.heading_1
    }
})

export default SalaryRecords

const styles = StyleSheet.create({})
