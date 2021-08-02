import React from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { useTheme } from '@react-navigation/native';
import { useSelector } from 'react-redux';

import Header from '../components/Header';
import Logout from '../components/Logout';
import GeneralInfo from '../components/ProfileComponents/GeneralInfo';
import LstEmpleadosBancos from '../components/ProfileComponents/LstEmpleadosBancos';
import LstEmpleadosDomicilios from '../components/ProfileComponents/LstEmpleadosDomicilios';

import GLOBAL_STYLES from '../constants/globalStyles';
import FONTS from '../constants/fonts';
import SIZES from '../constants/sizes';

const Profile = () => {
    const { colors } = useTheme()
    const styles = React.useMemo(() => createStyles(colors), [colors])

    const empleado = useSelector(state => state.empleado.data)

    return (
        <View style={GLOBAL_STYLES.container}>
            <Header>
                <Text style={styles.headerTitle}>Perfil del Empleado</Text>
                <Logout tintColor={colors.alert} />
            </Header>

            <ScrollView style={styles.scrollContainer}>
                <GeneralInfo data={empleado}/>
                {empleado[0].LstEmpleadosBancos.length !== 0
                    ? <LstEmpleadosBancos data={empleado[0].LstEmpleadosBancos}/>
                    : null
                }
                {empleado[0].LstEmpleadosDomicilios.length !== 0
                    ? <LstEmpleadosDomicilios data={empleado[0].LstEmpleadosDomicilios} />
                    : null
                }
            </ScrollView>
        </View>
    )
}

const createStyles = (colors) => StyleSheet.create({
    headerTitle: {
        color: colors.primary,
        ...GLOBAL_STYLES.heading_1
    },
    scrollContainer: {
        marginTop: SIZES.padding * 2,
        marginHorizontal: SIZES.padding,
        paddingBottom: SIZES.padding * 10
    },
})

export default Profile
